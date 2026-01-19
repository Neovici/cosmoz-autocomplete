import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useLayoutEffect, useMemo, useState } from '@pionjs/pion';
import { raf } from './util';

// eslint-disable-next-line max-statements
const overflow = (host: HTMLElement) => {
	const chips = host.shadowRoot!.querySelectorAll<HTMLElement>('.chip');
	const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge')!;
	badge.hidden = true;
	for (const chip of chips) {
		chip.hidden = false;
	}
	const input = host.shadowRoot!.querySelector('cosmoz-input')!;
	const limit = input.shadowRoot
		?.querySelector('.control')
		?.getBoundingClientRect();
	let i;
	for (i = 0; i < chips.length; i++) {
		const chip = chips[i];
		const bounds = chip.getBoundingClientRect();
		const isIn = bounds.x + bounds.width <= limit!.x + limit!.width - 24;
		if (!isIn) {
			break;
		}
	}

	const overflown = chips.length - i;
	badge.querySelector('span')!.textContent = '+' + overflown.toString();
	badge.hidden = overflown < 1;

	for (; i < chips.length; i++) {
		chips[i].hidden = true;
	}
};

export const useOverflow = <I>({
	value,
	active,
	wrap,
	limit,
}: {
	value: I[];
	active?: boolean;
	wrap?: boolean;
	limit?: number;
}) => {
	const host = useHost();
	// eslint-disable-next-line eqeqeq
	const enabled = !(wrap || limit == 1);
	const doRaf = useMemo(() => raf(() => overflow(host)), []);
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		if (!enabled) return;
		const input = host.shadowRoot!.querySelector('cosmoz-input')!;
		const observer = new ResizeObserver((e) => {
			setWidth(e[0].contentRect.width);
		});
		observer.observe(input);
		return () => observer.disconnect();
	}, [enabled]);

	useLayoutEffect(
		() => (enabled ? doRaf() : undefined),
		[enabled, width, active, value],
	);
};
