import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import '../src/pills';
import { colors } from './data';

const meta: Meta = {
	title: 'Autocomplete Pills',
	parameters: {
		docs: {
			description: {
				component:
					'Chips followed by an "add" button, e.g. labels in a view header. ' +
					'The button opens a popover with its own search field; selected ' +
					'options get a check. Chips that do not fit collapse into a "+N" ' +
					'badge that lists them on hover and opens the popover on click.',
			},
		},
	},
};

export default meta;

type Story = StoryObj;

const manyLabels = Array.from({ length: 12 }, (_, i) => ({
	text: `Label number ${i + 1}`,
}));

export const Default: Story = {
	render: () => html`
		<div class="story-stack">
			<cosmoz-autocomplete-pills
				.label=${'Labels'}
				.placeholder=${'Label'}
				.searchPlaceholder=${'Filter colors'}
				.source=${colors}
				text-property="text"
				keep-opened
				.value=${[colors[0], colors[3]]}
			>
			</cosmoz-autocomplete-pills>
		</div>
	`,
};

export const Overflown: Story = {
	render: () => html`
		<div style="width: 320px">
			<cosmoz-autocomplete-pills
				.source=${manyLabels}
				.value=${manyLabels.slice(0, 8)}
				text-property="text"
				keep-opened
				.placeholder=${'Label'}
				.searchPlaceholder=${'Filter labels'}
			>
			</cosmoz-autocomplete-pills>
		</div>
	`,
};
