import { w, f as f$1, j, T, m as m$1, i as i$3, x, p, v, r as r$1, h as h$2 } from './lit-element-CuHsopbm.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$4="important",i$1=" !"+n$4,o$3=e$1(class extends i$2{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$4:""):s[t]=e;}}return w}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$1(class extends i$2{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return w}});

let current;
let currentId = 0;
function setCurrent(state) {
    current = state;
}
function clear$1() {
    current = null;
    currentId = 0;
}
function notify$1() {
    return currentId++;
}

const phaseSymbol = Symbol("haunted.phase");
const hookSymbol = Symbol("haunted.hook");
const updateSymbol = Symbol("haunted.update");
const commitSymbol = Symbol("haunted.commit");
const effectsSymbol = Symbol("haunted.effects");
const layoutEffectsSymbol = Symbol("haunted.layoutEffects");
const contextEvent = "haunted.context";

class State {
    update;
    host;
    virtual;
    [hookSymbol];
    [effectsSymbol];
    [layoutEffectsSymbol];
    constructor(update, host) {
        this.update = update;
        this.host = host;
        this[hookSymbol] = new Map();
        this[effectsSymbol] = [];
        this[layoutEffectsSymbol] = [];
    }
    run(cb) {
        setCurrent(this);
        let res = cb();
        clear$1();
        return res;
    }
    _runEffects(phase) {
        let effects = this[phase];
        setCurrent(this);
        for (let effect of effects) {
            effect.call(this);
        }
        clear$1();
    }
    runEffects() {
        this._runEffects(effectsSymbol);
    }
    runLayoutEffects() {
        this._runEffects(layoutEffectsSymbol);
    }
    teardown() {
        let hooks = this[hookSymbol];
        hooks.forEach((hook) => {
            if (typeof hook.teardown === "function") {
                hook.teardown();
            }
        });
    }
}

const defer = Promise.resolve().then.bind(Promise.resolve());
function runner() {
    let tasks = [];
    let id;
    function runTasks() {
        id = null;
        let t = tasks;
        tasks = [];
        for (var i = 0, len = t.length; i < len; i++) {
            t[i]();
        }
    }
    return function (task) {
        tasks.push(task);
        if (id == null) {
            id = defer(runTasks);
        }
    };
}
const read = runner();
const write = runner();
class BaseScheduler {
    renderer;
    host;
    state;
    [phaseSymbol];
    _updateQueued;
    constructor(renderer, host) {
        this.renderer = renderer;
        this.host = host;
        this.state = new State(this.update.bind(this), host);
        this[phaseSymbol] = null;
        this._updateQueued = false;
    }
    update() {
        if (this._updateQueued)
            return;
        read(() => {
            let result = this.handlePhase(updateSymbol);
            write(() => {
                this.handlePhase(commitSymbol, result);
                write(() => {
                    this.handlePhase(effectsSymbol);
                });
            });
            this._updateQueued = false;
        });
        this._updateQueued = true;
    }
    handlePhase(phase, arg) {
        this[phaseSymbol] = phase;
        switch (phase) {
            case commitSymbol:
                this.commit(arg);
                this.runEffects(layoutEffectsSymbol);
                return;
            case updateSymbol:
                return this.render();
            case effectsSymbol:
                return this.runEffects(effectsSymbol);
        }
    }
    render() {
        return this.state.run(() => this.renderer.call(this.host, this.host));
    }
    runEffects(phase) {
        this.state._runEffects(phase);
    }
    teardown() {
        this.state.teardown();
    }
}

const toCamelCase$1 = (val = "") => val.replace(/-+([a-z])?/g, (_, char) => (char ? char.toUpperCase() : ""));
function makeComponent(render) {
    class Scheduler extends BaseScheduler {
        frag;
        renderResult;
        constructor(renderer, frag, host) {
            super(renderer, (host || frag));
            this.frag = frag;
        }
        commit(result) {
            this.renderResult = render(result, this.frag);
        }
    }
    function component(renderer, baseElementOrOptions, options) {
        const BaseElement = (options || baseElementOrOptions || {}).baseElement ||
            HTMLElement;
        const { observedAttributes = [], useShadowDOM = true, shadowRootInit = {}, styleSheets, } = options || baseElementOrOptions || {};
        class Element extends BaseElement {
            _scheduler;
            static get observedAttributes() {
                return renderer.observedAttributes || observedAttributes || [];
            }
            constructor() {
                super();
                if (useShadowDOM === false) {
                    this._scheduler = new Scheduler(renderer, this);
                }
                else {
                    const shadowRoot = this.attachShadow({
                        mode: "open",
                        ...shadowRootInit,
                    });
                    if (styleSheets)
                        shadowRoot.adoptedStyleSheets = styleSheets;
                    this._scheduler = new Scheduler(renderer, shadowRoot, this);
                }
            }
            connectedCallback() {
                this._scheduler.update();
                this._scheduler.renderResult?.setConnected(true);
            }
            disconnectedCallback() {
                this._scheduler.teardown();
                this._scheduler.renderResult?.setConnected(false);
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue === newValue) {
                    return;
                }
                let val = newValue === "" ? true : newValue;
                Reflect.set(this, toCamelCase$1(name), val);
            }
        }
        function reflectiveProp(initialValue) {
            let value = initialValue;
            let isSetup = false;
            return Object.freeze({
                enumerable: true,
                configurable: true,
                get() {
                    return value;
                },
                set(newValue) {
                    // Avoid scheduling update when prop value hasn't changed
                    if (isSetup && value === newValue)
                        return;
                    isSetup = true;
                    value = newValue;
                    if (this._scheduler) {
                        this._scheduler.update();
                    }
                },
            });
        }
        const proto = new Proxy(BaseElement.prototype, {
            getPrototypeOf(target) {
                return target;
            },
            set(target, key, value, receiver) {
                let desc;
                if (key in target) {
                    desc = Object.getOwnPropertyDescriptor(target, key);
                    if (desc && desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    }
                    Reflect.set(target, key, value, receiver);
                    return true;
                }
                if (typeof key === "symbol" || key[0] === "_") {
                    desc = {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value,
                    };
                }
                else {
                    desc = reflectiveProp(value);
                }
                Object.defineProperty(receiver, key, desc);
                if (desc.set) {
                    desc.set.call(receiver, value);
                }
                return true;
            },
        });
        Object.setPrototypeOf(Element.prototype, proto);
        return Element;
    }
    return component;
}

class Hook {
    id;
    state;
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
}
function use(Hook, ...args) {
    let id = notify$1();
    let hooks = current[hookSymbol];
    let hook = hooks.get(id);
    if (!hook) {
        hook = new Hook(id, current, ...args);
        hooks.set(id, hook);
    }
    return hook.update(...args);
}
function hook(Hook) {
    return use.bind(null, Hook);
}

function createEffect(setEffects) {
    return hook(class extends Hook {
        callback;
        lastValues;
        values;
        _teardown;
        constructor(id, state, ignored1, ignored2) {
            super(id, state);
            setEffects(state, this);
        }
        update(callback, values) {
            this.callback = callback;
            this.values = values;
        }
        call() {
            const hasChanged = !this.values || this.hasChanged();
            this.lastValues = this.values;
            if (hasChanged) {
                this.run();
            }
        }
        run() {
            this.teardown();
            this._teardown = this.callback.call(this.state);
        }
        teardown() {
            if (typeof this._teardown === "function") {
                this._teardown();
            }
        }
        hasChanged() {
            return (!this.lastValues ||
                this.values.some((value, i) => this.lastValues[i] !== value));
        }
    });
}

function setEffects(state, cb) {
    state[effectsSymbol].push(cb);
}
/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */
const useEffect = createEffect(setEffects);

const getEmitter = (host) => {
    if (host instanceof Element)
        return host;
    return host.startNode || host.endNode || host.parentNode;
};
/**
 * @function
 * @template T
 * @param    {Context<T>} context
 * @return   {T}
 */
const useContext = hook(class extends Hook {
    Context;
    value;
    _ranEffect;
    _unsubscribe;
    constructor(id, state, _) {
        super(id, state);
        this._updater = this._updater.bind(this);
        this._ranEffect = false;
        this._unsubscribe = null;
        setEffects(state, this);
    }
    update(Context) {
        if (this.Context !== Context) {
            this._subscribe(Context);
            this.Context = Context;
        }
        return this.value;
    }
    call() {
        if (!this._ranEffect) {
            this._ranEffect = true;
            if (this._unsubscribe)
                this._unsubscribe();
            this._subscribe(this.Context);
            this.state.update();
        }
    }
    _updater(value) {
        this.value = value;
        this.state.update();
    }
    _subscribe(Context) {
        const detail = { Context, callback: this._updater };
        const emitter = getEmitter(this.state.host);
        emitter.dispatchEvent(new CustomEvent(contextEvent, {
            detail, // carrier
            bubbles: true, // to bubble up in tree
            cancelable: true, // to be able to cancel
            composed: true, // to pass ShadowDOM boundaries
        }));
        const { unsubscribe = null, value } = detail;
        this.value = unsubscribe ? value : Context.defaultValue;
        this._unsubscribe = unsubscribe;
    }
    teardown() {
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }
});

function makeContext(component) {
    return (defaultValue) => {
        const Context = {
            Provider: class extends HTMLElement {
                listeners;
                _value;
                constructor() {
                    super();
                    this.listeners = new Set();
                    this.addEventListener(contextEvent, this);
                }
                disconnectedCallback() {
                    this.removeEventListener(contextEvent, this);
                }
                handleEvent(event) {
                    const { detail } = event;
                    if (detail.Context === Context) {
                        detail.value = this.value;
                        detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
                        this.listeners.add(detail.callback);
                        event.stopPropagation();
                    }
                }
                unsubscribe(callback) {
                    this.listeners.delete(callback);
                }
                set value(value) {
                    this._value = value;
                    for (let callback of this.listeners) {
                        callback(value);
                    }
                }
                get value() {
                    return this._value;
                }
            },
            Consumer: component(function ({ render }) {
                const context = useContext(Context);
                return render(context);
            }, { useShadowDOM: false }),
            defaultValue,
        };
        return Context;
    };
}

/**
 * @function
 * @template T
 * @param  {() => T} fn function to memoize
 * @param  {unknown[]} values dependencies to the memoized computation
 * @return {T} The next computed value
 */
const useMemo = hook(class extends Hook {
    value;
    values;
    constructor(id, state, fn, values) {
        super(id, state);
        this.value = fn();
        this.values = values;
    }
    update(fn, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            this.value = fn();
        }
        return this.value;
    }
    hasChanged(values = []) {
        return values.some((value, i) => this.values[i] !== value);
    }
});

/**
 * @function
 * @template {Function} T
 * @param    {T} fn - callback to memoize
 * @param    {unknown[]} inputs - dependencies to callback memoization
 * @return   {T}
 */
const useCallback = (fn, inputs) => useMemo(() => fn, inputs);

function setLayoutEffects(state, cb) {
    state[layoutEffectsSymbol].push(cb);
}
/**
 * @function
 * @param  {Effect} callback effecting callback
 * @param  {unknown[]} [values] dependencies to the effect
 * @return {void}
 */
const useLayoutEffect = createEffect(setLayoutEffects);

/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */
const useState = hook(class extends Hook {
    args;
    constructor(id, state, initialValue) {
        super(id, state);
        this.updater = this.updater.bind(this);
        if (typeof initialValue === "function") {
            initialValue = initialValue();
        }
        this.makeArgs(initialValue);
    }
    update() {
        return this.args;
    }
    updater(value) {
        const [previousValue] = this.args;
        if (typeof value === "function") {
            const updaterFn = value;
            value = updaterFn(previousValue);
        }
        if (Object.is(previousValue, value)) {
            return;
        }
        this.makeArgs(value);
        this.state.update();
    }
    makeArgs(value) {
        this.args = Object.freeze([value, this.updater]);
    }
});

/**
 * Given a reducer function, initial state, and optional state initializer function, returns a tuple of state and dispatch function.
 * @function
 * @template S State
 * @template I Initial State
 * @template A Action
 * @param {Reducer<S, A>} reducer - reducer function to compute the next state given the previous state and the action
 * @param {I} initialState - the initial state of the reducer
 * @param {(init: I) => S} [init=undefined] - Optional initializer function, called on initialState if provided
 * @return {readonly [S, (action: A) => void]}
 */
