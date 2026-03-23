import {
	Activity,
	ANY_KEY,
	KeyBinding,
} from '@neovici/cosmoz-utils/keybindings';
import { listboxKeybindings } from '../listbox/listbox-keybindings';

export const AUTOCOMPLETE_DESELECT_LAST: Activity = Symbol(
	'autocomplete.deselect.last',
);

export const AUTOCOMPLETE_SEARCH_WHEN_SELECTED: Activity = Symbol(
	'autocomplete.search.when.selected',
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
	[
		{ key: ANY_KEY },
		[AUTOCOMPLETE_SEARCH_WHEN_SELECTED],
		{
			title: 'Start searching',
			description:
				'Start searching when you start typing when an item is selected',
		},
		{ allowInEditable: true },
	],
] as const satisfies readonly KeyBinding[];
