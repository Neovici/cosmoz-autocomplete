import { component, useCallback } from '@pionjs/pion';
import { Autocomplete, observedAttributes, Props, style } from './autocomplete';
import { sheet } from '@neovici/cosmoz-utils';

const Standalone = <I>(host: HTMLElement & Props<I>) => {
	const { onChange, onText, ...props } = host;

	return Autocomplete({
		...props,
		onChange: useCallback(
			(value: I[], ...args) => {
				host.value = value;
				onChange?.(value, ...args);
			},
			[onChange],
		),
		onText: useCallback(
			(text: string) => {
				host.text = text;
				onText?.(text);
			},
			[onText],
		),
	});
};

const styleSheets = [sheet(style)];

customElements.define(
	'cosmoz-autocomplete-ui',
	component(Autocomplete, { observedAttributes, styleSheets }),
);
customElements.define(
	'cosmoz-autocomplete',
	component(Standalone, { observedAttributes, styleSheets }),
);