hook(class extends Hook {
    reducer;
    currentState;
    constructor(id, state, _, initialState, init) {
        super(id, state);
        this.dispatch = this.dispatch.bind(this);
        this.currentState =
            init !== undefined ? init(initialState) : initialState;
    }
    update(reducer) {
        this.reducer = reducer;
        return [this.currentState, this.dispatch];
    }
    dispatch(action) {
        this.currentState = this.reducer(this.currentState, action);
        this.state.update();
    }
});

function useRef(initialValue) {
    return useMemo(() => ({
        current: initialValue,
    }), []);
}

function pion({ render }) {
    const component = makeComponent(render);
    const createContext = makeContext(component);
    return { component, createContext };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s$1(i,t);return !0},o$2=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$2(t);}};function h$1(i){void 0!==this._$AN?(o$2(this),this._$AM=i,r(this)):this._$AM=i;}function n$3(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],!1),o$2(r[i]);else null!=r&&(s$1(r,!1),o$2(r));else s$1(this,i);}const c$2=i=>{i.type==t.CHILD&&(i._$AP??=n$3,i._$AQ??=h$1);};class f extends i$2{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s$1(this,i),o$2(this));}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const { component, createContext } = pion({ render: j });

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$1(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f$1(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===w||t$1===T)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return w}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return w}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return w;return m$1(i),t$1}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s{constructor(t){this.Y=t;}disconnect(){this.Y=void 0;}reconnect(t){this.Y=t;}deref(){return this.Y}}class i{constructor(){this.Z=void 0,this.q=void 0;}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t));}resume(){this.q?.(),this.Z=this.q=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$2=t=>!i$3(t)&&"function"==typeof t.then,h=1073741823;let c$1 = class c extends f{constructor(){super(...arguments),this._$Cwt=h,this._$Cbt=[],this._$CK=new s(this),this._$CX=new i;}render(...s){return s.find((t=>!n$2(t)))??w}update(s,i){const e=this._$Cbt;let r=e.length;this._$Cbt=i;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n$2(s))return this._$Cwt=t,s;t<r&&s===e[t]||(this._$Cwt=h,r=0,Promise.resolve(s).then((async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const e=i._$Cbt.indexOf(s);e>-1&&e<i._$Cwt&&(i._$Cwt=e,i.setValue(t));}})));}return w}disconnected(){this._$CK.disconnect(),this._$CX.pause();}reconnected(){this._$CK.reconnect(this),this._$CX.resume();}};const m=e$1(c$1);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n$1(n,r,t){return n?r(n):t?.(n)}

const useHost = hook(class extends Hook {
    update() {
        return this.state.host;
    }
});

const useImperativeApi = hook(class extends Hook {
    values;
    constructor(id, state, api, values) {
        super(id, state);
        Object.assign(state.host, api);
        this.values = values;
    }
    update(api, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            Object.assign(this.state.host, api);
        }
    }
    hasChanged(values = []) {
        return values.some((value, i) => this.values[i] !== value);
    }
});

