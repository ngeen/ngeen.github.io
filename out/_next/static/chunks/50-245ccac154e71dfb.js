"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{9742:function(e,t,i){function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function r(){let e=s(['\n      <iframe\n        title="Comments"\n        scrolling="no"\n        class="loading"\n        ',"\n        src=","\n        loading=",'\n        allow="clipboard-write"\n        part="iframe"\n      ></iframe>\n    ']);return r=function(){return e},e}function n(){let e=s(["\n    :host,\n    iframe {\n      width: 100%;\n      border: none;\n      min-height: 150px;\n      color-scheme: light dark;\n    }\n\n    iframe.loading {\n      opacity: 0;\n    }\n  "]);return n=function(){return e},e}i.r(t),Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});let o=window,l=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),c=new WeakMap,h=class{get styleSheet(){let e=this.o,t=this.t;if(l&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(t,e))}return e}toString(){return this.cssText}constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}},d=e=>new h("string"==typeof e?e:e+"",void 0,a),u=(e,t)=>{l?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let i=document.createElement("style"),s=o.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)})},p=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return d(t)})(e):e,m=window,f=m.trustedTypes,g=f?f.emptyScript:"",v=m.reactiveElementPolyfillSupport,_={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>t!==e&&(t==t||e==e),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},b="finalized",A=class extends HTMLElement{static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)])this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(p(i));else void 0!==e&&t.push(p(e));return t}static _$Ep(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var i;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:$,r=this.constructor._$Ep(e,s);if(void 0!==r&&!0===s.reflect){let n=((null===(i=s.converter)||void 0===i?void 0:i.toAttribute)!==void 0?s.converter:_).toAttribute(t,s.type);this._$El=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(e,t){var i;let s=this.constructor,r=s._$Ev.get(e);if(void 0!==r&&this._$El!==r){let e=s.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)!==void 0?e.converter:_;this._$El=r,this[r]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}};A[b]=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:A}),(null!==(eC=m.reactiveElementVersions)&&void 0!==eC?eC:m.reactiveElementVersions=[]).push("1.6.2");let S=window,E=S.trustedTypes,w=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",C="lit$".concat((Math.random()+"").slice(9),"$"),T="?"+C,k="<".concat(T,">"),O=document,N=()=>O.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,M=e=>U(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),j="[ 	\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,L=RegExp(">|".concat(j,"(?:([^\\s\"'>=/]+)(").concat(j,"*=").concat(j,"*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),G=/'/g,W=/"/g,z=/^(?:script|style|textarea|title)$/i,D=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return{_$litType$:1,strings:e,values:i}},B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,F=O.createTreeWalker(O,129,null,!1),K=(e,t)=>{let i=e.length-1,s=[],r,n=2===t?"<svg>":"",o=I;for(let t=0;t<i;t++){let i=e[t],l,a,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,null!==(a=o.exec(i)));)h=o.lastIndex,o===I?"!--"===a[1]?o=R:void 0!==a[1]?o=H:void 0!==a[2]?(z.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=L):void 0!==a[3]&&(o=L):o===L?">"===a[0]?(o=null!=r?r:I,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?L:'"'===a[3]?W:G):o===W||o===G?o=L:o===R||o===H?o=I:(o=L,r=void 0);let d=o===L&&e[t+1].startsWith("/>")?" ":"";n+=o===I?i+k:c>=0?(s.push(l),i.slice(0,c)+x+i.slice(c)+C+d):i+C+(-2===c?(s.push(void 0),t):d)}let l=n+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(l):l,s]};class Y{static createElement(e,t){let i=O.createElement("template");return i.innerHTML=e,i}constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0,o=e.length-1,l=this.parts,[a,c]=K(e,t);if(this.el=Y.createElement(a,i),F.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=F.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let e=[];for(let t of s.getAttributeNames())if(t.endsWith(x)||t.startsWith(C)){let i=c[n++];if(e.push(t),void 0!==i){let e=s.getAttribute(i.toLowerCase()+x).split(C),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?ee:"?"===t[1]?ei:"@"===t[1]?es:X})}else l.push({type:6,index:r})}for(let t of e)s.removeAttribute(t)}if(z.test(s.tagName)){let e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],N()),F.nextNode(),l.push({type:2,index:++r});s.append(e[t],N())}}}else if(8===s.nodeType){if(s.data===T)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)l.push({type:7,index:r}),e+=C.length-1}}r++}}}function J(e,t){var i,s,r;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3?arguments[3]:void 0;if(t===B)return t;let l=void 0!==o?null===(i=n._$Co)||void 0===i?void 0:i[o]:n._$Cl,a=P(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===a?l=void 0:(l=new a(e))._$AT(e,n,o),void 0!==o?(null!==(r=n._$Co)&&void 0!==r?r:n._$Co=[])[o]=l:n._$Cl=l),void 0!==l&&(t=J(e,l._$AS(e,t.values),l,o)),t}let Z=class{get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:s}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(i,!0);F.currentNode=r;let n=F.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Q(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new er(n,this,e)),this._$AV.push(t),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=F.nextNode(),o++)}return F.currentNode=O,r}v(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}};class Q{get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&(null==e?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;P(e=J(this,e,t))?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):M(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Y.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{let e=new Z(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Y(e)),t}T(e){U(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new Q(this.k(N()),this.k(N()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}constructor(e,t,i,s){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,r=this.strings,n=!1;if(void 0===r)(n=!P(e=J(this,e,t,0))||e!==this._$AH&&e!==B)&&(this._$AH=e);else{let s,o;let l=e;for(e=r[0],s=0;s<r.length-1;s++)(o=J(this,l[i+s],t,s))===B&&(o=this._$AH[s]),n||(n=!P(o)||o!==this._$AH[s]),o===V?e=V:e!==V&&(e+=(null!=o?o:"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}constructor(e,t,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}}class ee extends X{j(e){this.element[this.name]=e===V?void 0:e}constructor(){super(...arguments),this.type=3}}let et=E?E.emptyScript:"";class ei extends X{j(e){e&&e!==V?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}constructor(){super(...arguments),this.type=4}}class es extends X{_$AI(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((e=null!==(t=J(this,e,i,0))&&void 0!==t?t:V)===B)return;let s=this._$AH,r=e===V&&s!==V||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==V&&(s===V||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}}class er{get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}}let en=S.litHtmlPolyfillSupport;null==en||en(Y,Q),(null!==(eT=S.litHtmlVersions)&&void 0!==eT?eT:S.litHtmlVersions=[]).push("2.7.4");let eo=(e,t,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t,o=n._$litPart$;if(void 0===o){let e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new Q(t.insertBefore(N(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o},el=class extends A{createRenderRoot(){var e,t;let i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */el.finalized=!0,el._$litElement$=!0,null===(ek=globalThis.litElementHydrateSupport)||void 0===ek||ek.call(globalThis,{LitElement:el});let ea=globalThis.litElementPolyfillSupport;null==ea||ea({LitElement:el}),(null!==(eO=globalThis.litElementVersions)&&void 0!==eO?eO:globalThis.litElementVersions=[]).push("3.3.2");let ec=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:{...t,finisher(i){i.createProperty(t.key,e)}},eh=(e,t,i)=>{t.constructor.createProperty(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ed(e){return(t,i)=>void 0!==i?eh(e,t,i):ec(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */null===(eN=window.HTMLSlotElement)||void 0===eN||eN.prototype.assignedElements;let eu=e=>void 0===e.strings,ep=class{get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}constructor(e){}},em=(e,t)=>{var i;let s=e._$AN;if(void 0===s)return!1;for(let e of s)null===(i=e._$AO)||void 0===i||i.call(e,t,!1),em(e,t);return!0},ef=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while((null==i?void 0:i.size)===0)},eg=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),ey(t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ev(e){void 0!==this._$AN?(ef(this),this._$AM=e,eg(this)):this._$AM=e}function e_(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(t){if(Array.isArray(s))for(let e=i;e<s.length;e++)em(s[e],!1),ef(s[e]);else null!=s&&(em(s,!1),ef(s))}else em(this,e)}}let ey=e=>{var t,i;2==e.type&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=e_),null!==(i=e._$AQ)&&void 0!==i||(e._$AQ=ev))};class e$ extends ep{_$AT(e,t,i){super._$AT(e,t,i),eg(this),this.isConnected=e._$AU}_$AO(e){var t,i;let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),s&&(em(this,e),ef(this))}setValue(e){if(eu(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}constructor(){super(...arguments),this._$AN=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eb=()=>new eA;class eA{}let eS=new WeakMap,eE=(ex=class extends e${render(e){return V}update(e,t){var i;let[s]=t,r=s!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=s,this.ct=null===(i=e.options)||void 0===i?void 0:i.host,this.ot(this.lt=e.element)),V}ot(e){var t;if("function"==typeof this.G){let i=null!==(t=this.ct)&&void 0!==t?t:globalThis,s=eS.get(i);void 0===s&&(s=new WeakMap,eS.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,i;return"function"==typeof this.G?null===(t=eS.get(null!==(e=this.ct)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return{_$litDirective$:ex,values:t}});var ew,ex,eC,eT,ek,eO,eN,eP=Object.defineProperty,eU=Object.getOwnPropertyDescriptor,eM=(e,t,i,s)=>{for(var r,n=s>1?void 0:s?eU(t,i):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(s?r(t,i,n):r(n))||n);return s&&n&&eP(t,i,n),n};exports.GiscusWidget=class extends el{get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}get _host(){try{return new URL(this.host),this.host}catch(e){return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return'[giscus] An error occurred. Error message: "'.concat(e,'".')}setupSession(){let e=location.href,t=new URL(e),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=t.searchParams.get("giscus")||"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(i)try{this.__session=JSON.parse(i)}catch(e){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn("".concat(this._formatError(null==e?void 0:e.message)," Session has been cleared."))}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(e){if(e.origin!==this._host)return;let{data:t}=e;if(!("object"==typeof t&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height="".concat(t.giscus.resizeHeight,"px")),t.giscus.signOut){console.log("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;let i=t.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn("".concat(this._formatError(i)," Session has been cleared.")),this.signOut();return}console.error("".concat(this._formatError(i)," No session is stored initially. ").concat(this.ERROR_SUGGESTION))}if(i.includes("Discussion not found")){console.warn("[giscus] ".concat(i,". A new discussion will be created if a comment/reaction is submitted."));return}console.error("".concat(this._formatError(i)," ").concat(this.ERROR_SUGGESTION))}sendMessage(e){this.iframeRef&&this.iframeRef.contentWindow&&this.hasLoaded&&(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:e},this._host))}updateConfig(){let e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",()=>{var e;null==(e=this.iframeRef)||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(e,t,i){if(!this.hasUpdated||"host"===e){super.requestUpdate(e,t,i);return}this.updateConfig()}getMetaContent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.querySelector((t?"meta[property='og:".concat(e,"'],"):"")+"meta[name='".concat(e,"']"));return i?i.content:""}_getCleanedUrl(){let e=new URL(location.href);return e.searchParams.delete("giscus"),e.hash="",e}getTerm(){switch(this.mapping){case"url":return"".concat(this._getCleanedUrl());case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){let e=this._getCleanedUrl().toString(),t="".concat(e).concat(this.id?"#"+this.id:""),i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||e,r={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this._host,o=this.lang?"/".concat(this.lang):"",l=new URLSearchParams(r);return"".concat(n).concat(o,"/widget?").concat(l)}render(){return D(r(),eE(this._iframeRef),this.getIframeSrc(),this.loading)}constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=eb(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}},exports.GiscusWidget.styles=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return new h(1===e.length?e[0]:i.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]),e,a)}(n()),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"host",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"repo",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"repoId",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"category",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"categoryId",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"mapping",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"term",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"strict",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"reactionsEnabled",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"emitMetadata",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"inputPosition",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"theme",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"lang",2),eM([ed({reflect:!0})],exports.GiscusWidget.prototype,"loading",2),exports.GiscusWidget=eM([(ew="giscus-widget",customElements.get(ew)?e=>e:e=>"function"==typeof e?(customElements.define(ew,e),e):((e,t)=>{let{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(ew,e))],exports.GiscusWidget)},4586:function(e,t,i){let s=i(3827),r=i(4090);e.exports=function(e){let{id:t,host:n,repo:o,repoId:l,category:a,categoryId:c,mapping:h,term:d,strict:u,reactionsEnabled:p,emitMetadata:m,inputPosition:f,theme:g,lang:v,loading:_}=e,[y,$]=r.useState(!1);return r.useEffect(()=>{y||(Promise.resolve().then(()=>i(9742)),$(!0))},[]),y?s.jsx("giscus-widget",{id:t,host:n,repo:o,repoid:l,category:a,categoryid:c,mapping:h,term:d,strict:u,reactionsenabled:p,emitmetadata:m,inputposition:f,theme:g,lang:v,loading:_}):null}},1774:function(e,t,i){i.d(t,{F:function(){return a},f:function(){return c}});var s=i(4090);let r=["light","dark"],n="(prefers-color-scheme: dark)",o=(0,s.createContext)(void 0),l={setTheme:e=>{},themes:[]},a=()=>{var e;return null!==(e=(0,s.useContext)(o))&&void 0!==e?e:l},c=e=>(0,s.useContext)(o)?s.createElement(s.Fragment,null,e.children):s.createElement(d,e),h=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:i=!1,enableSystem:l=!0,enableColorScheme:a=!0,storageKey:c="theme",themes:d=h,defaultTheme:g=l?"system":"light",attribute:v="data-theme",value:_,children:y,nonce:$}=e,[b,A]=(0,s.useState)(()=>p(c,g)),[S,E]=(0,s.useState)(()=>p(c)),w=_?Object.values(_):d,x=(0,s.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=f());let s=_?_[t]:t,n=i?m():null,o=document.documentElement;if("class"===v?(o.classList.remove(...w),s&&o.classList.add(s)):s?o.setAttribute(v,s):o.removeAttribute(v),a){let e=r.includes(g)?g:null,i=r.includes(t)?t:e;o.style.colorScheme=i}null==n||n()},[]),C=(0,s.useCallback)(e=>{A(e);try{localStorage.setItem(c,e)}catch(e){}},[t]),T=(0,s.useCallback)(e=>{E(f(e)),"system"===b&&l&&!t&&x("system")},[b,t]);(0,s.useEffect)(()=>{let e=window.matchMedia(n);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,s.useEffect)(()=>{let e=e=>{e.key===c&&C(e.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,s.useEffect)(()=>{x(null!=t?t:b)},[t,b]);let k=(0,s.useMemo)(()=>({theme:b,setTheme:C,forcedTheme:t,resolvedTheme:"system"===b?S:b,themes:l?[...d,"system"]:d,systemTheme:l?S:void 0}),[b,C,t,S,l,d]);return s.createElement(o.Provider,{value:k},s.createElement(u,{forcedTheme:t,disableTransitionOnChange:i,enableSystem:l,enableColorScheme:a,storageKey:c,themes:d,defaultTheme:g,attribute:v,value:_,children:y,attrs:w,nonce:$}),y)},u=(0,s.memo)(e=>{let{forcedTheme:t,storageKey:i,attribute:o,enableSystem:l,enableColorScheme:a,defaultTheme:c,value:h,attrs:d,nonce:u}=e,p="system"===c,m="class"===o?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),f=a?r.includes(c)&&c?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=h?h[e]:e,n=t?e+"|| ''":"'".concat(s,"'"),l="";return a&&i&&!t&&r.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===o?l+=t||s?"c.add(".concat(n,")"):"null":s&&(l+="d[s](n,".concat(n,")")),l},v=t?"!function(){".concat(m).concat(g(t),"}()"):l?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(i,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(n,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(h?"var x=".concat(JSON.stringify(h),";"):"").concat(g(h?"x[e]":"e",!0),"}").concat(p?"":"else{"+g(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(i,"');if(e){").concat(h?"var x=".concat(JSON.stringify(h),";"):"").concat(g(h?"x[e]":"e",!0),"}else{").concat(g(c,!1,!1),";}").concat(f,"}catch(t){}}();");return s.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:v}})},()=>!0),p=(e,t)=>{let i;try{i=localStorage.getItem(e)||void 0}catch(e){}return i||t},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(n)),e.matches?"dark":"light")},9079:function(e,t,i){var s,r;e.exports=(null==(s=i.g.process)?void 0:s.env)&&"object"==typeof(null==(r=i.g.process)?void 0:r.env)?i.g.process:i(3127)},3127:function(e){!function(){var t={229:function(e){var t,i,s,r=e.exports={};function n(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var a=[],c=!1,h=-1;function d(){c&&s&&(c=!1,s.length?a=s.concat(a):h=-1,a.length&&u())}function u(){if(!c){var e=l(d);c=!0;for(var t=a.length;t;){for(s=a,a=[];++h<t;)s&&s[h].run();h=-1,t=a.length}s=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];a.push(new p(e,t)),1!==a.length||c||l(u)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},o=!0;try{t[e](n,n.exports,s),o=!1}finally{o&&delete i[e]}return n.exports}s.ab="//";var r=s(229);e.exports=r}()},7789:function(e,t,i){i.d(t,{Cr:function(){return p},EZ:function(){return d},S0:function(){return u},ih:function(){return h}});var s=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(e,t,i)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))l.call(t,i)&&c(e,i,t[i]);if(o)for(var i of o(t))a.call(t,i)&&c(e,i,t[i]);return e},d=(e,t)=>r(e,n(t)),u=(e,t)=>{var i={};for(var s in e)l.call(e,s)&&0>t.indexOf(s)&&(i[s]=e[s]);if(null!=e&&o)for(var s of o(e))0>t.indexOf(s)&&a.call(e,s)&&(i[s]=e[s]);return i},p=(e,t,i)=>new Promise((s,r)=>{var n=e=>{try{l(i.next(e))}catch(e){r(e)}},o=e=>{try{l(i.throw(e))}catch(e){r(e)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);l((i=i.apply(e,t)).next())})},4293:function(e,t,i){i.d(t,{HW:function(){return u}});var s=i(1774),r=i(4090),n=i(3827),o=e=>{let{shortname:t,slug:i}=e,{theme:o}=(0,s.F)(),l=(0,r.useCallback)(()=>{window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=i};let e=document.createElement("script");e.src="https://"+t+".disqus.com/embed.js",e.setAttribute("data-timestamp",Date.now().toString()),e.async=!0,document.body.appendChild(e)},[t,i,o]);return(0,r.useEffect)(()=>{l()},[l]),(0,n.jsx)("div",{className:"disqus-frame",id:"disqus_thread"})},l=i(4586),a=i.n(l)(),c=e=>{let{themeURL:t,theme:i,darkTheme:r,repo:o,repositoryId:l,category:c,categoryId:h,reactions:d,metadata:u,inputPosition:p,lang:m,mapping:f}=e,{theme:g,resolvedTheme:v}=(0,s.F)();return(0,n.jsx)(a,{id:"comments-container",repo:o,repoId:l,category:c,categoryId:h,mapping:f,reactionsEnabled:d,emitMetadata:u,inputPosition:p,theme:""===t?"dark"===g||"dark"===v?r:i:t,lang:m,loading:"lazy"})},h=e=>{let{theme:t,darkTheme:i,repo:o,label:l,issueTerm:a}=e,{theme:c,resolvedTheme:h}=(0,s.F)(),d="dark"===c||"dark"===h?i:t,u="comments-container",p=(0,r.useCallback)(()=>{let e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",o),e.setAttribute("issue-term",a),e.setAttribute("label",l),e.setAttribute("theme",d),e.setAttribute("crossorigin","anonymous"),e.async=!0;let t=document.getElementById(u);return t&&t.appendChild(e),()=>{let e=document.getElementById(u);e&&(e.innerHTML="")}},[d,a,l,o]);return(0,r.useEffect)(()=>{p()},[p]),(0,n.jsx)("div",{className:"utterances-frame relative",id:u})},d=i(7789),u=e=>{let{commentsConfig:t,slug:i}=e;switch(t.provider){case"giscus":return(0,n.jsx)(c,(0,d.ih)({},t.giscusConfig));case"utterances":return(0,n.jsx)(h,(0,d.ih)({},t.utterancesConfig));case"disqus":return(0,n.jsx)(o,(0,d.ih)({slug:i},t.disqusConfig))}}},9354:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});var s=i(4090),r=i(3827),n=(e,t,i)=>new Promise((s,r)=>{var n=e=>{try{l(i.next(e))}catch(e){r(e)}},o=e=>{try{l(i.throw(e))}catch(e){r(e)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);l((i=i.apply(e,t)).next())}),o=e=>{let{title:t="Subscribe to the newsletter",apiUrl:i="/api/newsletter"}=e,o=(0,s.useRef)(null),[l,a]=(0,s.useState)(!1),[c,h]=(0,s.useState)(""),[d,u]=(0,s.useState)(!1);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:t}),(0,r.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>n(void 0,null,function*(){e.preventDefault();let t=yield fetch(i,{body:JSON.stringify({email:o.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:s}=yield t.json();if(s){a(!0),h("Your e-mail address is invalid or you are already subscribed!");return}o.current.value="",a(!1),u(!0)}),children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{htmlFor:"email-input",children:[(0,r.jsx)("span",{className:"sr-only",children:"Email address"}),(0,r.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:d?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:o,required:!0,type:"email",disabled:d})]})}),(0,r.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,r.jsx)("button",{className:"bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ".concat(d?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:d,children:d?"Thank you!":"Sign up"})})]}),l&&(0,r.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},l=e=>{let{title:t,apiUrl:i}=e;return(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,r.jsx)(o,{title:t,apiUrl:i})})})}},7738:function(e,t,i){i.r(t),i.d(t,{default:function(){return n}});var s=i(4090),r=i(3827),n=e=>{let{children:t}=e,i=(0,s.useRef)(null),[n,o]=(0,s.useState)(!1),[l,a]=(0,s.useState)(!1);return(0,r.jsxs)("div",{ref:i,onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1),a(!1)},className:"relative",children:[n&&(0,r.jsx)("button",{"aria-label":"Copy code",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(l?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:()=>{a(!0),navigator.clipboard.writeText(i.current.textContent),setTimeout(()=>{a(!1)},2e3)},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:l?"text-green-400":"text-gray-300",children:l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,r.jsx)("pre",{children:t})]})}}}]);