import {
	useCallback, useMemo
} from 'haunted';
import {
	without, unarray
} from './utils';

const useSelect = ({
	value, onChange, limit, dispatchEvent, source
}) => {
	const onSelection = useCallback(
		value => {
			if (onChange) {
				onChange(value);
			}
			dispatchEvent(
				new CustomEvent('change', {
					detail: { value }
				})
			);
		},
		[onChange]
	);
	return {
		select: useCallback(
			val => {
				const newVal = [...without(val)(value), val].slice(-limit);
				onSelection(limit === 1 ? unarray(newVal) : newVal);
			},
			[onSelection, value]
		),
		deselect: useCallback(val => onSelection(without(val)(value)), [
			onSelection,
			value
		]),
		values: useMemo(() => without(value)(source), [source, value])
	};
};

export { useSelect };
