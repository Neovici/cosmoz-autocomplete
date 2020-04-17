const propOrRoot = (object, prop) => prop in object ? object[prop] : object;

export { propOrRoot };
