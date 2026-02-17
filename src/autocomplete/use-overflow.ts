import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useEffect, useState } from '@pionjs/pion';

/**
 * Determines overflow in the chip container using IntersectionObserver.
 *
 * Two-phase approach:
 *   1. **Detect**: unhide all chips, observe them with IO against the control
 *      container. Once every chip has reported, classify visible vs overflowing.
 *   2. **Settle**: hide overflowing chips (so the badge fits on row 1) and
 *      update the overflow count. IO callbacks for newly-hidden elements are
 *      ignored (they have height 0 and are expected).
 *
 * Resets on `slotchange` (chips added / removed via lit-html re-render).
 */

const isChip = (el: Element): el is HTMLElement =>
	el.tagName === 'COSMOZ-AUTOCOMPLETE-CHIP' && !el.classList.contains('badge');

const classifyEntry = (entry: IntersectionObserverEntry) => {
	if (
		entry.intersectionRect.height > 0 &&
		entry.boundingClientRect.width === entry.intersectionRect.width
	) {
		return 'visible';
	}
	if (entry.boundingClientRect.height > 0) return 'overflowing';
	return 'hidden';
};

const classifyEntries = (
	entries: IntersectionObserverEntry[],
	pending: Set<HTMLElement>,
) => {
	const overflowing: HTMLElement[] = [];
	for (const entry of entries) {
		const el = entry.target as HTMLElement;
		pending.delete(el);
		if (classifyEntry(entry) === 'overflowing') overflowing.push(el);
	}
	return overflowing;
};

const setupChipOverflow = (
	root: HTMLElement,
	slot: HTMLSlotElement,
	onCount: (count: number) => void,
): (() => void) => {
	let settled = false;
	const pending = new Set<HTMLElement>();
	let hiddenChips: HTMLElement[] = [];

	const observer = new IntersectionObserver(
		(entries) => {
			if (settled) return;

			const overflowing = classifyEntries(entries, pending);

			// Only settle once all pending chips have reported
			if (pending.size > 0) return;

			// Settle: hide overflowing chips to make room for the badge
			settled = true;
			hiddenChips = overflowing;
			for (const el of hiddenChips) {
				el.hidden = true;
				observer.unobserve(el);
			}

			onCount(hiddenChips.length);
		},
		{ root, threshold: [0, 1] },
	);

	const reset = () => {
		// Unhide previously hidden chips
		for (const el of hiddenChips) {
			el.hidden = false;
		}
		hiddenChips = [];
		settled = false;
		pending.clear();
		observer.disconnect();

		// Observe all current chip elements
		const chips = slot.assignedElements({ flatten: true }).filter(isChip);

		if (chips.length === 0) {
			onCount(0);
			return;
		}

		for (const chip of chips) {
			pending.add(chip);
			observer.observe(chip);
		}
	};

	// Initial run
	reset();

	// Re-run when chips change (lit-html re-renders the selection)
	slot.addEventListener('slotchange', reset);

	return () => {
		slot.removeEventListener('slotchange', reset);
		observer.disconnect();
		// Unhide on cleanup
		for (const el of hiddenChips) {
			el.hidden = false;
		}
	};
};

export const useOverflow = <I>({
	wrap,
	limit,
}: {
	value: I[];
	opened?: boolean;
	wrap?: boolean;
	limit?: number;
}) => {
	const host = useHost();
	// eslint-disable-next-line eqeqeq
	const enabled = !(wrap || limit == 1);
	const [overflowCount, setOverflowCount] = useState(0);

	useEffect(() => {
		if (!enabled) {
			setOverflowCount(0);
			return;
		}

		let cleanup: (() => void) | undefined;
		let cancelled = false;

		// Defer slot lookup to next animation frame so cosmoz-input's
		// shadow DOM has rendered its template (it's a Pion component
		// whose render is scheduled as a microtask).
		const raf = requestAnimationFrame(() => {
			if (cancelled) return;

			const input = host.shadowRoot!.querySelector('cosmoz-input')!;
			const control = input?.shadowRoot?.querySelector<HTMLElement>('.control');
			const slot = input?.shadowRoot?.querySelector<HTMLSlotElement>(
				'slot[name="control"]',
			);
			if (!control || !slot) return;

			cleanup = setupChipOverflow(control, slot, setOverflowCount);
		});

		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			cleanup?.();
		};
	}, [enabled]);

	return { overflowCount: enabled ? overflowCount : 0 };
};
