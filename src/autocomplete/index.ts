import { component, useCallback } from 'haunted';
import {
	Autocomplete,
	observedAttributes as atts,
	Props,
} from './autocomplete';

const Standalone = <I>(host: HTMLElement & Props<I>) => {
	const { onChange, onText, ...props } = host;

	return Autocomplete({
		...props,
		onChange: useCallback(
			(value: I[], ...args) => {
				host.value = value;
				onChange?.(value, ...args);
			},
			[onChange]
		),
		onText: useCallback(
			(text: string) => {
				host.text = text;
				onText?.(text);
			},
			[onText]
		),
	});
};

const observedAttributes = atts as (keyof Props<unknown>)[];

customElements.define(
	'cosmoz-autocomplete-ui',
	component<Props<unknown>>(Autocomplete, { observedAttributes })
);
customElements.define(
	'cosmoz-autocomplete',
	component<Props<unknown>>(Standalone, { observedAttributes })
);
