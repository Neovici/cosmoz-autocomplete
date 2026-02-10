import type { Activity, KeyBinding } from '@neovici/cosmoz-utils/keybindings';

export const LISTBOX_NAVIGATE_UP: Activity = Symbol('listbox.navigate.up');
export const LISTBOX_NAVIGATE_DOWN: Activity = Symbol('listbox.navigate.down');
export const LISTBOX_SELECT: Activity = Symbol('listbox.select');

export const listboxKeybindings = [
	[
		{ key: 'ArrowUp' },
		[LISTBOX_NAVIGATE_UP],
		{ title: 'Navigate up', description: 'Move to previous listbox item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'ArrowDown' },
		[LISTBOX_NAVIGATE_DOWN],
		{ title: 'Navigate down', description: 'Move to next listbox item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'Enter' },
		[LISTBOX_SELECT],
		{ title: 'Select', description: 'Select current listbox item' },
		{ allowInEditable: true },
	],
] as const satisfies readonly KeyBinding[];
