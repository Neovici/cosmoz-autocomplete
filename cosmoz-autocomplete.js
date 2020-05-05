import {
	component, useState, useEffect, useCallback
} from 'haunted';

import {
	Autocomplete, observedAttributes
} from './lib/autocomplete';

const Standalone = function ({
	value: eValue,
	onChange: onChangeCb,
	text: eText,
	onText: onTextCb,
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
			onChangeCb && onChangeCb(value);

		}, [setValue, onChangeCb]),
		text,
		onText: useCallback(text => {
			setText(text);
			onTextCb && onTextCb(text);

		}, [setText, onTextCb])
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
