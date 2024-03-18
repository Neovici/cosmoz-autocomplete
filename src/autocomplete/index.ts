import { component, useCallback } from '@pionjs/pion';
import {
	Autocomplete,
	observedAttributes as atts,
	Props,
	style,
} from './autocomplete';
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

const observedAttributes = atts as (keyof Props<unknown>)[],
	styleSheets = [sheet(style)];

customElements.define(
	'cosmoz-autocomplete-ui',
	component<Props<unknown>>(Autocomplete, { observedAttributes, styleSheets }),
);
customElements.define(
	'cosmoz-autocomplete',
	component<Props<unknown>>(Standalone, { observedAttributes, styleSheets }),
);
