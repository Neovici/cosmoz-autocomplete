import {
	component, useCallback
} from 'haunted';

import {
	Autocomplete, observedAttributes
} from './lib/autocomplete';

const Standalone = host => {
	const {
		onChange,
		onText,
		...props
	} = host;

	return Autocomplete.call(host, {
		...props,
		onChange: useCallback(value => {
			host.value = value;
			onChange?.(value);
		}, [onChange]),
		onText: useCallback(text => {
			host.text = text;
			onText?.(text);
		}, [onText])
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
