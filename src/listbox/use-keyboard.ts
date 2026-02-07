import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import {
	AUTOCOMPLETE_NAVIGATE_DOWN,
	AUTOCOMPLETE_NAVIGATE_UP,
	AUTOCOMPLETE_SELECT,
} from '../autocomplete/autocomplete-keybindings';

type Handler = () => void;

export interface Handlers {
	onUp: Handler;
	onDown: Handler;
	onEnter: Handler;
}

export const useKeyboard = ({ onUp, onDown, onEnter }: Handlers) => {
	const host = useHost();

	// Check if the listbox is visible (popover is open)
	const isVisible = () => host.matches(':popover-open');

	useActivity(
		{
			activity: AUTOCOMPLETE_NAVIGATE_UP,
			callback: onUp,
			check: isVisible,
			element: () => host,
		},
		[onUp],
	);

	useActivity(
		{
			activity: AUTOCOMPLETE_NAVIGATE_DOWN,
			callback: onDown,
			check: isVisible,
			element: () => host,
		},
		[onDown],
	);

	useActivity(
		{
			activity: AUTOCOMPLETE_SELECT,
			callback: onEnter,
			check: isVisible,
			element: () => host,
		},
		[onEnter],
	);
};
