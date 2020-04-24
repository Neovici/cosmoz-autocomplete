import {
	component, useState, useEffect, useCallback
} from 'haunted';

import {
	Autocomplete, observedAttributes
} from './lib/autocomplete';

const Standalone = function ({
	value: eValue, onChange: onChangeCb, ...props
}) {
	const [value, setValue] = useState(eValue);
	useEffect(() => {
		setValue(eValue);
	}, [setValue, eValue]);
	return Autocomplete.call(this, {
		...props,
		value,
		onChange: useCallback(value => {
			setValue(value);
			if (onChangeCb) {
				onChangeCb(value);
			}

		}, [setValue, onChangeCb])
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
