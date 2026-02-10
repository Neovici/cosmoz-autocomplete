import type { Activity, KeyBinding } from '@neovici/cosmoz-utils/keybindings';
import { listboxKeybindings } from '../listbox/listbox-keybindings';

export const AUTOCOMPLETE_DESELECT_LAST: Activity = Symbol(
	'autocomplete.deselect.last',
);

export const autocompleteKeybindings = [
	...listboxKeybindings,
	[
		{ key: 'Backspace' },
		[AUTOCOMPLETE_DESELECT_LAST],
		{
			title: 'Deselect last',
			description: 'Remove the last selected item',
		},
		{ allowInEditable: true },
	],
] as const satisfies readonly KeyBinding[];