const o$1=new WeakMap,n=e$1(class extends f{render(i){return T}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),T}rt(t){if("function"==typeof this.Y){const i=this.ht??globalThis;let s=o$1.get(i);void 0===s&&(s=new WeakMap,o$1.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?o$1.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??T;

const UPPER = /([A-Z])/gu;
/* Emulate polymer notify props */
const notifyProperty = (host, name, value) => {
    // this is required to make polymer double-binding recognize the change
    // @see https://github.com/Polymer/polymer/blob/76c71e186ecc605294c3575dd31ac7983a8b3ae3/lib/mixins/property-effects.js#L382
    host[name] = value;
    // emulate polymer notify event
    host.dispatchEvent(new CustomEvent(name.replace(UPPER, '-$1').toLowerCase() + '-changed', {
        detail: { value },
    }));
};

const useInput = (host) => {
    const inputRef = useRef(undefined);
    const onRef = useCallback((el) => (inputRef.current = el), []);
    const root = host.shadowRoot, onChange = useCallback((e) => host.dispatchEvent(new Event(e.type, { bubbles: e.bubbles })), []), onInput = useCallback((e) => notifyProperty(host, 'value', e.target.value), []), onFocus = useCallback((e) => notifyProperty(host, 'focused', e.type === 'focus'), []), focus = useCallback(() => inputRef.current?.focus(), []), validate = useCallback(() => {
        const valid = inputRef.current?.checkValidity();
        host.toggleAttribute('invalid', !valid);
        return valid;
    }, []);
    useImperativeApi({ focus, validate }, [focus, validate]);
    useEffect(() => {
        const onMouseDown = (e) => {
            if (e.defaultPrevented ||
                host.disabled ||
                e.target.matches('input, textarea, label')) {
                return;
            }
            e.preventDefault(); // don't blur
            if (!host.matches(':focus-within')) {
                // if input not focused
                focus(); // focus input
            }
        };
        root.addEventListener('mousedown', onMouseDown);
        return () => root.removeEventListener('mousedown', onMouseDown);
    }, [focus]);
    return {
        onChange,
        onFocus,
        onInput,
        onRef,
    };
};

const useAllowedPattern = (allowedPattern) => useMemo(() => {
    if (allowedPattern == null) {
        return;
    }
    const regexp = new RegExp(allowedPattern, 'u');
    return (e) => {
        if (!e.defaultPrevented && e.data && !regexp.test(e.data)) {
            e.preventDefault();
        }
    };
}, [allowedPattern]);

const tagged = (strings, ...values) => strings.flatMap((s, i) => [s, values[i] || '']).join('');

const sheet = (...styles) => {
    const cs = new CSSStyleSheet();
    cs.replaceSync(styles.join(''));
    return cs;
};

const styles$2 = tagged `
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}
	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scale3d(0, 1, 1);
		transform-origin: center center;
		z-index: 1;
	}
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}
`;

const render = (control, { label, invalid, errorMessage }) => x `
		<style>
			${styles$2}
		</style>
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${control}
				${n$1(label, () => x `<label for="input" part="label">${label}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${n$1(invalid && errorMessage, () => x `<div class="error" part="error">${errorMessage}</div>`)}
	`, attributes = [
    'autocomplete',
    'readonly',
    'disabled',
    'maxlength',
    'invalid',
    'no-label-float',
    'always-float-label',
];

const getPlaceholder = ({ placeholder, noLabelFloat, label }) => {
    return (noLabelFloat ? label : undefined) || placeholder || ' ';
};

const observedAttributes$2 = [
    'type',
    'pattern',
    'allowed-pattern',
    'min',
    'max',
    'step',
    'autosize',
    'label',
    ...attributes,
];
const Input = (host) => {
    const { type = 'text', pattern, allowedPattern, autocomplete, value, readonly, disabled, min, max, step, maxlength, } = host, { onChange, onFocus, onInput, onRef } = useInput(host);
    const onBeforeInput = useAllowedPattern(allowedPattern);
    return render(x `
			<input
				${n(onRef)}
				style="--chars: ${value?.toString()?.length ?? 0}ch"
				id="input"
				part="input"
				type=${type}
				pattern=${o(pattern)}
				autocomplete=${o(autocomplete)}
				placeholder=${getPlaceholder(host)}
				?readonly=${readonly}
				?aria-disabled=${disabled}
				?disabled=${disabled}
				.value=${l(value ?? '')}
				maxlength=${o(maxlength)}
				@beforeinput=${onBeforeInput}
				@input=${onInput}
				@change=${onChange}
				@focus=${onFocus}
				@blur=${onFocus}
				min=${o(min)}
				max=${o(max)}
				step=${o(step)}
			/>
		`, host);
};
customElements.define('cosmoz-input', component(Input, { observedAttributes: observedAttributes$2 }));

const autoheight = (input) => {
    input.style.height = '';
    input.style.height = `${input.scrollHeight}px`;
};
const limit = (input, maxRows = 0) => {
    if (maxRows > 0) {
        const rows = input.getAttribute('rows') ?? '', height = input.style.height;
        input.style.height = '';
        input.setAttribute('rows', maxRows);
        input.style.maxHeight = input.getBoundingClientRect().height + 'px';
        input.style.height = height;
        input.setAttribute('rows', rows);
    }
};
const useAutoHeight = (host) => {
    const { value, maxRows } = host, input = useMemo(() => () => host.shadowRoot.querySelector('#input'), []);
    useEffect(() => limit(input(), maxRows), [maxRows, input]);
    useEffect(() => autoheight(input()), [input, value]);
    useEffect(() => {
        const el = input(), observer = new ResizeObserver(() => requestAnimationFrame(() => autoheight(el)));
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [input]);
};

const observedAttributes$1 = ['rows', ...attributes];
const Textarea = (host) => {
    const { autocomplete, value, placeholder, readonly, disabled, rows, cols, maxlength, } = host, { onChange, onFocus, onInput, onRef } = useInput(host);
    useAutoHeight(host);
    return render(x `
			<textarea id="input" part="input"
				${n(onRef)}
				autocomplete=${o(autocomplete)}
				placeholder=${placeholder || ' '}
				rows=${rows ?? 1} cols=${o(cols)}
				?readonly=${readonly} ?aria-disabled=${disabled} ?disabled=${disabled}
				.value=${l(value ?? '')} maxlength=${o(maxlength)} @input=${onInput}
				@change=${onChange} @focus=${onFocus} @blur=${onFocus}>`, host);
};
customElements.define('cosmoz-textarea', component(Textarea, { observedAttributes: observedAttributes$1 }));

const identity = (obj) => obj;

const isIterable = (x) => {
    return typeof x === 'object' && x !== null && Symbol.iterator in x;
};
function array(arr) {
    if (arr == null) {
        return [];
    }
    if (Array.isArray(arr)) {
        return arr;
    }
    if (typeof arr === 'string') {
        return [arr];
    }
    if (isIterable(arr)) {
        return Array.from(arr);
    }
    return [arr];
}
const without = (exclude, predicate = identity) => (list) => {
    const excludes = array(exclude).map(predicate);
    return array(list).filter((value) => !excludes.includes(predicate(value)));
};

/* eslint-disable no-use-before-define, import/group-exports */
function prop(key) {
    if (!key) {
        return identity;
    }
    return (obj) => obj?.[key];
}
const strProp = (key) => {
    const p = prop(key);
    return (o) => {
        if (typeof o === 'string') {
            return o;
        }
        return p(o)?.toString() || '';
    };
};
const props = (keys) => (obj) => {
    const ret = {};
    for (const key in obj) {
        if (keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
};

/**
 * Copies properties of an Object into a memoized object.
 * Useful to create an object that does not change.
 *
 * @param {Object} meta - The source object
 * @returns {Object} The memoized object.
 */
const useMeta = (meta) => {
    const ref = useMemo(() => ({}), []);
    return useMemo(() => Object.assign(ref, meta), [ref, ...Object.values(meta)]);
};

const isFocused = (t) => t.matches(':focus-within');
const useFocus = ({ disabled, onFocus }) => {
    const [focusState, setState] = useState(), { focused: _focused, closed } = focusState || {}, focused = _focused && !disabled, meta = useMeta({ closed, onFocus }), setClosed = useCallback((closed) => setState((p) => ({ ...p, closed })), []), onToggle = useCallback((e) => {
        const target = e.currentTarget;
        return isFocused(target)
            ? setState((p) => ({ focused: true, closed: !p?.closed }))
            : target.focus();
    }, []);
    useEffect(() => {
        if (!focused) {
            return;
        }
        const handler = (e) => {
            if (e.defaultPrevented) {
                return;
            }
            const { closed } = meta;
            if (e.key === 'Escape' && !closed) {
                e.preventDefault();
                setClosed(true);
            }
            else if (['ArrowUp', 'Up'].includes(e.key) && closed) {
                e.preventDefault();
                setClosed(false);
            }
        };
        document.addEventListener('keydown', handler, true);
        return () => document.removeEventListener('keydown', handler, true);
    }, [focused]);
    return {
        focused,
        active: focused && !closed,
        setClosed,
        onToggle,
        onFocus: useCallback((e) => {
            const focused = isFocused(e.currentTarget);
            setState({ focused });
            meta.onFocus?.(focused);
        }, [meta]),
    };
};

const useKeys = ({ focused, empty, ...info }) => {
  const enabled = focused && empty, meta = useMeta(info);
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const handler = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { key } = e, values = array(meta.value), isOne = meta.limit == 1;
      if (values.length > 0 && (key === "Backspace" || isOne && key.length === 1)) {
        return meta.onChange(values.slice(0, -1));
      } else if (meta.hideEmpty && values.length < 1 && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(key)) {
        meta.onText(" ");
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, [enabled, meta]);
};

const search = (source, query, textual) => {
  const qry = query.toLowerCase();
  const matches = [];
  for (const item of source) {
    const index = textual(item).toLowerCase().indexOf(qry);
    if (index < 0) {
      continue;
    }
    matches.push({
      item,
      index
    });
  }
  return matches.sort((a, b) => {
    return a.index - b.index;
  }).map(({ item }) => item);
};
const normalize = (source) => {
  if (source === false || source == null)
    return [];
  return source;
};
const notify = (host, name, detail) => host.dispatchEvent(new CustomEvent(name, { detail }));
const useNotify = (host, fn, name) => useCallback((val) => {
  fn?.(val);
  notify(host, name, val);
}, [fn]);
const EMPTY = [], EMPTY$ = Promise.resolve(EMPTY);
const raf = (fn) => (...args) => {
  let id;
  const cleanup = () => {
    if (id)
      cancelAnimationFrame(id);
  };
  cleanup();
  id = requestAnimationFrame(() => {
    id = void 0;
    fn(...args);
  });
  return cleanup;
};

const useAutocomplete = ({ value: _value, text, onChange: _onChange, onText: _onText, onSelect, limit, min, source, textProperty, textual: _textual, valueProperty, external, hideEmpty, keepOpened, keepQuery, preserveOrder, ...thru }) => {
  const textual = useMemo(() => (_textual ?? strProp)(textProperty), [_textual, textProperty]), { active, focused, onFocus, setClosed } = useFocus(thru), empty = !text, query = useMemo(() => text?.trim(), [text]), host = useHost(), onText = useNotify(host, _onText, "text"), onChange = useCallback((val) => {
    _onChange?.(val, () => setClosed(true));
    notify(host, "value", val);
  }, [_onChange]), source$ = useMemo(() => Promise.resolve(typeof source === "function" ? source({ query, active }) : source), [source, active, query]), value = useMemo(() => array(_value), [_value]), values$ = useMemo(() => source$.then((source2) => preserveOrder ? normalize(source2) : [
    ...value,
    ...without(value, prop(valueProperty))(normalize(source2))
  ]), [source$, value, valueProperty]);
  useKeys({
    focused,
    empty,
    limit,
    value,
    hideEmpty,
    onChange,
    onText
  });
  useEffect(() => {
    if (!focused)
      onText("");
  }, [focused]);
  const meta = useMeta({
    onText,
    onChange,
    value,
    limit,
    min,
    keepQuery,
    keepOpened,
    setClosed,
    onSelect
  });
  return {
    active,
    query,
    textual,
    value,
    values$,
    items$: useMemo(() => {
      if (!active || hideEmpty && empty) {
        return EMPTY$;
      }
      return query && !external ? values$.then((values) => search(values, query, textual)) : values$;
    }, [values$, active, query, textual, external, hideEmpty, empty]),
    onClick: useCallback(() => setClosed(false), []),
    onFocus,
    onText: useCallback((e) => {
      onText(e.target.value);
      setClosed(false);
    }, [onText, text, setClosed]),
    onSelect: useCallback((newVal) => {
      meta.onSelect?.(newVal, meta);
      const { onChange: onChange2, onText: onText2, limit: limit2, min: min2, value: val, keepQuery: keepQuery2, keepOpened: keepOpened2, setClosed: setClosed2 } = meta;
      if (!keepQuery2)
        onText2("");
      if (!keepOpened2)
        setClosed2(true);
      const value2 = array(val), deselect = value2.includes(newVal);
      if (deselect && value2.length === min2)
        return;
      onChange2((deselect ? without(newVal)(value2) : [...value2, newVal]).slice(-limit2));
    }, [meta]),
    onDeselect: useCallback((val) => meta.onChange(without(val)(meta.value)), [meta])
  };
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e$1(class extends i$2{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,[t,r,c]){const d=p(s),{values:p$1,keys:a}=this.dt(t,r,c);if(!Array.isArray(d))return this.ut=a,p$1;const h=this.ut??=[],v$1=[];let m,y,x=0,j=d.length-1,k=0,w$1=p$1.length-1;for(;x<=j&&k<=w$1;)if(null===d[x])x++;else if(null===d[j])j--;else if(h[x]===a[k])v$1[k]=v(d[x],p$1[k]),x++,k++;else if(h[j]===a[w$1])v$1[w$1]=v(d[j],p$1[w$1]),j--,w$1--;else if(h[x]===a[w$1])v$1[w$1]=v(d[x],p$1[w$1]),r$1(s,v$1[w$1+1],d[x]),x++,w$1--;else if(h[j]===a[k])v$1[k]=v(d[j],p$1[k]),r$1(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u(a,k,w$1),y=u(h,x,j)),m.has(h[x]))if(m.has(h[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=r$1(s,d[x]);v(e,p$1[k]),v$1[k]=e;}else v$1[k]=v(t,p$1[k]),r$1(s,d[x],t),d[e]=null;k++;}else h$2(d[j]),j--;else h$2(d[x]),x++;for(;k<=w$1;){const e=r$1(s,v$1[w$1+1]);v(e,p$1[k]),v$1[k++]=e;}for(;x<=j;){const e=d[x++];null!==e&&h$2(e);}return this.ut=a,m$1(s,v$1),w}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class RangeChangedEvent extends Event {
    constructor(range) {
        super(RangeChangedEvent.eventName, { bubbles: false });
        this.first = range.first;
        this.last = range.last;
    }
}
RangeChangedEvent.eventName = 'rangeChanged';
class VisibilityChangedEvent extends Event {
    constructor(range) {
        super(VisibilityChangedEvent.eventName, { bubbles: false });
        this.first = range.first;
        this.last = range.last;
    }
}
VisibilityChangedEvent.eventName = 'visibilityChanged';
class UnpinnedEvent extends Event {
    constructor() {
        super(UnpinnedEvent.eventName, { bubbles: false });
    }
}
UnpinnedEvent.eventName = 'unpinned';

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ScrollerShim {
    constructor(element) {
        this._element = null;
        const node = element ?? window;
        this._node = node;
        if (element) {
            this._element = element;
        }
    }
    get element() {
        return (this._element || document.scrollingElement || document.documentElement);
    }
    get scrollTop() {
        return this.element.scrollTop || window.scrollY;
    }
    get scrollLeft() {
        return this.element.scrollLeft || window.scrollX;
    }
    get scrollHeight() {
        return this.element.scrollHeight;
    }
    get scrollWidth() {
        return this.element.scrollWidth;
    }
    get viewportHeight() {
        return this._element
            ? this._element.getBoundingClientRect().height
            : window.innerHeight;
    }
    get viewportWidth() {
        return this._element
            ? this._element.getBoundingClientRect().width
            : window.innerWidth;
    }
    get maxScrollTop() {
        return this.scrollHeight - this.viewportHeight;
    }
    get maxScrollLeft() {
        return this.scrollWidth - this.viewportWidth;
    }
}
class ScrollerController extends ScrollerShim {
    constructor(client, element) {
        super(element);
        this._clients = new Set();
        this._retarget = null;
        this._end = null;
        this.__destination = null;
        this.correctingScrollError = false;
        this._checkForArrival = this._checkForArrival.bind(this);
        this._updateManagedScrollTo = this._updateManagedScrollTo.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.scrollBy = this.scrollBy.bind(this);
        const node = this._node;
        this._originalScrollTo = node.scrollTo;
        this._originalScrollBy = node.scrollBy;
        this._originalScroll = node.scroll;
        this._attach(client);
    }
    get _destination() {
        return this.__destination;
    }
    get scrolling() {
        return this._destination !== null;
    }
    scrollTo(p1, p2) {
        const options = typeof p1 === 'number' && typeof p2 === 'number'
            ? { left: p1, top: p2 }
            : p1;
        this._scrollTo(options);
    }
    scrollBy(p1, p2) {
        const options = typeof p1 === 'number' && typeof p2 === 'number'
            ? { left: p1, top: p2 }
            : p1;
        if (options.top !== undefined) {
            options.top += this.scrollTop;
        }
        if (options.left !== undefined) {
            options.left += this.scrollLeft;
        }
        this._scrollTo(options);
    }
    _nativeScrollTo(options) {
        this._originalScrollTo.bind(this._element || window)(options);
    }
    _scrollTo(options, retarget = null, end = null) {
        if (this._end !== null) {
            this._end();
        }
        if (options.behavior === 'smooth') {
            this._setDestination(options);
            this._retarget = retarget;
            this._end = end;
        }
        else {
            this._resetScrollState();
        }
        this._nativeScrollTo(options);
    }
    _setDestination(options) {
        let { top, left } = options;
        top =
            top === undefined
                ? undefined
                : Math.max(0, Math.min(top, this.maxScrollTop));
        left =
            left === undefined
                ? undefined
                : Math.max(0, Math.min(left, this.maxScrollLeft));
        if (this._destination !== null &&
            left === this._destination.left &&
            top === this._destination.top) {
            return false;
        }
        this.__destination = { top, left, behavior: 'smooth' };
        return true;
    }
    _resetScrollState() {
        this.__destination = null;
        this._retarget = null;
        this._end = null;
    }
    _updateManagedScrollTo(coordinates) {
        if (this._destination) {
            if (this._setDestination(coordinates)) {
                this._nativeScrollTo(this._destination);
            }
        }
    }
    managedScrollTo(options, retarget, end) {
        this._scrollTo(options, retarget, end);
        return this._updateManagedScrollTo;
    }
    correctScrollError(coordinates) {
        this.correctingScrollError = true;
        requestAnimationFrame(() => requestAnimationFrame(() => (this.correctingScrollError = false)));
        // Correct the error
        this._nativeScrollTo(coordinates);
        // Then, if we were headed for a specific destination, we continue scrolling:
        // First, we update our target destination, if applicable...
        if (this._retarget) {
            this._setDestination(this._retarget());
        }
        // Then we go ahead and resume scrolling
        if (this._destination) {
            this._nativeScrollTo(this._destination);
        }
    }
    _checkForArrival() {
        if (this._destination !== null) {
            const { scrollTop, scrollLeft } = this;
            let { top, left } = this._destination;
            top = Math.min(top || 0, this.maxScrollTop);
            left = Math.min(left || 0, this.maxScrollLeft);
            const topDiff = Math.abs(top - scrollTop);
            const leftDiff = Math.abs(left - scrollLeft);
            // We check to see if we've arrived at our destination.
            if (topDiff < 1 && leftDiff < 1) {
                if (this._end) {
                    this._end();
                }
                this._resetScrollState();
            }
        }
    }
    detach(client) {
        this._clients.delete(client);
        /**
         * If there aren't any more clients, then return the node's default
         * scrolling methods
         */
        if (this._clients.size === 0) {
            this._node.scrollTo = this._originalScrollTo;
            this._node.scrollBy = this._originalScrollBy;
            this._node.scroll = this._originalScroll;
            this._node.removeEventListener('scroll', this._checkForArrival);
        }
        return null;
    }
    _attach(client) {
        this._clients.add(client);
        /**
         * The node should only have the methods shimmed when adding the first
         * client – otherwise it's redundant
         */
        if (this._clients.size === 1) {
            this._node.scrollTo = this.scrollTo;
            this._node.scrollBy = this.scrollBy;
            this._node.scroll = this.scrollTo;
            this._node.addEventListener('scroll', this._checkForArrival);
        }
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Virtualizer depends on `ResizeObserver`, which is supported in
// all modern browsers. For developers whose browser support
// matrix includes older browsers, we include a compatible
// polyfill in the package; this bit of module state facilitates
// a simple mechanism (see ./polyfillLoaders/ResizeObserver.js.)
// for loading the polyfill.
let _ResizeObserver = window?.ResizeObserver;
const virtualizerRef = Symbol('virtualizerRef');
const SIZER_ATTRIBUTE = 'virtualizer-sizer';
let DefaultLayoutConstructor;
/**
 * Provides virtual scrolling boilerplate.
 *
 * Extensions of this class must set hostElement and layout.
 *
 * Extensions of this class must also override VirtualRepeater's DOM
 * manipulation methods.
 */
class Virtualizer {
    constructor(config) {
        this._benchmarkStart = null;
        this._layout = null;
        this._clippingAncestors = [];
        /**
         * Layout provides these values, we set them on _render().
         * TODO @straversi: Can we find an XOR type, usable for the key here?
         */
        this._scrollSize = null;
        /**
         * Difference between scroll target's current and required scroll offsets.
         * Provided by layout.
         */
        this._scrollError = null;
        /**
         * A list of the positions (top, left) of the children in the current range.
         */
        this._childrenPos = null;
        // TODO: (graynorton): type
        this._childMeasurements = null;
        this._toBeMeasured = new Map();
        this._rangeChanged = true;
        this._itemsChanged = true;
        this._visibilityChanged = true;
        this._scrollerController = null;
        this._isScroller = false;
        this._sizer = null;
        /**
         * Resize observer attached to hostElement.
         */
        this._hostElementRO = null;
        /**
         * Resize observer attached to children.
         */
        this._childrenRO = null;
        this._mutationObserver = null;
        this._scrollEventListeners = [];
        this._scrollEventListenerOptions = {
            passive: true,
        };
        // TODO (graynorton): Rethink, per longer comment below
        this._loadListener = this._childLoaded.bind(this);
        /**
         * Index of element to scroll into view, plus scroll
         * behavior options, as imperatively specified via
         * `element(index).scrollIntoView()`
         */
        this._scrollIntoViewTarget = null;
        this._updateScrollIntoViewCoordinates = null;
        /**
         * Items to render. Set by items.
         */
        this._items = [];
        /**
         * Index of the first child in the range, not necessarily the first visible child.
         * TODO @straversi: Consider renaming these.
         */
        this._first = -1;
        /**
         * Index of the last child in the range.
         */
        this._last = -1;
        /**
         * Index of the first item intersecting the viewport.
         */
        this._firstVisible = -1;
        /**
         * Index of the last item intersecting the viewport.
         */
        this._lastVisible = -1;
        this._scheduled = new WeakSet();
        /**
         * Invoked at the end of each render cycle: children in the range are
         * measured, and their dimensions passed to this callback. Use it to layout
         * children as needed.
         */
        this._measureCallback = null;
        this._measureChildOverride = null;
        /**
         * State for `layoutComplete` promise
         */
        this._layoutCompletePromise = null;
        this._layoutCompleteResolver = null;
        this._layoutCompleteRejecter = null;
        this._pendingLayoutComplete = null;
        /**
         * Layout initialization is async because we dynamically load
         * the default layout if none is specified. This state is to track
         * whether init is complete.
         */
        this._layoutInitialized = null;
        if (!config) {
            throw new Error('Virtualizer constructor requires a configuration object');
        }
        if (config.hostElement) {
            this._init(config);
        }
        else {
            throw new Error('Virtualizer configuration requires the "hostElement" property');
        }
    }
    set items(items) {
        if (Array.isArray(items) && items !== this._items) {
            this._itemsChanged = true;
            this._items = items;
            this._schedule(this._updateLayout);
        }
    }
    _init(config) {
        this._isScroller = !!config.scroller;
        this._initHostElement(config);
        // If no layout is specified, we make an empty
        // layout config, which will result in the default
        // layout with default parameters
        const layoutConfig = config.layout || {};
        // Save the promise returned by `_initLayout` as a state
        // variable we can check before updating layout config
        this._layoutInitialized = this._initLayout(layoutConfig);
    }
    _initObservers() {
        this._mutationObserver = new MutationObserver(this._finishDOMUpdate.bind(this));
        this._hostElementRO = new _ResizeObserver(() => this._hostElementSizeChanged());
        this._childrenRO = new _ResizeObserver(this._childrenSizeChanged.bind(this));
    }
    _initHostElement(config) {
        const hostElement = (this._hostElement = config.hostElement);
        this._applyVirtualizerStyles();
        hostElement[virtualizerRef] = this;
    }
    connected() {
        this._initObservers();
        const includeSelf = this._isScroller;
        this._clippingAncestors = getClippingAncestors(this._hostElement, includeSelf);
        this._scrollerController = new ScrollerController(this, this._clippingAncestors[0]);
        this._schedule(this._updateLayout);
        this._observeAndListen();
    }
    _observeAndListen() {
        this._mutationObserver.observe(this._hostElement, { childList: true });
        this._hostElementRO.observe(this._hostElement);
        this._scrollEventListeners.push(window);
        window.addEventListener('scroll', this, this._scrollEventListenerOptions);
        this._clippingAncestors.forEach((ancestor) => {
            ancestor.addEventListener('scroll', this, this._scrollEventListenerOptions);
            this._scrollEventListeners.push(ancestor);
            this._hostElementRO.observe(ancestor);
        });
        this._hostElementRO.observe(this._scrollerController.element);
        this._children.forEach((child) => this._childrenRO.observe(child));
        this._scrollEventListeners.forEach((target) => target.addEventListener('scroll', this, this._scrollEventListenerOptions));
    }
    disconnected() {
        this._scrollEventListeners.forEach((target) => target.removeEventListener('scroll', this, this._scrollEventListenerOptions));
        this._scrollEventListeners = [];
        this._clippingAncestors = [];
        this._scrollerController?.detach(this);
        this._scrollerController = null;
        this._mutationObserver?.disconnect();
        this._mutationObserver = null;
        this._hostElementRO?.disconnect();
        this._hostElementRO = null;
        this._childrenRO?.disconnect();
        this._childrenRO = null;
        this._rejectLayoutCompletePromise('disconnected');
    }
    _applyVirtualizerStyles() {
        const hostElement = this._hostElement;
        // Would rather set these CSS properties on the host using Shadow Root
        // style scoping (and falling back to a global stylesheet where native
        // Shadow DOM is not available), but this Mobile Safari bug is preventing
        // that from working: https://bugs.webkit.org/show_bug.cgi?id=226195
        const style = hostElement.style;
        style.display = style.display || 'block';
        style.position = style.position || 'relative';
        style.contain = style.contain || 'size layout';
        if (this._isScroller) {
            style.overflow = style.overflow || 'auto';
            style.minHeight = style.minHeight || '150px';
        }
    }
    _getSizer() {
        const hostElement = this._hostElement;
        if (!this._sizer) {
            // Use a preexisting sizer element if provided (for better integration
            // with vDOM renderers)
            let sizer = hostElement.querySelector(`[${SIZER_ATTRIBUTE}]`);
            if (!sizer) {
                sizer = document.createElement('div');
                sizer.setAttribute(SIZER_ATTRIBUTE, '');
                hostElement.appendChild(sizer);
            }
            // When the scrollHeight is large, the height of this element might be
            // ignored. Setting content and font-size ensures the element has a size.
            Object.assign(sizer.style, {
                position: 'absolute',
                margin: '-2px 0 0 0',
                padding: 0,
                visibility: 'hidden',
                fontSize: '2px',
            });
            sizer.textContent = '&nbsp;';
            sizer.setAttribute(SIZER_ATTRIBUTE, '');
            this._sizer = sizer;
        }
        return this._sizer;
    }
    async updateLayoutConfig(layoutConfig) {
        // If layout initialization hasn't finished yet, we wait
        // for it to finish so we can check whether the new config
        // is compatible with the existing layout before proceeding.
        await this._layoutInitialized;
        const Ctor = layoutConfig.type ||
            // The new config is compatible with the current layout,
            // so we update the config and return true to indicate
            // a successful update
            DefaultLayoutConstructor;
        if (typeof Ctor === 'function' && this._layout instanceof Ctor) {
            const config = { ...layoutConfig };
            delete config.type;
            this._layout.config = config;
            // The new config requires a different layout altogether, but
            // to limit implementation complexity we don't support dynamically
            // changing the layout of an existing virtualizer instance.
            // Returning false here lets the caller know that they should
            // instead make a new virtualizer instance with the desired layout.
            return true;
        }
        return false;
    }
    async _initLayout(layoutConfig) {
        let config;
        let Ctor;
        if (typeof layoutConfig.type === 'function') {
            // If we have a full LayoutSpecifier, the `type` property
            // gives us our constructor...
            Ctor = layoutConfig.type;
            // ...while the rest of the specifier is our layout config
            const copy = { ...layoutConfig };
            delete copy.type;
            config = copy;
        }
        else {
            // If we don't have a full LayoutSpecifier, we just
            // have a config for the default layout
            config = layoutConfig;
        }
        if (Ctor === undefined) {
            // If we don't have a constructor yet, load the default
            DefaultLayoutConstructor = Ctor = (await import('./flow-BYvW0t4Z.js'))
                .FlowLayout;
        }
        this._layout = new Ctor((message) => this._handleLayoutMessage(message), config);
        if (this._layout.measureChildren &&
            typeof this._layout.updateItemSizes === 'function') {
            if (typeof this._layout.measureChildren === 'function') {
                this._measureChildOverride = this._layout.measureChildren;
            }
            this._measureCallback = this._layout.updateItemSizes.bind(this._layout);
        }
        if (this._layout.listenForChildLoadEvents) {
            this._hostElement.addEventListener('load', this._loadListener, true);
        }
        this._schedule(this._updateLayout);
    }
    // TODO (graynorton): Rework benchmarking so that it has no API and
    // instead is always on except in production builds
    startBenchmarking() {
        if (this._benchmarkStart === null) {
            this._benchmarkStart = window.performance.now();
        }
    }
    stopBenchmarking() {
        if (this._benchmarkStart !== null) {
            const now = window.performance.now();
            const timeElapsed = now - this._benchmarkStart;
            const entries = performance.getEntriesByName('uv-virtualizing', 'measure');
            const virtualizationTime = entries
                .filter((e) => e.startTime >= this._benchmarkStart && e.startTime < now)
                .reduce((t, m) => t + m.duration, 0);
            this._benchmarkStart = null;
            return { timeElapsed, virtualizationTime };
        }
        return null;
    }
    _measureChildren() {
        const mm = {};
        const children = this._children;
        const fn = this._measureChildOverride || this._measureChild;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const idx = this._first + i;
            if (this._itemsChanged || this._toBeMeasured.has(child)) {
                mm[idx] = fn.call(this, child, this._items[idx]);
            }
        }
        this._childMeasurements = mm;
        this._schedule(this._updateLayout);
        this._toBeMeasured.clear();
    }
    /**
     * Returns the width, height, and margins of the given child.
     */
    _measureChild(element) {
        // offsetWidth doesn't take transforms in consideration, so we use
        // getBoundingClientRect which does.
        const { width, height } = element.getBoundingClientRect();
        return Object.assign({ width, height }, getMargins(element));
    }
    async _schedule(method) {
        if (!this._scheduled.has(method)) {
            this._scheduled.add(method);
            await Promise.resolve();
            this._scheduled.delete(method);
            method.call(this);
        }
    }
    async _updateDOM(state) {
        this._scrollSize = state.scrollSize;
        this._adjustRange(state.range);
        this._childrenPos = state.childPositions;
        this._scrollError = state.scrollError || null;
        const { _rangeChanged, _itemsChanged } = this;
        if (this._visibilityChanged) {
            this._notifyVisibility();
            this._visibilityChanged = false;
        }
        if (_rangeChanged || _itemsChanged) {
            this._notifyRange();
            this._rangeChanged = false;
        }
        this._finishDOMUpdate();
    }
    _finishDOMUpdate() {
        this._children.forEach((child) => this._childrenRO.observe(child));
        this._checkScrollIntoViewTarget(this._childrenPos);
        this._positionChildren(this._childrenPos);
        this._sizeHostElement(this._scrollSize);
        this._correctScrollError();
        if (this._benchmarkStart && 'mark' in window.performance) {
            window.performance.mark('uv-end');
        }
    }
    _updateLayout() {
        // Only update the layout and trigger a re-render if we have:
        //   a) A layout
        //   b) A scrollerController, which means we're connected
        if (this._layout && this._scrollerController) {
            this._layout.items = this._items;
            this._updateView();
            if (this._childMeasurements !== null) {
                // If the layout has been changed, we may have measurements but no callback
                if (this._measureCallback) {
                    this._measureCallback(this._childMeasurements);
                }
                this._childMeasurements = null;
            }
            this._layout.reflowIfNeeded();
            if (this._benchmarkStart && 'mark' in window.performance) {
                window.performance.mark('uv-end');
            }
        }
    }
    _handleScrollEvent() {
        if (this._benchmarkStart && 'mark' in window.performance) {
            try {
                window.performance.measure('uv-virtualizing', 'uv-start', 'uv-end');
            }
            catch (e) {
                console.warn('Error measuring performance data: ', e);
            }
            window.performance.mark('uv-start');
        }
        if (this._scrollerController.correctingScrollError === false) {
            // This is a user-initiated scroll, so we unpin the layout
            this._layout?.unpin();
        }
        this._schedule(this._updateLayout);
    }
    handleEvent(event) {
        switch (event.type) {
            case 'scroll':
                if (event.currentTarget === window ||
                    this._clippingAncestors.includes(event.currentTarget)) {
                    this._handleScrollEvent();
                }
                break;
            default:
                console.warn('event not handled', event);
        }
    }
    _handleLayoutMessage(message) {
        if (message.type === 'stateChanged') {
            this._updateDOM(message);
        }
        else if (message.type === 'visibilityChanged') {
            this._firstVisible = message.firstVisible;
            this._lastVisible = message.lastVisible;
            this._notifyVisibility();
        }
        else if (message.type === 'unpinned') {
            this._hostElement.dispatchEvent(new UnpinnedEvent());
        }
    }
    get _children() {
        const arr = [];
        let next = this._hostElement.firstElementChild;
        while (next) {
            if (!next.hasAttribute(SIZER_ATTRIBUTE)) {
                arr.push(next);
            }
            next = next.nextElementSibling;
        }
        return arr;
    }
    _updateView() {
        const hostElement = this._hostElement;
        const scrollingElement = this._scrollerController?.element;
        const layout = this._layout;
        if (hostElement && scrollingElement && layout) {
            let top, left, bottom, right;
            const hostElementBounds = hostElement.getBoundingClientRect();
            top = 0;
            left = 0;
            bottom = window.innerHeight;
            right = window.innerWidth;
            const ancestorBounds = this._clippingAncestors.map((ancestor) => ancestor.getBoundingClientRect());
            ancestorBounds.unshift(hostElementBounds);
            for (const bounds of ancestorBounds) {
                top = Math.max(top, bounds.top);
                left = Math.max(left, bounds.left);
                bottom = Math.min(bottom, bounds.bottom);
                right = Math.min(right, bounds.right);
            }
            const scrollingElementBounds = scrollingElement.getBoundingClientRect();
            const offsetWithinScroller = {
                left: hostElementBounds.left - scrollingElementBounds.left,
                top: hostElementBounds.top - scrollingElementBounds.top,
            };
            const totalScrollSize = {
                width: scrollingElement.scrollWidth,
                height: scrollingElement.scrollHeight,
            };
            const scrollTop = top - hostElementBounds.top + hostElement.scrollTop;
            const scrollLeft = left - hostElementBounds.left + hostElement.scrollLeft;
            const height = bottom - top;
            const width = right - left;
            layout.viewportSize = { width, height };
            layout.viewportScroll = { top: scrollTop, left: scrollLeft };
            layout.totalScrollSize = totalScrollSize;
            layout.offsetWithinScroller = offsetWithinScroller;
        }
    }
    /**
     * Styles the host element so that its size reflects the
     * total size of all items.
     */
    _sizeHostElement(size) {
        // Some browsers seem to crap out if the host element gets larger than
        // a certain size, so we clamp it here (this value based on ad hoc
        // testing in Chrome / Safari / Firefox Mac)
        const max = 8200000;
        const h = size && size.width !== null ? Math.min(max, size.width) : 0;
        const v = size && size.height !== null ? Math.min(max, size.height) : 0;
        if (this._isScroller) {
            this._getSizer().style.transform = `translate(${h}px, ${v}px)`;
        }
        else {
            const style = this._hostElement.style;
            style.minWidth = h ? `${h}px` : '100%';
            style.minHeight = v ? `${v}px` : '100%';
        }
    }
    /**
     * Sets the top and left transform style of the children from the values in
     * pos.
     */
    _positionChildren(pos) {
        if (pos) {
            pos.forEach(({ top, left, width, height, xOffset, yOffset }, index) => {
                const child = this._children[index - this._first];
                if (child) {
                    child.style.position = 'absolute';
                    child.style.boxSizing = 'border-box';
                    child.style.transform = `translate(${left}px, ${top}px)`;
                    if (width !== undefined) {
                        child.style.width = width + 'px';
                    }
                    if (height !== undefined) {
                        child.style.height = height + 'px';
                    }
                    child.style.left =
                        xOffset === undefined ? null : xOffset + 'px';
                    child.style.top =
                        yOffset === undefined ? null : yOffset + 'px';
                }
            });
        }
    }
    async _adjustRange(range) {
        const { _first, _last, _firstVisible, _lastVisible } = this;
        this._first = range.first;
        this._last = range.last;
        this._firstVisible = range.firstVisible;
        this._lastVisible = range.lastVisible;
        this._rangeChanged =
            this._rangeChanged || this._first !== _first || this._last !== _last;
        this._visibilityChanged =
            this._visibilityChanged ||
                this._firstVisible !== _firstVisible ||
                this._lastVisible !== _lastVisible;
    }
    _correctScrollError() {
        if (this._scrollError) {
            const { scrollTop, scrollLeft } = this._scrollerController;
            const { top, left } = this._scrollError;
            this._scrollError = null;
            this._scrollerController.correctScrollError({
                top: scrollTop - top,
                left: scrollLeft - left,
            });
        }
    }
    element(index) {
        if (index === Infinity) {
            index = this._items.length - 1;
        }
        return this._items?.[index] === undefined
            ? undefined
            : {
                scrollIntoView: (options = {}) => this._scrollElementIntoView({ ...options, index }),
            };
    }
    _scrollElementIntoView(options) {
        if (options.index >= this._first && options.index <= this._last) {
            this._children[options.index - this._first].scrollIntoView(options);
        }
        else {
            options.index = Math.min(options.index, this._items.length - 1);
            if (options.behavior === 'smooth') {
                const coordinates = this._layout.getScrollIntoViewCoordinates(options);
                const { behavior } = options;
                this._updateScrollIntoViewCoordinates =
                    this._scrollerController.managedScrollTo(Object.assign(coordinates, { behavior }), () => this._layout.getScrollIntoViewCoordinates(options), () => (this._scrollIntoViewTarget = null));
                this._scrollIntoViewTarget = options;
            }
            else {
                this._layout.pin = options;
            }
        }
    }
    /**
     * If we are smoothly scrolling to an element and the target element
     * is in the DOM, we update our target coordinates as needed
     */
    _checkScrollIntoViewTarget(pos) {
        const { index } = this._scrollIntoViewTarget || {};
        if (index && pos?.has(index)) {
            this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget));
        }
    }
    /**
     * Emits a rangechange event with the current first, last, firstVisible, and
     * lastVisible.
     */
    _notifyRange() {
        this._hostElement.dispatchEvent(new RangeChangedEvent({ first: this._first, last: this._last }));
    }
    _notifyVisibility() {
        this._hostElement.dispatchEvent(new VisibilityChangedEvent({
            first: this._firstVisible,
            last: this._lastVisible,
        }));
    }
    get layoutComplete() {
        // Lazily create promise
        if (!this._layoutCompletePromise) {
            this._layoutCompletePromise = new Promise((resolve, reject) => {
                this._layoutCompleteResolver = resolve;
                this._layoutCompleteRejecter = reject;
            });
        }
        return this._layoutCompletePromise;
    }
    _rejectLayoutCompletePromise(reason) {
        if (this._layoutCompleteRejecter !== null) {
            this._layoutCompleteRejecter(reason);
        }
        this._resetLayoutCompleteState();
    }
    _scheduleLayoutComplete() {
        // Don't do anything unless we have a pending promise
        // And only request a frame if we haven't already done so
        if (this._layoutCompletePromise && this._pendingLayoutComplete === null) {
            // Wait one additional frame to be sure the layout is stable
            this._pendingLayoutComplete = requestAnimationFrame(() => requestAnimationFrame(() => this._resolveLayoutCompletePromise()));
        }
    }
    _resolveLayoutCompletePromise() {
        if (this._layoutCompleteResolver !== null) {
            this._layoutCompleteResolver();
        }
        this._resetLayoutCompleteState();
    }
    _resetLayoutCompleteState() {
        this._layoutCompletePromise = null;
        this._layoutCompleteResolver = null;
        this._layoutCompleteRejecter = null;
        this._pendingLayoutComplete = null;
    }
    /**
     * Render and update the view at the next opportunity with the given
     * hostElement size.
     */
    _hostElementSizeChanged() {
        this._schedule(this._updateLayout);
    }
    // TODO (graynorton): Rethink how this works. Probably child loading is too specific
    // to have dedicated support for; might want some more generic lifecycle hooks for
    // layouts to use. Possibly handle measurement this way, too, or maybe that remains
    // a first-class feature?
    _childLoaded() { }
    // This is the callback for the ResizeObserver that watches the
    // virtualizer's children. We land here at the end of every virtualizer
    // update cycle that results in changes to physical items, and we also
    // end up here if one or more children change size independently of
    // the virtualizer update cycle.
    _childrenSizeChanged(changes) {
        // Only measure if the layout requires it
        if (this._layout?.measureChildren) {
            for (const change of changes) {
                this._toBeMeasured.set(change.target, change.contentRect);
            }
            this._measureChildren();
        }
        // If this is the end of an update cycle, we need to reset some
        // internal state. This should be a harmless no-op if we're handling
        // an out-of-cycle ResizeObserver callback, so we don't need to
        // distinguish between the two cases.
        this._scheduleLayoutComplete();
        this._itemsChanged = false;
        this._rangeChanged = false;
    }
}
function getMargins(el) {
    const style = window.getComputedStyle(el);
    return {
        marginTop: getMarginValue(style.marginTop),
        marginRight: getMarginValue(style.marginRight),
        marginBottom: getMarginValue(style.marginBottom),
        marginLeft: getMarginValue(style.marginLeft),
    };
}
function getMarginValue(value) {
    const float = value ? parseFloat(value) : NaN;
    return Number.isNaN(float) ? 0 : float;
}
// TODO (graynorton): Deal with iframes?
function getParentElement(el) {
    if (el.assignedSlot !== null) {
        return el.assignedSlot;
    }
    if (el.parentElement !== null) {
        return el.parentElement;
    }
    const parentNode = el.parentNode;
    if (parentNode && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        return parentNode.host || null;
    }
    return null;
}
///
function getElementAncestors(el, includeSelf = false) {
    const ancestors = [];
    let parent = includeSelf ? el : getParentElement(el);
    while (parent !== null) {
        ancestors.push(parent);
        parent = getParentElement(parent);
    }
    return ancestors;
}
function getClippingAncestors(el, includeSelf = false) {
    let foundFixed = false;
    return getElementAncestors(el, includeSelf).filter((a) => {
        if (foundFixed) {
            return false;
        }
        const style = getComputedStyle(a);
        foundFixed = style.position === 'fixed';
        return style.overflow !== 'visible';
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const defaultKeyFunction = (item) => item;
const defaultRenderItem = (item, idx) => x `${idx}: ${JSON.stringify(item, null, 2)}`;
class VirtualizeDirective extends f {
    constructor(part) {
        super(part);
        this._virtualizer = null;
        this._first = 0;
        this._last = -1;
        this._renderItem = (item, idx) => defaultRenderItem(item, idx + this._first);
        this._keyFunction = (item, idx) => defaultKeyFunction(item, idx + this._first);
        this._items = [];
        if (part.type !== t.CHILD) {
            throw new Error('The virtualize directive can only be used in child expressions');
        }
    }
    render(config) {
        if (config) {
            this._setFunctions(config);
        }
        const itemsToRender = [];
        if (this._first >= 0 && this._last >= this._first) {
            for (let i = this._first; i <= this._last; i++) {
                itemsToRender.push(this._items[i]);
            }
        }
        return c(itemsToRender, this._keyFunction, this._renderItem);
    }
    update(part, [config]) {
        this._setFunctions(config);
        const itemsChanged = this._items !== config.items;
        this._items = config.items || [];
        if (this._virtualizer) {
            this._updateVirtualizerConfig(part, config);
        }
        else {
            this._initialize(part, config);
        }
        return itemsChanged ? w : this.render();
    }
    async _updateVirtualizerConfig(part, config) {
        const compatible = await this._virtualizer.updateLayoutConfig(config.layout || {});
        if (!compatible) {
            const hostElement = part.parentNode;
            this._makeVirtualizer(hostElement, config);
        }
        this._virtualizer.items = this._items;
    }
    _setFunctions(config) {
        const { renderItem, keyFunction } = config;
        if (renderItem) {
            this._renderItem = (item, idx) => renderItem(item, idx + this._first);
        }
        if (keyFunction) {
            this._keyFunction = (item, idx) => keyFunction(item, idx + this._first);
        }
    }
    _makeVirtualizer(hostElement, config) {
        if (this._virtualizer) {
            this._virtualizer.disconnected();
        }
        const { layout, scroller, items } = config;
        this._virtualizer = new Virtualizer({ hostElement, layout, scroller });
        this._virtualizer.items = items;
        this._virtualizer.connected();
    }
    _initialize(part, config) {
        const hostElement = part.parentNode;
        if (hostElement && hostElement.nodeType === 1) {
            hostElement.addEventListener('rangeChanged', (e) => {
                this._first = e.first;
                this._last = e.last;
                this.setValue(this.render());
            });
            this._makeVirtualizer(hostElement, config);
        }
    }
    disconnected() {
        this._virtualizer?.disconnected();
    }
    reconnected() {
        this._virtualizer?.connected();
    }
}
const virtualize = e$1(VirtualizeDirective);

const undefs = (prev, obj) => {
    if (!prev || !obj) {
        return;
    }
    const keys = Object.keys(obj);
    return Object.fromEntries(Object.keys(prev).flatMap((k) => (keys.includes(k) ? [] : [[k, undefined]])));
};
class SpreadPropsDirective extends i$2 {
    _props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(props) {
        return w;
    }
    update(part, [props]) {
        if (this._props !== props) {
            Object.assign(part.element, undefs(this._props, props), (this._props = props));
        }
        return w;
    }
}
const spreadProps = e$1(SpreadPropsDirective);

const useStyleSheet = (css) => {
    const host = useHost();
    const cs = useMemo(() => new CSSStyleSheet(), []);
    useEffect(() => {
        host.shadowRoot.adoptedStyleSheets = [
            ...host.shadowRoot.adoptedStyleSheets,
            cs,
        ];
    }, []);
    useEffect(() => {
        cs.replaceSync(css);
    }, [css]);
};

const svg = (
  /* eslint-disable quotes */
  "data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
);
const style$1 = tagged`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, initial);
		background: #fff;
		min-width: 72px;
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 1px 8px 0 rgba(0, 0, 0, 0.12),
			0 3px 3px -2px rgba(0, 0, 0, 0.4);
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 0;
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
		height: 100%;
	}
	.item {
		font-size: 14px;
		padding: 0 20px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}
	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}
	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${svg}") #5881f6 no-repeat 50%;
	}
	:host([multi]) .sizer {
		padding-left: 33px;
	}
	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
		border: 2px solid #eee;
	}
