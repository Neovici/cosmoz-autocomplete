declare module '@neovici/cosmoz-dropdown/src/use-position.js' {
	export function usePosition(opts: {
		anchor?: () => Element | null;
		host?: HTMLElement;
		confinement?: unknown;
		placement?: unknown;
		limit: boolean;
	}): void;
}

declare module '@neovici/cosmoz-dropdown/src/use-focus.js' {
	export function useFocus(opts: {
		disabled?: boolean;
		onFocus?: (focused?: boolean) => void;
	}): {
		active: boolean;
		setClosed: (closed?: boolean) => void;
		onFocus: (e: FocusEvent) => void;
	};
}
