import { component, useCallback, useEffect, useProperty } from '@pionjs/pion';
import { Autocomplete, observedAttributes, Props, style } from './autocomplete';
import { sheet } from '@neovici/cosmoz-utils';

const Standalone = <I>(host: HTMLElement & Props<I>) => {
	const { onChange, onText, ...props } = host;
	const [value, setValue] = useProperty<I | I[]>('value');

	useEffect(() => {
		if (host.onChange == null) return;
		// eslint-disable-next-line no-console
		console.warn('onChange is deprecated; use value-changed and lift instead');
	}, []);

	return Autocomplete({
		...props,
		value,
		onChange: useCallback(
			(value: I[], ...args) => {
				setValue(value);
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