`;
const styles$1 = ({ index, height, itemHeight }) => tagged`
	:host {
		min-height: ${itemHeight}px;
		height: ${height}px;
	}

	.item {
		line-height: ${itemHeight}px;
		height: ${itemHeight}px;
	}

	.item[data-index='${index || "0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`;

const oppositeDirections = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
    center: 'center',
};
const clockwiseDirections = {
    top: 'right',
    right: 'bottom',
    bottom: 'left',
    left: 'top',
    center: 'center',
};

const presets = {
    center: {
        popup: 'center',
        anchor: 'center',
    },
    // clockwise
    top: {
        popup: 'bottom-center',
        anchor: 'top-center',
    },
    right: {
        popup: 'left-center',
        anchor: 'right-center',
    },
    bottom: {
        popup: 'top-center',
        anchor: 'bottom-center',
    },
    left: {
        popup: 'right-center',
        anchor: 'left-center',
    },
    // clockwise
    'top-left': {
        popup: 'bottom-left',
        anchor: 'top-left',
    },
    'right-top': {
        popup: 'left-top',
        anchor: 'right-top',
    },
    'bottom-right': {
        popup: 'top-right',
        anchor: 'bottom-right',
    },
    'left-bottom': {
        popup: 'right-bottom',
        anchor: 'left-bottom',
    },
    // clockwise
    'top-right': {
        popup: 'bottom-right',
        anchor: 'top-right',
    },
    'right-bottom': {
        popup: 'left-bottom',
        anchor: 'right-bottom',
    },
    'bottom-left': {
        popup: 'top-left',
        anchor: 'bottom-left',
    },
    'left-top': {
        popup: 'right-top',
        anchor: 'left-top',
    },
};

