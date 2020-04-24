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
					detail: {
						value: unarray(value)
					}
				})
			);
		},
		[onChange]
	);
	return {
		select: useCallback(val => {
			onSelection([...without(val)(value), val].slice(-limit));
		}, [
			onSelection,
			value
		]),
		deselect: useCallback(val => onSelection(without(val)(value)), [
			onSelection,
			value
		]),
		values: useMemo(() => without(value)(source), [source, value])
	};
};

export { useSelect };
