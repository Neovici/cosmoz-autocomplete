import {
	useCallback, useMemo
} from 'haunted';
import {
	without, search, strProp, prop, array
} from './utils';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';
import { useFocus } from '@neovici/cosmoz-dropdown/src/use-focus';
import { useKeys } from './use-keys';

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
		keepQuery,
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
			values$ = useMemo(() => source$.then(source => [...array(value), ...without(value, prop(valueProperty))(source)]), [source$, value, valueProperty]);

		useKeys({
			active,
			empty,
			limit,
			value,
			hideEmpty,
			onChange,
			onText
		});

		const meta = useMeta({ onText, onChange, value, limit, keepQuery, setClosed });

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
				const { onChange, onText, limit, value: val, keepQuery, keepOpened } = meta;
				if (!keepQuery) {
					onText('');
				}
				if (!keepOpened) {
					setClosed(true);
				}
				const value = array(val);
				onChange((value.includes(newVal) ? without(newVal)(value) : [...value, newVal]).slice(-limit));
			}, [meta]),
			onDeselect: useCallback(val => meta.onChange(without(val)(meta.value)), [meta])
		};
	};

export { useAutocomplete };