class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    subtract(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
    negative() {
        return new Point(-this.x, -this.y);
    }
}
Point.Zero = new Point(0, 0);

const { max, min } = Math;
// prettier-ignore
class Rect {
    static fromBoundingClientRect(bcr) {
        var _a, _b;
        if (bcr.getBoundingClientRect) {
            bcr = bcr.getBoundingClientRect();
        }
        // @ts-ignore
        return new Rect((_a = bcr.x) !== null && _a !== void 0 ? _a : bcr.left, (_b = bcr.y) !== null && _b !== void 0 ? _b : bcr.top, bcr.width, bcr.height);
    }
    static fromRect(r) {
        var _a, _b, _c, _d;
        return new Rect((_a = r.x) !== null && _a !== void 0 ? _a : 0, (_b = r.y) !== null && _b !== void 0 ? _b : 0, (_c = r.width) !== null && _c !== void 0 ? _c : 0, (_d = r.height) !== null && _d !== void 0 ? _d : 0);
    }
    static intersect(a, b) {
        const top = max(a.top, b.top);
        const right = min(a.right, b.right);
        const bottom = min(a.bottom, b.bottom);
        const left = max(a.left, b.left);
        const width = right - left;
        const height = bottom - top;
        if (width < 0 || height < 0) {
            return null;
        }
        return new Rect(left, top, width, height);
    }
    static fromViewport() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return new Rect(0, 0, width, height);
    }
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setLocation(point) {
        this.x = point.x;
        this.y = point.y;
        return this;
    }
    contains(rect) {
        return (this.left <= rect.left &&
            this.top <= rect.top &&
            this.right >= rect.right &&
            this.bottom > rect.bottom);
    }
    translate(offset) {
        return new Rect(offset.x, offset.y, this.width, this.height);
    }
    get area() {
        return this.width * this.height;
    }
    get left() {
        return this.x;
    }
    get top() {
        return this.y;
    }
    get right() {
        return this.x + this.width;
    }
    get bottom() {
        return this.y + this.height;
    }
    get centerX() {
        return this.x + this.width / 2;
    }
    get centerY() {
        return this.y + this.height / 2;
    }
    get center() {
        return new Point(this.centerX, this.centerY);
    }
    get topLeft() {
        return new Point(this.left, this.top);
    }
    get topRight() {
        return new Point(this.right, this.top);
    }
    get topCenter() {
        return new Point(this.centerX, this.top);
    }
    get rightTop() {
        return this.topRight;
    }
    get rightBottom() {
        return new Point(this.right, this.bottom);
    }
    get rightCenter() {
        return new Point(this.right, this.centerY);
    }
    get bottomLeft() {
        return new Point(this.left, this.bottom);
    }
    get bottomRight() {
        return this.rightBottom;
    }
    get bottomCenter() {
        return new Point(this.centerX, this.bottom);
    }
    get leftTop() {
        return this.topLeft;
    }
    get leftBottom() {
        return this.bottomLeft;
    }
    get leftCenter() {
        return new Point(this.left, this.centerY);
    }
    get centerTop() {
        return this.topCenter;
    }
    get centerRight() {
        return this.rightCenter;
    }
    get centerLeft() {
        return this.leftCenter;
    }
    get centerBottom() {
        return this.bottomCenter;
    }
    get centerCenter() {
        return this.center;
    }
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        };
    }
}

