const propOrRoot = (object, prop) =>
	object != null && {}.hasOwnProperty.call(object, prop)
		? object[prop]
		: object;

export { propOrRoot };
