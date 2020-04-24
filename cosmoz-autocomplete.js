import {
	component, useMemo
} from 'haunted';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';

import './cosmoz-suggestions';

import { prop } from './lib/utils';
import { useInput } from './lib/use-input';
import { useSelect } from './lib/use-select';
import { autocomplete } from './autocomplete';

const Autocomplete = function ({
	textProperty,
	source,
	value,
	onChange,
	limit = Infinity,
	...opts
}) {
	const {
			select, deselect, values
		} = useSelect({
			value,
			onChange,
			limit,
			source,
			dispatchEvent: this.dispatchEvent.bind(this)
		}),
		textual = useMemo(() => prop(textProperty), [textProperty]),
		{
			text, query, items, onText, onFocus, onSelect
		} = useInput({
			textual,
			values,
			onSelect: select
		});
	return autocomplete({
		...opts,
		textual,
		text,
		query,
		items,
		onText,
		onFocus,
		onSelect,
		onDeselect: deselect,
		value,
		limit
	});
};

customElements.define(
	'cosmoz-autocomplete',
	component(Autocomplete, { observedAttributes: ['no-label-float']})
);