const canUseDOM = typeof window === 'object' && typeof document === 'object';
const isWebkit = canUseDOM && navigator.userAgent.indexOf('AppleWebKit') > -1;
// polyfill for document.scrollingElement
// @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getDocumentScrollElement.js
const getDocumentScrollingElement = () => {
    if (!canUseDOM)
        return null;
    if (document.scrollingElement) {
        return document.scrollingElement;
    }
    return !isWebkit && document.compatMode === 'CSS1Compat'
        ? document.documentElement
        : document.body;
};
const toCamelCase = (s) => s.replace(/([-_])([a-z])/g, (s, a, b) => b.toUpperCase());
const parseCorner = (rect, placement) => {
    if (!placement || typeof placement !== 'string') {
        return null;
    }
    const point = rect[toCamelCase(placement)];
    return point instanceof Point ? point : null;
};
const parsePlacementPair = (placement) => {
    if (typeof placement === 'string') {
        return placement.split('-');
    }
    return [];
};
const joinDirection = (main, sub) => sub ? `${main}-${sub}` : main;
// 水平或垂直翻转，只需要倒转主方向；顺时针旋转两次，等同于同时倒转主次方向
// @ts-expect-error
const getOppositePlacement = (placement, all = false) => {
    if (!placement) {
        return null;
    }
    if (typeof placement === 'object') {
        return {
            // @ts-expect-error
            popup: getOppositePlacement(placement.popup, all),
            // @ts-expect-error
            anchor: getOppositePlacement(placement.anchor, all),
        };
    }
    // @ts-expect-error
    const [main, sub] = parsePlacementPair(placement);
    return joinDirection(
    // @ts-expect-error
    oppositeDirections[main], 
    // @ts-expect-error
    all ? oppositeDirections[sub] : sub);
};
// @ts-expect-error
const getClockwisePlacement = (placement) => {
    if (!placement) {
        return null;
    }
    if (typeof placement === 'object') {
        return {
            // @ts-expect-error
            popup: getClockwisePlacement(placement.popup),
            // @ts-expect-error
            anchor: getClockwisePlacement(placement.anchor),
        };
    }
    // @ts-expect-error
    const [main, sub] = parsePlacementPair(placement);
    // @ts-expect-error
    return joinDirection(clockwiseDirections[main], clockwiseDirections[sub]);
};
const getNativeScrollerOffset = (scroller) => {
    const { scrollLeft, scrollTop } = scroller;
    if (!isNaN(scrollLeft) && !isNaN(scrollTop)) {
        return new Point(scrollLeft, scrollTop);
    }
    return Point.Zero;
};
const getScrollerBoundsAndOffset = ({ fixed, offsetParent, boundary, }) => {
    if (boundary) {
        // 固定定位始终使用视口坐标
        return {
            offset: Point.Zero,
            bounds: Rect.fromRect(boundary),
        };
    }
    // 固定定位始终使用视口坐标
    if (fixed || !offsetParent) {
        return {
            offset: Point.Zero,
            bounds: Rect.fromViewport(),
        };
    }
    const nativeOffset = getNativeScrollerOffset(offsetParent);
    // 以窗口滚动的绝对定位，把坐标转换到文档顶部
    const useWindowAsScroller = offsetParent === getDocumentScrollingElement();
    if (useWindowAsScroller) {
        return {
            offset: nativeOffset.negative(),
            bounds: Rect.fromViewport().translate(nativeOffset),
        };
    }
    // 自定义的滚动容器，使用它自身坐标
    const bounds = Rect.fromBoundingClientRect(offsetParent);
    return {
        offset: bounds.topLeft.subtract(nativeOffset),
        bounds: bounds.translate(nativeOffset),
    };
};
/*
 * 箭头属于 popup，始终对齐到 anchor 的中间：
 *
 * // 边对齐，popup 宽于 anchor
 * [       ∨ ] popup
 *       [   ] anchor
 *
 * // 边对齐，popup 窄于 anchor
 * [ ∨ ]       popup
 * [         ] anchor
 *
 * // 非边对齐，popup 窄于 anchor
 *   [   ]      anchor
 * [   ∧     ]  popup
 *
 * // 非边对齐，popup 宽于 anchor
 * [   ∨     ]  popup
 *   [   ]      anchor
 *
 */
