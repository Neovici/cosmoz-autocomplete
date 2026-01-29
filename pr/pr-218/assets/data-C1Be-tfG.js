import{E as B,r as Be,D as $n,A as vt,p as Ne,b as S,n as kn,M as An,u as st,v as mt,h as Gt,_ as Rn}from"./iframe-8UOzDvpz.js";const W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ct=e=>(...t)=>({_$litDirective$:e,values:t});let yt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const He="important",Ln=" !"+He,Tn=ct(class extends yt{constructor(e){if(super(e),e.type!==W.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const s=e[n];return s==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?n.removeProperty(s):n[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Ln);s.includes("-")||o?n.setProperty(s,o?i.slice(0,-11):i,o?He:""):n[s]=i}}return B}});function X(e,t,n){return e?t(e):n?.(e)}let At,je=0;function he(e){At=e}function de(){At=null,je=0}function On(){return je++}const Xt=Symbol("haunted.phase"),kt=Symbol("haunted.hook"),fe=Symbol("haunted.update"),pe=Symbol("haunted.commit"),it=Symbol("haunted.effects"),gt=Symbol("haunted.layoutEffects"),Jt="haunted.context";class Mn{update;host;virtual;[kt];[it];[gt];constructor(t,n){this.update=t,this.host=n,this[kt]=new Map,this[it]=[],this[gt]=[]}run(t){he(this);let n=t();return de(),n}_runEffects(t){let n=this[t];he(this);for(let s of n)s.call(this);de()}runEffects(){this._runEffects(it)}runLayoutEffects(){this._runEffects(gt)}teardown(){this[kt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const Pn=Promise.resolve().then.bind(Promise.resolve());function We(){let e=[],t;function n(){t=null;let s=e;e=[];for(var i=0,o=s.length;i<o;i++)s[i]()}return function(s){e.push(s),t==null&&(t=Pn(n))}}const Dn=We(),me=We();class Fn{renderer;host;state;[Xt];_updateQueued;_active;constructor(t,n){this.renderer=t,this.host=n,this.state=new Mn(this.update.bind(this),n),this[Xt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Dn(()=>{let t=this.handlePhase(fe);me(()=>{this.handlePhase(pe,t),me(()=>{this.handlePhase(it)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,n){switch(this[Xt]=t,t){case pe:this.commit(n),this.runEffects(gt);return;case fe:return this.render();case it:return this.runEffects(it)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const se=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},In=e=>e?.map(t=>typeof t=="string"?se(t):t),Vn=(e,...t)=>e.flatMap((n,s)=>[n,t[s]||""]).join(""),ht=Vn,Bn=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function Nn(e){class t extends Fn{frag;renderResult;constructor(i,o,r){super(i,r||o),this.frag=o}commit(i){this.renderResult=e(i,this.frag)}}function n(s,i,o){const r=(o||i||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:u}=o||i||{},h=In(s.styleSheets||u);class f extends r{_scheduler;static get observedAttributes(){return s.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new t(s,this);else{const b=this.attachShadow({mode:"open",...c});h&&(b.adoptedStyleSheets=h),this._scheduler=new t(s,b,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(b,m,v){if(m===v)return;let _=v===""?!0:v;Reflect.set(this,Bn(b),_)}}function d(p){let b=p,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return b},set(v){m&&b===v||(m=!0,b=v,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(p){return p},set(p,b,m,v){let _;return b in p?(_=Object.getOwnPropertyDescriptor(p,b),_&&_.set?(_.set.call(v,m),!0):(Reflect.set(p,b,m,v),!0)):(typeof b=="symbol"||b[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:m}:_=d(m),Object.defineProperty(v,b,_),_.set&&_.set.call(v,m),!0)}});return Object.setPrototypeOf(f.prototype,g),f}return n}class K{id;state;constructor(t,n){this.id=t,this.state=n}}function Hn(e,...t){let n=On(),s=At[kt],i=s.get(n);return i||(i=new e(n,At,...t),s.set(n,i)),i.update(...t)}function Z(e){return Hn.bind(null,e)}function Ue(e){return Z(class extends K{callback;lastValues;values;_teardown;constructor(t,n,s,i){super(t,n),e(n,this)}update(t,n){this.callback=t,this.values=n}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,n)=>this.lastValues[n]!==t)}})}function Ye(e,t){e[it].push(t)}const $=Ue(Ye),jn=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Wn=Z(class extends K{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ye(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};jn(this.state.host).dispatchEvent(new CustomEvent(Jt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:i}=t;this.value=s?i:e.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Un(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Jt,this)}disconnectedCallback(){this.removeEventListener(Jt,this)}handleEvent(s){const{detail:i}=s;i.Context===n&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let i of this.listeners)i(s)}get value(){return this._value}},Consumer:e(function({render:s}){const i=Wn(n);return s(i)},{useShadowDOM:!1}),defaultValue:t};return n}}const T=Z(class extends K{value;values;constructor(e,t,n,s){super(e,t),this.value=n(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),w=(e,t)=>T(()=>e,t);function Yn(e,t){e[gt].push(t)}const ge=Ue(Yn),J=Z(class extends K{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),qn=Z(class extends K{reducer;currentState;constructor(e,t,n,s,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Gn=/([A-Z])/gu,Xn=Z(class extends K{property;eventName;constructor(e,t,n,s){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Gn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function qe(e){return T(()=>({current:e}),[])}Z(class extends K{update(){return this.state.host}});function Kn({render:e}){const t=Nn(e),n=Un(t);return{component:t,createContext:n}}const bt=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),bt(s,t);return!0},Rt=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ge=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Jn(t)}};function Zn(e){this._$AN!==void 0?(Rt(this),this._$AM=e,Ge(this)):this._$AM=e}function Qn(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)bt(s[o],!1),Rt(s[o]);else s!=null&&(bt(s,!1),Rt(s));else bt(this,e)}const Jn=e=>{e.type==W.CHILD&&(e._$AP??=Qn,e._$AQ??=Zn)};class ie extends yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),Ge(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(bt(this,t),Rt(this))}setValue(t){if(Be(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:et}=Kn({render:$n});const I=e=>e??vt,Pt=(e,...t)=>e.flatMap((n,s)=>[n,t[s]??""]).join(""),oe=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},dt=Math.min,P=Math.max,Lt=Math.round,St=Math.floor,U=e=>({x:e,y:e}),ts={left:"right",right:"left",bottom:"top",top:"bottom"},es={start:"end",end:"start"};function be(e,t,n){return P(e,dt(t,n))}function Dt(e,t){return typeof e=="function"?e(t):e}function rt(e){return e.split("-")[0]}function Ft(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function Ke(e){return e==="y"?"height":"width"}const ns=new Set(["top","bottom"]);function Q(e){return ns.has(rt(e))?"y":"x"}function Ze(e){return Xe(Q(e))}function ss(e,t,n){n===void 0&&(n=!1);const s=Ft(e),i=Ze(e),o=Ke(i);let r=i==="x"?s===(n?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Tt(r)),[r,Tt(r)]}function is(e){const t=Tt(e);return[te(e),t,te(t)]}function te(e){return e.replace(/start|end/g,t=>es[t])}const ve=["left","right"],_e=["right","left"],os=["top","bottom"],rs=["bottom","top"];function ls(e,t,n){switch(e){case"top":case"bottom":return n?t?_e:ve:t?ve:_e;case"left":case"right":return t?os:rs;default:return[]}}function as(e,t,n,s){const i=Ft(e);let o=ls(rt(e),n==="start",s);return i&&(o=o.map(r=>r+"-"+i),t&&(o=o.concat(o.map(te)))),o}function Tt(e){return e.replace(/left|right|bottom|top/g,t=>ts[t])}function cs(e){return{top:0,right:0,bottom:0,left:0,...e}}function us(e){return typeof e!="number"?cs(e):{top:e,right:e,bottom:e,left:e}}function Ot(e){const{x:t,y:n,width:s,height:i}=e;return{width:s,height:i,top:n,left:t,right:t+s,bottom:n+i,x:t,y:n}}function ye(e,t,n){let{reference:s,floating:i}=e;const o=Q(t),r=Ze(t),l=Ke(r),a=rt(t),c=o==="y",u=s.x+s.width/2-i.width/2,h=s.y+s.height/2-i.height/2,f=s[l]/2-i[l]/2;let d;switch(a){case"top":d={x:u,y:s.y-i.height};break;case"bottom":d={x:u,y:s.y+s.height};break;case"right":d={x:s.x+s.width,y:h};break;case"left":d={x:s.x-i.width,y:h};break;default:d={x:s.x,y:s.y}}switch(Ft(t)){case"start":d[r]-=f*(n&&c?-1:1);break;case"end":d[r]+=f*(n&&c?-1:1);break}return d}async function hs(e,t){var n;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:d=0}=Dt(t,e),g=us(d),b=l[f?h==="floating"?"reference":"floating":h],m=Ot(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(b)))==null||n?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),v=h==="floating"?{x:s,y:i,width:r.floating.width,height:r.floating.height}:r.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),y=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},x=Ot(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:_,strategy:a}):v);return{top:(m.top-x.top+g.top)/y.y,bottom:(x.bottom-m.bottom+g.bottom)/y.y,left:(m.left-x.left+g.left)/y.x,right:(x.right-m.right+g.right)/y.x}}const ds=async(e,t,n)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:r}=n,l=o.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:h}=ye(c,s,a),f=s,d={},g=0;for(let b=0;b<l.length;b++){var p;const{name:m,fn:v}=l[b],{x:_,y,data:x,reset:E}=await v({x:u,y:h,initialPlacement:s,placement:f,strategy:i,middlewareData:d,rects:c,platform:{...r,detectOverflow:(p=r.detectOverflow)!=null?p:hs},elements:{reference:e,floating:t}});u=_??u,h=y??h,d={...d,[m]:{...d[m],...x}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(c=E.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):E.rects),{x:u,y:h}=ye(c,f,a)),b=-1)}return{x:u,y:h,placement:f,strategy:i,middlewareData:d}},fs=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,s;const{placement:i,middlewareData:o,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...b}=Dt(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=rt(i),v=Q(l),_=rt(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=f||(_||!p?[Tt(l)]:is(l)),E=g!=="none";!f&&E&&x.push(...as(l,p,g,y));const z=[l,...x],R=await a.detectOverflow(t,b),k=[];let A=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&k.push(R[m]),h){const L=ss(i,r,y);k.push(R[L[0]],R[L[1]])}if(A=[...A,{placement:i,overflows:k}],!k.every(L=>L<=0)){var V,G;const L=(((V=o.flip)==null?void 0:V.index)||0)+1,O=z[L];if(O&&(!(h==="alignment"?v!==Q(O):!1)||A.every(M=>Q(M.placement)===v?M.overflows[0]>0:!0)))return{data:{index:L,overflows:A},reset:{placement:O}};let nt=(G=A.filter(C=>C.overflows[0]<=0).sort((C,M)=>C.overflows[1]-M.overflows[1])[0])==null?void 0:G.placement;if(!nt)switch(d){case"bestFit":{var F;const C=(F=A.filter(M=>{if(E){const j=Q(M.placement);return j===v||j==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(j=>j>0).reduce((j,qt)=>j+qt,0)]).sort((M,j)=>M[1]-j[1])[0])==null?void 0:F[0];C&&(nt=C);break}case"initialPlacement":nt=l;break}if(i!==nt)return{reset:{placement:nt}}}return{}}}},ps=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:s,placement:i,platform:o}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:m=>{let{x:v,y:_}=m;return{x:v,y:_}}},...c}=Dt(e,t),u={x:n,y:s},h=await o.detectOverflow(t,c),f=Q(rt(i)),d=Xe(f);let g=u[d],p=u[f];if(r){const m=d==="y"?"top":"left",v=d==="y"?"bottom":"right",_=g+h[m],y=g-h[v];g=be(_,g,y)}if(l){const m=f==="y"?"top":"left",v=f==="y"?"bottom":"right",_=p+h[m],y=p-h[v];p=be(_,p,y)}const b=a.fn({...t,[d]:g,[f]:p});return{...b,data:{x:b.x-n,y:b.y-s,enabled:{[d]:r,[f]:l}}}}}},ms=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,s;const{placement:i,rects:o,platform:r,elements:l}=t,{apply:a=()=>{},...c}=Dt(e,t),u=await r.detectOverflow(t,c),h=rt(i),f=Ft(i),d=Q(i)==="y",{width:g,height:p}=o.floating;let b,m;h==="top"||h==="bottom"?(b=h,m=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=h,b=f==="end"?"top":"bottom");const v=p-u.top-u.bottom,_=g-u.left-u.right,y=dt(p-u[b],v),x=dt(g-u[m],_),E=!t.middlewareData.shift;let z=y,R=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(z=v),E&&!f){const A=P(u.left,0),V=P(u.right,0),G=P(u.top,0),F=P(u.bottom,0);d?R=g-2*(A!==0||V!==0?A+V:P(u.left,u.right)):z=p-2*(G!==0||F!==0?G+F:P(u.top,u.bottom))}await a({...t,availableWidth:R,availableHeight:z});const k=await r.getDimensions(l.floating);return g!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}};function It(){return typeof window<"u"}function pt(e){return Qe(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function q(e){var t;return(t=(Qe(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qe(e){return It()?e instanceof Node||e instanceof D(e).Node:!1}function N(e){return It()?e instanceof Element||e instanceof D(e).Element:!1}function Y(e){return It()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function we(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}const gs=new Set(["inline","contents"]);function wt(e){const{overflow:t,overflowX:n,overflowY:s,display:i}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+n)&&!gs.has(i)}const bs=new Set(["table","td","th"]);function vs(e){return bs.has(pt(e))}const _s=[":popover-open",":modal"];function Vt(e){return _s.some(t=>{try{return e.matches(t)}catch{return!1}})}const ys=["transform","translate","scale","rotate","perspective"],ws=["transform","translate","scale","rotate","perspective","filter"],xs=["paint","layout","strict","content"];function re(e){const t=le(),n=N(e)?H(e):e;return ys.some(s=>n[s]?n[s]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||ws.some(s=>(n.willChange||"").includes(s))||xs.some(s=>(n.contain||"").includes(s))}function Cs(e){let t=tt(e);for(;Y(t)&&!ft(t);){if(re(t))return t;if(Vt(t))return null;t=tt(t)}return null}function le(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Es=new Set(["html","body","#document"]);function ft(e){return Es.has(pt(e))}function H(e){return D(e).getComputedStyle(e)}function Bt(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tt(e){if(pt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||we(e)&&e.host||q(e);return we(t)?t.host:t}function Je(e){const t=tt(e);return ft(t)?e.ownerDocument?e.ownerDocument.body:e.body:Y(t)&&wt(t)?t:Je(t)}function _t(e,t,n){var s;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Je(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),r=D(i);if(o){const l=ee(r);return t.concat(r,r.visualViewport||[],wt(i)?i:[],l&&n?_t(l):[])}return t.concat(i,_t(i,[],n))}function ee(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function tn(e){const t=H(e);let n=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=Y(e),o=i?e.offsetWidth:n,r=i?e.offsetHeight:s,l=Lt(n)!==o||Lt(s)!==r;return l&&(n=o,s=r),{width:n,height:s,$:l}}function ae(e){return N(e)?e:e.contextElement}function ut(e){const t=ae(e);if(!Y(t))return U(1);const n=t.getBoundingClientRect(),{width:s,height:i,$:o}=tn(t);let r=(o?Lt(n.width):n.width)/s,l=(o?Lt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Ss=U(0);function en(e){const t=D(e);return!le()||!t.visualViewport?Ss:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zs(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==D(e)?!1:t}function lt(e,t,n,s){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ae(e);let r=U(1);t&&(s?N(s)&&(r=ut(s)):r=ut(e));const l=zs(o,n,s)?en(o):U(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,u=i.width/r.x,h=i.height/r.y;if(o){const f=D(o),d=s&&N(s)?D(s):s;let g=f,p=ee(g);for(;p&&s&&d!==g;){const b=ut(p),m=p.getBoundingClientRect(),v=H(p),_=m.left+(p.clientLeft+parseFloat(v.paddingLeft))*b.x,y=m.top+(p.clientTop+parseFloat(v.paddingTop))*b.y;a*=b.x,c*=b.y,u*=b.x,h*=b.y,a+=_,c+=y,g=D(p),p=ee(g)}}return Ot({width:u,height:h,x:a,y:c})}function Nt(e,t){const n=Bt(e).scrollLeft;return t?t.left+n:lt(q(e)).left+n}function nn(e,t){const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-Nt(e,n),i=n.top+t.scrollTop;return{x:s,y:i}}function $s(e){let{elements:t,rect:n,offsetParent:s,strategy:i}=e;const o=i==="fixed",r=q(s),l=t?Vt(t.floating):!1;if(s===r||l&&o)return n;let a={scrollLeft:0,scrollTop:0},c=U(1);const u=U(0),h=Y(s);if((h||!h&&!o)&&((pt(s)!=="body"||wt(r))&&(a=Bt(s)),Y(s))){const d=lt(s);c=ut(s),u.x=d.x+s.clientLeft,u.y=d.y+s.clientTop}const f=r&&!h&&!o?nn(r,a):U(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-a.scrollTop*c.y+u.y+f.y}}function ks(e){return Array.from(e.getClientRects())}function As(e){const t=q(e),n=Bt(e),s=e.ownerDocument.body,i=P(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=P(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-n.scrollLeft+Nt(e);const l=-n.scrollTop;return H(s).direction==="rtl"&&(r+=P(t.clientWidth,s.clientWidth)-i),{width:i,height:o,x:r,y:l}}const xe=25;function Rs(e,t){const n=D(e),s=q(e),i=n.visualViewport;let o=s.clientWidth,r=s.clientHeight,l=0,a=0;if(i){o=i.width,r=i.height;const u=le();(!u||u&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}const c=Nt(s);if(c<=0){const u=s.ownerDocument,h=u.body,f=getComputedStyle(h),d=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(s.clientWidth-h.clientWidth-d);g<=xe&&(o-=g)}else c<=xe&&(o+=c);return{width:o,height:r,x:l,y:a}}const Ls=new Set(["absolute","fixed"]);function Ts(e,t){const n=lt(e,!0,t==="fixed"),s=n.top+e.clientTop,i=n.left+e.clientLeft,o=Y(e)?ut(e):U(1),r=e.clientWidth*o.x,l=e.clientHeight*o.y,a=i*o.x,c=s*o.y;return{width:r,height:l,x:a,y:c}}function Ce(e,t,n){let s;if(t==="viewport")s=Rs(e,n);else if(t==="document")s=As(q(e));else if(N(t))s=Ts(t,n);else{const i=en(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ot(s)}function sn(e,t){const n=tt(e);return n===t||!N(n)||ft(n)?!1:H(n).position==="fixed"||sn(n,t)}function Os(e,t){const n=t.get(e);if(n)return n;let s=_t(e,[],!1).filter(l=>N(l)&&pt(l)!=="body"),i=null;const o=H(e).position==="fixed";let r=o?tt(e):e;for(;N(r)&&!ft(r);){const l=H(r),a=re(r);!a&&l.position==="fixed"&&(i=null),(o?!a&&!i:!a&&l.position==="static"&&!!i&&Ls.has(i.position)||wt(r)&&!a&&sn(e,r))?s=s.filter(u=>u!==r):i=l,r=tt(r)}return t.set(e,s),s}function Ms(e){let{element:t,boundary:n,rootBoundary:s,strategy:i}=e;const r=[...n==="clippingAncestors"?Vt(t)?[]:Os(t,this._c):[].concat(n),s],l=r[0],a=r.reduce((c,u)=>{const h=Ce(t,u,i);return c.top=P(h.top,c.top),c.right=dt(h.right,c.right),c.bottom=dt(h.bottom,c.bottom),c.left=P(h.left,c.left),c},Ce(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ps(e){const{width:t,height:n}=tn(e);return{width:t,height:n}}function Ds(e,t,n){const s=Y(t),i=q(t),o=n==="fixed",r=lt(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=U(0);function c(){a.x=Nt(i)}if(s||!s&&!o)if((pt(t)!=="body"||wt(i))&&(l=Bt(t)),s){const d=lt(t,!0,o,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else i&&c();o&&!s&&i&&c();const u=i&&!s&&!o?nn(i,l):U(0),h=r.left+l.scrollLeft-a.x-u.x,f=r.top+l.scrollTop-a.y-u.y;return{x:h,y:f,width:r.width,height:r.height}}function Kt(e){return H(e).position==="static"}function Ee(e,t){if(!Y(e)||H(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return q(e)===n&&(n=n.ownerDocument.body),n}function on(e,t){const n=D(e);if(Vt(e))return n;if(!Y(e)){let i=tt(e);for(;i&&!ft(i);){if(N(i)&&!Kt(i))return i;i=tt(i)}return n}let s=Ee(e,t);for(;s&&vs(s)&&Kt(s);)s=Ee(s,t);return s&&ft(s)&&Kt(s)&&!re(s)?n:s||Cs(e)||n}const Fs=async function(e){const t=this.getOffsetParent||on,n=this.getDimensions,s=await n(e.floating);return{reference:Ds(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Is(e){return H(e).direction==="rtl"}const Vs={convertOffsetParentRelativeRectToViewportRelativeRect:$s,getDocumentElement:q,getClippingRect:Ms,getOffsetParent:on,getElementRects:Fs,getClientRects:ks,getDimensions:Ps,getScale:ut,isElement:N,isRTL:Is};function rn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Bs(e,t){let n=null,s;const i=q(e);function o(){var l;clearTimeout(s),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const c=e.getBoundingClientRect(),{left:u,top:h,width:f,height:d}=c;if(l||t(),!f||!d)return;const g=St(h),p=St(i.clientWidth-(u+f)),b=St(i.clientHeight-(h+d)),m=St(u),_={rootMargin:-g+"px "+-p+"px "+-b+"px "+-m+"px",threshold:P(0,dt(1,a))||1};let y=!0;function x(E){const z=E[0].intersectionRatio;if(z!==a){if(!y)return r();z?r(!1,z):s=setTimeout(()=>{r(!1,1e-7)},1e3)}z===1&&!rn(c,e.getBoundingClientRect())&&r(),y=!1}try{n=new IntersectionObserver(x,{..._,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,_)}n.observe(e)}return r(!0),o}function Ns(e,t,n,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=s,c=ae(e),u=i||o?[...c?_t(c):[],..._t(t)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const h=c&&l?Bs(c,n):null;let f=-1,d=null;r&&(d=new ResizeObserver(m=>{let[v]=m;v&&v.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(t)})),n()}),c&&!a&&d.observe(c),d.observe(t));let g,p=a?lt(e):null;a&&b();function b(){const m=lt(e);p&&!rn(p,m)&&n(),p=m,g=requestAnimationFrame(b)}return n(),()=>{var m;u.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),h?.(),(m=d)==null||m.disconnect(),d=null,a&&cancelAnimationFrame(g)}}const Hs=ps,js=fs,Ws=ms,Us=(e,t,n)=>{const s=new Map,i={platform:Vs,...n},o={...i.platform,_c:s};return ds(e,t,{...i,platform:o})},ln=[js({fallbackAxisSideDirection:"start",crossAxis:!1}),Hs()],Ys=({placement:e="bottom-start",strategy:t,middleware:n=ln}={})=>{const[s,i]=J(),[o,r]=J(),[l,a]=J();return $(()=>{if(!s||!(o instanceof HTMLElement)){a(void 0);return}return Ns(s,o,()=>Us(s,o,{placement:e,strategy:t,middleware:n}).then(a))},[s,o,e,t,n]),{setReference:i,setFloating:r,styles:T(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};const Ht=ct(class extends yt{constructor(e){if(super(e),e.type!==W.PROPERTY&&e.type!==W.ATTRIBUTE&&e.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Be(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===vt)return t;const n=e.element,s=e.name;if(e.type===W.PROPERTY){if(t===n[s])return B}else if(e.type===W.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return B}else if(e.type===W.ATTRIBUTE&&n.getAttribute(s)===t+"")return B;return Ne(e),t}}),Zt=new WeakMap,xt=ct(class extends ie{render(e){return vt}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),vt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Zt.get(t);n===void 0&&(n=new WeakMap,Zt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Zt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),an=Z(class extends K{values;constructor(e,t,n,s){super(e,t),Object.assign(t.host,n),this.values=s}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),jt=Z(class extends K{update(){return this.state.host}}),qs=/([A-Z])/gu,Se=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(qs,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},cn=e=>{const t=qe(void 0),n=w(c=>t.current=c,[]),s=e.shadowRoot,i=w(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=w(c=>Se(e,"value",c.target.value),[]),r=w(c=>Se(e,"focused",c.type==="focus"),[]),l=w(()=>t.current?.focus(),[]),a=w(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return an({focus:l,validate:a},[l,a]),$(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||l())};return s.addEventListener("mousedown",c),()=>s.removeEventListener("mousedown",c)},[l]),{onChange:i,onFocus:r,onInput:o,onRef:n}},Gs=e=>T(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]),un=(e,{label:t,invalid:n,errorMessage:s})=>S`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${X(t,()=>S`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${X(n&&s,()=>S`<div class="error" part="error">${s}</div>`)}
	`,hn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Xs=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",ze=Pt`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,dn=Pt`
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
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
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

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
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

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
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
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
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

	:host(:focus-within) {
		${ze}
	}
	@container style(--focused: focused) {
		${ze}
	}
`,Ks=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...hn],Zs=e=>{const{type:t="text",pattern:n,allowedPattern:s,autocomplete:i,value:o,readonly:r,disabled:l,min:a,max:c,step:u,maxlength:h}=e,{onChange:f,onFocus:d,onInput:g,onRef:p}=cn(e),b=Gs(s);return un(S`
			<input
				${xt(p)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${I(n)}
				autocomplete=${I(i)}
				placeholder=${Xs(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Ht(o??"")}
				maxlength=${I(h)}
				@beforeinput=${b}
				@input=${g}
				@change=${f}
				@focus=${d}
				@blur=${d}
				min=${I(a)}
				max=${I(c)}
				step=${I(u)}
			/>
		`,e)};customElements.define("cosmoz-input",et(Zs,{observedAttributes:Ks,styleSheets:[se(dn)]}));const $e=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Qs=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",s=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=s,e.setAttribute("rows",n)}},Js=e=>{const{value:t,maxRows:n}=e,s=T(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Qs(s(),n),[n,s]),$(()=>$e(s()),[s,t]),$(()=>{const i=s(),o=new ResizeObserver(()=>requestAnimationFrame(()=>$e(i)));return o.observe(i),()=>o.unobserve(i)},[s])},ti=["rows","placeholder",...hn],ei=e=>{const{autocomplete:t,value:n,placeholder:s,readonly:i,disabled:o,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:u,onInput:h,onRef:f}=cn(e);return Js(e),un(S`
			<textarea id="input" part="input"
				${xt(f)}
				autocomplete=${I(t)}
				placeholder=${s||" "}
				rows=${r??1} cols=${I(l)}
				?readonly=${i} ?aria-disabled=${o} ?disabled=${o}
				.value=${Ht(n??"")} maxlength=${I(a)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",et(ei,{observedAttributes:ti,styleSheets:[se(dn)]}));const ni=e=>{const{label:t,value:n,disabled:s,error:i}=e,o=w(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return S`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Ht(!!n)}
			?disabled=${s}
			@change=${o}
		/>
		${X(t,()=>S`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${X(i,r=>S`<div class="failure">${r}</div>`)} `},si=ht`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,ii=ht`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",et(ni,{styleSheets:[ii,si],observedAttributes:["disabled"]}));class oi{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ri{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ke=e=>!kn(e)&&typeof e.then=="function",Ae=1073741823;let li=class extends ie{constructor(){super(...arguments),this._$Cwt=Ae,this._$Cbt=[],this._$CK=new oi(this),this._$CX=new ri}render(...t){return t.find(n=>!ke(n))??B}update(t,n){const s=this._$Cbt;let i=s.length;this._$Cbt=n;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!ke(a))return this._$Cwt=l,a;l<i&&a===s[l]||(this._$Cwt=Ae,i=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const h=u._$Cbt.indexOf(a);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Re=ct(li);const Le=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},ai=ct(class extends yt{constructor(e){if(super(e),e.type!==W.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],o=[];let r=0;for(const l of e)i[r]=s?s(l,r):r,o[r]=n(l,r),r++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=An(e),{values:o,keys:r}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=r,o;const l=this.ut??=[],a=[];let c,u,h=0,f=i.length-1,d=0,g=o.length-1;for(;h<=f&&d<=g;)if(i[h]===null)h++;else if(i[f]===null)f--;else if(l[h]===r[d])a[d]=st(i[h],o[d]),h++,d++;else if(l[f]===r[g])a[g]=st(i[f],o[g]),f--,g--;else if(l[h]===r[g])a[g]=st(i[h],o[g]),mt(e,a[g+1],i[h]),h++,g--;else if(l[f]===r[d])a[d]=st(i[f],o[d]),mt(e,i[h],i[f]),f--,d++;else if(c===void 0&&(c=Le(r,d,g),u=Le(l,h,f)),c.has(l[h]))if(c.has(l[f])){const p=u.get(r[d]),b=p!==void 0?i[p]:null;if(b===null){const m=mt(e,i[h]);st(m,o[d]),a[d]=m}else a[d]=st(b,o[d]),mt(e,i[h],b),i[p]=null;d++}else Gt(i[f]),f--;else Gt(i[h]),h++;for(;d<=g;){const p=mt(e,a[g+1]);st(p,o[d]),a[d++]=p}for(;h<=f;){const p=i[h++];p!==null&&Gt(p)}return this.ut=r,Ne(e,a),B}});class Wt extends Event{constructor(t){super(Wt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Wt.eventName="rangeChanged";class Ut extends Event{constructor(t){super(Ut.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ut.eventName="visibilityChanged";class Yt extends Event{constructor(){super(Yt.eventName,{bubbles:!1})}}Yt.eventName="unpinned";class ci{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ui extends ci{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const s=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(s)}scrollBy(t,n){const s=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,s=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=s):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:s}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,s){return this._scrollTo(t,n,s),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:s,left:i}=this._destination;s=Math.min(s||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const o=Math.abs(s-t),r=Math.abs(i-n);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Te=typeof window<"u"?window.ResizeObserver:void 0;const ne=Symbol("virtualizerRef"),zt="virtualizer-sizer";let Oe;class hi{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Te(()=>this._hostElementSizeChanged()),this._childrenRO=new Te(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[ne]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=pi(this._hostElement,t),this._scrollerController=new ui(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${zt}]`);n||(n=document.createElement("div"),n.setAttribute(zt,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(zt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||Oe;if(typeof n=="function"&&this._layout instanceof n){const s={...t};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(t){let n,s;if(typeof t.type=="function"){s=t.type;const i={...t};delete i.type,n=i}else n=t;s===void 0&&(Oe=s=(await Rn(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(i=>this._handleLayoutMessage(i),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:i}}return null}_measureChildren(){const t={},n=this._children,s=this._measureChildOverride||this._measureChild;for(let i=0;i<n.length;i++){const o=n[i],r=this._first+i;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[r]=s.call(this,o,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:s}=t.getBoundingClientRect();return Object.assign({width:n,height:s},di(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Yt)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(zt)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,s=this._layout;if(t&&n&&s){let i,o,r,l;const a=t.getBoundingClientRect();i=0,o=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(m=>m.getBoundingClientRect());c.unshift(a);for(const m of c)i=Math.max(i,m.top),o=Math.max(o,m.left),r=Math.min(r,m.bottom),l=Math.min(l,m.right);const u=n.getBoundingClientRect(),h={left:a.left-u.left,top:a.top-u.top},f={width:n.scrollWidth,height:n.scrollHeight},d=i-a.top+t.scrollTop,g=o-a.left+t.scrollLeft,p=Math.max(0,r-i),b=Math.max(0,l-o);s.viewportSize={width:b,height:p},s.viewportScroll={top:d,left:g},s.totalScrollSize=f,s.offsetWithinScroller=h}}_sizeHostElement(t){const s=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${i}px)`;else{const o=this._hostElement.style;o.minWidth=s?`${s}px`:"100%",o.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:s,width:i,height:o,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${n}px)`,i!==void 0&&(c.style.width=i+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:n,_last:s,_firstVisible:i,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:s,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-s,left:n-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:s}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Wt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ut({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function di(e){const t=window.getComputedStyle(e);return{marginTop:$t(t.marginTop),marginRight:$t(t.marginRight),marginBottom:$t(t.marginBottom),marginLeft:$t(t.marginLeft)}}function $t(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function Me(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function fi(e,t=!1){const n=[];let s=t?e:Me(e);for(;s!==null;)n.push(s),s=Me(s);return n}function pi(e,t=!1){let n=!1;return fi(e,t).filter(s=>{if(n)return!1;const i=getComputedStyle(s);return n=i.position==="fixed",i.overflow!=="visible"})}const mi=e=>e,gi=(e,t)=>S`${t}: ${JSON.stringify(e,null,2)}`;class bi extends ie{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,s)=>gi(n,s+this._first),this._keyFunction=(n,s)=>mi(n,s+this._first),this._items=[],t.type!==W.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)n.push(this._items[s]);return ai(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const s=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),s?B:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:s}=t;n&&(this._renderItem=(i,o)=>n(i,o+this._first)),s&&(this._keyFunction=(i,o)=>s(i,o+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:i,items:o}=n;this._virtualizer=new hi({hostElement:t,layout:s,scroller:i}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,n){const s=t.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(s,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const vi=ct(bi),_i=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},yi=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(s=>n.includes(s)?[]:[[s,void 0]]))};class wi extends yt{_props;render(t){return B}update(t,[n]){return this._props!==n&&Object.assign(t.element,yi(this._props,n),this._props=n),B}}const xi=ct(wi);function Ci(e){return()=>e}const Ei=Ci(),Si=Ei,Mt=e=>e,_o=(e,...t)=>typeof e=="function"?e(...t):e,zi=e=>{const t=jt(),n=T(()=>new CSSStyleSheet,[]);$(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),$(()=>{n.replaceSync(e)},[e])};function fn(e){return e?t=>t?.[e]:Mt}const $i=e=>{const t=fn(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},ki=e=>t=>{const n={};for(const s in t)e.includes(s)&&(n[s]=t[s]);return n},Ai="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Ri=ht`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
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
		background: url("${Ai}") #5881f6 no-repeat 50%;
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
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Li=({index:e,itemHeight:t,auto:n})=>ht`
	${X(!n,()=>ht`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}

	.item[data-index='${e||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Ti=e=>{const t=e==="auto",[n,s]=J(t?40:e);return[n,i=>t?s(i):void 0]},Ct=e=>{const t=T(()=>({}),[]);return T(()=>Object.assign(t,e),[t,...Object.values(e)])},Oi=e=>{const t=Ct(e);$(()=>{const n=s=>{if(!(s.ctrlKey&&s.altKey||s.defaultPrevented))switch(s.key){case"Up":case"ArrowUp":s.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":s.preventDefault(),t.onDown();break;case"Enter":s.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t])},Mi=({items:e,onSelect:t,defaultIndex:n=0})=>{const[s,i]=J({index:n}),{index:o}=s,{length:r}=e;return $(()=>{i({index:s.index<0?n:Math.min(s.index,e.length-1),scroll:!0})},[e,n]),Oi({onUp:w(()=>i(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:w(()=>i(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:w(()=>o>-1&&o<r&&t?.(e[o],o),[o,e,t])}),{position:s,highlight:w(l=>i({index:l}),[]),select:w(l=>t?.(l),[t])}},Pi=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function at(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Pi(e)?Array.from(e):[e]}const Qt=(e,t=Mt)=>n=>{const s=at(e).map(t);return at(n).filter(i=>!s.includes(t(i)))},Di=(e,t)=>t?n=>at(e).find(s=>s[t]===n[t]):n=>at(e).includes(n),Fi=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const s=n+t.length;return[e.slice(0,n),S`<mark>${e.slice(n,s)}</mark>`,e.slice(s)]},Ii=(e=Mt)=>(t,n,{highlight:s,select:i,textual:o=Mt,query:r,isSelected:l})=>{const a=o(t),c=Fi(a,r),u=e(c,t,n);return S`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${n}
				@mouseenter=${()=>s(n)}
				@click=${()=>i(t)}
				@mousedown=${h=>h.preventDefault()}
				title=${a}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Vi=({itemRenderer:e=Ii(),...t})=>{const n=Ct(t);return w((s,i)=>e(s,i,n),[n,e])},Bi=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Ni=({value:e,valueProperty:t,items:n,onSelect:s,defaultIndex:i,query:o,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const u=T(()=>Di(e,t),[e,t]),h=T(()=>n.slice(),[n,u]),{position:f,highlight:d,select:g}=Mi({items:h,onSelect:s,defaultIndex:isNaN(i)?void 0:Number(i)}),[p,b]=Ti(a);return{position:f,items:h,height:Math.min(c,h.length)*p,highlight:d,select:g,itemHeight:p,setItemHeight:b,renderItem:Vi({itemRenderer:l,items:h,position:f,highlight:d,select:g,textual:r,query:o,isSelected:u})}},Pe=Si,Hi=e=>{const t=qe(void 0),{position:n,items:s,renderItem:i,height:o,itemHeight:r,setItemHeight:l}=Ni(e);return $(()=>{const a=t.current?.[ne];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=a._layout._metricsCache;return l(c+u*2)},Pe)},[s]),$(()=>{if(!n.scroll)return;const a=t.current?.[ne];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),Pe);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),zi(Li({...n,itemHeight:r,auto:e.itemHeight==="auto"})),S`<div
			class="items"
			style="min-height: ${o}px"
			${xt(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${vi({items:s,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",_i(et(Hi,{styleSheets:[oe(Ri)]})));const ji=({multi:e,setFloating:t,styles:n,...s},i)=>S`<cosmoz-listbox
		style="${Tn(n)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${xt(t)}
		...=${xi(ki(Bi)(s))}
		>${i}</cosmoz-listbox
	>`,Wi=Pt`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
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
		margin-right: -4px;
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
`,Ui=S`
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
`,Yi=({onClear:e,disabled:t})=>S`
	<div class="content" part="content chip-text"><slot></slot></div>
	${X(e&&!t,()=>S`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${Ui}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",et(Yi,{observedAttributes:["disabled"],styleSheets:[oe(Wi)]}));const qi=({content:e,onClear:t,disabled:n,hidden:s,className:i="chip",slot:o})=>S`<cosmoz-autocomplete-chip
		class=${I(i)}
		slot=${I(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${s}
		.onClear=${t}
		title=${I(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,Gi=({value:e,min:t=0,onDeselect:n,textual:s,disabled:i,chipRenderer:o=qi})=>[...e.filter(Boolean).map(r=>o({item:r,content:s(r),onClear:e.length>t&&(()=>n(r)),disabled:i,slot:"control"})),o({item:null,content:S`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Xi=ht`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",et(()=>vt,{styleSheets:[Xi]}));const Ki=Pt`
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

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,De=e=>e.matches(":focus-within"),Zi=({disabled:e,onFocus:t})=>{const[n,s]=J(),{focused:i,closed:o}=n||{},r=i&&!e,l=Ct({closed:o,onFocus:t}),a=w(u=>s(h=>({...h,closed:u})),[]),c=w(u=>{const h=u.currentTarget;return De(h)?s(f=>({focused:!0,closed:!f?.closed})):h.focus()},[]);return $(()=>{if(!r)return;const u=h=>{if(h.defaultPrevented)return;const{closed:f}=l;h.key==="Escape"&&!f?(h.preventDefault(),a(!0)):["ArrowUp","Up"].includes(h.key)&&f&&(h.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!o,setClosed:a,onToggle:c,onFocus:w(u=>{const h=De(u.currentTarget);s({focused:h}),l.onFocus?.(h)},[l])}},ce=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...i)=>Object.assign(t(...i),n),n)},Fe=e=>e.type||e.toString(),Ie=e=>Array.isArray(e)?e:[e],Qi=(e,t)=>{const n=Ie(t),s=(n.every(Array.isArray)?n:[n]).map(([i,o])=>({actions:Ie(i).map(Fe),handle:o}));return(i=e,o)=>{const r=s.find(l=>l.actions.includes(Fe(o)));return r?r.handle(i,o):i}},ot={pending:"pending",rejected:"rejected",resolved:"resolved"},pn={error:void 0,result:void 0,state:ot.pending},mn=ce(ot.pending),gn=ce(ot.resolved,e=>({result:e})),bn=ce(ot.rejected,e=>({error:e})),Ji=Qi(pn,[[mn,()=>({error:void 0,result:void 0,state:ot.pending})],[gn,(e,{result:t})=>({error:void 0,result:t,state:ot.resolved})],[bn,(e,{error:t})=>({error:t,result:void 0,state:ot.rejected})]]),to=e=>{const[{error:t,result:n,state:s},i]=qn(Ji,pn);return $(()=>{if(!e)return;let o=!1;return i(mn()),e.then(r=>!o&&i(gn(r)),r=>!o&&i(bn(r))),()=>{o=!0}},[e]),[n,t,s]},eo=({focused:e,empty:t,...n})=>{const s=e&&t&&n.limit!==1,i=Ct(n);$(()=>{if(!s)return;const o=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=at(i.value),c=i.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return i.onChange(a.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[s,i])},Ve=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),no=(e,t,n)=>{if(!t)return e;const s=Ve(t.toLowerCase()),i=[];for(const o of e){const l=Ve(n(o).toLowerCase()).indexOf(s);l<0||i.push({item:o,index:l})}return i.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},so=e=>e===!1||e==null?[]:e,vn=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),io=(e,t,n)=>w(s=>{t?.(s),vn(e,n,s)},[t]),oo=[],ro=e=>(...t)=>{let n;const s=()=>{n&&cancelAnimationFrame(n)};return s(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),s},lo=({value:e,text:t,onChange:n,onText:s,onSelect:i,limit:o,min:r,source:l,textProperty:a,textual:c,valueProperty:u,keepOpened:h,keepQuery:f,preserveOrder:d,defaultIndex:g,externalSearch:p,...b})=>{const m=T(()=>(c??$i)(a),[c,a]),{active:v,focused:_,onFocus:y,setClosed:x}=Zi(b),E=!t,z=T(()=>t?.trim(),[t]),R=jt(),k=io(R,s,"text"),A=w(C=>{n?.(C,()=>x(!0)),vn(R,"value",C)},[n]),[V,G]=J([]),F=T(()=>Promise.resolve(typeof l=="function"?l({query:z,active:v}):l).then(so),[l,v,z]),L=T(()=>at(e),[e]);$(()=>F.then(G),[F]),eo({focused:_,empty:E,limit:o,value:L,onChange:A,onText:k}),$(()=>{!_&&!f&&k("")},[_,f]);const O=Ct({onText:k,onChange:A,value:L,limit:o,min:r,keepQuery:f,keepOpened:h,setClosed:x,onSelect:i}),[,,nt]=to(F);return{active:v,query:z,textual:m,value:L,source$:F,loading:nt==="pending",items:T(()=>{if(!v)return oo;const C=d?V:[...L,...Qt(L,fn(u))(V)];return p?C:no(C,z,m)},[V,v,z,m,E,L,d,u,p]),onClick:w(()=>x(!1),[]),onFocus:y,onText:w(C=>{k(C.target.value),x(!1)},[k,t,x]),onSelect:w(C=>{O.onSelect?.(C,O);const{onChange:M,onText:j,limit:qt,min:xn,value:Cn,keepQuery:En,keepOpened:Sn,setClosed:zn}=O;En||j(""),Sn||zn(!0);const Et=at(Cn),ue=Et.includes(C);ue&&Et.length===xn||M((ue?Qt(C)(Et):[...Et,C]).slice(-qt))},[O]),onDeselect:w(C=>O.onChange(Qt(C)(O.value)),[O]),defaultIndex:z!==void 0&&z?.length>0?0:g}},ao=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of t)l.hidden=!1;const i=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<t.length;o++){const a=t[o].getBoundingClientRect();if(!(a.x+a.width<=i.x+i.width-24))break}const r=t.length-o;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;o<t.length;o++)t[o].hidden=!0},co=({value:e,active:t,wrap:n,limit:s})=>{const i=jt(),o=!(n||s==1),r=T(()=>ro(()=>ao(i)),[]),[l,a]=J(0);ge(()=>{if(!o)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{a(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),ge(()=>o?r():void 0,[o,l,t,e])},uo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),ho=[Ws({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...ln],fo=({active:e,isSingle:t,showSingle:n})=>e?!(t&&!n):!1,po=e=>{const{active:t,invalid:n,errorMessage:s,label:i,placeholder:o,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:u,onText:h,onFocus:f,onClick:d,onDeselect:g,value:p,limit:b,min:m,showSingle:v,items:_,source$:y,placement:x,loading:E,chipRenderer:z}=e,R=jt(),k=b==1,A=k&&p?.[0]!=null,{styles:V,setReference:G,setFloating:F}=Ys({placement:x,middleware:ho});$(()=>(R.addEventListener("focusin",f),R.addEventListener("focusout",f),()=>{R.removeEventListener("focusin",f),R.removeEventListener("focusout",f)}),[f]),an({focus:()=>R.shadowRoot?.querySelector("#input")?.focus()},[]);const L=E||_.length>0||u!=null&&u.length>0;return S`<cosmoz-input
				id="input"
				part="input"
				${xt(G)}
				.label=${i}
				.placeholder=${A?void 0:o}
				?no-label-float=${l}
				?always-float-label=${p?.length>0||a}
				?readonly=${A}
				?disabled=${r}
				?invalid=${Re(y.then(()=>n,()=>!0),n)}
				.errorMessage=${Re(y.then(()=>s,O=>O.message),s)}
				.value=${Ht(u)}
				@value-changed=${h}
				@click=${d}
				autocomplete="off"
				exportparts=${uo}
				?data-one=${k}
				?data-single=${A}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Gi({value:p,min:m,onDeselect:g,textual:c,disabled:r,chipRenderer:z})}
			</cosmoz-input>

			${X(fo({active:t,isSingle:A,showSingle:v}),()=>ji({...e,items:_,multi:!k,setFloating:F,styles:{...V,display:L?void 0:"none"}},X(E,()=>S`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>X(u!=null&&u.length>0&&_.length===0,()=>S`<slot name="no-result">
											<p class="no-result">No results found</p>
										</slot>`))))}`},_n=e=>{const t={...e,...lo(e)};return co(t),po(t)},yn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],mo=e=>{const{onChange:t,onText:n,...s}=e,[i,o]=Xn("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),_n({...s,value:i,onChange:w((r,...l)=>{o(r),t?.(r,...l)},[t]),onText:w(r=>{e.text=r,n?.(r)},[n])})},wn=[oe(Ki)];customElements.define("cosmoz-autocomplete-ui",et(_n,{observedAttributes:yn,styleSheets:wn}));customElements.define("cosmoz-autocomplete",et(mo,{observedAttributes:yn,styleSheets:wn}));const yo=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(e=>({text:e}));export{_n as A,w as a,et as b,ht as c,T as d,I as e,yo as f,Tn as g,_o as i,X as n,yn as o,Ki as s,Xn as u};
