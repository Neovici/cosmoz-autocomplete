import { useLayoutEffect, useState, useMemo } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { raf } from './util';

const overflow = (host: HTMLElement) => {
	const chips = host.shadowRoot!.querySelectorAll<HTMLElement>('.chip');
	const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge')!;
	badge.hidden = true;
	for (const chip of chips) {
		chip.hidden = false;
	}
	const input = host.shadowRoot!.querySelector('cosmoz-input')!;
	if (input.matches('[data-one]')) return;
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
}: {
	value: I[];
	active?: boolean;
}) => {
	const host = useHost();
	const doRaf = useMemo(() => raf(() => overflow(host)), []);
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		const input = host.shadowRoot!.querySelector('cosmoz-input')!;
		const observer = new ResizeObserver((e) => {
			setWidth(e[0].contentRect.width);
		});
		observer.observe(input);
		return () => observer.disconnect();
	}, []);

	useLayoutEffect(() => doRaf(), [width, active, value]);
};
