import {
	useCallback, useMemo
} from 'haunted';
import {
	without, search, strProp, prop
} from './utils';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { useKeys } from './use-keys';
import { useFocus } from './use-focus';

const
	EMPTY = [],
	EMPTY$ = Promise.resolve(EMPTY),
	notify = (host, name, detail) => host.dispatchEvent(new CustomEvent(name, { detail })),
	useNotify = (host, fn, name) => useCallback(val => {
		fn?.(val);
		notify(host, name, val);
	}, [fn]),
	useAutocomplete = ({
		value,
		text,
		onChange: _onChange,
		onText: _onText,
		limit,
		source,
		textProperty,
		valueProperty,
		external,
		hideEmpty,
		showSelection,
		...thru
	}) => {
		const
			textual = useMemo(() => strProp(textProperty), [textProperty]),
			{ active, onFocus, setClosed } = useFocus(thru),
			empty = !text,
			query = useMemo(() => text?.trim().toLowerCase(), [text]),
			host = useHost(),
			onText = useNotify(host, _onText, 'text'),
			onChange = useCallback(val => {
				_onChange?.(val, () => setClosed(true));
				notify(host, 'value', val);
			}, [_onChange]),
			source$ = useMemo(() => Promise.resolve(typeof source === 'function'
				? source({ query, active })
				: source
			), [source, active, query]),
			values$ = useMemo(() => showSelection ? source$ : source$.then(without(value, prop(valueProperty))), [source$, showSelection, value, valueProperty]);

		useKeys({
			active,
			empty,
			limit,
			value,
			hideEmpty,
			onChange,
			onText
		});

		return {
			query,
			textual,
			values$,
			items$: useMemo(() => {
				if (!active || hideEmpty && empty) {
					return EMPTY$;
				}
				return query && !external
					? values$.then(values => search(values, query, textual))
					: values$;
			}, [values$, active, query, textual, external, hideEmpty, empty]),
			onClick: useCallback(() => setClosed(false), []),
			onFocus,
			onText: useCallback(e => {
				onText(e.target.value);
				setClosed(false);
			}, [onText, text, setClosed]),
			onSelect: useCallback(newVal => {
				onText('');
				onChange([...without(newVal)(value), newVal].slice(-limit));
			}, [onText, onChange, value, limit]),
			onDeselect: useCallback(val => onChange(without(val)(value)), [onChange, value])
		};
	};

export { useAutocomplete };
