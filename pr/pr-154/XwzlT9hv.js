System.register(["./03zK6_p3.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,l,u,p,f,d,h,m,g,v,y,b,w,x,O,C,T,k,E,R;return{setters:[function(e){t=e.d,r=e.Z,n=e.i,o=e._,i=e.g,a=e.j,s=e.e,c=e.c,l=e.W,u=e.J,p=e.t,f=e.k,d=e.m,h=e.l,m=e.o,g=e.p,v=e.q,y=e.s,b=e.u,w=e.v,x=e.w,O=e.x,C=e.y,T=e.z,k=e.B,E=e.C,R=e.E}],execute:function(){function P(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){return e instanceof S(e).Element||e instanceof Element}function H(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function A(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}var L={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];H(o)&&P(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});H(n)&&P(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function M(e){return e.split("-")[0]}var D=Math.max,W=Math.min,B=Math.round;function V(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function U(){return!/^((?!chrome|android).)*safari/i.test(V())}function F(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&H(e)&&(o=e.offsetWidth>0&&B(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&B(n.height)/e.offsetHeight||1);var a=(j(e)?S(e):window).visualViewport,s=!U()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/o,l=(n.top+(s&&a?a.offsetTop:0))/i,u=n.width/o,p=n.height/i;return{width:u,height:p,top:l,right:c+u,bottom:l+p,left:c,x:c,y:l}}function N(e){var t=F(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function q(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&A(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function X(e){return S(e).getComputedStyle(e)}function Y(e){return["table","td","th"].indexOf(P(e))>=0}function I(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(A(e)?e.host:null)||I(e)}function _(e){return H(e)&&"fixed"!==X(e).position?e.offsetParent:null}function J(e){for(var t=S(e),r=_(e);r&&Y(r)&&"static"===X(r).position;)r=_(r);return r&&("html"===P(r)||"body"===P(r)&&"static"===X(r).position)?t:r||function(e){var t=/firefox/i.test(V());if(/Trident/i.test(V())&&H(e)&&"fixed"===X(e).position)return null;var r=z(e);for(A(r)&&(r=r.host);H(r)&&["html","body"].indexOf(P(r))<0;){var n=X(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e,t,r){return D(e,W(t,r))}function G(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function K(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=M(r.placement),c=Z(s),l=[m,g].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return G("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:K(e,C))}(o.padding,r),p=N(i),f="y"===c?h:m,d="y"===c?y:g,v=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],b=a[c]-r.rects.reference[c],w=J(i),x=w?"y"===c?w.clientHeight||0:w.clientWidth||0:0,O=v/2-b/2,T=u[f],k=x-p[l]-u[d],E=x/2-p[l]/2+O,R=$(T,E,k),P=c;r.modifiersData[n]=((t={})[P]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&q(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,p=e.isFixed,f=a.x,d=void 0===f?0:f,b=a.y,w=void 0===b?0:b,x="function"==typeof u?u({x:d,y:w}):{x:d,y:w};d=x.x,w=x.y;var O=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),T=m,k=h,E=window;if(l){var R=J(r),P="clientHeight",j="clientWidth";R===S(r)&&"static"!==X(R=I(r)).position&&"absolute"===s&&(P="scrollHeight",j="scrollWidth"),(o===h||(o===m||o===g)&&i===v)&&(k=y,w-=(p&&R===E&&E.visualViewport?E.visualViewport.height:R[P])-n.height,w*=c?1:-1),o!==m&&(o!==h&&o!==y||i!==v)||(T=g,d-=(p&&R===E&&E.visualViewport?E.visualViewport.width:R[j])-n.width,d*=c?1:-1)}var H,A=Object.assign({position:s},l&&te),L=!0===u?function(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:B(r*o)/o||0,y:B(n*o)/o||0}}({x:d,y:w},S(r)):{x:d,y:w};return d=L.x,w=L.y,c?Object.assign({},A,((H={})[k]=C?"0":"",H[T]=O?"0":"",H.transform=(E.devicePixelRatio||1)<=1?"translate("+d+"px, "+w+"px)":"translate3d("+d+"px, "+w+"px, 0)",H)):Object.assign({},A,((t={})[k]=C?w+"px":"",t[T]=O?d+"px":"",t.transform="",t))}var ne={passive:!0},oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function ce(e){var t=S(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return F(I(e)).left+ce(e).scrollLeft}function ue(e){var t=X(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function pe(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:H(e)&&ue(e)?e:pe(z(e))}function fe(e,t){var r;void 0===t&&(t=[]);var n=pe(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=S(n),a=o?[i].concat(i.visualViewport||[],ue(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(fe(z(a)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t,r){return t===E?de(function(e,t){var r=S(e),n=I(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var l=U();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+le(e),y:c}}(e,r)):j(t)?function(e,t){var r=F(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):de(function(e){var t,r=I(e),n=ce(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=D(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=D(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+le(e),c=-n.scrollTop;return"rtl"===X(o||r).direction&&(s+=D(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(I(e)))}function me(e,t,r,n){var o="clippingParents"===t?function(e){var t=fe(z(e)),r=["absolute","fixed"].indexOf(X(e).position)>=0&&H(e)?J(e):e;return j(r)?t.filter((function(e){return j(e)&&q(e,r)&&"body"!==P(e)})):[]}(e):[].concat(t),i=[].concat(o,[r]),a=i[0],s=i.reduce((function(t,r){var o=he(e,r,n);return t.top=D(o.top,t.top),t.right=W(o.right,t.right),t.bottom=W(o.bottom,t.bottom),t.left=D(o.left,t.left),t}),he(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ge(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?M(o):null,a=o?ee(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case h:t={x:s,y:r.y-n.height};break;case y:t={x:s,y:r.y+r.height};break;case g:t={x:r.x+r.width,y:c};break;case m:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?Z(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case b:t[l]=t[l]-(r[u]/2-n[u]/2);break;case v:t[l]=t[l]+(r[u]/2-n[u]/2)}}return t}function ve(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.strategy,a=void 0===i?e.strategy:i,s=r.boundary,c=void 0===s?R:s,l=r.rootBoundary,u=void 0===l?E:l,p=r.elementContext,f=void 0===p?w:p,d=r.altBoundary,m=void 0!==d&&d,v=r.padding,b=void 0===v?0:v,x=G("number"!=typeof b?b:K(b,C)),O=f===w?T:w,k=e.rects.popper,P=e.elements[m?O:f],S=me(j(P)?P:P.contextElement||I(e.elements.popper),c,u,a),H=F(e.elements.reference),A=ge({reference:H,element:k,strategy:"absolute",placement:o}),L=de(Object.assign({},k,A)),M=f===w?L:H,D={top:S.top-M.top+x.top,bottom:M.bottom-S.bottom+x.bottom,left:S.left-M.left+x.left,right:M.right-S.right+x.right},W=e.modifiersData.offset;if(f===w&&W){var B=W[o];Object.keys(D).forEach((function(e){var t=[g,y].indexOf(e)>=0?1:-1,r=[h,y].indexOf(e)>=0?"y":"x";D[e]+=B[r]*t}))}return D}var ye={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,u=r.boundary,p=r.rootBoundary,f=r.altBoundary,d=r.flipVariations,v=void 0===d||d,w=r.allowedAutoPlacements,T=t.options.placement,E=M(T),R=c||(E!==T&&v?function(e){if(M(e)===x)return[];var t=ie(e);return[se(e),t,se(t)]}(T):[ie(T)]),P=[T].concat(R).reduce((function(e,r){return e.concat(M(r)===x?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?O:c,u=ee(n),p=u?s?k:k.filter((function(e){return ee(e)===u})):C,f=p.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=p);var d=f.reduce((function(t,r){return t[r]=ve(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[M(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:p,padding:l,flipVariations:v,allowedAutoPlacements:w}):r)}),[]),S=t.rects.reference,j=t.rects.popper,H=new Map,A=!0,L=P[0],D=0;D<P.length;D++){var W=P[D],B=M(W),V=ee(W)===b,U=[h,y].indexOf(B)>=0,F=U?"width":"height",N=ve(t,{placement:W,boundary:u,rootBoundary:p,altBoundary:f,padding:l}),q=U?V?g:m:V?y:h;S[F]>j[F]&&(q=ie(q));var X=ie(q),Y=[];if(i&&Y.push(N[B]<=0),s&&Y.push(N[q]<=0,N[X]<=0),Y.every((function(e){return e}))){L=W,A=!1;break}H.set(W,Y)}if(A)for(var I=function(e){var t=P.find((function(t){var r=H.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},z=v?3:1;z>0&&"break"!==I(z);z--);t.placement!==L&&(t.modifiersData[n]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function be(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function we(e){return[h,g,y,m].some((function(t){return e[t]>=0}))}var xe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=O.reduce((function(e,r){return e[r]=function(e,t,r){var n=M(e),o=[m,h].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[m,g].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},Oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,u=r.altBoundary,p=r.padding,f=r.tether,d=void 0===f||f,v=r.tetherOffset,w=void 0===v?0:v,x=ve(t,{boundary:c,rootBoundary:l,padding:p,altBoundary:u}),O=M(t.placement),C=ee(t.placement),T=!C,k=Z(O),E="x"===k?"y":"x",R=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,j="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,H="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(R){if(i){var B,V="y"===k?h:m,U="y"===k?y:g,F="y"===k?"height":"width",q=R[k],X=q+x[V],Y=q-x[U],I=d?-S[F]/2:0,z=C===b?P[F]:S[F],_=C===b?-S[F]:-P[F],G=t.elements.arrow,K=d&&G?N(G):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=Q[V],re=Q[U],ne=$(0,P[F],K[F]),oe=T?P[F]/2-I-ne-te-H.mainAxis:z-ne-te-H.mainAxis,ie=T?-P[F]/2+I+ne+re+H.mainAxis:_+ne+re+H.mainAxis,ae=t.elements.arrow&&J(t.elements.arrow),se=ae?"y"===k?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(B=null==A?void 0:A[k])?B:0,le=q+ie-ce,ue=$(d?W(X,q+oe-ce-se):X,q,d?D(Y,le):Y);R[k]=ue,L[k]=ue-q}if(s){var pe,fe="x"===k?h:m,de="x"===k?y:g,he=R[E],me="y"===E?"height":"width",ge=he+x[fe],ye=he-x[de],be=-1!==[h,m].indexOf(O),we=null!=(pe=null==A?void 0:A[E])?pe:0,xe=be?ge:he-P[me]-S[me]-we+H.altAxis,Oe=be?he+P[me]+S[me]-we-H.altAxis:ye,Ce=d&&be?function(e,t,r){var n=$(e,t,r);return n>r?r:n}(xe,he,Oe):$(d?xe:ge,he,d?Oe:ye);R[E]=Ce,L[E]=Ce-he}t.modifiersData[n]=L}},requiresIfExists:["offset"]};function Ce(e,t,r){void 0===r&&(r=!1);var n,o,i=H(t),a=H(t)&&function(e){var t=e.getBoundingClientRect(),r=B(t.width)/e.offsetWidth||1,n=B(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=I(t),c=F(e,a,r),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==P(t)||ue(s))&&(l=(n=t)!==S(n)&&H(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:ce(n)),H(t)?((u=F(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=le(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function Te(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var ke={placement:"bottom",modifiers:[],strategy:"absolute"};function Ee(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var Re=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?ke:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ke,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:j(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)};var a,l,f=function(e){var t=Te(e);return d.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),l=a.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return s.orderedModifiers=f.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:n});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;if(Ee(t,r)){s.rects={reference:Ce(t,J(r),"fixed"===s.options.strategy),popper:N(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:p,instance:u})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),l=!0}};if(!Ee(e,t))return u;function p(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=S(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,ne)})),s&&c.addEventListener("resize",r.update,ne),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,ne)})),s&&c.removeEventListener("resize",r.update,ne)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:M(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},L,xe,ye,Oe,Q,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),c=be(a,n),l=be(s,o,i),u=we(c),p=we(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Pe=t.exports.createContext(),Se=t.exports.createContext();function je(e){var r=e.children,n=t.exports.useState(null),o=n[0],i=n[1],a=t.exports.useRef(!1);t.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=t.exports.useCallback((function(e){a.current||i(e)}),[]);return t.exports.createElement(Pe.Provider,{value:o},t.exports.createElement(Se.Provider,{value:s},r))}var He=function(e){return Array.isArray(e)?e[0]:e},Ae=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Le=function(e,t){if("function"==typeof e)return Ae(e,t);null!=e&&(e.current=t)},Me=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},De="undefined"!=typeof window&&window.document&&window.document.createElement?t.exports.useLayoutEffect:t.exports.useEffect,We=[],Be=function(){},Ve=function(){return Promise.resolve(null)},Ue=[];function Fe(e){var r=e.placement,n=void 0===r?"bottom":r,o=e.strategy,i=void 0===o?"absolute":o,s=e.modifiers,c=void 0===s?Ue:s,l=e.referenceElement,u=e.onFirstUpdate,p=e.innerRef,d=e.children,h=t.exports.useContext(Pe),m=t.exports.useState(null),g=m[0],v=m[1],y=t.exports.useState(null),b=y[0],w=y[1];t.exports.useEffect((function(){Le(p,g)}),[p,g]);var x=t.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:u,modifiers:[].concat(c,[{name:"arrow",enabled:null!=b,options:{element:b}}])}}),[n,i,u,c,b]),O=function(e,r,n){void 0===n&&(n={});var o=t.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||We},s=t.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=s[0],l=s[1],u=t.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);a.exports.flushSync((function(){l({styles:Me(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Me(r.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),p=t.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return f(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=t.exports.useRef();return De((function(){d.current&&d.current.setOptions(p)}),[p]),De((function(){if(null!=e&&null!=r){var t=(n.createPopper||Re)(e,r,p);return d.current=t,function(){t.destroy(),d.current=null}}}),[e,r,n.createPopper]),{state:d.current?d.current.state:null,styles:c.styles,attributes:c.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}(l||h,g,x),C=O.state,T=O.styles,k=O.forceUpdate,E=O.update,R=t.exports.useMemo((function(){return{ref:v,style:T.popper,placement:C?C.placement:n,hasPopperEscaped:C&&C.modifiersData.hide?C.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:C&&C.modifiersData.hide?C.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:T.arrow,ref:w},forceUpdate:k||Be,update:E||Ve}}),[v,w,n,C,T,E,k]);return He(d)(R)}function Ne(e){var r=e.children,n=e.innerRef,o=t.exports.useContext(Se),i=t.exports.useCallback((function(e){Le(n,e),Ae(o,e)}),[n,o]);return t.exports.useEffect((function(){return function(){return Le(n,null)}}),[]),t.exports.useEffect((function(){}),[o]),He(r)({ref:i})}var qe=r.createContext({}),Xe=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Ye=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Ie=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),i({},e,{style:i({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Xe(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Xe(t.props.hideTooltip,e.onMouseLeave)},{style:i({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}n(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},o.render=function(){var e=this.props,t=e.arrowProps,n=e.placement,o=e.tooltip;return r.createElement(qe.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:n,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);Ie.contextType=qe;var ze=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=i({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("click")&&{onClick:Xe(t.clickToggle,e.onClick),onTouchEnd:Xe(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Xe(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&i({onMouseEnter:Xe(t.showTooltip,e.onMouseEnter),onMouseLeave:Xe(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Xe(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Xe(t.showTooltip,e.onFocus),onBlur:Xe(t.hideTooltip,e.onBlur)})},t}n(t,e);var s=t.prototype;return s.componentWillUnmount=function(){this.clearScheduled()},s.render=function(){var e=this,t=this.props,n=t.children,s=t.tooltip,c=t.placement,l=t.trigger,u=t.getTriggerRef,p=t.modifiers,f=t.closeOnReferenceHidden,d=t.usePortal,h=t.portalContainer,m=t.followCursor,g=t.getTooltipRef,v=t.mutationObserverOptions,y=o(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),b=r.createElement(Fe,i({innerRef:g,placement:c,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(p)},y),(function(t){var n=t.ref,o=t.style,a=t.placement,c=t.arrowProps,u=t.isReferenceHidden,p=t.update;if(m&&e.popperOffset){var d=e.state,h=d.pageX,g=d.pageY,y=e.popperOffset,b=y.width,w=y.height,x=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,O=g+w>window.pageYOffset+document.body.offsetHeight?g-w:g;o.transform="translate3d("+x+"px, "+O+"px, 0"}return r.createElement(Ie,i({arrowProps:c,closeOnReferenceHidden:f,isReferenceHidden:u,placement:a,update:p,style:o,tooltip:s,trigger:l,mutationObserverOptions:v},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:n}))}));return r.createElement(je,null,r.createElement(Ne,{innerRef:u},(function(t){var r=t.ref;return n({getTriggerProps:e.getTriggerProps,triggerRef:r})})),this.getState()&&(d?a.exports.createPortal(b,h):b))},s.isControlled=function(){return void 0!==this.props.tooltipShown},s.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},s.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);ze.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Ye()?document.body:null,trigger:"hover",usePortal:Ye(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var _e=ze;function Je(){return Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Je.apply(this,arguments)}var Ze,$e,Ge=s(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Ke=c.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(Ge("top",n,-8,"auto"),"px"),top:"".concat(Ge("bottom",n,-8,"auto"),"px"),right:"".concat(Ge("left",n,-8,"auto"),"px"),left:"".concat(Ge("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(Ge("top",n,"0",8),"px"),borderTopWidth:"".concat(Ge("bottom",n,"0",8),"px"),borderRightWidth:"".concat(Ge("left",n,"0",8),"px"),borderLeftWidth:"".concat(Ge("right",n,"0",8),"px"),borderTopColor:Ge("top",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderBottomColor:Ge("bottom",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderLeftColor:Ge("left",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderRightColor:Ge("right",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent")}})),Qe=c.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),et=function(e){var t=e.placement,n=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return r.createElement(Qe,Je({hasChrome:n,placement:t,ref:a},l,{color:c}),n&&r.createElement(Ke,Je({placement:t,ref:s},i,{color:c})),o)};function tt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rt(){return rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rt.apply(this,arguments)}function nt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ot(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}et.displayName="Tooltip",et.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var it=p.document,at=c.div(Ze||(Ze=ot(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),st=c.g($e||($e=ot(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),ct=e("WithTooltipPure",(function(e){var t=e.svg,n=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,l=e.tooltipShown,u=e.onVisibilityChange,p=nt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),f=t?st:at;return r.createElement(_e,{placement:o,trigger:n,modifiers:i,tooltipShown:l,onVisibilityChange:u,tooltip:function(e){var t=e.getTooltipProps,n=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return r.createElement(et,rt({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:n()},t()),"function"==typeof s?s({onHide:function(){return u(!1)}}):s)}},(function(e){var t=e.getTriggerProps,n=e.triggerRef;return r.createElement(f,rt({ref:n},t(),p),c)}))}));ct.displayName="WithTooltipPure",ct.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var lt=function(e){var n=e.startOpen,o=e.onVisibilityChange,i=nt(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return tt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.exports.useState(n||!1),2),s=a[0],c=a[1],l=t.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return t.exports.useEffect((function(){var e=function(){return l(!1)};it.addEventListener("keydown",e,!1);var t=Array.from(it.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){it.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),r.createElement(ct,rt({},i,{tooltipShown:s,onVisibilityChange:l}))};e({WithToolTipState:lt,WithTooltip:lt}),lt.displayName="WithToolTipState"}}}));
