import type { Activity, KeyBinding } from '@neovici/cosmoz-utils/keybindings';

export const AUTOCOMPLETE_NAVIGATE_UP: Activity = Symbol(
	'autocomplete.navigate.up',
);
export const AUTOCOMPLETE_NAVIGATE_DOWN: Activity = Symbol(
	'autocomplete.navigate.down',
);
export const AUTOCOMPLETE_SELECT: Activity = Symbol('autocomplete.select');

export const autocompleteKeybindings = [
	[
		{ key: 'ArrowUp' },
		[AUTOCOMPLETE_NAVIGATE_UP],
		{ title: 'Navigate up', description: 'Move to previous autocomplete item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'ArrowDown' },
		[AUTOCOMPLETE_NAVIGATE_DOWN],
		{ title: 'Navigate down', description: 'Move to next autocomplete item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'Enter' },
		[AUTOCOMPLETE_SELECT],
		{ title: 'Select', description: 'Select current autocomplete item' },
		{ allowInEditable: true },
	],
] as const satisfies readonly KeyBinding[];
