import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import {
	LISTBOX_NAVIGATE_DOWN,
	LISTBOX_NAVIGATE_UP,
	LISTBOX_SELECT,
} from './listbox-keybindings';

type Handler = () => void;

export interface Handlers {
	onUp: Handler;
	onDown: Handler;
	onEnter: Handler;
}

export const useKeyboard = ({ onUp, onDown, onEnter }: Handlers) => {
	const host = useHost();

	useActivity(
		{
			activity: LISTBOX_NAVIGATE_UP,
			callback: onUp,
			element: () => host,
		},
		[],
	);

	useActivity(
		{
			activity: LISTBOX_NAVIGATE_DOWN,
			callback: onDown,
			element: () => host,
		},
		[],
	);

	useActivity(
		{
			activity: LISTBOX_SELECT,
			callback: onEnter,
			element: () => host,
		},
		[],
	);
};
