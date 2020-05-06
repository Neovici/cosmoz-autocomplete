import {
	component, useState, useEffect, useCallback
} from 'haunted';

import {
	Autocomplete, observedAttributes
} from './lib/autocomplete';

const Standalone = function ({
	value: eValue,
	onChange,
	text: eText,
	onText: onText,
	...props
}) {
	const [value, setValue] = useState(eValue),
		[text, setText] = useState(eText);

	useEffect(() => {
		setValue(eValue);
	}, [setValue, eValue]);

	useEffect(() => {
		setText(eText);
	}, [setText, eText]);

	return Autocomplete.call(this, {
		...props,
		value,
		onChange: useCallback(value => {
			setValue(value);
			onChange?.(value);
		}, [setValue, onChange]),
		text,
		onText: useCallback(text => {
			setText(text);
			onText?.(text);
		}, [setText, onText])
	});
};


customElements.define(
	'cosmoz-autocomplete-ui',
	component(Autocomplete, { observedAttributes })
);

customElements.define(
	'cosmoz-autocomplete',
	component(Standalone, { observedAttributes })
);
