import { sheet } from '@neovici/cosmoz-utils';
import { component, useCallback, useEffect, useProperty } from '@pionjs/pion';
import { Autocomplete, observedAttributes, Props, style } from './autocomplete';

const Standalone = <I>(host: HTMLElement & Props<I>) => {
	const { onChange, onText, mode, ...props } = host;
	const isSelect = mode === 'select';
	const [value, setValue] = useProperty<I | I[]>('value');

	useEffect(() => {
		if (host.onChange == null) return;
		// eslint-disable-next-line no-console
		console.warn('onChange is deprecated; use value-changed and lift instead');
	}, []);

	return Autocomplete({
		...props,
		...(isSelect && {
			limit: 1,
			min: 1,
			showSingle: true,
		}),
		mode,
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
const shadowRootInit = { mode: 'open' as const, delegatesFocus: true };

customElements.define(
	'cosmoz-autocomplete-ui',
	component(Autocomplete, { observedAttributes, styleSheets, shadowRootInit }),
);
customElements.define(
	'cosmoz-autocomplete',
	component(Standalone, { observedAttributes, styleSheets, shadowRootInit }),
);
