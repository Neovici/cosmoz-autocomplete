import { html } from 'lit-html';
import '../cosmoz-autocomplete';

export default {
	title: 'Autocomplete',
	component: 'cosmoz-autocomplete'
};

export const singleComponent = () => {
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
		options = Array(1e5)
			.fill()
			.map((_, i) => {
				return {
					text: `${i}. ${words[Math.floor(Math.random() * words.length)]}`
				};
			});
	return html`
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${options}
			.textProperty=${'text'}
		></cosmoz-autocomplete>
	`;
};
