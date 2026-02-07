import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import i18next from 'i18next';
import { within as withinShadow } from 'shadow-dom-testing-library';
import { autocompleteKeybindings } from '../src/autocomplete/autocomplete-keybindings';

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
 * Uses content prop instead of slot since shadow DOM is disabled
 * to allow context events to bubble up to the provider.
 */
const KeybindingsProvider = function (props) {
	const register = useKeybindings(autocompleteKeybindings);

	return html`<cosmoz-keybinding-provider .value=${register}>
		${props.content}
	</cosmoz-keybinding-provider>`;
};

customElements.define(
	'storybook-keybindings',
	component(KeybindingsProvider, { useShadowDOM: false }),
);

export default {
	tags: ['autodocs'],
	parameters: {
		options: {
			storySort: {
				order: ['Autocomplete', 'Autocomplete Excluding'],
			},
		},
		docs: {
			source: {
				excludeDecorators: true,
				type: 'code',
				transform: (source) => {
					const match = source.match(/html`([\s\S]*?)`/u);
					return match?.[1]?.trim() ?? source;
				},
			},
		},
	},
	// Augment the canvas with shadow-dom-testing-library queries
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
	decorators: [
		(story) => {
			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');

					.story-root {
						font-family: 'Inter', sans-serif;
						padding: 16px;
						min-height: 100%;
					}

					cosmoz-autocomplete,
					cosmoz-listbox,
					cosmoz-autocomplete-excluding {
						font-family: 'Inter', sans-serif;
					}
				</style>
				<storybook-keybindings
					.content=${html`<div class="story-root">${story()}</div>`}
				></storybook-keybindings>
			`;
		},
	],
};