const getArrowOffset = (popupRect, anchorRect, placement) => {
    const [main] = parsePlacementPair(placement);
    if (main === 'top' || main === 'bottom') {
        const top = main === 'top' ? '100%' : 0;
        const narrowerRect = popupRect.width <= anchorRect.width ? popupRect : anchorRect;
        if (narrowerRect === popupRect) {
            return { left: '50%', top };
        }
        return {
            left: anchorRect.left - popupRect.left + narrowerRect.width / 2,
            top,
        };
    }
    else if (main === 'left' || main === 'right') {
        const left = main === 'left' ? '100%' : 0;
        const shorterRect = popupRect.height <= anchorRect.height ? popupRect : anchorRect;
        if (shorterRect === popupRect) {
            return { left, top: '50%' };
        }
        return {
            left,
            top: anchorRect.top - popupRect.top + shorterRect.height / 2,
        };
    }
    return { left: 0, top: 0 };
};

const defaults = {
    // use fixed or absolute position
    fixed: false,
    // any scroller element
    offsetParent: getDocumentScrollingElement(),
    // 'auto': adjusts horizontally or vertically, 'both': adjusts horizontally and vertically, defaults to 'none'
    adjustXY: 'none',
};
const calculatePosition = (popup, anchor, placement, options = {}) => {
    const anchorRect = Rect.fromBoundingClientRect(anchor);
    const popupRect = Rect.fromBoundingClientRect(popup).setLocation(Point.Zero);
    let corners = placement;
    if (typeof placement === 'string') {
        corners = presets[placement];
    }
    if (!corners) {
        return null;
    }
    const popupCorner = parseCorner(popupRect, corners.popup);
    const anchorCorner = parseCorner(anchorRect, corners.anchor);
    if (!popupCorner || !anchorCorner) {
        return null;
    }
    // relative to viewport
    const fixedOffset = anchorCorner.subtract(popupCorner);
    // relative to viewport
    const fixedPopupRect = popupRect.translate(fixedOffset);
    // relative to scroller
    const offset = fixedOffset.subtract(getScrollerBoundsAndOffset(options).offset);
    return {
        offset,
        placement,
        anchorRect,
        popupRect: fixedPopupRect,
        popupOffset: { left: offset.x, top: offset.y },
        arrowOffset: getArrowOffset(fixedPopupRect, anchorRect, placement),
        // compatible with v0.0.1
        left: offset.x,
        top: offset.y,
    };
};
const calculateVisibleAreaRatio = (rect, bounds) => {
    const intersectionRect = Rect.intersect(rect, bounds);
    return intersectionRect ? intersectionRect.area / rect.area : 0;
};
const findProperPosition = (popup, anchor, placements, options = {}) => {
    const { bounds } = getScrollerBoundsAndOffset(options);
    const positionInfos = [];
    for (const placement of placements) {
        const positionInfo = calculatePosition(popup, anchor, placement, options);
        if (!positionInfo) {
            continue;
        }
        // relative to scroller
        const positionedPopupRect = positionInfo.popupRect.translate(positionInfo.offset);
        if (bounds.contains(positionedPopupRect)) {
            return positionInfo;
        }
        const visibleAreaRatio = calculateVisibleAreaRatio(positionedPopupRect, bounds);
        positionInfos.push(Object.assign(positionInfo, visibleAreaRatio && { visibleAreaRatio }));
    }
    return (positionInfos
        .filter(Boolean)
        // @ts-expect-error possibly 'undefined'.
        .sort((a, b) => b.visibleAreaRatio - a.visibleAreaRatio)[0] || null);
};
const position$1 = (popup, anchor, placement, options = {}) => {
    options = Object.assign({}, defaults, options);
    if (Array.isArray(placement)) {
        return findProperPosition(popup, anchor, placement, options);
    }
    const { adjustXY } = options;
    const adjustsHorizontallyOrVertically = adjustXY === 'auto';
    const adjustsHorizontallyAndVertically = adjustXY === 'both';
    if (placement !== 'center' &&
        (adjustsHorizontallyOrVertically || adjustsHorizontallyAndVertically)) {
        let placements = [];
        if (adjustsHorizontallyOrVertically) {
            placements = [placement, getOppositePlacement(placement)];
        }
        else if (adjustsHorizontallyAndVertically) {
            const oppositePlacement = getOppositePlacement(placement, true);
            placements = [
                placement,
                oppositePlacement,
                getClockwisePlacement(placement),
                getClockwisePlacement(oppositePlacement),
            ];
        }
        return findProperPosition(popup, anchor, placements, options);
    }
    return calculatePosition(popup, anchor, placement, options);
};

/**
 * Returns all ancestor ShadowRoot elements
 * @param {HTMLElement} el The element
 * @param {HTMLElement} limit The limit to stop searching
 * @returns {ShadowRoot[]} Array of ancestor roots
 */
const ancestorRoots = (el, limit = document.body) => {
    const roots = [];
    let ancestor = el;
    while (ancestor && ancestor !== limit) {
        if (ancestor instanceof Element && ancestor.assignedSlot) {
            ancestor = ancestor.assignedSlot;
            continue;
        }
        if (ancestor instanceof ShadowRoot) {
            roots.push(ancestor);
            ancestor = ancestor.host;
            continue;
        }
        ancestor = ancestor.parentNode;
    }
    return roots;
};
/**
 * Listen to a scroll event in a ancestor root
 * @param {HTMLElement} el The element
 * @param {function} handler The event handler
 * @returns {function} Function to cleanup the event listeners
 */
const onScrolled = (el, handler) => {
    const roots = ancestorRoots(el);
    roots.forEach((r) => r.addEventListener('scroll', handler, true));
    return () => {
        roots.forEach((r) => r.removeEventListener('scroll', handler, true));
    };
};

// eslint-disable-next-line
/// <reference path="../types/position.d.ts" />
const defaultPlacement = [
    'bottom-left',
    'bottom-right',
    'bottom',
    'top-left',
    'top-right',
    'top',
];
const position = ({ host, anchor, placement = defaultPlacement, confinement, limit, }) => {
    const anchorBounds = anchor.getBoundingClientRect(), hostBounds = host.getBoundingClientRect(), { popupOffset: offset } = position$1(hostBounds, anchorBounds, placement, {
        fixed: true,
        adjustXY: 'both',
        offsetParent: confinement,
    }), { style } = host;
    style.left = offset.left + 'px';
    style.top = offset.top + 'px';
    if (limit) {
        style.minWidth = Math.max(anchorBounds.width, hostBounds.width) + 'px';
    }
};
const usePosition = ({ anchor: anchorage, host, ...thru }) => {
    useEffect(() => {
        const anchor = typeof anchorage === 'function' ? anchorage() : anchorage;
        if (anchor == null) {
            return;
        }
        let rid;
        const reposition = () => position({ host, anchor, ...thru }), ro = new ResizeObserver(reposition);
        ro.observe(host);
        ro.observe(anchor);
        const onReposition = () => {
            cancelAnimationFrame(rid);
            rid = requestAnimationFrame(reposition);
        }, offScroll = onScrolled(anchor, onReposition);
        window.addEventListener('resize', onReposition, true);
        return () => {
            ro.unobserve(host);
            ro.unobserve(anchor);
            offScroll();
            window.removeEventListener('resize', onReposition, true);
            cancelAnimationFrame(rid);
        };
    }, [anchorage, ...Object.values(thru)]);
};

const byValue = (value, valueProperty) => {
  if (!valueProperty) {
    return (item) => array(value).includes(item);
  }
  return (item) => array(value).find((value2) => value2[valueProperty] === item[valueProperty]);
};
const mark = (text, query) => {
  if (!query || !text) {
    return text;
  }
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) {
    return text;
  }
  const end = i + query.length;
  return [
    text.slice(0, i),
    x`<mark>${text.slice(i, end)}</mark>`,
    text.slice(end)
  ];
};

const useKeyboard = (handlers) => {
  const listeners = useMeta(handlers);
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.altKey || e.defaultPrevented) {
        return;
      }
      switch (e.key) {
        case "Up":
        case "ArrowUp":
          e.preventDefault();
          listeners.onUp();
          break;
        case "Down":
        case "ArrowDown":
          e.preventDefault();
          listeners.onDown();
          break;
        case "Enter":
          e.preventDefault();
          listeners.onEnter();
          break;
      }
    };
    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, [listeners]);
};

const useItems = ({ items, onSelect, defaultIndex = 0 }) => {
  const [position, setPosition] = useState({
    index: defaultIndex
  }), { index } = position, { length } = items;
  useEffect(() => {
    setPosition({ index: defaultIndex, scroll: true });
  }, [items, defaultIndex]);
  useKeyboard({
    onUp: useCallback(() => setPosition((p) => ({
      index: p.index > 0 ? p.index - 1 : length - 1,
      scroll: true
    })), [length]),
    onDown: useCallback(() => setPosition((p) => ({
      index: p.index < length - 1 ? p.index + 1 : 0,
      scroll: true
    })), [length]),
    onEnter: useCallback(() => index > -1 && index < length && onSelect?.(items[index], index), [index, items, onSelect])
  });
  return {
    position,
    highlight: useCallback((index2) => setPosition({ index: index2 }), []),
    select: useCallback((item) => onSelect?.(item), [onSelect])
  };
};

const itemRenderer = (render = identity) => (item, i, { highlight, select, textual = identity, query, isSelected }) => {
  const text = textual(item), content = mark(text, query), rendered = render(content, item, i);
  return x` <div
				class="item"
				role="option"
				part="option"
				?aria-selected=${isSelected(item)}
				data-index=${i}
				@mouseenter=${() => highlight(i)}
				@click=${() => select(item)}
				@mousedown=${(e) => e.preventDefault()}
				title=${text}
			>
				${rendered}
			</div>
			<div class="sizer" virtualizer-sizer>${rendered}</div>`;
};

const useRenderItem = ({ itemRenderer: itemRenderer$1 = itemRenderer(), ...meta }) => {
  const info = useMeta(meta);
  return useCallback((item, i) => itemRenderer$1(item, i, info), [info, itemRenderer$1]);
};

const properties = [
  "query",
  "items",
  "onSelect",
  "textual",
  "anchor",
  "confinement",
  "placement",
  "itemHeight",
  "itemLimit",
  "itemRenderer",
  "defaultIndex",
  "value",
  "valueProperty"
];
const useListbox = ({ value, valueProperty, items: _items, onSelect, defaultIndex, query, textual, itemRenderer, itemHeight = 40, itemLimit = 5, ...thru }) => {
  const isSelected = useMemo(() => byValue(value, valueProperty), [value, valueProperty]), items = useMemo(() => _items.slice(), [_items, isSelected]), { position, highlight, select } = useItems({
    items,
    onSelect,
    defaultIndex: isNaN(defaultIndex) ? void 0 : Number(defaultIndex)
  });
  usePosition({
    host: useHost(),
    ...thru,
    limit: true
  });
  return {
    position,
    items,
    height: Math.min(itemLimit, items.length) * itemHeight,
    highlight,
    select,
    itemHeight,
    renderItem: useRenderItem({
      itemRenderer,
      highlight,
      select,
      textual,
      query,
      isSelected
    })
  };
};

const Listbox = (props2) => {
  const listRef = useRef(void 0);
  const { position, items, renderItem, height, itemHeight } = useListbox(props2);
  useEffect(() => {
    if (!position.scroll)
      return;
    const vl = listRef.current?.[virtualizerRef];
    if (!vl?.["_layout"])
      return;
    vl.element(position.index)?.scrollIntoView({ block: "nearest" });
  }, [position]);
  useStyleSheet(styles$1({ ...position, height, itemHeight }));
  const layout = useMemo(() => ({
    _itemSize: { height: itemHeight - 1e-5 }
  }), [itemHeight]);
  return x`<div
		class="items"
		${n((el) => listRef.current = el)}
		style="min-height: ${height}px"
	>
		<div virtualizer-sizer></div>
		${virtualize({
    items,
    renderItem,
    scroller: true,
    layout
  })}
	</div>`;
};
const supportsPopover = () => {
  return HTMLElement.prototype.hasOwnProperty("popover");
};
const showPopover = (popover) => {
  const popoverElement = popover;
  if (supportsPopover()) {
    requestAnimationFrame(() => {
      popoverElement?.showPopover();
    });
  }
};
customElements.define("cosmoz-listbox", component(Listbox, { styleSheets: [sheet(style$1)] }));
const listbox = ({ multi, ...thru }) => {
  return x`<cosmoz-listbox
		${n(showPopover)}
		popover="manual"
		part="listbox"
		?multi=${multi}
		...=${spreadProps(props(properties)(thru))}
	></cosmoz-listbox>`;
};

