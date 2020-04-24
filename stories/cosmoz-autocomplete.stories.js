import { html } from 'lit-html';
import '../cosmoz-autocomplete';

export default {
	title: 'Autocomplete(chips)',
	component: 'cosmoz-autocomplete'
};

export const basic = () => {
	const words = [
			'Red',
			'Green',
			'Purple',
			'Blue',
			'White',
			'Brown',
			'Aqua',
			'Nothing'
		],
		options = words.map(text => ({
			text
		}));
	return html`
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${options}
			.textProperty=${'text'}
		></cosmoz-autocomplete>
	`;
};
