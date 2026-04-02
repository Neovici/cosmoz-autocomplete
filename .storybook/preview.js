import '@neovici/cosmoz-tokens';
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import i18next from 'i18next';
import { within as withinShadow } from 'shadow-dom-testing-library';
import { autocompleteKeybindings } from '../src/autocomplete/autocomplete-keybindings';
import './preview.css';
// Initialize i18next for the autocomplete component
i18next.init({
	lng: 'en',
	resources: {
		en: {
			translation: {
				'No results found': 'No results found',
			},
		},
	},
});

/**
 * Component that provides keybindings context for all stories.
 * Uses children prop instead of slot since shadow DOM is disabled
 * to allow context events to bubble up to the provider.
 */
customElements.define(
	'storybook-keybindings',
	component(
		(props) => {
			const register = useKeybindings(autocompleteKeybindings);
			return html`<cosmoz-keybinding-provider .value=${register}>
				${props.content}
			</cosmoz-keybinding-provider>`;
		},
		{ useShadowDOM: false },
	),
);

export default {
	tags: ['autodocs'],

	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}
			return html`
				<storybook-keybindings
					.content=${html`<div class="story-root">${story()}</div>`}
				></storybook-keybindings>
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},

	// Augment the canvas with shadow-dom-testing-library queries
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
};
