import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useLayoutEffect, useMemo, useState } from '@pionjs/pion';
import { raf } from './util';

// eslint-disable-next-line max-statements
const overflow = (host: HTMLElement) => {
	const chips = host.shadowRoot!.querySelectorAll<HTMLElement>('.chip');
	const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge');
	if (!badge) return '';
	badge.hidden = true;
	for (const chip of chips) {
		chip.hidden = false;
	}
	// The pill layout keeps its "add" button after the chips, so leave it room;
	// room for the +N badge is only needed once something overflows.
	const row = host.shadowRoot!.querySelector<HTMLElement>('.pill-row');
	const add = row?.querySelector('cosmoz-dropdown-next');
	const addWidth = add ? add.getBoundingClientRect().width + 8 : 0;
	const limit = (row ??
		host
			.shadowRoot!.querySelector('cosmoz-input')!
			.shadowRoot?.querySelector('.control'))!.getBoundingClientRect();
	const fits = (reserve: number) => (chip: HTMLElement) => {
		const bounds = chip.getBoundingClientRect();
		return bounds.x + bounds.width <= limit.x + limit.width - reserve;
	};
	const all = Array.from(chips);
	let i = all.length;
	if (!all.every(fits(add ? addWidth : 24))) {
		const isIn = fits(add ? addWidth + 48 : 24);
		i = all.findIndex((chip) => !isIn(chip));
	}

	const overflown = chips.length - i;
	badge.querySelector('span')!.textContent = '+' + overflown.toString();
	badge.hidden = overflown < 1;
	badge.setAttribute('name', 'overflow');
	const hidden = all.slice(i);
	for (const chip of hidden) {
		chip.hidden = true;
	}
	return hidden
		.map((chip) => chip.title || chip.textContent?.trim())
		.join(', ');
};

export const useOverflow = <I>({
	value,
	opened,
	wrap,
	limit,
}: {
	value: I[];
	opened?: boolean;
	wrap?: boolean;
	limit?: number;
}) => {
	const host = useHost();
	const enabled = !(wrap || limit === 1) && value.length > 0;
	const [hidden, setHidden] = useState('');
	const doRaf = useMemo(() => raf(() => setHidden(overflow(host))), []);
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		if (!enabled) return;
		const input =
			host.shadowRoot!.querySelector('.pill-row') ??
			host.shadowRoot!.querySelector('cosmoz-input')!;
		const observer = new ResizeObserver((e) => {
			setWidth(e[0].contentRect.width);
		});
		observer.observe(input);
		return () => observer.disconnect();
	}, [enabled]);

	useLayoutEffect(
		() => (enabled ? doRaf() : undefined),
		[enabled, width, opened, value],
	);

	return hidden;
};