var style = tagged`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}

	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}
	.spinner {
		border-radius: 50%;
		width: 22px;
		height: 22px;
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin-top: -3px;
		flex: none;
	}
`;

var styles = tagged`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin: 0px 0 2px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding: 0 4px 0 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}
	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}
	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}
	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`;

const clear = x`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`;
const Chip = ({ onClear, disabled }) => x`
	<div class="content" part="content chip-text"><slot></slot></div>
	${n$1(onClear && !disabled, () => x` <span class="clear" part="clear chip-clear" @click=${onClear}>
				${clear}
			</span>`)}
`;
customElements.define("cosmoz-autocomplete-chip", component(Chip, {
  observedAttributes: ["disabled"],
  styleSheets: [sheet(styles)]
}));
const chip = ({ content, onClear, disabled, hidden, className = "chip", slot }) => x`<cosmoz-autocomplete-chip
		class=${o(className)}
		slot=${o(slot)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${disabled}
		?hidden=${hidden}
		.onClear=${onClear}
		title=${o(typeof content === "string" ? content : void 0)}
		>${content}</cosmoz-autocomplete-chip
	>`;

const selection = ({ value: values, min = 0, onDeselect, textual, disabled }) => [
  ...values.filter(Boolean).map((value) => chip({
    content: textual(value),
    onClear: values.length > min && (() => onDeselect(value)),
    disabled,
    slot: "control"
  })),
  chip({
    content: x`<span></span>`,
    className: "badge",
    disabled: true,
    slot: "control",
    hidden: true
  })
];

const overflow = (host) => {
  const chips = host.shadowRoot.querySelectorAll(".chip");
  const badge = host.shadowRoot.querySelector(".badge");
  badge.hidden = true;
  for (const chip of chips) {
    chip.hidden = false;
  }
  const input = host.shadowRoot.querySelector("cosmoz-input");
  const limit = input.shadowRoot?.querySelector(".control")?.getBoundingClientRect();
  let i;
  for (i = 0; i < chips.length; i++) {
    const chip = chips[i];
    const bounds = chip.getBoundingClientRect();
    const isIn = bounds.x + bounds.width <= limit.x + limit.width - 24;
    if (!isIn) {
      break;
    }
  }
  const overflown = chips.length - i;
  badge.querySelector("span").textContent = "+" + overflown.toString();
  badge.hidden = overflown < 1;
  for (; i < chips.length; i++) {
    chips[i].hidden = true;
  }
};
const useOverflow = ({ value, active, wrap, limit }) => {
  const host = useHost();
  const enabled = !(wrap || limit == 1);
  const doRaf = useMemo(() => raf(() => overflow(host)), []);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (!enabled)
      return;
    const input = host.shadowRoot.querySelector("cosmoz-input");
    const observer = new ResizeObserver((e) => {
      setWidth(e[0].contentRect.width);
    });
    observer.observe(input);
    return () => observer.disconnect();
  }, [enabled]);
  useLayoutEffect(() => enabled ? doRaf() : void 0, [enabled, width, active, value]);
};

const blank = () => T;
const inputParts = ["input", "control", "label", "line", "error", "wrap"].map((part) => `${part}: input-${part}`).join();
const autocomplete = (props) => {
  const { invalid, errorMessage, label, placeholder, disabled, noLabelFloat, alwaysFloatLabel, textual, text, onText, onFocus, onClick, onDeselect, value, limit, min, showSingle, items$, values$ } = props, host = useHost(), isOne = limit == 1, isSingle = isOne && value?.[0] != null, anchor = useCallback(() => host.shadowRoot.querySelector("#input"), [host, value]), suggestions = m(items$.then((items) => n$1((!isSingle || showSingle) && items.length, () => listbox({
    ...props,
    anchor,
    items,
    multi: !isOne
  }))));
  useImperativeApi({
    focus: () => host.shadowRoot?.querySelector("#input")?.focus()
  }, []);
  return x` <cosmoz-input
				id="input"
				part="input"
				.label=${label}
				.placeholder=${isSingle ? void 0 : placeholder}
				?no-label-float=${noLabelFloat}
				?always-float-label=${value?.length > 0 || alwaysFloatLabel}
				?readonly=${isSingle}
				?disabled=${disabled}
				?invalid=${m(values$.then(() => invalid, () => true), invalid)}
				.errorMessage=${m(values$.then(() => errorMessage, (e) => e.message), errorMessage)}
				.value=${l(text)}
				@value-changed=${onText}
				@focusin=${onFocus}
				@focusout=${onFocus}
				@click=${onClick}
				autocomplete="off"
				exportparts=${inputParts}
				?data-one=${isOne}
				?data-single=${isSingle}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${selection({
    value,
    min,
    isOne,
    onDeselect,
    textual,
    disabled
  })}
				${m(values$.then(blank, blank), x`<div slot="suffix" class="spinner"></div>`)}
			</cosmoz-input>

			${suggestions}`;
}, Autocomplete$1 = (props) => {
  const thru = {
    ...props,
    ...useAutocomplete(props)
  };
  useOverflow(thru);
  return autocomplete(thru);
}, observedAttributes = [
  "disabled",
  "invalid",
  "no-label-float",
  "always-float-label",
  "text-property",
  "value-property",
  "limit",
  "min",
  "show-single",
  "preserve-order",
  "keep-opened",
  "keep-query",
  "hide-empty",
  "default-index",
  "item-height",
  "item-limit",
  "wrap"
];

const Standalone = (host) => {
  const { onChange, onText, ...props } = host;
  return Autocomplete$1({
    ...props,
    onChange: useCallback((value, ...args) => {
      host.value = value;
      onChange?.(value, ...args);
    }, [onChange]),
    onText: useCallback((text) => {
      host.text = text;
      onText?.(text);
    }, [onText])
  });
};
const styleSheets = [sheet(style)];
customElements.define("cosmoz-autocomplete-ui", component(Autocomplete$1, { observedAttributes, styleSheets }));
customElements.define("cosmoz-autocomplete", component(Standalone, { observedAttributes, styleSheets }));

const colors = [
  "Red",
  "Green",
  "Purple",
  "Blue",
  "White",
  "Brown",
  "Aqua",
  "Nothing"
].map((text) => ({ text }));

const CSS = x`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		cosmoz-autocomplete,
		cosmoz-listbox {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;
const Autocomplete = ({
  source,
  limit,
  textProperty,
  min,
  label = "",
  value = [],
  hideEmpty = false,
  disabled = false,
  placeholder = "",
  defaultIndex = 0,
  showSingle = false,
  preserveOrder = false,
  wrap = false,
  overflowed = false
}) => {
  const styles = {
    maxWidth: overflowed ? "170px" : "initial"
  };
  return x`
		${CSS}
		<cosmoz-autocomplete
			.label=${label}
			.placeholder=${placeholder}
			.source=${source}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			?hide-empty=${hideEmpty}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			style=${o$3(styles)}
		></cosmoz-autocomplete>
	`;
};
const ContourAutocomplete = ({
  source,
  limit,
  textProperty,
  min,
  label = "",
  value = [],
  hideEmpty = false,
  disabled = false,
  placeholder = "",
  defaultIndex = 0,
  showSingle = false,
  preserveOrder = false,
  wrap = false,
  overflowed = false,
  forContour = false
}) => {
  const styles = {
    maxWidth: overflowed ? "255px" : "initial"
  };
  const classes = {
    "contour-autocomplete": forContour
  };
  return x`
		${CSS}
		<style>
			.contour-autocomplete {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 4px;
				--cosmoz-input-wrap-padding: 12px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 10px;
				--cosmoz-autocomplete-chip-translate-y: 8px;
				--cosmoz-autocomplete-chip-border-radius: 4px;
			}
		</style>
		<cosmoz-autocomplete
			.label=${label}
			.placeholder=${placeholder}
			.source=${source}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			?hide-empty=${hideEmpty}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			style=${o$3(styles)}
			class="${e(classes)}"
		></cosmoz-autocomplete>
	`;
};
var cosmozAutocomplete_stories = {
  title: "Autocomplete",
  render: Autocomplete,
  argTypes: {
    label: {
      control: "text",
      description: "The label displayed on the screen"
    },
    source: {
      control: "object",
      description: "The source for the values displayed in the dropdown"
    },
    textProperty: {
      control: "text",
      description: "The object property used to select the value from the source"
    },
    value: {
      control: "object",
      description: "The actual value of the Autocomplete"
    },
    limit: { control: "number" },
    defaultIndex: {
      control: "number",
      description: "The default index of the source array"
    },
    hideEmpty: { control: "boolean" },
    disabled: {
      control: "boolean",
      description: "A boolean representing the disabled state of the Autocomplete"
    },
    placeholder: { control: "text" },
    showSingle: { control: "boolean" },
    preserveOrder: { control: "boolean" },
    min: { control: "number" },
    wrap: { control: "boolean" },
    overflowed: { control: "boolean" },
    forContour: { control: "boolean" }
  },
  parameters: {
    docs: {
      controls: {
        exclude: ["overflowed", "forContour"]
      },
      description: {
        component: "The Cosmoz Autocomplete web component"
      }
    }
  }
};
const Basic = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    value: [colors[0], colors[3]]
  },
  parameters: {
    docs: {
      description: {
        story: "The basic version"
      }
    }
  }
};
const Single = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    limit: 1,
    value: [colors[2]]
  },
  parameters: {
    docs: {
      description: {
        story: "Choose a single value"
      }
    }
  }
};
const HideEmpty = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    limit: 1,
    value: [colors[2]],
    hideEmpty: true
  },
  parameters: {
    docs: {
      description: {
        story: "Hide the empty value"
      }
    }
  }
};
const DefaultIndex = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    limit: 1,
    defaultIndex: -1
  },
  parameters: {
    docs: {
      description: {
        story: "Select a default index for the colors, in this case -1"
      }
    }
  }
};
const DefaultIndexSingleValue = {
  args: {
    label: "Choose color (single value)",
    source: colors.slice(0, 1),
    textProperty: "text",
    limit: 1,
    defaultIndex: -1
  },
  parameters: {
    docs: {
      description: {
        story: "Select a default index for the color, in this case -1"
      }
    }
  }
};
const Disabled = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    limit: 1,
    value: colors[0],
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "The disabled version"
      }
    }
  }
};
const Placeholder = {
  args: {
    placeholder: "Choose color (placeholder text)",
    source: colors,
    limit: 1,
    textProperty: "text",
    value: colors[0]
  },
  parameters: {
    docs: {
      description: {
        story: "Use the placeholder instead of the label"
      }
    }
  }
};
const Select = {
  args: {
    label: "Choose color",
    source: colors,
    limit: 1,
    textProperty: "text",
    value: colors[2],
    showSingle: true,
    preserveOrder: true,
    min: 1
  },
  parameters: {
    docs: {
      description: {
        story: "Make it act like a Select component"
      }
    }
  }
};
const Overflown = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    value: [colors[0], colors[1], colors[2]],
    overflowed: true
  },
  parameters: {
    docs: {
      description: {
        story: "Overflown variant"
      }
    }
  }
};
const Wrap = {
  args: {
    label: "Choose color",
    source: colors,
    textProperty: "text",
    value: [colors[0], colors[1], colors[2]],
    wrap: true,
    overflowed: true
  },
  parameters: {
    docs: {
      description: {
        story: "Overflown and Wrapped variant"
      }
    }
  }
};
const Contour = ContourAutocomplete.bind({});
Contour.args = {
  label: "Choose color",
  source: colors,
  textProperty: "text",
  value: [colors[0], colors[1], colors[2]],
  wrap: true,
  overflowed: true,
  forContour: true
};
Contour.parameters = {
  docs: {
    description: {
      story: "Contour and Wrapped variant"
    }
  }
};
const __namedExportsOrder = ["Basic", "Single", "HideEmpty", "DefaultIndex", "DefaultIndexSingleValue", "Disabled", "Placeholder", "Select", "Overflown", "Wrap", "Contour"];

export { Basic, Contour, DefaultIndex, DefaultIndexSingleValue, Disabled, HideEmpty, Overflown, Placeholder, Select, Single, Wrap, __namedExportsOrder, cosmozAutocomplete_stories as default };
