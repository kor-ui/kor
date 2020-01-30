!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},c={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${h}`);class p{constructor(e,t){this.parts=[],this.element=t;const o=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let r=0,s=-1,c=0;const{strings:a,values:{length:h}}=e;for(;c<h;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let n=0;for(let e=0;e<o;e++)f(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=a[c],o=g.exec(t)[2],n=o.toLowerCase()+"$lit$",i=e.getAttribute(n);e.removeAttribute(n);const r=i.split(d);this.parts.push({type:"attribute",index:s,name:o,strings:r}),c+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const n=e.parentNode,i=t.split(d),r=i.length-1;for(let t=0;t<r;t++){let o,r=i[t];if(""===r)o=u();else{const e=g.exec(r);null!==e&&f(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(r)}n.insertBefore(o,e),this.parts.push({type:"node",index:++s})}""===i[r]?(n.insertBefore(u(),e),o.push(e)):e.data=i[r],c+=r}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&s!==r||(s++,t.insertBefore(u(),e)),r=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(o.push(e),s--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),c++}}else i.currentNode=n.pop()}for(const e of o)e.parentNode.removeChild(e)}}const f=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},b=e=>-1!==e.index,u=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,s=0,c=0,a=n.nextNode();for(;s<o.length;)if(i=o[s],b(i)){for(;c<i.index;)c++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,o,n){this.strings=e,this.values=t,this.type=o,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===e.indexOf("--\x3e",i+1);const r=g.exec(e);t+=null===r?e+(o?l:h):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=e=>null===e||!("object"==typeof e||"function"==typeof e),m=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let n=0;n<t;n++){o+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(_(e)||!m(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===c||_(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=c,e(this)}this.value!==c&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}const e=this.__pendingValue;e!==c&&(_(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):m(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const o=new v(t,e.processor,this.options),n=o._clone();o.update(e.values),this.__commitNode(n),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,n=0;for(const i of e)o=t[n],void 0===o&&(o=new k(this.options),t.push(o),0===n?o.appendIntoPart(this):o.insertAfterPart(t[n-1])),o.setValue(i),o.commit(),n++;n<t.length&&(t.length=n,this.clear(o&&o.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ${constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue===c)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=c}}class S extends w{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends x{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=c,e(this)}if(this.__pendingValue===c)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=c}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const O=new class{handleAttributeExpressions(e,t,o,n){const i=t[0];if("."===i){return new S(e,t.slice(1),o).parts}return"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new $(e,t.slice(1),o)]:new w(e,t,o).parts}handleTextExpression(e){return new k(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function z(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(l);return o=t.keyString.get(n),void 0===o&&(o=new p(e,e.getTemplateElement()),t.keyString.set(n,o)),t.stringsArray.set(e.strings,o),o}const R=new Map,N=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const B=(e,...t)=>new y(e,t,"html",O);function D(e,t){const{element:{content:o},parts:n}=e,i=document.createTreeWalker(o,133,null,!1);let r=A(n),s=n[r],c=-1,a=0;const l=[];let h=null;for(;i.nextNode();){c++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(l.push(e),null===h&&(h=e)),null!==h&&a++;void 0!==s&&s.index===c;)s.index=null!==h?-1:s.index-a,r=A(n,r),s=n[r]}l.forEach(e=>e.parentNode.removeChild(e))}const F=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},A=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(b(t))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const T=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const L=e=>t=>{const o=T(t.type,e);let n=R.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(o,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(l);if(i=n.keyString.get(r),void 0===i){const o=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(o,e),i=new p(t,o),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i},V=["html","svg"],M=new Set,q=(e,t,o)=>{M.add(e);const n=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{V.forEach(t=>{const o=R.get(T(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),D(e,o)})})})(e);const c=n.content;o?function(e,t,o=null){const{element:{content:n},parts:i}=e;if(null==o)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let s=A(i),c=0,a=-1;for(;r.nextNode();){for(a++,r.currentNode===o&&(c=F(t),o.parentNode.insertBefore(t,o));-1!==s&&i[s].index===a;){if(c>0){for(;-1!==s;)i[s].index+=c,s=A(i,s);return}s=A(i,s)}}}(o,s,c.firstChild):c.insertBefore(s,c.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const a=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(o){c.insertBefore(s,c.firstChild);const e=new Set;e.add(s),D(o,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},U=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:U},J=Promise.resolve(!0);class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const n=this._attributeNameForProperty(o,t);void 0!==n&&(this._attributeToPropertyMap.set(n,o),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[o]},set(t){const n=this[e];this[o]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=U){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,n=t.converter||I,i="function"==typeof n?n:n.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,n=t.converter;return(n&&n.toAttribute||I.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=W){const n=this.constructor,i=n._attributeNameForProperty(e,o);if(void 0!==i){const e=n._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(e);if(void 0!==n){const e=o._classProperties.get(n)||W;this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const n=this.constructor,i=n._classProperties.get(e)||W;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const o=this._updatePromise;this._updatePromise=new Promise((o,n)=>{e=o,t=n});try{await o}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}}:Object.assign({},t,{finisher(o){o.createProperty(t.key,e)}});function K(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):G(e,t)}const Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class ee{constructor(e,t){if(t!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const o=t.reduce((t,o,n)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[n+1],e[0]);return new ee(o,Y)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const oe=e=>e.flat?e.flat(1/0):function e(t,o=[]){for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,o):o.push(i)}return o}(e);class ne extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){oe(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ne.finalized=!0,ne.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,i=N.has(t),r=H&&11===t.nodeType&&!!t.host,c=r&&!M.has(n),a=c?document.createDocumentFragment():t;if(((e,t,o)=>{let n=N.get(t);void 0===n&&(s(t,t.firstChild),N.set(t,n=new k(Object.assign({templateFactory:z},o))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:L(n)},o)),c){const e=N.get(a);N.delete(a);const o=e.value instanceof v?e.value.template:void 0;q(n,a,o),s(t,t.firstChild),t.appendChild(a),N.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};const ie=te`
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), .05);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), .10);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:active,
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), .20)
  }
`;var re=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let se=class extends ne{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      wa-card {
        padding: 8px 16px;
      }
      slot:not([name]) {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        transition: .1s all ease-in-out;
      }
      /* expanded */ 
      :host(:not([expanded])) slot:not([name]) {
        margin-top: 0;
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
      }
      .header {
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex: 1;
      }
      .icon {
        margin-right: 8px;
      }
      slot[name="header"] p {
        margin-right: 8px;
        font: var(--header-1);
        color: var(--text-1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        flex: 1;
      }
      :host([expanded]) .expand {
        transform: rotate(180deg);
      }
      /* disabled */
      :host([disabled]) .header {
        opacity: .2;
        pointer-events: none;
      }
    `]}render(){return B`
      <wa-card>
        <slot name="header" slot="header" @click="${()=>this.expanded=!this.expanded}">
          <div class="header">
            ${this.icon?B` <wa-icon class="icon" icon="${this.icon}"></wa-icon> `:""}
            <p>${this.label}</p>
            <wa-icon button class="expand" icon="keyboard_arrow_down"></wa-icon>
          </div>
        </slot>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
        ${this.expanded?B` 
          <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
        `:""}
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.shadowRoot.querySelector("wa-card").shadowRoot.querySelector(".top").style.padding="0",0)}};re([K({type:String,reflect:!0})],se.prototype,"label",void 0),re([K({type:String,reflect:!0})],se.prototype,"icon",void 0),re([K({type:Boolean,reflect:!0})],se.prototype,"expanded",void 0),re([K({type:Boolean,reflect:!0})],se.prototype,"disabled",void 0),re([K({type:Boolean})],se.prototype,"emptyHeader",void 0),re([K({type:Boolean})],se.prototype,"emptyFunctions",void 0),re([K({type:Boolean})],se.prototype,"emptyBody",void 0),re([K({type:Boolean})],se.prototype,"emptyFooter",void 0),se=re([X("wa-accordion")],se);var ce=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ae=class extends ne{static get styles(){return[ie,te`
      :host {
        z-index: 3;
        height: 56px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background-color: rgb(var(--base-0));
        box-shadow: var(--shadow-1);
        transition: .1s all ease-in-out;
      }
      .logo {
        height: 24px;
        margin-right: 32px;
      }
      .label {
        font: var(--header-1);
        color: var(--text-1);
        max-width: 320px;
        margin-right: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      :host([mobile]) .label {
        flex: 1;
        max-width: unset;
        margin: 0 16px;
        text-align: center;
      }
      /* slots */
      slot {
        display: flex;
        align-items: center;
      }
      slot:not([name]) {
        flex: 1;
      }
      slot[name="functions"]::slotted(*) {
        margin-left: 12px;
      }
      ::slotted(wa-tabs) {
        border-bottom: unset;
      }
      slot[name="right"],
      slot[name="left"] {
        min-width: 24px;
      }
    `]}render(){return B`
      ${this.mobile?B`
        <slot name="left"></slot>
        ${this.label?B` <div class="label">${this.label}</div> `:""}
        <slot name="right"></slot>
      `:B` 
        ${this.logo?B` <img class="logo" src="${this.logo}"> `:""}
        ${this.label?B` <div class="label">${this.label}</div> `:""}
        <slot></slot> 
        <slot name="functions"></slot>
      `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};ce([K({type:String,reflect:!0})],ae.prototype,"logo",void 0),ce([K({type:String,reflect:!0})],ae.prototype,"label",void 0),ce([K({type:Boolean,reflect:!0})],ae.prototype,"mobile",void 0),ae=ce([X("wa-app-bar")],ae);var le=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let he=class extends ne{static get styles(){return[ie,te`
      :host,
      .image {
        display: flex;
        align-items: center;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        margin-left: 8px;
        overflow: hidden;
      }
      .label,
      .info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .label {
        font-weight: bold;
      }
      .image {
        overflow: hidden;
        justify-content: center;
        font: var(--header-2);
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background: rgba(var(--neutral-1), .10);
      }
      .image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      :host-context(wa-app-bar) {
        max-width: 288px;
      }
    `]}render(){return B`
      <!-- image -->
      <div class="image">
        ${this.image?B` 
          <img src="${this.image}"> 
        `:B`
          ${this.label?B` 
            ${this.getInitials(this.label)}
          `:B`
            <wa-icon icon="person"></wa-icon>
          `}
        `}
      </div>
      <!-- text -->
      ${this.label||this.info?B`
        <div class="text">
          ${this.label?B`<wa-text size="body-2" class="label">${this.label}</wa-text>`:""}
          ${this.info?B`<wa-text size="body-2" class="info" color="var(--text-2)">${this.info}</wa-text>`:""}
        </div>
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getInitials(e){var t=e.match(/\b\w/g)||[];return t=((t.shift()||"")+(t.pop()||"")).toUpperCase()}};le([K({type:String,reflect:!0})],he.prototype,"label",void 0),le([K({type:String,reflect:!0})],he.prototype,"info",void 0),le([K({type:String,reflect:!0})],he.prototype,"image",void 0),he=le([X("wa-avatar")],he);var de=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let pe=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: fit-content;
        min-width: 16px;
        padding: 0 4px;
        border-radius: 8px;
        background: rgb(var(--functional-blue));
      }
      :host(:not([label])) {
        padding: 4px;
        min-width: unset;
      }
      wa-text {
        color: white;
        font-weight: bold;
      }
      /* status */ 
      :host([status]) {
        background: transparent;
        padding: 0px;
      }
      .status-icon[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status-icon[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status-icon[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
    `]}render(){return B`
      ${this.status?B`
        <!-- status -->
        ${this.status?B` <wa-icon class="status-icon" size="s" icon="${this.getStatusIcon()}"></wa-icon> `:""}
      `:B`
          ${this.label?B`
            <wa-text size="body-2">
              ${this.label>999?B` 999+ `:B` ${this.label} `}
            </wa-text>
          `:""}
        `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};de([K({type:Number,reflect:!0})],pe.prototype,"label",void 0),de([K({type:String,reflect:!0})],pe.prototype,"status",void 0),pe=de([X("wa-badge")],pe);let fe=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        width: 100%;
        height: fit-content;
      }
    `]}render(){return B`
      <slot></slot>
    `}};fe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([X("wa-breadcrumbs")],fe);var be=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ue=class extends ne{constructor(){super(...arguments),this.label="Label",this.active=!1}static get styles(){return[ie,te`
      :host {
        display: flex;
        align-items: center;
      }
      wa-icon {
        pointer-events: none;
        margin: 0 4px;
      }
      wa-text {
        color: var(--text-2);
        cursor: pointer;
        font-weight: bold;
      }
      :host([active]) wa-text {
        color: var(--text-1);
      }
      /* hover inputs */
      @media (hover: hover) {
        wa-text:hover:not(:active) {
          color: var(--text-1);
        }
      }
    `]}render(){return B`
      ${this.firstItem()?"":B`
        <wa-icon icon="keyboard_arrow_right" color="var(--text-2)"></wa-icon>
      `}
      <wa-text>${this.label}</wa-text>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}firstItem(){let e,t;return t=Array.prototype.slice.call(this.parentElement.children),e=0==t.indexOf(this),e}};be([K({type:String,reflect:!0})],ue.prototype,"label",void 0),be([K({type:Boolean,reflect:!0})],ue.prototype,"active",void 0),ue=be([X("wa-breadcrumb-item")],ue);var ge=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ve=class extends ne{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[ie,te`
      :host {
        display: flex;
        height: fit-content;
        width: fit-content;
        border-radius: 4px;
        cursor: pointer;
        transition: .1s all ease-in-out;
        justify-content: center;
      }
      .label {
        font-weight: bold;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      :host(:not([icon])) {
        min-width: 56px;
        max-width: 160px;
        padding: 4px 12px;
      }
      :host([color="tertiary"]:not([icon])) {
        padding: 3px 11px;
      }
      :host([icon]) {
        padding: 4px;
      }
      :host([color="tertiary"][icon]) {
        padding: 3px;
      }
      /* idle */
      :host([color="primary"]) {
        background-color: rgb(var(--accent-1));
      }
      :host([color="secondary"]) {
        background-color: rgba(var(--neutral-1), .10);
      }
      :host([color="tertiary"]) {
        border-width: 1px;
        border-style: solid;
        border-color: rgba(var(--neutral-1), .25);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* text and icon colors */
      :host([color="primary"]) .label,
      :host([color="primary"][icon]) wa-icon {
        color: rgba(255, 255, 255, .90);
      }
      /* hover inputs */
      @media (hover: hover) {
        :host([color="primary"]:not(:active):hover) {
          background-color: rgb(var(--accent-1b));
        }
        :host([color="secondary"]:not(:active):hover) {
          background-color: rgba(var(--neutral-1), .15);
        }
        :host([color="tertiary"]:not(:active):hover) {
          border-color: rgba(var(--neutral-1), .30);
          background-color: rgba(var(--neutral-1), .05);
        }
      }
    `]}render(){return B`
      ${this.icon?B`
        <wa-icon icon="${this.icon}"></wa-icon>
      `:B`
        <wa-text class="label">${this.label}</wa-text>
      `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};ge([K({type:String,reflect:!0})],ve.prototype,"label",void 0),ge([K({type:String,reflect:!0})],ve.prototype,"icon",void 0),ge([K({type:String,reflect:!0})],ve.prototype,"color",void 0),ge([K({type:Boolean,reflect:!0})],ve.prototype,"disabled",void 0),ve=ge([X("wa-button")],ve);var ye=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let _e=class extends ne{constructor(){super(...arguments),this.flexDirection="column",this.flat=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
      }
      :host(:not([flat])) {
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        padding: 16px;
      }
      /* header */
      slot,
      .header,
      .top {
        display: flex;
        overflow: overlay;
      }
      .header,
      slot[name="functions"] {
        height: fit-content;
      }
      .header {
        flex: 1;
      }
      .top:not(.empty) {
        padding-bottom: 16px;
      }
      slot[name="footer"]:not(.empty) {
        padding-top: 16px;
      }
      .label {
        flex: 1;
        display: flex;
      }
      .label p {
        font: var(--header-1);
        color: var(--text-1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
      }
      .label wa-icon {
        margin-right: 8px;
      }
      slot[name="footer"]::slotted(*:not(:first-child)), 
      slot[name="functions"]::slotted(*) {
        margin-left: 12px;
      }
      /* content */
      slot:not([name]) {
        flex: 1;
        width: 100%;
        padding: 0 16px;
        margin-right: -16px;
        margin-left: -16px;
      }
      :host([flex-direction="column"]) slot:not([name]),
      .header {
        flex-direction: column;
      }
      :host([flex-direction="column"]) slot:not([name])::slotted(*:not(:last-child)) {
        margin-bottom: 12px;
      }
      :host([flex-direction="row"]) slot:not([name])::slotted(*:not(:last-child)) {
        margin-right: 12px;
      }
      /* footer */
      slot[name="footer"] {
        justify-content: flex-end;
      }
      slot[name="header"],
      slot[name="functions"],
      slot[name="footer"] {
        align-items: center;
      }
      /* image */
      .image {
        width: calc(100% + 32px);
        margin: -16px -16px 16px -16px;
      }
    `]}render(){return B`
      ${this.image?B` <img class="image" src="${this.image}"> `:""}
      <div class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}">
        <div class="header">
          ${this.label||this.icon?B`
            <div class="label">
              ${this.icon?B` <wa-icon icon="${this.icon}"></wa-icon> `:""}
              <p>${this.label}</p>
            </div>
            ${this.emptyHeader||!this.label&&!this.icon?"":B` <div style="margin-top: 16px"></div> `}
          `:""}
          <slot name="header" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}" class="${this.emptyHeader?"empty":""}"></slot>
        </div>
        <slot name="functions" @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"></slot>
      </div>
      <slot></slot>
      <slot name="footer" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}" class="${this.emptyFooter?"empty":""}"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};ye([K({type:String,reflect:!0})],_e.prototype,"label",void 0),ye([K({type:String,reflect:!0})],_e.prototype,"icon",void 0),ye([K({type:String,reflect:!0})],_e.prototype,"image",void 0),ye([K({type:String,reflect:!0,attribute:"flex-direction"})],_e.prototype,"flexDirection",void 0),ye([K({type:Boolean,reflect:!0})],_e.prototype,"flat",void 0),ye([K({type:Boolean})],_e.prototype,"emptyHeader",void 0),ye([K({type:Boolean})],_e.prototype,"emptyFunctions",void 0),ye([K({type:Boolean})],_e.prototype,"emptyFooter",void 0),_e=ye([X("wa-card")],_e);var me=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let we=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        cursor: pointer;
      }
      input {
        display: none;
      }
      /* box */
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin: 4px;
        border-radius: 2px;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
        transition: .1s all ease-in-out;
      }
      :host([active]) .box {
        border-color: transparent;
        background: rgb(var(--accent-1));
      }
      /* label */
      wa-text {
        flex: 1;
        margin-left: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .2;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active]):not(:active)) .box {
          border-color: rgba(var(--neutral-1), .30);
        }
      }
    `]}render(){return B`
      <input type="checkbox" ?checked="${this.active}" ?readonly="${this.disabled}" value="${this.label}" name="${this.label}">
      <div class="box">
        ${this.active?B`
          <wa-icon icon="check" size="s" color="white"></wa-icon>
        `:""}
      </div>
      ${this.label?B` 
        <wa-text>${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};me([K({type:String,reflect:!0})],we.prototype,"label",void 0),me([K({type:Boolean,reflect:!0})],we.prototype,"active",void 0),me([K({type:Boolean,reflect:!0})],we.prototype,"disabled",void 0),we=me([X("wa-checkbox")],we);var xe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ke=class extends ne{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[ie,te`
      :host([orientation="horizontal"]) {
        width: 100%;
      }
      :host([orientation="vertical"]) {
        height: 100%;
      }
      .line {
        background: rgba(var(--neutral-1), .25);
      }
      :host([orientation="horizontal"]) .line {
        height: 1px;
        width: 100%;
      }
      :host([orientation="vertical"]) .line {
        width: 1px;
        height: 100%;
      }
      /* spacing */ 
      :host([spacing="s"][orientation="horizontal"]) {
        padding: 8px 0;
      }
      :host([spacing="m"][orientation="horizontal"]) {
        padding: 16px 0;
      }
      :host([spacing="l"][orientation="horizontal"]) {
        padding: 32px 0;
      }
      :host([spacing="s"][orientation="vertical"]) {
        padding: 0 8px;
      }
      :host([spacing="m"][orientation="vertical"]) {
        padding: 0 16px;
      }
      :host([spacing="l"][orientation="vertical"]) {
        padding: 0 32px;
      }
    `]}render(){return B`
      <div class="line"></div>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};xe([K({type:String,reflect:!0})],ke.prototype,"spacing",void 0),xe([K({type:String,reflect:!0})],ke.prototype,"orientation",void 0),ke=xe([X("wa-divider")],ke);var $e=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Se=class extends ne{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        transition: .1s all ease-in-out, 0s top, 0s left;
        position: fixed;
        opacity: 1;
        z-index: 5;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
      }
      wa-card {
        position: absolute;
        border-radius: 0px;
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        transition: .2s all ease-in-out, 0s top, 0s left;
      }
      /* position */
      :host([position="left"]) wa-card {
        left: 0;
      }
      :host([position="right"]) wa-card {
        right: 0;
      }
      :host([position="top"]) wa-card {
        top: 0;
      }
      :host([position="bottom"]) wa-card {
        bottom: 0;
      }
      /* animations */
      :host([position="left"]:not([visible])) wa-card {
        margin-left: -40px;
      }
      :host([position="right"]:not([visible])) wa-card {
        margin-right: -40px;
      }
      :host([position="top"]:not([visible])) wa-card {
        margin-top: -40px;
      }
      :host([position="bottom"]:not([visible])) wa-card {
        margin-bottom: -40px;
      }
    `]}render(){return B`
      <wa-card @click="${e=>e.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}">
        <slot name="header" slot="${this.emptyHeader?void 0:"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":B` <wa-icon button icon="close" @click="${()=>this.visible=!1}"></wa-icon> `}
        </slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let e={height:void 0,width:void 0};switch(this.position){case"left":case"right":e.height="100%",e.width=this.width;break;case"top":case"bottom":e.height=this.height,e.width="100%"}return e}};$e([K({type:String,reflect:!0})],Se.prototype,"label",void 0),$e([K({type:String,reflect:!0})],Se.prototype,"icon",void 0),$e([K({type:String,reflect:!0})],Se.prototype,"position",void 0),$e([K({type:String,reflect:!0})],Se.prototype,"height",void 0),$e([K({type:String,reflect:!0})],Se.prototype,"width",void 0),$e([K({type:String,reflect:!0,attribute:"flex-direction"})],Se.prototype,"flexDirection",void 0),$e([K({type:Boolean,reflect:!0})],Se.prototype,"visible",void 0),$e([K({type:Boolean,reflect:!0})],Se.prototype,"sticky",void 0),$e([K({type:Boolean})],Se.prototype,"emptyHeader",void 0),$e([K({type:Boolean})],Se.prototype,"emptyFunctions",void 0),$e([K({type:Boolean})],Se.prototype,"emptyFooter",void 0),Se=$e([X("wa-drawer")],Se);var Ce=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Pe=class extends ne{static get styles(){return[ie,te`
      :host {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      slot[name="footer"] {
        display: flex;
        margin-top: 16px;
      }
      wa-icon + wa-text {
        margin-top: 8px;
      }
    `]}render(){return B`
      ${this.icon?B`
        <wa-icon icon="${this.icon}" size="xl" color="var(--text-2)"></wa-icon>
      `:""}
      ${this.label?B`
        <wa-text color="var(--text-2)">${this.label}</wa-text>
      `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};Ce([K({type:String,reflect:!0})],Pe.prototype,"label",void 0),Ce([K({type:String,reflect:!0})],Pe.prototype,"icon",void 0),Pe=Ce([X("wa-empty-state")],Pe);var Ee=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let je=class extends ne{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[ie,te`
      :host {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }
      :host(:not([fit-content])) {
        height: 100%;
        width: 100%;
      }
      ::slotted(*) {
        width: auto;
        min-width: 0;
        min-height: 0;
      }
      /* spacing */
      :host([spacing="s"]) { grid-gap: 8px; }
      :host([spacing="m"]) { grid-gap: 12px; }
      :host([spacing="l"]) { grid-gap: 16px; }
      /* columns and rows */
      ::slotted(*[grid-cols="0"]) { display: none; }
      ::slotted(*:not([grid-cols])),
      ::slotted(*[grid-cols="1"]) { grid-column: span 1; }
      ::slotted(*[grid-cols="2"]) { grid-column: span 2; }
      ::slotted(*[grid-cols="3"]) { grid-column: span 3; }
      ::slotted(*[grid-cols="4"]) { grid-column: span 4; }
      ::slotted(*[grid-cols="5"]) { grid-column: span 5; }
      ::slotted(*[grid-cols="6"]) { grid-column: span 6; }
      ::slotted(*[grid-cols="7"]) { grid-column: span 7; }
      ::slotted(*[grid-cols="8"]) { grid-column: span 8; }
      ::slotted(*[grid-cols="9"]) { grid-column: span 9; }
      ::slotted(*[grid-cols="10"]) { grid-column: span 10; }
      ::slotted(*[grid-cols="11"]) { grid-column: span 11; }
      ::slotted(*[grid-cols="12"]) { grid-column: span 12; }
      ::slotted(*:not([grid-rows])),
      ::slotted(*[grid-rows="1"]) { grid-row: span 1; }
      ::slotted(*[grid-rows="2"]) { grid-row: span 2; }
      ::slotted(*[grid-rows="3"]) { grid-row: span 3; }
      ::slotted(*[grid-rows="4"]) { grid-row: span 4; }
      ::slotted(*[grid-rows="5"]) { grid-row: span 5; }
      ::slotted(*[grid-rows="6"]) { grid-row: span 6; }
      ::slotted(*[grid-rows="7"]) { grid-row: span 7; }
      ::slotted(*[grid-rows="8"]) { grid-row: span 8; }
      ::slotted(*[grid-rows="9"]) { grid-row: span 9; }
      ::slotted(*[grid-rows="10"]) { grid-row: span 10; }
      ::slotted(*[grid-rows="11"]) { grid-row: span 11; }
      ::slotted(*[grid-rows="12"]) { grid-row: span 12; }
      /* tablet */
      @media only screen and (max-width: 1025px) {
        ::slotted(*[grid-cols-m="0"]) { display: none; }
        ::slotted(*[grid-cols-m="1"]) { grid-column: span 1; }
        ::slotted(*[grid-cols-m="2"]) { grid-column: span 2; }
        ::slotted(*[grid-cols-m="3"]) { grid-column: span 3; }
        ::slotted(*[grid-cols-m="4"]) { grid-column: span 4; }
        ::slotted(*[grid-cols-m="5"]) { grid-column: span 5; }
        ::slotted(*[grid-cols-m="6"]) { grid-column: span 6; }
        ::slotted(*[grid-cols-m="7"]) { grid-column: span 7; }
        ::slotted(*[grid-cols-m="8"]) { grid-column: span 8; }
        ::slotted(*[grid-cols-m="9"]) { grid-column: span 9; }
        ::slotted(*[grid-cols-m="10"]) { grid-column: span 10; }
        ::slotted(*[grid-cols-m="11"]) { grid-column: span 11; }
        ::slotted(*[grid-cols-m="12"]) { grid-column: span 12; }
        ::slotted(*[grid-rows-m="1"]) { grid-row: span 1; }
        ::slotted(*[grid-rows-m="2"]) { grid-row: span 2; }
        ::slotted(*[grid-rows-m="3"]) { grid-row: span 3; }
        ::slotted(*[grid-rows-m="4"]) { grid-row: span 4; }
        ::slotted(*[grid-rows-m="5"]) { grid-row: span 5; }
        ::slotted(*[grid-rows-m="6"]) { grid-row: span 6; }
        ::slotted(*[grid-rows-m="7"]) { grid-row: span 7; }
        ::slotted(*[grid-rows-m="8"]) { grid-row: span 8; }
        ::slotted(*[grid-rows-m="9"]) { grid-row: span 9; }
        ::slotted(*[grid-rows-m="10"]) { grid-row: span 10; }
        ::slotted(*[grid-rows-m="11"]) { grid-row: span 11; }
        ::slotted(*[grid-rows-m="12"]) { grid-row: span 12; }
      }
      /* tablet */
      @media only screen and (max-width: 767px) {
        ::slotted(*[grid-cols-s="0"]) { display: none; }
        ::slotted(*[grid-cols-s="1"]) { grid-column: span 1; }
        ::slotted(*[grid-cols-s="2"]) { grid-column: span 2; }
        ::slotted(*[grid-cols-s="3"]) { grid-column: span 3; }
        ::slotted(*[grid-cols-s="4"]) { grid-column: span 4; }
        ::slotted(*[grid-cols-s="5"]) { grid-column: span 5; }
        ::slotted(*[grid-cols-s="6"]) { grid-column: span 6; }
        ::slotted(*[grid-cols-s="7"]) { grid-column: span 7; }
        ::slotted(*[grid-cols-s="8"]) { grid-column: span 8; }
        ::slotted(*[grid-cols-s="9"]) { grid-column: span 9; }
        ::slotted(*[grid-cols-s="10"]) { grid-column: span 10; }
        ::slotted(*[grid-cols-s="11"]) { grid-column: span 11; }
        ::slotted(*[grid-cols-s="12"]) { grid-column: span 12; }
        ::slotted(*[grid-rows-s="1"]) { grid-row: span 1; }
        ::slotted(*[grid-rows-s="2"]) { grid-row: span 2; }
        ::slotted(*[grid-rows-s="3"]) { grid-row: span 3; }
        ::slotted(*[grid-rows-s="4"]) { grid-row: span 4; }
        ::slotted(*[grid-rows-s="5"]) { grid-row: span 5; }
        ::slotted(*[grid-rows-s="6"]) { grid-row: span 6; }
        ::slotted(*[grid-rows-s="7"]) { grid-row: span 7; }
        ::slotted(*[grid-rows-s="8"]) { grid-row: span 8; }
        ::slotted(*[grid-rows-s="9"]) { grid-row: span 9; }
        ::slotted(*[grid-rows-s="10"]) { grid-row: span 10; }
        ::slotted(*[grid-rows-s="11"]) { grid-row: span 11; }
        ::slotted(*[grid-rows-s="12"]) { grid-row: span 12; }
      }
    `]}render(){return B`
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}};Ee([K({type:Number,reflect:!0})],je.prototype,"columns",void 0),Ee([K({type:Number,reflect:!0})],je.prototype,"rows",void 0),Ee([K({type:String,reflect:!0})],je.prototype,"spacing",void 0),je=Ee([X("wa-grid")],je);var Oe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ze=class extends ne{constructor(){super(...arguments),this.size="m"}static get styles(){return[ie,te`
      :host {
        font-family: 'md-icons';
        line-height: 1;
        -webkit-font-smoothing: auto;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
        opacity: .90;
        color: var(--text-1);
        transition: .1s all ease-in-out;
      }
      :host([button]) {
        opacity: .60;
        cursor: pointer;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* size */
      :host([size="xl"]) {
        height: 48px;
        width: 48px;
        font-size: 48px;
      }
      :host([size="l"]) {
        height: 32px;
        width: 32px;
        font-size: 32px;
      }
      :host([size="m"]) {
        height: 24px;
        width: 24px;
        font-size: 24px;
      }
      :host([size="s"]) {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host([button]:hover:not(:active)) {
          opacity: .90;
        }
      }
      :host([icon="3d_rotation"]):before { content: "\\e84d" } 
      :host([icon="ac_unit"]):before { content: "\\eb3b" } 
      :host([icon="access_alarm"]):before { content: "\\e190" } 
      :host([icon="access_alarms"]):before { content: "\\e191" } 
      :host([icon="access_time"]):before { content: "\\e192" } 
      :host([icon="accessibility"]):before { content: "\\e84e" } 
      :host([icon="accessible"]):before { content: "\\e914" } 
      :host([icon="account_balance"]):before { content: "\\e84f" } 
      :host([icon="account_balance_wallet"]):before { content: "\\e850" } 
      :host([icon="account_box"]):before { content: "\\e851" } 
      :host([icon="account_circle"]):before { content: "\\e853" } 
      :host([icon="adb"]):before { content: "\\e60e" } 
      :host([icon="add"]):before { content: "\\e145" } 
      :host([icon="add_a_photo"]):before { content: "\\e439" } 
      :host([icon="add_alarm"]):before { content: "\\e193" } 
      :host([icon="add_alert"]):before { content: "\\e003" } 
      :host([icon="add_box"]):before { content: "\\e146" } 
      :host([icon="add_circle"]):before { content: "\\e147" } 
      :host([icon="add_circle_outline"]):before { content: "\\e148" } 
      :host([icon="add_location"]):before { content: "\\e567" } 
      :host([icon="add_shopping_cart"]):before { content: "\\e854" } 
      :host([icon="add_to_photos"]):before { content: "\\e39d" } 
      :host([icon="add_to_queue"]):before { content: "\\e05c" } 
      :host([icon="adjust"]):before { content: "\\e39e" } 
      :host([icon="airline_seat_flat"]):before { content: "\\e630" } 
      :host([icon="airline_seat_flat_angled"]):before { content: "\\e631" } 
      :host([icon="airline_seat_individual_suite"]):before { content: "\\e632" } 
      :host([icon="airline_seat_legroom_extra"]):before { content: "\\e633" } 
      :host([icon="airline_seat_legroom_normal"]):before { content: "\\e634" } 
      :host([icon="airline_seat_legroom_reduced"]):before { content: "\\e635" } 
      :host([icon="airline_seat_recline_extra"]):before { content: "\\e636" } 
      :host([icon="airline_seat_recline_normal"]):before { content: "\\e637" } 
      :host([icon="airplanemode_active"]):before { content: "\\e195" } 
      :host([icon="airplanemode_inactive"]):before { content: "\\e194" } 
      :host([icon="airplay"]):before { content: "\\e055" } 
      :host([icon="airport_shuttle"]):before { content: "\\eb3c" } 
      :host([icon="alarm"]):before { content: "\\e855" } 
      :host([icon="alarm_add"]):before { content: "\\e856" } 
      :host([icon="alarm_off"]):before { content: "\\e857" } 
      :host([icon="alarm_on"]):before { content: "\\e858" } 
      :host([icon="album"]):before { content: "\\e019" } 
      :host([icon="all_inclusive"]):before { content: "\\eb3d" } 
      :host([icon="all_out"]):before { content: "\\e90b" } 
      :host([icon="android"]):before { content: "\\e859" } 
      :host([icon="announcement"]):before { content: "\\e85a" } 
      :host([icon="apps"]):before { content: "\\e5c3" } 
      :host([icon="archive"]):before { content: "\\e149" } 
      :host([icon="arrow_back"]):before { content: "\\e5c4" } 
      :host([icon="arrow_downward"]):before { content: "\\e5db" } 
      :host([icon="arrow_drop_down"]):before { content: "\\e5c5" } 
      :host([icon="arrow_drop_down_circle"]):before { content: "\\e5c6" } 
      :host([icon="arrow_drop_up"]):before { content: "\\e5c7" } 
      :host([icon="arrow_forward"]):before { content: "\\e5c8" } 
      :host([icon="arrow_upward"]):before { content: "\\e5d8" } 
      :host([icon="art_track"]):before { content: "\\e060" } 
      :host([icon="aspect_ratio"]):before { content: "\\e85b" } 
      :host([icon="assessment"]):before { content: "\\e85c" } 
      :host([icon="assignment"]):before { content: "\\e85d" } 
      :host([icon="assignment_ind"]):before { content: "\\e85e" } 
      :host([icon="assignment_late"]):before { content: "\\e85f" } 
      :host([icon="assignment_return"]):before { content: "\\e860" } 
      :host([icon="assignment_returned"]):before { content: "\\e861" } 
      :host([icon="assignment_turned_in"]):before { content: "\\e862" } 
      :host([icon="assistant"]):before { content: "\\e39f" } 
      :host([icon="assistant_photo"]):before { content: "\\e3a0" } 
      :host([icon="attach_file"]):before { content: "\\e226" } 
      :host([icon="attach_money"]):before { content: "\\e227" } 
      :host([icon="attachment"]):before { content: "\\e2bc" } 
      :host([icon="audiotrack"]):before { content: "\\e3a1" } 
      :host([icon="autorenew"]):before { content: "\\e863" } 
      :host([icon="av_timer"]):before { content: "\\e01b" } 
      :host([icon="backspace"]):before { content: "\\e14a" } 
      :host([icon="backup"]):before { content: "\\e864" } 
      :host([icon="battery_alert"]):before { content: "\\e19c" } 
      :host([icon="battery_charging_full"]):before { content: "\\e1a3" } 
      :host([icon="battery_full"]):before { content: "\\e1a4" } 
      :host([icon="battery_std"]):before { content: "\\e1a5" } 
      :host([icon="battery_unknown"]):before { content: "\\e1a6" } 
      :host([icon="beach_access"]):before { content: "\\eb3e" } 
      :host([icon="beenhere"]):before { content: "\\e52d" } 
      :host([icon="block"]):before { content: "\\e14b" } 
      :host([icon="bluetooth"]):before { content: "\\e1a7" } 
      :host([icon="bluetooth_audio"]):before { content: "\\e60f" } 
      :host([icon="bluetooth_connected"]):before { content: "\\e1a8" } 
      :host([icon="bluetooth_disabled"]):before { content: "\\e1a9" } 
      :host([icon="bluetooth_searching"]):before { content: "\\e1aa" } 
      :host([icon="blur_circular"]):before { content: "\\e3a2" } 
      :host([icon="blur_linear"]):before { content: "\\e3a3" } 
      :host([icon="blur_off"]):before { content: "\\e3a4" } 
      :host([icon="blur_on"]):before { content: "\\e3a5" } 
      :host([icon="book"]):before { content: "\\e865" } 
      :host([icon="bookmark"]):before { content: "\\e866" } 
      :host([icon="bookmark_border"]):before { content: "\\e867" } 
      :host([icon="border_all"]):before { content: "\\e228" } 
      :host([icon="border_bottom"]):before { content: "\\e229" } 
      :host([icon="border_clear"]):before { content: "\\e22a" } 
      :host([icon="border_color"]):before { content: "\\e22b" } 
      :host([icon="border_horizontal"]):before { content: "\\e22c" } 
      :host([icon="border_inner"]):before { content: "\\e22d" } 
      :host([icon="border_left"]):before { content: "\\e22e" } 
      :host([icon="border_outer"]):before { content: "\\e22f" } 
      :host([icon="border_right"]):before { content: "\\e230" } 
      :host([icon="border_style"]):before { content: "\\e231" } 
      :host([icon="border_top"]):before { content: "\\e232" } 
      :host([icon="border_vertical"]):before { content: "\\e233" } 
      :host([icon="branding_watermark"]):before { content: "\\e06b" } 
      :host([icon="brightness_1"]):before { content: "\\e3a6" } 
      :host([icon="brightness_2"]):before { content: "\\e3a7" } 
      :host([icon="brightness_3"]):before { content: "\\e3a8" } 
      :host([icon="brightness_4"]):before { content: "\\e3a9" } 
      :host([icon="brightness_5"]):before { content: "\\e3aa" } 
      :host([icon="brightness_6"]):before { content: "\\e3ab" } 
      :host([icon="brightness_7"]):before { content: "\\e3ac" } 
      :host([icon="brightness_auto"]):before { content: "\\e1ab" } 
      :host([icon="brightness_high"]):before { content: "\\e1ac" } 
      :host([icon="brightness_low"]):before { content: "\\e1ad" } 
      :host([icon="brightness_medium"]):before { content: "\\e1ae" } 
      :host([icon="broken_image"]):before { content: "\\e3ad" } 
      :host([icon="brush"]):before { content: "\\e3ae" } 
      :host([icon="bubble_chart"]):before { content: "\\e6dd" } 
      :host([icon="bug_report"]):before { content: "\\e868" } 
      :host([icon="build"]):before { content: "\\e869" } 
      :host([icon="burst_mode"]):before { content: "\\e43c" } 
      :host([icon="business"]):before { content: "\\e0af" } 
      :host([icon="business_center"]):before { content: "\\eb3f" } 
      :host([icon="cached"]):before { content: "\\e86a" } 
      :host([icon="cake"]):before { content: "\\e7e9" } 
      :host([icon="call"]):before { content: "\\e0b0" } 
      :host([icon="call_end"]):before { content: "\\e0b1" } 
      :host([icon="call_made"]):before { content: "\\e0b2" } 
      :host([icon="call_merge"]):before { content: "\\e0b3" } 
      :host([icon="call_missed"]):before { content: "\\e0b4" } 
      :host([icon="call_missed_outgoing"]):before { content: "\\e0e4" } 
      :host([icon="call_received"]):before { content: "\\e0b5" } 
      :host([icon="call_split"]):before { content: "\\e0b6" } 
      :host([icon="call_to_action"]):before { content: "\\e06c" } 
      :host([icon="camera"]):before { content: "\\e3af" } 
      :host([icon="camera_alt"]):before { content: "\\e3b0" } 
      :host([icon="camera_enhance"]):before { content: "\\e8fc" } 
      :host([icon="camera_front"]):before { content: "\\e3b1" } 
      :host([icon="camera_rear"]):before { content: "\\e3b2" } 
      :host([icon="camera_roll"]):before { content: "\\e3b3" } 
      :host([icon="cancel"]):before { content: "\\e5c9" } 
      :host([icon="card_giftcard"]):before { content: "\\e8f6" } 
      :host([icon="card_membership"]):before { content: "\\e8f7" } 
      :host([icon="card_travel"]):before { content: "\\e8f8" } 
      :host([icon="casino"]):before { content: "\\eb40" } 
      :host([icon="cast"]):before { content: "\\e307" } 
      :host([icon="cast_connected"]):before { content: "\\e308" } 
      :host([icon="center_focus_strong"]):before { content: "\\e3b4" } 
      :host([icon="center_focus_weak"]):before { content: "\\e3b5" } 
      :host([icon="change_history"]):before { content: "\\e86b" } 
      :host([icon="chat"]):before { content: "\\e0b7" } 
      :host([icon="chat_bubble"]):before { content: "\\e0ca" } 
      :host([icon="chat_bubble_outline"]):before { content: "\\e0cb" } 
      :host([icon="check"]):before { content: "\\e5ca" } 
      :host([icon="check_box"]):before { content: "\\e834" } 
      :host([icon="check_box_outline_blank"]):before { content: "\\e835" } 
      :host([icon="check_circle"]):before { content: "\\e86c" } 
      :host([icon="chevron_left"]):before { content: "\\e5cb" } 
      :host([icon="chevron_right"]):before { content: "\\e5cc" } 
      :host([icon="child_care"]):before { content: "\\eb41" } 
      :host([icon="child_friendly"]):before { content: "\\eb42" } 
      :host([icon="chrome_reader_mode"]):before { content: "\\e86d" } 
      :host([icon="class"]):before { content: "\\e86e" } 
      :host([icon="clear"]):before { content: "\\e14c" } 
      :host([icon="clear_all"]):before { content: "\\e0b8" } 
      :host([icon="close"]):before { content: "\\e5cd" } 
      :host([icon="closed_caption"]):before { content: "\\e01c" } 
      :host([icon="cloud"]):before { content: "\\e2bd" } 
      :host([icon="cloud_circle"]):before { content: "\\e2be" } 
      :host([icon="cloud_done"]):before { content: "\\e2bf" } 
      :host([icon="cloud_download"]):before { content: "\\e2c0" } 
      :host([icon="cloud_off"]):before { content: "\\e2c1" } 
      :host([icon="cloud_queue"]):before { content: "\\e2c2" } 
      :host([icon="cloud_upload"]):before { content: "\\e2c3" } 
      :host([icon="code"]):before { content: "\\e86f" } 
      :host([icon="collections"]):before { content: "\\e3b6" } 
      :host([icon="collections_bookmark"]):before { content: "\\e431" } 
      :host([icon="color_lens"]):before { content: "\\e3b7" } 
      :host([icon="colorize"]):before { content: "\\e3b8" } 
      :host([icon="comment"]):before { content: "\\e0b9" } 
      :host([icon="compare"]):before { content: "\\e3b9" } 
      :host([icon="compare_arrows"]):before { content: "\\e915" } 
      :host([icon="computer"]):before { content: "\\e30a" } 
      :host([icon="confirmation_number"]):before { content: "\\e638" } 
      :host([icon="contact_mail"]):before { content: "\\e0d0" } 
      :host([icon="contact_phone"]):before { content: "\\e0cf" } 
      :host([icon="contacts"]):before { content: "\\e0ba" } 
      :host([icon="content_copy"]):before { content: "\\e14d" } 
      :host([icon="content_cut"]):before { content: "\\e14e" } 
      :host([icon="content_paste"]):before { content: "\\e14f" } 
      :host([icon="control_point"]):before { content: "\\e3ba" } 
      :host([icon="control_point_duplicate"]):before { content: "\\e3bb" } 
      :host([icon="copyright"]):before { content: "\\e90c" } 
      :host([icon="create"]):before { content: "\\e150" } 
      :host([icon="create_new_folder"]):before { content: "\\e2cc" } 
      :host([icon="credit_card"]):before { content: "\\e870" } 
      :host([icon="crop"]):before { content: "\\e3be" } 
      :host([icon="crop_16_9"]):before { content: "\\e3bc" } 
      :host([icon="crop_3_2"]):before { content: "\\e3bd" } 
      :host([icon="crop_5_4"]):before { content: "\\e3bf" } 
      :host([icon="crop_7_5"]):before { content: "\\e3c0" } 
      :host([icon="crop_din"]):before { content: "\\e3c1" } 
      :host([icon="crop_free"]):before { content: "\\e3c2" } 
      :host([icon="crop_landscape"]):before { content: "\\e3c3" } 
      :host([icon="crop_original"]):before { content: "\\e3c4" } 
      :host([icon="crop_portrait"]):before { content: "\\e3c5" } 
      :host([icon="crop_rotate"]):before { content: "\\e437" } 
      :host([icon="crop_square"]):before { content: "\\e3c6" } 
      :host([icon="dashboard"]):before { content: "\\e871" } 
      :host([icon="data_usage"]):before { content: "\\e1af" } 
      :host([icon="date_range"]):before { content: "\\e916" } 
      :host([icon="dehaze"]):before { content: "\\e3c7" } 
      :host([icon="delete"]):before { content: "\\e872" } 
      :host([icon="delete_forever"]):before { content: "\\e92b" } 
      :host([icon="delete_sweep"]):before { content: "\\e16c" } 
      :host([icon="description"]):before { content: "\\e873" } 
      :host([icon="desktop_mac"]):before { content: "\\e30b" } 
      :host([icon="desktop_windows"]):before { content: "\\e30c" } 
      :host([icon="details"]):before { content: "\\e3c8" } 
      :host([icon="developer_board"]):before { content: "\\e30d" } 
      :host([icon="developer_mode"]):before { content: "\\e1b0" } 
      :host([icon="device_hub"]):before { content: "\\e335" } 
      :host([icon="devices"]):before { content: "\\e1b1" } 
      :host([icon="devices_other"]):before { content: "\\e337" } 
      :host([icon="dialer_sip"]):before { content: "\\e0bb" } 
      :host([icon="dialpad"]):before { content: "\\e0bc" } 
      :host([icon="directions"]):before { content: "\\e52e" } 
      :host([icon="directions_bike"]):before { content: "\\e52f" } 
      :host([icon="directions_boat"]):before { content: "\\e532" } 
      :host([icon="directions_bus"]):before { content: "\\e530" } 
      :host([icon="directions_car"]):before { content: "\\e531" } 
      :host([icon="directions_railway"]):before { content: "\\e534" } 
      :host([icon="directions_run"]):before { content: "\\e566" } 
      :host([icon="directions_subway"]):before { content: "\\e533" } 
      :host([icon="directions_transit"]):before { content: "\\e535" } 
      :host([icon="directions_walk"]):before { content: "\\e536" } 
      :host([icon="disc_full"]):before { content: "\\e610" } 
      :host([icon="dns"]):before { content: "\\e875" } 
      :host([icon="do_not_disturb"]):before { content: "\\e612" } 
      :host([icon="do_not_disturb_alt"]):before { content: "\\e611" } 
      :host([icon="do_not_disturb_off"]):before { content: "\\e643" } 
      :host([icon="do_not_disturb_on"]):before { content: "\\e644" } 
      :host([icon="dock"]):before { content: "\\e30e" } 
      :host([icon="domain"]):before { content: "\\e7ee" } 
      :host([icon="done"]):before { content: "\\e876" } 
      :host([icon="done_all"]):before { content: "\\e877" } 
      :host([icon="donut_large"]):before { content: "\\e917" } 
      :host([icon="donut_small"]):before { content: "\\e918" } 
      :host([icon="drafts"]):before { content: "\\e151" } 
      :host([icon="drag_handle"]):before { content: "\\e25d" } 
      :host([icon="drive_eta"]):before { content: "\\e613" } 
      :host([icon="dvr"]):before { content: "\\e1b2" } 
      :host([icon="edit"]):before { content: "\\e3c9" } 
      :host([icon="edit_location"]):before { content: "\\e568" } 
      :host([icon="eject"]):before { content: "\\e8fb" } 
      :host([icon="email"]):before { content: "\\e0be" } 
      :host([icon="enhanced_encryption"]):before { content: "\\e63f" } 
      :host([icon="equalizer"]):before { content: "\\e01d" } 
      :host([icon="error"]):before { content: "\\e000" } 
      :host([icon="error_outline"]):before { content: "\\e001" } 
      :host([icon="euro_symbol"]):before { content: "\\e926" } 
      :host([icon="ev_station"]):before { content: "\\e56d" } 
      :host([icon="event"]):before { content: "\\e878" } 
      :host([icon="event_available"]):before { content: "\\e614" } 
      :host([icon="event_busy"]):before { content: "\\e615" } 
      :host([icon="event_note"]):before { content: "\\e616" } 
      :host([icon="event_seat"]):before { content: "\\e903" } 
      :host([icon="exit_to_app"]):before { content: "\\e879" } 
      :host([icon="expand_less"]):before { content: "\\e5ce" } 
      :host([icon="expand_more"]):before { content: "\\e5cf" } 
      :host([icon="explicit"]):before { content: "\\e01e" } 
      :host([icon="explore"]):before { content: "\\e87a" } 
      :host([icon="exposure"]):before { content: "\\e3ca" } 
      :host([icon="exposure_neg_1"]):before { content: "\\e3cb" } 
      :host([icon="exposure_neg_2"]):before { content: "\\e3cc" } 
      :host([icon="exposure_plus_1"]):before { content: "\\e3cd" } 
      :host([icon="exposure_plus_2"]):before { content: "\\e3ce" } 
      :host([icon="exposure_zero"]):before { content: "\\e3cf" } 
      :host([icon="extension"]):before { content: "\\e87b" } 
      :host([icon="face"]):before { content: "\\e87c" } 
      :host([icon="fast_forward"]):before { content: "\\e01f" } 
      :host([icon="fast_rewind"]):before { content: "\\e020" } 
      :host([icon="favorite"]):before { content: "\\e87d" } 
      :host([icon="favorite_border"]):before { content: "\\e87e" } 
      :host([icon="featured_play_list"]):before { content: "\\e06d" } 
      :host([icon="featured_video"]):before { content: "\\e06e" } 
      :host([icon="feedback"]):before { content: "\\e87f" } 
      :host([icon="fiber_dvr"]):before { content: "\\e05d" } 
      :host([icon="fiber_manual_record"]):before { content: "\\e061" } 
      :host([icon="fiber_new"]):before { content: "\\e05e" } 
      :host([icon="fiber_pin"]):before { content: "\\e06a" } 
      :host([icon="fiber_smart_record"]):before { content: "\\e062" } 
      :host([icon="file_download"]):before { content: "\\e2c4" } 
      :host([icon="file_upload"]):before { content: "\\e2c6" } 
      :host([icon="filter"]):before { content: "\\e3d3" } 
      :host([icon="filter_1"]):before { content: "\\e3d0" } 
      :host([icon="filter_2"]):before { content: "\\e3d1" } 
      :host([icon="filter_3"]):before { content: "\\e3d2" } 
      :host([icon="filter_4"]):before { content: "\\e3d4" } 
      :host([icon="filter_5"]):before { content: "\\e3d5" } 
      :host([icon="filter_6"]):before { content: "\\e3d6" } 
      :host([icon="filter_7"]):before { content: "\\e3d7" } 
      :host([icon="filter_8"]):before { content: "\\e3d8" } 
      :host([icon="filter_9"]):before { content: "\\e3d9" } 
      :host([icon="filter_9_plus"]):before { content: "\\e3da" } 
      :host([icon="filter_b_and_w"]):before { content: "\\e3db" } 
      :host([icon="filter_center_focus"]):before { content: "\\e3dc" } 
      :host([icon="filter_drama"]):before { content: "\\e3dd" } 
      :host([icon="filter_frames"]):before { content: "\\e3de" } 
      :host([icon="filter_hdr"]):before { content: "\\e3df" } 
      :host([icon="filter_list"]):before { content: "\\e152" } 
      :host([icon="filter_none"]):before { content: "\\e3e0" } 
      :host([icon="filter_tilt_shift"]):before { content: "\\e3e2" } 
      :host([icon="filter_vintage"]):before { content: "\\e3e3" } 
      :host([icon="find_in_page"]):before { content: "\\e880" } 
      :host([icon="find_replace"]):before { content: "\\e881" } 
      :host([icon="fingerprint"]):before { content: "\\e90d" } 
      :host([icon="first_page"]):before { content: "\\e5dc" } 
      :host([icon="fitness_center"]):before { content: "\\eb43" } 
      :host([icon="flag"]):before { content: "\\e153" } 
      :host([icon="flare"]):before { content: "\\e3e4" } 
      :host([icon="flash_auto"]):before { content: "\\e3e5" } 
      :host([icon="flash_off"]):before { content: "\\e3e6" } 
      :host([icon="flash_on"]):before { content: "\\e3e7" } 
      :host([icon="flight"]):before { content: "\\e539" } 
      :host([icon="flight_land"]):before { content: "\\e904" } 
      :host([icon="flight_takeoff"]):before { content: "\\e905" } 
      :host([icon="flip"]):before { content: "\\e3e8" } 
      :host([icon="flip_to_back"]):before { content: "\\e882" } 
      :host([icon="flip_to_front"]):before { content: "\\e883" } 
      :host([icon="folder"]):before { content: "\\e2c7" } 
      :host([icon="folder_open"]):before { content: "\\e2c8" } 
      :host([icon="folder_shared"]):before { content: "\\e2c9" } 
      :host([icon="folder_special"]):before { content: "\\e617" } 
      :host([icon="font_download"]):before { content: "\\e167" } 
      :host([icon="format_align_center"]):before { content: "\\e234" } 
      :host([icon="format_align_justify"]):before { content: "\\e235" } 
      :host([icon="format_align_left"]):before { content: "\\e236" } 
      :host([icon="format_align_right"]):before { content: "\\e237" } 
      :host([icon="format_bold"]):before { content: "\\e238" } 
      :host([icon="format_clear"]):before { content: "\\e239" } 
      :host([icon="format_color_fill"]):before { content: "\\e23a" } 
      :host([icon="format_color_reset"]):before { content: "\\e23b" } 
      :host([icon="format_color_text"]):before { content: "\\e23c" } 
      :host([icon="format_indent_decrease"]):before { content: "\\e23d" } 
      :host([icon="format_indent_increase"]):before { content: "\\e23e" } 
      :host([icon="format_italic"]):before { content: "\\e23f" } 
      :host([icon="format_line_spacing"]):before { content: "\\e240" } 
      :host([icon="format_list_bulleted"]):before { content: "\\e241" } 
      :host([icon="format_list_numbered"]):before { content: "\\e242" } 
      :host([icon="format_paint"]):before { content: "\\e243" } 
      :host([icon="format_quote"]):before { content: "\\e244" } 
      :host([icon="format_shapes"]):before { content: "\\e25e" } 
      :host([icon="format_size"]):before { content: "\\e245" } 
      :host([icon="format_strikethrough"]):before { content: "\\e246" } 
      :host([icon="format_textdirection_l_to_r"]):before { content: "\\e247" } 
      :host([icon="format_textdirection_r_to_l"]):before { content: "\\e248" } 
      :host([icon="format_underlined"]):before { content: "\\e249" } 
      :host([icon="forum"]):before { content: "\\e0bf" } 
      :host([icon="forward"]):before { content: "\\e154" } 
      :host([icon="forward_10"]):before { content: "\\e056" } 
      :host([icon="forward_30"]):before { content: "\\e057" } 
      :host([icon="forward_5"]):before { content: "\\e058" } 
      :host([icon="free_breakfast"]):before { content: "\\eb44" } 
      :host([icon="fullscreen"]):before { content: "\\e5d0" } 
      :host([icon="fullscreen_exit"]):before { content: "\\e5d1" } 
      :host([icon="functions"]):before { content: "\\e24a" } 
      :host([icon="g_translate"]):before { content: "\\e927" } 
      :host([icon="gamepad"]):before { content: "\\e30f" } 
      :host([icon="games"]):before { content: "\\e021" } 
      :host([icon="gavel"]):before { content: "\\e90e" } 
      :host([icon="gesture"]):before { content: "\\e155" } 
      :host([icon="get_app"]):before { content: "\\e884" } 
      :host([icon="gif"]):before { content: "\\e908" } 
      :host([icon="golf_course"]):before { content: "\\eb45" } 
      :host([icon="gps_fixed"]):before { content: "\\e1b3" } 
      :host([icon="gps_not_fixed"]):before { content: "\\e1b4" } 
      :host([icon="gps_off"]):before { content: "\\e1b5" } 
      :host([icon="grade"]):before { content: "\\e885" } 
      :host([icon="gradient"]):before { content: "\\e3e9" } 
      :host([icon="grain"]):before { content: "\\e3ea" } 
      :host([icon="graphic_eq"]):before { content: "\\e1b8" } 
      :host([icon="grid_off"]):before { content: "\\e3eb" } 
      :host([icon="grid_on"]):before { content: "\\e3ec" } 
      :host([icon="group"]):before { content: "\\e7ef" } 
      :host([icon="group_add"]):before { content: "\\e7f0" } 
      :host([icon="group_work"]):before { content: "\\e886" } 
      :host([icon="hd"]):before { content: "\\e052" } 
      :host([icon="hdr_off"]):before { content: "\\e3ed" } 
      :host([icon="hdr_on"]):before { content: "\\e3ee" } 
      :host([icon="hdr_strong"]):before { content: "\\e3f1" } 
      :host([icon="hdr_weak"]):before { content: "\\e3f2" } 
      :host([icon="headset"]):before { content: "\\e310" } 
      :host([icon="headset_mic"]):before { content: "\\e311" } 
      :host([icon="healing"]):before { content: "\\e3f3" } 
      :host([icon="hearing"]):before { content: "\\e023" } 
      :host([icon="help"]):before { content: "\\e887" } 
      :host([icon="help_outline"]):before { content: "\\e8fd" } 
      :host([icon="high_quality"]):before { content: "\\e024" } 
      :host([icon="highlight"]):before { content: "\\e25f" } 
      :host([icon="highlight_off"]):before { content: "\\e888" } 
      :host([icon="history"]):before { content: "\\e889" } 
      :host([icon="home"]):before { content: "\\e88a" } 
      :host([icon="hot_tub"]):before { content: "\\eb46" } 
      :host([icon="hotel"]):before { content: "\\e53a" } 
      :host([icon="hourglass_empty"]):before { content: "\\e88b" } 
      :host([icon="hourglass_full"]):before { content: "\\e88c" } 
      :host([icon="http"]):before { content: "\\e902" } 
      :host([icon="https"]):before { content: "\\e88d" } 
      :host([icon="image"]):before { content: "\\e3f4" } 
      :host([icon="image_aspect_ratio"]):before { content: "\\e3f5" } 
      :host([icon="import_contacts"]):before { content: "\\e0e0" } 
      :host([icon="import_export"]):before { content: "\\e0c3" } 
      :host([icon="important_devices"]):before { content: "\\e912" } 
      :host([icon="inbox"]):before { content: "\\e156" } 
      :host([icon="indeterminate_check_box"]):before { content: "\\e909" } 
      :host([icon="info"]):before { content: "\\e88e" } 
      :host([icon="info_outline"]):before { content: "\\e88f" } 
      :host([icon="input"]):before { content: "\\e890" } 
      :host([icon="insert_chart"]):before { content: "\\e24b" } 
      :host([icon="insert_comment"]):before { content: "\\e24c" } 
      :host([icon="insert_drive_file"]):before { content: "\\e24d" } 
      :host([icon="insert_emoticon"]):before { content: "\\e24e" } 
      :host([icon="insert_invitation"]):before { content: "\\e24f" } 
      :host([icon="insert_link"]):before { content: "\\e250" } 
      :host([icon="insert_photo"]):before { content: "\\e251" } 
      :host([icon="invert_colors"]):before { content: "\\e891" } 
      :host([icon="invert_colors_off"]):before { content: "\\e0c4" } 
      :host([icon="iso"]):before { content: "\\e3f6" } 
      :host([icon="keyboard"]):before { content: "\\e312" } 
      :host([icon="keyboard_arrow_down"]):before { content: "\\e313" } 
      :host([icon="keyboard_arrow_left"]):before { content: "\\e314" } 
      :host([icon="keyboard_arrow_right"]):before { content: "\\e315" } 
      :host([icon="keyboard_arrow_up"]):before { content: "\\e316" } 
      :host([icon="keyboard_backspace"]):before { content: "\\e317" } 
      :host([icon="keyboard_capslock"]):before { content: "\\e318" } 
      :host([icon="keyboard_hide"]):before { content: "\\e31a" } 
      :host([icon="keyboard_return"]):before { content: "\\e31b" } 
      :host([icon="keyboard_tab"]):before { content: "\\e31c" } 
      :host([icon="keyboard_voice"]):before { content: "\\e31d" } 
      :host([icon="kitchen"]):before { content: "\\eb47" } 
      :host([icon="label"]):before { content: "\\e892" } 
      :host([icon="label_outline"]):before { content: "\\e893" } 
      :host([icon="landscape"]):before { content: "\\e3f7" } 
      :host([icon="language"]):before { content: "\\e894" } 
      :host([icon="laptop"]):before { content: "\\e31e" } 
      :host([icon="laptop_chromebook"]):before { content: "\\e31f" } 
      :host([icon="laptop_mac"]):before { content: "\\e320" } 
      :host([icon="laptop_windows"]):before { content: "\\e321" } 
      :host([icon="last_page"]):before { content: "\\e5dd" } 
      :host([icon="launch"]):before { content: "\\e895" } 
      :host([icon="layers"]):before { content: "\\e53b" } 
      :host([icon="layers_clear"]):before { content: "\\e53c" } 
      :host([icon="leak_add"]):before { content: "\\e3f8" } 
      :host([icon="leak_remove"]):before { content: "\\e3f9" } 
      :host([icon="lens"]):before { content: "\\e3fa" } 
      :host([icon="library_add"]):before { content: "\\e02e" } 
      :host([icon="library_books"]):before { content: "\\e02f" } 
      :host([icon="library_music"]):before { content: "\\e030" } 
      :host([icon="lightbulb_outline"]):before { content: "\\e90f" } 
      :host([icon="line_style"]):before { content: "\\e919" } 
      :host([icon="line_weight"]):before { content: "\\e91a" } 
      :host([icon="linear_scale"]):before { content: "\\e260" } 
      :host([icon="link"]):before { content: "\\e157" } 
      :host([icon="linked_camera"]):before { content: "\\e438" } 
      :host([icon="list"]):before { content: "\\e896" } 
      :host([icon="live_help"]):before { content: "\\e0c6" } 
      :host([icon="live_tv"]):before { content: "\\e639" } 
      :host([icon="local_activity"]):before { content: "\\e53f" } 
      :host([icon="local_airport"]):before { content: "\\e53d" } 
      :host([icon="local_atm"]):before { content: "\\e53e" } 
      :host([icon="local_bar"]):before { content: "\\e540" } 
      :host([icon="local_cafe"]):before { content: "\\e541" } 
      :host([icon="local_car_wash"]):before { content: "\\e542" } 
      :host([icon="local_convenience_store"]):before { content: "\\e543" } 
      :host([icon="local_dining"]):before { content: "\\e556" } 
      :host([icon="local_drink"]):before { content: "\\e544" } 
      :host([icon="local_florist"]):before { content: "\\e545" } 
      :host([icon="local_gas_station"]):before { content: "\\e546" } 
      :host([icon="local_grocery_store"]):before { content: "\\e547" } 
      :host([icon="local_hospital"]):before { content: "\\e548" } 
      :host([icon="local_hotel"]):before { content: "\\e549" } 
      :host([icon="local_laundry_service"]):before { content: "\\e54a" } 
      :host([icon="local_library"]):before { content: "\\e54b" } 
      :host([icon="local_mall"]):before { content: "\\e54c" } 
      :host([icon="local_movies"]):before { content: "\\e54d" } 
      :host([icon="local_offer"]):before { content: "\\e54e" } 
      :host([icon="local_parking"]):before { content: "\\e54f" } 
      :host([icon="local_pharmacy"]):before { content: "\\e550" } 
      :host([icon="local_phone"]):before { content: "\\e551" } 
      :host([icon="local_pizza"]):before { content: "\\e552" } 
      :host([icon="local_play"]):before { content: "\\e553" } 
      :host([icon="local_post_office"]):before { content: "\\e554" } 
      :host([icon="local_printshop"]):before { content: "\\e555" } 
      :host([icon="local_see"]):before { content: "\\e557" } 
      :host([icon="local_shipping"]):before { content: "\\e558" } 
      :host([icon="local_taxi"]):before { content: "\\e559" } 
      :host([icon="location_city"]):before { content: "\\e7f1" } 
      :host([icon="location_disabled"]):before { content: "\\e1b6" } 
      :host([icon="location_off"]):before { content: "\\e0c7" } 
      :host([icon="location_on"]):before { content: "\\e0c8" } 
      :host([icon="location_searching"]):before { content: "\\e1b7" } 
      :host([icon="lock"]):before { content: "\\e897" } 
      :host([icon="lock_open"]):before { content: "\\e898" } 
      :host([icon="lock_outline"]):before { content: "\\e899" } 
      :host([icon="looks"]):before { content: "\\e3fc" } 
      :host([icon="looks_3"]):before { content: "\\e3fb" } 
      :host([icon="looks_4"]):before { content: "\\e3fd" } 
      :host([icon="looks_5"]):before { content: "\\e3fe" } 
      :host([icon="looks_6"]):before { content: "\\e3ff" } 
      :host([icon="looks_one"]):before { content: "\\e400" } 
      :host([icon="looks_two"]):before { content: "\\e401" } 
      :host([icon="loop"]):before { content: "\\e028" } 
      :host([icon="loupe"]):before { content: "\\e402" } 
      :host([icon="low_priority"]):before { content: "\\e16d" } 
      :host([icon="loyalty"]):before { content: "\\e89a" } 
      :host([icon="mail"]):before { content: "\\e158" } 
      :host([icon="mail_outline"]):before { content: "\\e0e1" } 
      :host([icon="map"]):before { content: "\\e55b" } 
      :host([icon="markunread"]):before { content: "\\e159" } 
      :host([icon="markunread_mailbox"]):before { content: "\\e89b" } 
      :host([icon="memory"]):before { content: "\\e322" } 
      :host([icon="menu"]):before { content: "\\e5d2" } 
      :host([icon="merge_type"]):before { content: "\\e252" } 
      :host([icon="message"]):before { content: "\\e0c9" } 
      :host([icon="mic"]):before { content: "\\e029" } 
      :host([icon="mic_none"]):before { content: "\\e02a" } 
      :host([icon="mic_off"]):before { content: "\\e02b" } 
      :host([icon="mms"]):before { content: "\\e618" } 
      :host([icon="mode_comment"]):before { content: "\\e253" } 
      :host([icon="mode_edit"]):before { content: "\\e254" } 
      :host([icon="monetization_on"]):before { content: "\\e263" } 
      :host([icon="money_off"]):before { content: "\\e25c" } 
      :host([icon="monochrome_photos"]):before { content: "\\e403" } 
      :host([icon="mood"]):before { content: "\\e7f2" } 
      :host([icon="mood_bad"]):before { content: "\\e7f3" } 
      :host([icon="more"]):before { content: "\\e619" } 
      :host([icon="more_horiz"]):before { content: "\\e5d3" } 
      :host([icon="more_vert"]):before { content: "\\e5d4" } 
      :host([icon="motorcycle"]):before { content: "\\e91b" } 
      :host([icon="mouse"]):before { content: "\\e323" } 
      :host([icon="move_to_inbox"]):before { content: "\\e168" } 
      :host([icon="movie"]):before { content: "\\e02c" } 
      :host([icon="movie_creation"]):before { content: "\\e404" } 
      :host([icon="movie_filter"]):before { content: "\\e43a" } 
      :host([icon="multiline_chart"]):before { content: "\\e6df" } 
      :host([icon="music_note"]):before { content: "\\e405" } 
      :host([icon="music_video"]):before { content: "\\e063" } 
      :host([icon="my_location"]):before { content: "\\e55c" } 
      :host([icon="nature"]):before { content: "\\e406" } 
      :host([icon="nature_people"]):before { content: "\\e407" } 
      :host([icon="navigate_before"]):before { content: "\\e408" } 
      :host([icon="navigate_next"]):before { content: "\\e409" } 
      :host([icon="navigation"]):before { content: "\\e55d" } 
      :host([icon="near_me"]):before { content: "\\e569" } 
      :host([icon="network_cell"]):before { content: "\\e1b9" } 
      :host([icon="network_check"]):before { content: "\\e640" } 
      :host([icon="network_locked"]):before { content: "\\e61a" } 
      :host([icon="network_wifi"]):before { content: "\\e1ba" } 
      :host([icon="new_releases"]):before { content: "\\e031" } 
      :host([icon="next_week"]):before { content: "\\e16a" } 
      :host([icon="nfc"]):before { content: "\\e1bb" } 
      :host([icon="no_encryption"]):before { content: "\\e641" } 
      :host([icon="no_sim"]):before { content: "\\e0cc" } 
      :host([icon="not_interested"]):before { content: "\\e033" } 
      :host([icon="note"]):before { content: "\\e06f" } 
      :host([icon="note_add"]):before { content: "\\e89c" } 
      :host([icon="notifications"]):before { content: "\\e7f4" } 
      :host([icon="notifications_active"]):before { content: "\\e7f7" } 
      :host([icon="notifications_none"]):before { content: "\\e7f5" } 
      :host([icon="notifications_off"]):before { content: "\\e7f6" } 
      :host([icon="notifications_paused"]):before { content: "\\e7f8" } 
      :host([icon="offline_pin"]):before { content: "\\e90a" } 
      :host([icon="ondemand_video"]):before { content: "\\e63a" } 
      :host([icon="opacity"]):before { content: "\\e91c" } 
      :host([icon="open_in_browser"]):before { content: "\\e89d" } 
      :host([icon="open_in_new"]):before { content: "\\e89e" } 
      :host([icon="open_with"]):before { content: "\\e89f" } 
      :host([icon="pages"]):before { content: "\\e7f9" } 
      :host([icon="pageview"]):before { content: "\\e8a0" } 
      :host([icon="palette"]):before { content: "\\e40a" } 
      :host([icon="pan_tool"]):before { content: "\\e925" } 
      :host([icon="panorama"]):before { content: "\\e40b" } 
      :host([icon="panorama_fish_eye"]):before { content: "\\e40c" } 
      :host([icon="panorama_horizontal"]):before { content: "\\e40d" } 
      :host([icon="panorama_vertical"]):before { content: "\\e40e" } 
      :host([icon="panorama_wide_angle"]):before { content: "\\e40f" } 
      :host([icon="party_mode"]):before { content: "\\e7fa" } 
      :host([icon="pause"]):before { content: "\\e034" } 
      :host([icon="pause_circle_filled"]):before { content: "\\e035" } 
      :host([icon="pause_circle_outline"]):before { content: "\\e036" } 
      :host([icon="payment"]):before { content: "\\e8a1" } 
      :host([icon="people"]):before { content: "\\e7fb" } 
      :host([icon="people_outline"]):before { content: "\\e7fc" } 
      :host([icon="perm_camera_mic"]):before { content: "\\e8a2" } 
      :host([icon="perm_contact_calendar"]):before { content: "\\e8a3" } 
      :host([icon="perm_data_setting"]):before { content: "\\e8a4" } 
      :host([icon="perm_device_information"]):before { content: "\\e8a5" } 
      :host([icon="perm_identity"]):before { content: "\\e8a6" } 
      :host([icon="perm_media"]):before { content: "\\e8a7" } 
      :host([icon="perm_phone_msg"]):before { content: "\\e8a8" } 
      :host([icon="perm_scan_wifi"]):before { content: "\\e8a9" } 
      :host([icon="person"]):before { content: "\\e7fd" } 
      :host([icon="person_add"]):before { content: "\\e7fe" } 
      :host([icon="person_outline"]):before { content: "\\e7ff" } 
      :host([icon="person_pin"]):before { content: "\\e55a" } 
      :host([icon="person_pin_circle"]):before { content: "\\e56a" } 
      :host([icon="personal_video"]):before { content: "\\e63b" } 
      :host([icon="pets"]):before { content: "\\e91d" } 
      :host([icon="phone"]):before { content: "\\e0cd" } 
      :host([icon="phone_android"]):before { content: "\\e324" } 
      :host([icon="phone_bluetooth_speaker"]):before { content: "\\e61b" } 
      :host([icon="phone_forwarded"]):before { content: "\\e61c" } 
      :host([icon="phone_in_talk"]):before { content: "\\e61d" } 
      :host([icon="phone_iphone"]):before { content: "\\e325" } 
      :host([icon="phone_locked"]):before { content: "\\e61e" } 
      :host([icon="phone_missed"]):before { content: "\\e61f" } 
      :host([icon="phone_paused"]):before { content: "\\e620" } 
      :host([icon="phonelink"]):before { content: "\\e326" } 
      :host([icon="phonelink_erase"]):before { content: "\\e0db" } 
      :host([icon="phonelink_lock"]):before { content: "\\e0dc" } 
      :host([icon="phonelink_off"]):before { content: "\\e327" } 
      :host([icon="phonelink_ring"]):before { content: "\\e0dd" } 
      :host([icon="phonelink_setup"]):before { content: "\\e0de" } 
      :host([icon="photo"]):before { content: "\\e410" } 
      :host([icon="photo_album"]):before { content: "\\e411" } 
      :host([icon="photo_camera"]):before { content: "\\e412" } 
      :host([icon="photo_filter"]):before { content: "\\e43b" } 
      :host([icon="photo_library"]):before { content: "\\e413" } 
      :host([icon="photo_size_select_actual"]):before { content: "\\e432" } 
      :host([icon="photo_size_select_large"]):before { content: "\\e433" } 
      :host([icon="photo_size_select_small"]):before { content: "\\e434" } 
      :host([icon="picture_as_pdf"]):before { content: "\\e415" } 
      :host([icon="picture_in_picture"]):before { content: "\\e8aa" } 
      :host([icon="picture_in_picture_alt"]):before { content: "\\e911" } 
      :host([icon="pie_chart"]):before { content: "\\e6c4" } 
      :host([icon="pie_chart_outlined"]):before { content: "\\e6c5" } 
      :host([icon="pin_drop"]):before { content: "\\e55e" } 
      :host([icon="place"]):before { content: "\\e55f" } 
      :host([icon="play_arrow"]):before { content: "\\e037" } 
      :host([icon="play_circle_filled"]):before { content: "\\e038" } 
      :host([icon="play_circle_outline"]):before { content: "\\e039" } 
      :host([icon="play_for_work"]):before { content: "\\e906" } 
      :host([icon="playlist_add"]):before { content: "\\e03b" } 
      :host([icon="playlist_add_check"]):before { content: "\\e065" } 
      :host([icon="playlist_play"]):before { content: "\\e05f" } 
      :host([icon="plus_one"]):before { content: "\\e800" } 
      :host([icon="poll"]):before { content: "\\e801" } 
      :host([icon="polymer"]):before { content: "\\e8ab" } 
      :host([icon="pool"]):before { content: "\\eb48" } 
      :host([icon="portable_wifi_off"]):before { content: "\\e0ce" } 
      :host([icon="portrait"]):before { content: "\\e416" } 
      :host([icon="power"]):before { content: "\\e63c" } 
      :host([icon="power_input"]):before { content: "\\e336" } 
      :host([icon="power_settings_new"]):before { content: "\\e8ac" } 
      :host([icon="pregnant_woman"]):before { content: "\\e91e" } 
      :host([icon="present_to_all"]):before { content: "\\e0df" } 
      :host([icon="print"]):before { content: "\\e8ad" } 
      :host([icon="priority_high"]):before { content: "\\e645" } 
      :host([icon="public"]):before { content: "\\e80b" } 
      :host([icon="publish"]):before { content: "\\e255" } 
      :host([icon="query_builder"]):before { content: "\\e8ae" } 
      :host([icon="question_answer"]):before { content: "\\e8af" } 
      :host([icon="queue"]):before { content: "\\e03c" } 
      :host([icon="queue_music"]):before { content: "\\e03d" } 
      :host([icon="queue_play_next"]):before { content: "\\e066" } 
      :host([icon="radio"]):before { content: "\\e03e" } 
      :host([icon="radio_button_checked"]):before { content: "\\e837" } 
      :host([icon="radio_button_unchecked"]):before { content: "\\e836" } 
      :host([icon="rate_review"]):before { content: "\\e560" } 
      :host([icon="receipt"]):before { content: "\\e8b0" } 
      :host([icon="recent_actors"]):before { content: "\\e03f" } 
      :host([icon="record_voice_over"]):before { content: "\\e91f" } 
      :host([icon="redeem"]):before { content: "\\e8b1" } 
      :host([icon="redo"]):before { content: "\\e15a" } 
      :host([icon="refresh"]):before { content: "\\e5d5" } 
      :host([icon="remove"]):before { content: "\\e15b" } 
      :host([icon="remove_circle"]):before { content: "\\e15c" } 
      :host([icon="remove_circle_outline"]):before { content: "\\e15d" } 
      :host([icon="remove_from_queue"]):before { content: "\\e067" } 
      :host([icon="remove_red_eye"]):before { content: "\\e417" } 
      :host([icon="remove_shopping_cart"]):before { content: "\\e928" } 
      :host([icon="reorder"]):before { content: "\\e8fe" } 
      :host([icon="repeat"]):before { content: "\\e040" } 
      :host([icon="repeat_one"]):before { content: "\\e041" } 
      :host([icon="replay"]):before { content: "\\e042" } 
      :host([icon="replay_10"]):before { content: "\\e059" } 
      :host([icon="replay_30"]):before { content: "\\e05a" } 
      :host([icon="replay_5"]):before { content: "\\e05b" } 
      :host([icon="reply"]):before { content: "\\e15e" } 
      :host([icon="reply_all"]):before { content: "\\e15f" } 
      :host([icon="report"]):before { content: "\\e160" } 
      :host([icon="report_problem"]):before { content: "\\e8b2" } 
      :host([icon="restaurant"]):before { content: "\\e56c" } 
      :host([icon="restaurant_menu"]):before { content: "\\e561" } 
      :host([icon="restore"]):before { content: "\\e8b3" } 
      :host([icon="restore_page"]):before { content: "\\e929" } 
      :host([icon="ring_volume"]):before { content: "\\e0d1" } 
      :host([icon="room"]):before { content: "\\e8b4" } 
      :host([icon="room_service"]):before { content: "\\eb49" } 
      :host([icon="rotate_90_degrees_ccw"]):before { content: "\\e418" } 
      :host([icon="rotate_left"]):before { content: "\\e419" } 
      :host([icon="rotate_right"]):before { content: "\\e41a" } 
      :host([icon="rounded_corner"]):before { content: "\\e920" } 
      :host([icon="router"]):before { content: "\\e328" } 
      :host([icon="rowing"]):before { content: "\\e921" } 
      :host([icon="rss_feed"]):before { content: "\\e0e5" } 
      :host([icon="rv_hookup"]):before { content: "\\e642" } 
      :host([icon="satellite"]):before { content: "\\e562" } 
      :host([icon="save"]):before { content: "\\e161" } 
      :host([icon="scanner"]):before { content: "\\e329" } 
      :host([icon="schedule"]):before { content: "\\e8b5" } 
      :host([icon="school"]):before { content: "\\e80c" } 
      :host([icon="screen_lock_landscape"]):before { content: "\\e1be" } 
      :host([icon="screen_lock_portrait"]):before { content: "\\e1bf" } 
      :host([icon="screen_lock_rotation"]):before { content: "\\e1c0" } 
      :host([icon="screen_rotation"]):before { content: "\\e1c1" } 
      :host([icon="screen_share"]):before { content: "\\e0e2" } 
      :host([icon="sd_card"]):before { content: "\\e623" } 
      :host([icon="sd_storage"]):before { content: "\\e1c2" } 
      :host([icon="search"]):before { content: "\\e8b6" } 
      :host([icon="security"]):before { content: "\\e32a" } 
      :host([icon="select_all"]):before { content: "\\e162" } 
      :host([icon="send"]):before { content: "\\e163" } 
      :host([icon="sentiment_dissatisfied"]):before { content: "\\e811" } 
      :host([icon="sentiment_neutral"]):before { content: "\\e812" } 
      :host([icon="sentiment_satisfied"]):before { content: "\\e813" } 
      :host([icon="sentiment_very_dissatisfied"]):before { content: "\\e814" } 
      :host([icon="sentiment_very_satisfied"]):before { content: "\\e815" } 
      :host([icon="settings"]):before { content: "\\e8b8" } 
      :host([icon="settings_applications"]):before { content: "\\e8b9" } 
      :host([icon="settings_backup_restore"]):before { content: "\\e8ba" } 
      :host([icon="settings_bluetooth"]):before { content: "\\e8bb" } 
      :host([icon="settings_brightness"]):before { content: "\\e8bd" } 
      :host([icon="settings_cell"]):before { content: "\\e8bc" } 
      :host([icon="settings_ethernet"]):before { content: "\\e8be" } 
      :host([icon="settings_input_antenna"]):before { content: "\\e8bf" } 
      :host([icon="settings_input_component"]):before { content: "\\e8c0" } 
      :host([icon="settings_input_composite"]):before { content: "\\e8c1" } 
      :host([icon="settings_input_hdmi"]):before { content: "\\e8c2" } 
      :host([icon="settings_input_svideo"]):before { content: "\\e8c3" } 
      :host([icon="settings_overscan"]):before { content: "\\e8c4" } 
      :host([icon="settings_phone"]):before { content: "\\e8c5" } 
      :host([icon="settings_power"]):before { content: "\\e8c6" } 
      :host([icon="settings_remote"]):before { content: "\\e8c7" } 
      :host([icon="settings_system_daydream"]):before { content: "\\e1c3" } 
      :host([icon="settings_voice"]):before { content: "\\e8c8" } 
      :host([icon="share"]):before { content: "\\e80d" } 
      :host([icon="shop"]):before { content: "\\e8c9" } 
      :host([icon="shop_two"]):before { content: "\\e8ca" } 
      :host([icon="shopping_basket"]):before { content: "\\e8cb" } 
      :host([icon="shopping_cart"]):before { content: "\\e8cc" } 
      :host([icon="short_text"]):before { content: "\\e261" } 
      :host([icon="show_chart"]):before { content: "\\e6e1" } 
      :host([icon="shuffle"]):before { content: "\\e043" } 
      :host([icon="signal_cellular_4_bar"]):before { content: "\\e1c8" } 
      :host([icon="signal_cellular_connected_no_internet_4_bar"]):before { content: "\\e1cd" } 
      :host([icon="signal_cellular_no_sim"]):before { content: "\\e1ce" } 
      :host([icon="signal_cellular_null"]):before { content: "\\e1cf" } 
      :host([icon="signal_cellular_off"]):before { content: "\\e1d0" } 
      :host([icon="signal_wifi_4_bar"]):before { content: "\\e1d8" } 
      :host([icon="signal_wifi_4_bar_lock"]):before { content: "\\e1d9" } 
      :host([icon="signal_wifi_off"]):before { content: "\\e1da" } 
      :host([icon="sim_card"]):before { content: "\\e32b" } 
      :host([icon="sim_card_alert"]):before { content: "\\e624" } 
      :host([icon="skip_next"]):before { content: "\\e044" } 
      :host([icon="skip_previous"]):before { content: "\\e045" } 
      :host([icon="slideshow"]):before { content: "\\e41b" } 
      :host([icon="slow_motion_video"]):before { content: "\\e068" } 
      :host([icon="smartphone"]):before { content: "\\e32c" } 
      :host([icon="smoke_free"]):before { content: "\\eb4a" } 
      :host([icon="smoking_rooms"]):before { content: "\\eb4b" } 
      :host([icon="sms"]):before { content: "\\e625" } 
      :host([icon="sms_failed"]):before { content: "\\e626" } 
      :host([icon="snooze"]):before { content: "\\e046" } 
      :host([icon="sort"]):before { content: "\\e164" } 
      :host([icon="sort_by_alpha"]):before { content: "\\e053" } 
      :host([icon="spa"]):before { content: "\\eb4c" } 
      :host([icon="space_bar"]):before { content: "\\e256" } 
      :host([icon="speaker"]):before { content: "\\e32d" } 
      :host([icon="speaker_group"]):before { content: "\\e32e" } 
      :host([icon="speaker_notes"]):before { content: "\\e8cd" } 
      :host([icon="speaker_notes_off"]):before { content: "\\e92a" } 
      :host([icon="speaker_phone"]):before { content: "\\e0d2" } 
      :host([icon="spellcheck"]):before { content: "\\e8ce" } 
      :host([icon="star"]):before { content: "\\e838" } 
      :host([icon="star_border"]):before { content: "\\e83a" } 
      :host([icon="star_half"]):before { content: "\\e839" } 
      :host([icon="stars"]):before { content: "\\e8d0" } 
      :host([icon="stay_current_landscape"]):before { content: "\\e0d3" } 
      :host([icon="stay_current_portrait"]):before { content: "\\e0d4" } 
      :host([icon="stay_primary_landscape"]):before { content: "\\e0d5" } 
      :host([icon="stay_primary_portrait"]):before { content: "\\e0d6" } 
      :host([icon="stop"]):before { content: "\\e047" } 
      :host([icon="stop_screen_share"]):before { content: "\\e0e3" } 
      :host([icon="storage"]):before { content: "\\e1db" } 
      :host([icon="store"]):before { content: "\\e8d1" } 
      :host([icon="store_mall_directory"]):before { content: "\\e563" } 
      :host([icon="straighten"]):before { content: "\\e41c" } 
      :host([icon="streetview"]):before { content: "\\e56e" } 
      :host([icon="strikethrough_s"]):before { content: "\\e257" } 
      :host([icon="style"]):before { content: "\\e41d" } 
      :host([icon="subdirectory_arrow_left"]):before { content: "\\e5d9" } 
      :host([icon="subdirectory_arrow_right"]):before { content: "\\e5da" } 
      :host([icon="subject"]):before { content: "\\e8d2" } 
      :host([icon="subscriptions"]):before { content: "\\e064" } 
      :host([icon="subtitles"]):before { content: "\\e048" } 
      :host([icon="subway"]):before { content: "\\e56f" } 
      :host([icon="supervisor_account"]):before { content: "\\e8d3" } 
      :host([icon="surround_sound"]):before { content: "\\e049" } 
      :host([icon="swap_calls"]):before { content: "\\e0d7" } 
      :host([icon="swap_horiz"]):before { content: "\\e8d4" } 
      :host([icon="swap_vert"]):before { content: "\\e8d5" } 
      :host([icon="swap_vertical_circle"]):before { content: "\\e8d6" } 
      :host([icon="switch_camera"]):before { content: "\\e41e" } 
      :host([icon="switch_video"]):before { content: "\\e41f" } 
      :host([icon="sync"]):before { content: "\\e627" } 
      :host([icon="sync_disabled"]):before { content: "\\e628" } 
      :host([icon="sync_problem"]):before { content: "\\e629" } 
      :host([icon="system_update"]):before { content: "\\e62a" } 
      :host([icon="system_update_alt"]):before { content: "\\e8d7" } 
      :host([icon="tab"]):before { content: "\\e8d8" } 
      :host([icon="tab_unselected"]):before { content: "\\e8d9" } 
      :host([icon="tablet"]):before { content: "\\e32f" } 
      :host([icon="tablet_android"]):before { content: "\\e330" } 
      :host([icon="tablet_mac"]):before { content: "\\e331" } 
      :host([icon="tag_faces"]):before { content: "\\e420" } 
      :host([icon="tap_and_play"]):before { content: "\\e62b" } 
      :host([icon="terrain"]):before { content: "\\e564" } 
      :host([icon="text_fields"]):before { content: "\\e262" } 
      :host([icon="text_format"]):before { content: "\\e165" } 
      :host([icon="textsms"]):before { content: "\\e0d8" } 
      :host([icon="texture"]):before { content: "\\e421" } 
      :host([icon="theaters"]):before { content: "\\e8da" } 
      :host([icon="thumb_down"]):before { content: "\\e8db" } 
      :host([icon="thumb_up"]):before { content: "\\e8dc" } 
      :host([icon="thumbs_up_down"]):before { content: "\\e8dd" } 
      :host([icon="time_to_leave"]):before { content: "\\e62c" } 
      :host([icon="timelapse"]):before { content: "\\e422" } 
      :host([icon="timeline"]):before { content: "\\e922" } 
      :host([icon="timer"]):before { content: "\\e425" } 
      :host([icon="timer_10"]):before { content: "\\e423" } 
      :host([icon="timer_3"]):before { content: "\\e424" } 
      :host([icon="timer_off"]):before { content: "\\e426" } 
      :host([icon="title"]):before { content: "\\e264" } 
      :host([icon="toc"]):before { content: "\\e8de" } 
      :host([icon="today"]):before { content: "\\e8df" } 
      :host([icon="toll"]):before { content: "\\e8e0" } 
      :host([icon="tonality"]):before { content: "\\e427" } 
      :host([icon="touch_app"]):before { content: "\\e913" } 
      :host([icon="toys"]):before { content: "\\e332" } 
      :host([icon="track_changes"]):before { content: "\\e8e1" } 
      :host([icon="traffic"]):before { content: "\\e565" } 
      :host([icon="train"]):before { content: "\\e570" } 
      :host([icon="tram"]):before { content: "\\e571" } 
      :host([icon="transfer_within_a_station"]):before { content: "\\e572" } 
      :host([icon="transform"]):before { content: "\\e428" } 
      :host([icon="translate"]):before { content: "\\e8e2" } 
      :host([icon="trending_down"]):before { content: "\\e8e3" } 
      :host([icon="trending_flat"]):before { content: "\\e8e4" } 
      :host([icon="trending_up"]):before { content: "\\e8e5" } 
      :host([icon="tune"]):before { content: "\\e429" } 
      :host([icon="turned_in"]):before { content: "\\e8e6" } 
      :host([icon="turned_in_not"]):before { content: "\\e8e7" } 
      :host([icon="tv"]):before { content: "\\e333" } 
      :host([icon="unarchive"]):before { content: "\\e169" } 
      :host([icon="undo"]):before { content: "\\e166" } 
      :host([icon="unfold_less"]):before { content: "\\e5d6" } 
      :host([icon="unfold_more"]):before { content: "\\e5d7" } 
      :host([icon="update"]):before { content: "\\e923" } 
      :host([icon="usb"]):before { content: "\\e1e0" } 
      :host([icon="verified_user"]):before { content: "\\e8e8" } 
      :host([icon="vertical_align_bottom"]):before { content: "\\e258" } 
      :host([icon="vertical_align_center"]):before { content: "\\e259" } 
      :host([icon="vertical_align_top"]):before { content: "\\e25a" } 
      :host([icon="vibration"]):before { content: "\\e62d" } 
      :host([icon="video_call"]):before { content: "\\e070" } 
      :host([icon="video_label"]):before { content: "\\e071" } 
      :host([icon="video_library"]):before { content: "\\e04a" } 
      :host([icon="videocam"]):before { content: "\\e04b" } 
      :host([icon="videocam_off"]):before { content: "\\e04c" } 
      :host([icon="videogame_asset"]):before { content: "\\e338" } 
      :host([icon="view_agenda"]):before { content: "\\e8e9" } 
      :host([icon="view_array"]):before { content: "\\e8ea" } 
      :host([icon="view_carousel"]):before { content: "\\e8eb" } 
      :host([icon="view_column"]):before { content: "\\e8ec" } 
      :host([icon="view_comfy"]):before { content: "\\e42a" } 
      :host([icon="view_compact"]):before { content: "\\e42b" } 
      :host([icon="view_day"]):before { content: "\\e8ed" } 
      :host([icon="view_headline"]):before { content: "\\e8ee" } 
      :host([icon="view_list"]):before { content: "\\e8ef" } 
      :host([icon="view_module"]):before { content: "\\e8f0" } 
      :host([icon="view_quilt"]):before { content: "\\e8f1" } 
      :host([icon="view_stream"]):before { content: "\\e8f2" } 
      :host([icon="view_week"]):before { content: "\\e8f3" } 
      :host([icon="vignette"]):before { content: "\\e435" } 
      :host([icon="visibility"]):before { content: "\\e8f4" } 
      :host([icon="visibility_off"]):before { content: "\\e8f5" } 
      :host([icon="voice_chat"]):before { content: "\\e62e" } 
      :host([icon="voicemail"]):before { content: "\\e0d9" } 
      :host([icon="volume_down"]):before { content: "\\e04d" } 
      :host([icon="volume_mute"]):before { content: "\\e04e" } 
      :host([icon="volume_off"]):before { content: "\\e04f" } 
      :host([icon="volume_up"]):before { content: "\\e050" } 
      :host([icon="vpn_key"]):before { content: "\\e0da" } 
      :host([icon="vpn_lock"]):before { content: "\\e62f" } 
      :host([icon="wallpaper"]):before { content: "\\e1bc" } 
      :host([icon="warning"]):before { content: "\\e002" } 
      :host([icon="watch"]):before { content: "\\e334" } 
      :host([icon="watch_later"]):before { content: "\\e924" } 
      :host([icon="wb_auto"]):before { content: "\\e42c" } 
      :host([icon="wb_cloudy"]):before { content: "\\e42d" } 
      :host([icon="wb_incandescent"]):before { content: "\\e42e" } 
      :host([icon="wb_iridescent"]):before { content: "\\e436" } 
      :host([icon="wb_sunny"]):before { content: "\\e430" } 
      :host([icon="wc"]):before { content: "\\e63d" } 
      :host([icon="web"]):before { content: "\\e051" } 
      :host([icon="web_asset"]):before { content: "\\e069" } 
      :host([icon="weekend"]):before { content: "\\e16b" } 
      :host([icon="whatshot"]):before { content: "\\e80e" } 
      :host([icon="widgets"]):before { content: "\\e1bd" } 
      :host([icon="wifi"]):before { content: "\\e63e" } 
      :host([icon="wifi_lock"]):before { content: "\\e1e1" } 
      :host([icon="wifi_tethering"]):before { content: "\\e1e2" } 
      :host([icon="work"]):before { content: "\\e8f9" } 
      :host([icon="wrap_text"]):before { content: "\\e25b" } 
      :host([icon="youtube_searched_for"]):before { content: "\\e8fa" } 
      :host([icon="zoom_in"]):before { content: "\\e8ff" } 
      :host([icon="zoom_out"]):before { content: "\\e900" } 
      :host([icon="zoom_out_map"]):before { content: "\\e56b" } 
    `]}render(){return B`
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&(this.style.color=this.color)}};Oe([K({type:String,reflect:!0})],ze.prototype,"icon",void 0),Oe([K({type:String,reflect:!0})],ze.prototype,"size",void 0),Oe([K({type:String,reflect:!0})],ze.prototype,"color",void 0),Oe([K({type:Boolean,reflect:!0})],ze.prototype,"button",void 0),Oe([K({type:Boolean,reflect:!0})],ze.prototype,"disabled",void 0),ze=Oe([X("wa-icon")],ze);var Re=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ne=class extends ne{constructor(){super(),this.type="text",this.step=1,this.addEventListener("click",()=>this.shadowRoot.querySelector("input").focus())}static get styles(){return[ie,te`
      :host {
        display: flex;
        align-items: center;
        min-height: 40px;
        border-width: 0px 0px 1px 0px;
        border-style: solid;
        border-color: rgba(var(--neutral-1), .2);
        border-radius: 2px;
        box-sizing: border-box;
        padding: 0 8px;
        width: 100%;
        overflow: visible;
        background-color: rgba(var(--neutral-1), .05);
        position: relative;
      }
      :host,
      .label,
      input {
        transition: .1s all ease-in-out;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }
      input {
        background: none;
        border: none;
        padding: 0px;
        outline: none;
        -webkit-appearance: none;
        font: var(--body-1);
        color: var(--text-1);
      }
      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
      }
      /* active */
      :host([active]) {
        border-color: rgba(var(--neutral-1), .6);
      }
      :host([active]) .label {
        color: rgb(var(--accent-1));
      }
      /* disabled */
      :host([disabled]) {
        opacity: .2;
      }
      :host([disabled]),
      :host([readonly]) {
        pointer-events: none;
      }
      /* readonly */
      :host([readonly]) {
        background: transparent;
      }
      /* condensed */
      :host([condensed]) {
        min-height: 32px;
      }
      :host([condensed][value]) .label,
      :host([condensed][active]) .label {
        display: none;
      }
      /* icon */
      :host([icon]) .icon {
        margin-right: 8px;
      }
      /* label */
      .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: var(--body-1);
        color: var(--text-2);
        pointer-events: none;
      }
      :host([value]) .label,
      :host([active]) .label {
        font: var(--body-2);
      }
      :host([label]:not([value]):not([active])) .label {
        margin-bottom: -16px;
      }
      input, 
      .label {
        line-height: 16px;
      }
      /* clear */
      .clear-icon {
        transition: .1s all ease-in-out, .1s opacity ease-in-out .1s;
      }
      :host(:not(:hover):not([active])) .clear-icon {
        transition: .1s all ease-in-out, .1s width ease-in-out .1s, .1s margin ease-in-out .1s;
        width: 0px;
        opacity: 0;
        margin-left: 0;
      }
      /* status */
      .clear-icon,
      .status-icon,
      .increment-icon,
      .select-icon,
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      .status-icon[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status-icon[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status-icon[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
      /* select */
      :host([type="select"]),
      :host([type="select"]) * {
        cursor: pointer !important;
      }
      :host([active]) .select-icon {
        transform: rotate(180deg)
      }
      .select-menu {
        position: absolute;
        top: calc(100% + 1px);
        left: 0px;
        width: 100%;
        max-height: 240px;
        z-index: 3;
        padding: 0px 16px;
        background-color: rgb(var(--base-4));
      }
      slot:not([name]) {
        display: block;
        margin: 0 -8px;
      }
      slot:not([name])::slotted(*) {
        margin-bottom: 0;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active])) {
          border-color: rgba(var(--neutral-1), .4);
        }
      }
    `]}render(){return B`
      ${this.icon?B` <wa-icon class="icon" icon="${this.icon}"></wa-icon> `:""}
      <div class="center">
        ${this.label?B` <label class="label">${this.label}</label> `:""}
        <input id="input"
          type="${this.type}" 
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${this.min}" max="${this.max}" step="${this.step}" pattern="${this.pattern}" 
          .value="${void 0!==this.value?this.value:""}"
          value="${void 0!==this.value?this.value:""}"
          @input=${e=>e.target.value?"number"!==this.type?this.value=e.target.value:"":this.removeAttribute("value")}
          @focus="${e=>this.active=!0}"
          @blur="${e=>this.handleBlur(e)}"
        >
      </div>
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":B` 
        <wa-icon button class="clear-icon" icon="close" @click="${()=>this.handleClear()}"></wa-icon> 
      `}
      <!-- status -->
      ${this.status?B` <wa-icon class="status-icon" icon="${this.getStatusIcon()}"></wa-icon> `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":B` 
        <wa-icon button class="increment-icon" icon="keyboard_arrow_left" @click="${()=>this.handleIncrement("left")}"></wa-icon>
        <wa-icon button class="increment-icon" icon="keyboard_arrow_right" @click="${()=>this.handleIncrement("right")}"></wa-icon>
      `}
      <!-- functions slot -->
      <slot name="functions"></slot>
      <!-- select -->
      ${"select"===this.type?B` 
        <wa-icon button class="select-icon" icon="arrow_drop_down"></wa-icon>
        ${this.active?B` 
          <wa-card class="select-menu">
            <slot @slotchange="${e=>this.handleItems(e)}"></slot> 
          </wa-card> 
        `:""}
      `:""}
    `}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(e){"number"===this.type&&this.validateMinMax(e.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(e){"left"===e?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===e&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(e){let t=e.target.assignedNodes();t.forEach(e=>{"WA-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",o=>{o.target.active&&(t.forEach(e=>{e.active=!1}),o.target.active=!0,this.value=e.label,this.active=!1)})})}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"active"==e&&this.active&&this.handleMenu()}handleMenu(){let e=this,t=function(o){o.target!==e&&(e.active=!1,document.removeEventListener("click",t))};document.addEventListener("click",t)}validateMinMax(e){e&&(this.min&&e<this.min?this.value=this.min:e>this.max?this.value=this.max:this.value=e)}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};Re([K({type:String,reflect:!0})],Ne.prototype,"label",void 0),Re([K({type:String,reflect:!0})],Ne.prototype,"icon",void 0),Re([K({type:String,reflect:!0})],Ne.prototype,"value",void 0),Re([K({type:String,reflect:!0})],Ne.prototype,"type",void 0),Re([K({type:String,reflect:!0})],Ne.prototype,"status",void 0),Re([K({type:Boolean,reflect:!0})],Ne.prototype,"condensed",void 0),Re([K({type:Boolean,reflect:!0})],Ne.prototype,"active",void 0),Re([K({type:Boolean,reflect:!0})],Ne.prototype,"disabled",void 0),Re([K({type:Boolean,reflect:!0})],Ne.prototype,"readonly",void 0),Re([K({type:Boolean,reflect:!0})],Ne.prototype,"noClear",void 0),Re([K({type:String,reflect:!0})],Ne.prototype,"pattern",void 0),Re([K({type:Number,reflect:!0})],Ne.prototype,"min",void 0),Re([K({type:Number,reflect:!0})],Ne.prototype,"max",void 0),Re([K({type:Number,reflect:!0})],Ne.prototype,"step",void 0),Ne=Re([X("wa-input")],Ne);var Be=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let De=class extends ne{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[ie,te`
      :host {
        padding: 8px 0;
        border-radius: 4px;
        display: flex;
        cursor: pointer;
        transition: .1s all ease-in-out;
        overflow: visible;
      }
      wa-icon {
        margin-right: 8px;
      }
      .label {
        flex: 1;
      }
      /* label */
      wa-text {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      slot[name="functions"]::slotted(*) {
        margin-left: 8px;
      }
      :host([active]) {
        padding: 8px;
        margin-left: -8px;
        margin-right: -8px;
        background: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        opacity: .2;
        pointer-events: none;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:not([active]):hover) {
          padding: 8px;
          margin-left: -8px;
          margin-right: -8px;
          background: rgba(var(--neutral-1), .05);
        }
      }
    `]}render(){return B`
      ${this.icon?B` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      `:""}
      ${this.label?B` 
        <wa-text>${this.label}</wa-text> 
      `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};Be([K({type:String,reflect:!0})],De.prototype,"label",void 0),Be([K({type:String,reflect:!0})],De.prototype,"icon",void 0),Be([K({type:Boolean,reflect:!0})],De.prototype,"active",void 0),Be([K({type:Boolean,reflect:!0})],De.prototype,"toggle",void 0),Be([K({type:Boolean,reflect:!0})],De.prototype,"disabled",void 0),De=Be([X("wa-menu-item")],De);var Fe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ae=class extends ne{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        transition: .1s all ease-in-out, 0s top, 0s left;
        position: fixed;
        opacity: 1;
        z-index: 5;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
      }
      :host(:not([visible])) wa-card {
        margin-bottom: -40px;
      }
      wa-card {
        background-color: rgb(var(--base-3));
        box-shadow: var(--shadow-1);
        transition: .2s all ease-in-out, 0s top, 0s left;
      }
    `]}render(){return B`
      <wa-card @click="${e=>e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}">
        <slot name="header" slot="${this.emptyHeader?void 0:"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":B` <wa-icon button icon="close" @click="${()=>this.visible=!1}"></wa-icon> `}
        </slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}};Fe([K({type:String,reflect:!0})],Ae.prototype,"label",void 0),Fe([K({type:String,reflect:!0})],Ae.prototype,"icon",void 0),Fe([K({type:String,reflect:!0})],Ae.prototype,"height",void 0),Fe([K({type:String,reflect:!0})],Ae.prototype,"width",void 0),Fe([K({type:String,reflect:!0,attribute:"flex-direction"})],Ae.prototype,"flexDirection",void 0),Fe([K({type:Boolean,reflect:!0})],Ae.prototype,"visible",void 0),Fe([K({type:Boolean,reflect:!0})],Ae.prototype,"sticky",void 0),Fe([K({type:Boolean})],Ae.prototype,"emptyHeader",void 0),Fe([K({type:Boolean})],Ae.prototype,"emptyFunctions",void 0),Fe([K({type:Boolean})],Ae.prototype,"emptyFooter",void 0),Ae=Fe([X("wa-modal")],Ae);let Te=class extends ne{static get styles(){return[ie,te`
      :host {
        z-index: 2;
      }
      wa-app-bar {
        background-color: rgb(var(--base-2));
      }
    `]}render(){return B`
      <wa-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </wa-app-bar>
    `}};Te=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([X("wa-nav-bar")],Te);var He=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Le=class extends ne{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[ie,te`
      :host {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        box-sizing: border-box;
        padding: 16px;
        margin: 0;
        width: 320px;
        z-index: 6;
        pointer-events: none;
      }
      ::slotted(*) {
        pointer-events: all;
      }
      :host([position^="top"]) {
        top: 0px;
      }
      :host([position^="bottom"]) {
        flex-flow: column-reverse;
        bottom: 0px;
      }
      :host([position$="left"]) {
        left: 0px;
      }
      :host([position$="right"]) {
        right: 0px;
      }
      :host([position^="top"]) ::slotted(wa-notification-item[visible]) {
        margin-bottom: 12px;
      }
      :host([position^="bottom"]) ::slotted(wa-notification-item[visible]) {
        margin-top: 12px;
      }
    `]}render(){return B`
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};He([K({type:String,reflect:!0})],Le.prototype,"position",void 0),Le=He([X("wa-notifications")],Le);var Ve=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Me=class extends ne{constructor(){super(...arguments),this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        transition: .1s all ease-in-out;
        opacity: 1;
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
        max-height: 0px;
        overflow: hidden;
        margin-top: 0;
        margin-bottom: 0;
      }
      wa-card {
        background: rgb(var(--base-4));
      }
      :host(:not([visible]):host-context([position$="right"])) { 
        margin-left: 8px; 
        margin-right: -8px; 
      }
      :host(:not([visible]):host-context([position$="left"])) { 
        margin-left: -8px; 
        margin-right: 8px; 
      }
    `]}render(){return B`
      <wa-card @click="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}">
        <slot name="header" slot="${this.emptyHeader?void 0:"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":B` <wa-icon button icon="close" @click="${()=>this.visible=!1}"></wa-icon> `}
        </slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};Ve([K({type:String,reflect:!0})],Me.prototype,"label",void 0),Ve([K({type:String,reflect:!0})],Me.prototype,"icon",void 0),Ve([K({type:String,reflect:!0,attribute:"flex-direction"})],Me.prototype,"flexDirection",void 0),Ve([K({type:Boolean,reflect:!0})],Me.prototype,"visible",void 0),Ve([K({type:Boolean,reflect:!0})],Me.prototype,"sticky",void 0),Ve([K({type:Boolean})],Me.prototype,"emptyHeader",void 0),Ve([K({type:Boolean})],Me.prototype,"emptyFunctions",void 0),Ve([K({type:Boolean})],Me.prototype,"emptyFooter",void 0),Me=Ve([X("wa-notification-item")],Me);var qe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ie=class extends ne{constructor(){super(...arguments),this.flexDirection="row",this.flat=!1}static get styles(){return[ie,te`
      :host {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: rgb(var(--base-1));
      }
      :host([flat]) {
        background-color: rgb(var(--base-3));
      }
      .center-wrapper,
      slot {
        display: flex;
      }
      .center-wrapper,
      slot:not([name]) {
        flex: 1;
        overflow: hidden;
      }
      slot:not([name]) {
        padding: 16px;
      }
      slot[name="top"],
      slot[name="bottom"],
      :host([flex-direction="column"]) slot:not([name]) {
        flex-direction: column;
      }
    `]}render(){return B`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};qe([K({type:String,reflect:!0})],Ie.prototype,"theme",void 0),qe([K({type:String,reflect:!0,attribute:"flex-direction"})],Ie.prototype,"flexDirection",void 0),qe([K({type:Boolean,reflect:!0})],Ie.prototype,"flat",void 0),Ie=qe([X("wa-page")],Ie);var Ue=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let We=class extends ne{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        background-color: rgb(var(--base-2));
        display: flex;
        box-shadow: var(--shadow-1);
        transition: .1s width ease-in-out;
      }
      :host([size="l"]) {
        width: 320px;
      }
      :host([size="m"]) {
        width: 120px;
      }
      :host([size="s"]) {
        width: 80px;
      }
      wa-card {
        background-color: transparent;
        box-shadow: none;
      }
    `]}render(){return B`
      <wa-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}">
        <slot></slot>
        <slot name="header" slot="${this.emptyHeader?"":"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="${this.emptyFunctions?"":"functions"}" @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"></slot>
        <slot name="footer" slot="${this.emptyFooter?"":"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};Ue([K({type:String,reflect:!0})],We.prototype,"label",void 0),Ue([K({type:String,reflect:!0})],We.prototype,"icon",void 0),Ue([K({type:String,reflect:!0,attribute:"flex-direction"})],We.prototype,"flexDirection",void 0),Ue([K({type:String,reflect:!0})],We.prototype,"size",void 0),Ue([K({type:Boolean})],We.prototype,"emptyHeader",void 0),Ue([K({type:Boolean})],We.prototype,"emptyFunctions",void 0),Ue([K({type:Boolean})],We.prototype,"emptyFooter",void 0),We=Ue([X("wa-pane")],We);var Je=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ze=class extends ne{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        background-color: rgb(var(--base-4));
        border-radius: 4px;
        display: flex;
        box-shadow: var(--shadow-1);
        transition: .1s all ease-in-out, 0s top, 0s left;
        position: fixed;
        opacity: 1;
        z-index: 4;
        width: 240px;
      }
      :host(:not([visible])) {
        opacity: 0;
        pointer-events: none;
      }
      :host([position^="bottom"]:not([visible])) { margin-top: -8px; }
      :host([position^="top"]:not([visible])) { margin-top: 8px; }
      :host([position^="right"]:not([visible])) { margin-left: -8px; }
      :host([position^="left"]:not([visible])) { margin-left: 8px; }
      wa-card {
        background-color: transparent;
        box-shadow: none;
      }
    `]}render(){return B`
      <wa-card @click="${e=>e.stopPropagation()}" .label="${this.label}" .icon="${this.icon}" flex-direction="${this.flexDirection}">
        <slot name="header" slot="${this.emptyHeader?void 0:"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="${this.emptyFunctions?void 0:"functions"}" @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"></slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){let e=document.querySelector(this.target);e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){let e=document.querySelector(this.target);e&&this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e)}handlePosition(e){if(!e)return;let t=this,o=e.getBoundingClientRect();t.visible=!0,t.position.startsWith("bottom")?t.style.top=`${o.top+o.height+8}px`:t.position.startsWith("top")?t.style.top=`${o.top-t.clientHeight-8}px`:t.style.top=`${o.top+o.height/2-t.clientHeight/2}px`,t.position.startsWith("right")?t.style.left=`${o.left+o.width+8}px`:t.position.startsWith("left")?t.style.left=`${o.left-t.clientWidth-8}px`:t.style.left=`${o.left+o.width/2-t.clientWidth/2}px`}addDocListener(e){let t=this,o=function(n){n.target!==e&&(t.visible=!1,document.removeEventListener("click",o))};document.addEventListener("click",o)}};Je([K({type:String,reflect:!0})],Ze.prototype,"label",void 0),Je([K({type:String,reflect:!0})],Ze.prototype,"icon",void 0),Je([K({type:String,reflect:!0,attribute:"flex-direction"})],Ze.prototype,"flexDirection",void 0),Je([K({type:String,reflect:!0})],Ze.prototype,"position",void 0),Je([K({type:String,reflect:!0})],Ze.prototype,"target",void 0),Je([K({type:Boolean,reflect:!0})],Ze.prototype,"visible",void 0),Je([K({type:Boolean,reflect:!0})],Ze.prototype,"sticky",void 0),Je([K({type:Boolean})],Ze.prototype,"emptyHeader",void 0),Je([K({type:Boolean})],Ze.prototype,"emptyFunctions",void 0),Je([K({type:Boolean})],Ze.prototype,"emptyFooter",void 0),Ze=Je([X("wa-popover")],Ze);var Xe=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ge=class extends ne{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[ie,te`
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .header,
      .footer {
        display: flex;
        align-items: center;
      }
      .label,
      .info {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .header {
        margin-bottom: 8px;
      }
      .footer {
        margin-top: 8px;
      }
      /* radial */
      :host([radial]) {
        align-items: center;
        justify-content: center;
      }
      .radial-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .radial-wrapper wa-text {
        position: absolute;
        width: 100%;
        text-align: center;
      }
      .radial {
        transform: rotate(-90deg);
      }
      circle {
        fill: transparent;
        stroke-width: 8px;
      }
      /* status */
      .status-icon {
        margin-right: 8px;
      }
      .status-icon[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status-icon[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status-icon[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
    `]}render(){return B`
      <!-- header -->
      ${this.label||this.showProgress?B` 
        <div class="header">
          <wa-text size="header-2" class="label">${this.label}</wa-text> 
          ${this.showProgress&&!this.radial?B` 
            <wa-text size="header-2">${this.value}%</wa-text> 
          `:""}
        </div>
      `:""}
      ${this.radial?B`
        <div class="radial-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="radial"
            width="${this.getSize()}"
            viewBox="0 0 ${this.getSize()} ${this.getSize()}">
            <circle 
              stroke="rgba(var(--neutral-1), .1)"
              r="${this.getSize()/2-4}" 
              cx="${this.getSize()/2}" 
              cy="${this.getSize()/2}"/>
            <circle
              stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
              stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
              stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-this.value/100)}"
              r="${this.getSize()/2-4}" 
              cx="${this.getSize()/2}" 
              cy="${this.getSize()/2}"/>
          </svg>
          ${this.showProgress?B` 
            <wa-text size="header-2">${this.value}%</wa-text> 
          `:""}
        </div>
      `:B`
        <!-- linear progress bar -->
        <svg width="100%" height="8">
          <defs>
            <clipPath id="clip-path">
              <rect width="100%" height="8px" rx="4px"/>
            </clipPath>
          </defs>
          <rect fill="rgba(var(--neutral-1), .1)" width="100%" rx="4px"/>
          <rect fill="${this.color?this.color:"rgb(var(--accent-1))"}" 
            width="${this.value}%" clip-path="url(#clip-path)"/>
        </svg>
      `}
      ${this.info||this.status?B` 
        <div class="footer">
          <!-- status -->
          ${this.status?B` <wa-icon class="status-icon" icon="${this.getStatusIcon()}"></wa-icon> `:""}
          <!-- info -->
          ${this.info?B` 
            <wa-text color="var(--text-2)" class="info">${this.info}</wa-text> 
          `:""}
        </div>
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80}return e}};Xe([K({type:String,reflect:!0})],Ge.prototype,"label",void 0),Xe([K({type:String,reflect:!0})],Ge.prototype,"info",void 0),Xe([K({type:String,reflect:!0})],Ge.prototype,"status",void 0),Xe([K({type:String,reflect:!0})],Ge.prototype,"color",void 0),Xe([K({type:String,reflect:!0})],Ge.prototype,"size",void 0),Xe([K({type:Number,reflect:!0})],Ge.prototype,"value",void 0),Xe([K({type:Boolean,reflect:!0})],Ge.prototype,"radial",void 0),Xe([K({type:Boolean,reflect:!0,attribute:"show-progress"})],Ge.prototype,"showProgress",void 0),Ge=Xe([X("wa-progress-bar")],Ge);var Ke=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Qe=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        cursor: pointer;
      }
      input {
        display: none;
      }
      /* box */
      .circle {
        transition: .1s all ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin: 4px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
      }
      :host([active]) .circle {
        border-color: transparent;
        border: 5px solid rgb(var(--accent-1));
      }
      /* label */
      wa-text {
        flex: 1;
        margin-left: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .2;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active])) .circle {
          border-color: rgba(var(--neutral-1), .30);
        }
      }
    `]}render(){return B`
      <input type="radio" ?checked="${this.active}" value="${this.label}" name="${this.label}">
      <div class="circle"></div>
      ${this.label?B` 
        <wa-text>${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};Ke([K({type:String,reflect:!0})],Qe.prototype,"label",void 0),Ke([K({type:Boolean,reflect:!0})],Qe.prototype,"active",void 0),Ke([K({type:Boolean,reflect:!0})],Qe.prototype,"disabled",void 0),Qe=Ke([X("wa-radio-button")],Qe);var Ye=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let et=class extends ne{constructor(){super(...arguments),this.size="m"}static get styles(){return[ie,te`
      :host {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      svg {
        animation: 1s linear infinite svg-animation;
      }
      @keyframes svg-animation {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(360deg)
        }
      }
      circle {
        fill: transparent;
        stroke: rgb(var(--accent-1));
        stroke-linecap: round;
        stroke-width: 4px;
      }
      /* label */
      wa-text {
        margin-top: 8px;
      }
    `]}render(){return B`
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}">
        <circle 
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}" 
          cx="${this.getSize()/2}" 
          cy="${this.getSize()/2}"/>
      </svg>
      ${this.label?B` 
        <wa-text>${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40}return e}};Ye([K({type:String,reflect:!0})],et.prototype,"size",void 0),Ye([K({type:String,reflect:!0})],et.prototype,"label",void 0),et=Ye([X("wa-spinner")],et);var tt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ot=class extends ne{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[ie,te`
      :host {
        display: flex;
        width: 100%;
        height: fit-content;
        overflow: auto;
      }
      /* vertical */
      :host([orientation="vertical"]) {
        flex-direction: column;
      }
    `]}render(){return B`
      <slot @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}handleItems(){let e,t;e=Array.prototype.slice.call(this.children),t=this.children.length,e.forEach(e=>{e.first=1==e.index,e.last=e.index==t})}};tt([K({type:String,reflect:!0})],ot.prototype,"orientation",void 0),ot=tt([X("wa-stepper")],ot);var nt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let it=class extends ne{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[ie,te`
      :host {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        transition: .1s all ease-in-out;
        cursor: pointer;
      }
      .circle {
        height: 40px;
        width: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 50%;
        background-color: rgba(var(--neutral-1), .10);
        transition: .1s all ease-in-out;
      }
      .text {
        display: flex;
        flex-direction: column;
      }
      .label {
        font-weight: bold;
      }
      .info {
        color: var(--text-2);
      }
      .label,
      .info {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label,
      .number,
      wa-icon {
        color: var(--text-2);
      }
      /* line */
      .line {
        background-color: rgba(var(--neutral-1), .10);
        position: absolute;
      }
      /* horizontal */
      :host([orientation="horizontal"]) {
        justify-content: center;
        flex-direction: column;
        padding: 0 16px;
      }
      :host([orientation="horizontal"]) .label,
      :host([orientation="horizontal"]) .info {
        text-align: center;
      }
      :host([orientation="horizontal"]) .circle + .text {
        margin-top: 4px;
      }
      :host([orientation="horizontal"]) .line {
        height: 2px;
        width: calc(50% - 28px);
        top: 19px;
      }
      :host([orientation="horizontal"]) .line.before {
        left: 0px;
      }
      :host([orientation="horizontal"]) .line.after {
        right: 0px;
      }
      /* vertical */
      :host([orientation="vertical"]) {
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        height: fit-content;
        padding: 16px 0;
      }
      :host([orientation="vertical"]) .label,
      :host([orientation="vertical"]) .info {
        text-align: left;
      }
      :host([orientation="vertical"]) .circle + .text {
        margin-left: 8px;
      }
      :host([orientation="vertical"]) .line {
        width: 2px;
        height: calc(50% - 28px);
        left: 19px;
      }
      :host([orientation="vertical"]) .line.before {
        top: 0px;
      }
      :host([orientation="vertical"]) .line.after {
        bottom: 0px;
      }
      /* active */
      :host([active]) .circle {
        background-color: rgb(var(--accent-1));
      }
      :host([active]) .label {
        color: var(--text-1);
      }
      :host([active]) .number,
      :host([active]) wa-icon {
        color: rgba(255, 255, 255, .90);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
      }
      :host([disabled]) .circle,
      :host([disabled]) .text {
        opacity: .20;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active])) .label,
        :host(:hover:not([active])) .number,
        :host(:hover:not([active])) wa-icon {
          color: var(--text-1);
        }
        :host(:not([active]):not(:active):hover) .circle {
          background-color: rgba(var(--neutral-1), .15);
        }
        :host([active]:not(:active):hover) .circle {
          background-color: rgb(var(--accent-1b));
        }
      }
    `]}render(){return B`
      <!-- circle -->
      <div class="circle">
        ${this.icon?B`
          <wa-icon icon="${this.icon}"></wa-icon> 
        `:B`
          <wa-text size="header-1" class="number">${this.index}</wa-text>
        `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?B` 
          <wa-text class="label">${this.label}</wa-text> 
        `:""}
        ${this.info?B` 
          <wa-text size="body-2" class="info">${this.info}</wa-text> 
        `:""}
      </div>
      <!-- lines -->
      ${this.first?"":B` 
        <div class="line before"></div>
      `}
      ${this.last?"":B` 
        <div class="line after"></div>
      `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0})}getIndex(){let e;e=Array.prototype.slice.call(this.parentElement.children),this.index=e.indexOf(this)+1}};nt([K({type:String,reflect:!0})],it.prototype,"label",void 0),nt([K({type:String,reflect:!0})],it.prototype,"info",void 0),nt([K({type:String,reflect:!0})],it.prototype,"icon",void 0),nt([K({type:Number,reflect:!0})],it.prototype,"index",void 0),nt([K({type:Boolean,reflect:!0})],it.prototype,"active",void 0),nt([K({type:Boolean,reflect:!0})],it.prototype,"disabled",void 0),nt([K({type:Boolean,reflect:!0})],it.prototype,"first",void 0),nt([K({type:Boolean,reflect:!0})],it.prototype,"last",void 0),nt([K({type:String,reflect:!0})],it.prototype,"orientation",void 0),it=nt([X("wa-stepper-item")],it);var rt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let st=class extends ne{constructor(){super(...arguments),this.label="Label"}static get styles(){return[ie,te`
      :host {
        background-color: rgba(var(--neutral-1), .10);
        display: flex;
        width: fit-content;
        height: fit-content;
        border-radius: 4px;
      }
    `]}render(){return B`
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};rt([K({type:String,reflect:!0})],st.prototype,"label",void 0),st=rt([X("wa-switch")],st);var ct=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let at=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        width: fit-content;
        min-width: 40px;
        max-width: 120px;
        padding: 4px 12px;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        transition: .1s all ease-in-out;
      }
      .label {
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label,
      wa-icon {
        color: var(--text-2);
      }
      /* active */
      :host([active]) .label,
      :host([active]) wa-icon {
        color: var(--text-1);
      }
      :host([active]) {
        background: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:not([active]):hover) {
          background: rgba(var(--neutral-1), .05);
        }
        :host([active]:hover) {
          background: rgba(var(--neutral-1), .15);
        }
      }
    `]}render(){return B`
      ${this.icon?B` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      `:""}
      ${this.label&&!this.icon?B` 
        <wa-text class="label">${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};ct([K({type:String,reflect:!0})],at.prototype,"label",void 0),ct([K({type:String,reflect:!0})],at.prototype,"icon",void 0),ct([K({type:Boolean,reflect:!0})],at.prototype,"active",void 0),at=ct([X("wa-switch-item")],at);var lt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let ht=class extends ne{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[ie,te`
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        transition: .1s all ease-in-out;
        cursor: pointer;
        border-color: transparent;
        border-style: solid;
      }
      .label {
        line-height: 24px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label,
      wa-icon {
        color: var(--text-2);
      }
      /* horizontal */
      :host([orientation="horizontal"]) {
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        min-width: 72px;
        max-width: 240px;
        height: 56px;
        padding: 0px 16px;
        border-width: 0px 0px 2px 0px;
      }
      :host([orientation="horizontal"]) .label {
        text-align: center;
      }
      /* vertical */
      :host([orientation="vertical"]) .label {
        text-align: left;
      }
      :host([orientation="vertical"]) {
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        min-width: unset;
        max-width: 100%;
        height: fit-content;
        padding: 8px 8px 8px 14px;
        border-width: 0px 0px 0px 2px;
      }
      :host([orientation="vertical"]) wa-icon + .label {
        margin-left: 8px;
      }
      /* active */
      :host([active]) {
        border-color: rgb(var(--accent-1));
      }
      :host([active]) .label,
      :host([active]) wa-icon {
        color: var(--text-1);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active])) .label,
        :host(:hover:not([active])) wa-icon {
          color: var(--text-1);
        }
      }
    `]}render(){return B`
      ${this.icon?B` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      `:""}
      ${this.label?B` 
        <wa-text class="label">${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};lt([K({type:String,reflect:!0})],ht.prototype,"label",void 0),lt([K({type:String,reflect:!0})],ht.prototype,"icon",void 0),lt([K({type:Boolean,reflect:!0})],ht.prototype,"active",void 0),lt([K({type:Boolean,reflect:!0})],ht.prototype,"disabled",void 0),lt([K({type:String,reflect:!0})],ht.prototype,"orientation",void 0),ht=lt([X("wa-tab-item")],ht);var dt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let pt=class extends ne{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[ie,te`
      :host {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        margin: 0 !important;
      }
      slot {
        display: block;
      }
      slot:not([name]) {
        flex: 1;
        overflow: overlay;
      }
    `]}render(){return B`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};dt([K({type:Boolean,reflect:!0})],pt.prototype,"readonly",void 0),dt([K({type:Boolean,reflect:!0})],pt.prototype,"condensed",void 0),dt([K({type:String,reflect:!0})],pt.prototype,"columns",void 0),pt=dt([X("wa-table")],pt);var ft=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let bt=class extends ne{static get styles(){return[ie,te`
      :host {
        display: grid;
        border-bottom: 1px solid rgba(var(--neutral-1), .15);
        transition: .1s all ease-in-out;
      }
      /* header */
      :host([slot="header"]) {
        border-color: rgba(var(--neutral-1), .40);
      }
      /* active */
      :host([active]) {
        background: rgba(var(--neutral-1), .10);
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not([active]):not([slot="header"])) {
          background: rgba(var(--neutral-1), .05);
        }
        :host(:hover:not([active])):host-context(wa-table[readonly]) {
          background: transparent;
        }
      }
    `]}render(){return B`
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){let e,t;e=this.closest("wa-table"),e.readonly||"header"==this.slot||(t=this.parentElement.childNodes,t.forEach(e=>{e.active=!1}),this.active=!0)}handleColumns(){let e=this.closest("wa-table");this.style.gridTemplateColumns=e.columns,e.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=e.columns})}};ft([K({type:Boolean,reflect:!0})],bt.prototype,"active",void 0),bt=ft([X("wa-table-row")],bt);var ut=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let gt=class extends ne{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[ie,te`
      :host {
        display: flex;
        align-items: center;
        padding: 12px 8px;
        font: var(--body-1);
        overflow: hidden;
        cursor: default;
      }
      wa-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* condensed */
      :host:host-context(wa-table[condensed]) {
        padding: 8px 8px;
      }
      /* head */
      :host([head]) wa-text {
        font-weight: bold;
      }
      /* align */
      :host([alignment="center"]) {
        justify-content: center;
      }
      :host([alignment="right"]) {
        justify-content: flex-end;
      }
      /* sortable */
      :host([sortable]) {
        cursor: pointer;
      }
      :host([sort-direction="desc"]) .sort {
        transform: rotate(180deg);
      }
      .sort {
        margin: 4px 0px 4px 4px;
        color: var(--text-2);
      }
    `]}render(){return B`
      <wa-text>
        <slot></slot>
      </wa-text>
      ${this.head&&this.sorted?B`
        <wa-icon size="s" icon="arrow_downward" class="sort"></wa-icon>
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"grid-cols"==e&&(this.style.gridColumn=`span ${this.gridCols}`),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}};ut([K({type:Number,reflect:!0,attribute:"grid-cols"})],gt.prototype,"gridCols",void 0),ut([K({type:String,reflect:!0})],gt.prototype,"alignment",void 0),ut([K({type:Boolean,reflect:!0})],gt.prototype,"head",void 0),ut([K({type:Boolean,reflect:!0})],gt.prototype,"sorted",void 0),ut([K({type:Boolean,reflect:!0})],gt.prototype,"sortable",void 0),ut([K({type:String,reflect:!0,attribute:"sort-direction"})],gt.prototype,"sortDirection",void 0),gt=ut([X("wa-table-cell")],gt);var vt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let yt=class extends ne{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[ie,te`
      :host {
        display: flex;
        width: 100%;
        height: fit-content;
      }
      :host([slot="header"]) {
        margin-top: -16px;
      }
      :host(:not([orientation="vertical"])) {
        border-bottom: 1px solid rgba(var(--neutral-1), .10);
      }
      /* vertical */
      :host([orientation="vertical"]) {
        flex-direction: column;
      }
    `]}render(){return B`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};vt([K({type:String,reflect:!0})],yt.prototype,"orientation",void 0),yt=vt([X("wa-tabs")],yt);var _t=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let mt=class extends ne{constructor(){super(...arguments),this.label="Label"}static get styles(){return[ie,te`
      :host {
        padding: 4px;
        display: flex;
        height: fit-content;
        width: fit-content;
        max-width: 160px;
        border-radius: 4px;
        border: 1px solid rgba(var(--neutral-1), .25);
        transition: .1s ease-in-out;
      }
      .label {
        margin: 0 4px;
      }
      /* button */
      :host([button]) {
        cursor: pointer;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host([button]:not(:active):hover) {
          border-color: rgba(var(--neutral-1), .30);
          background-color: rgba(var(--neutral-1), .05);
        }
      }
    `]}render(){return B`
      <!-- icon -->
      ${this.icon?B` <wa-icon icon="${this.icon}"></wa-icon> `:""}
      <!-- label -->
      ${this.label?B` <wa-text class="label">${this.label}</wa-text> `:""}
      <!-- removable -->
      ${this.removable?B` <wa-icon icon="close" button @click="${()=>this.handleRemove()}"></wa-icon> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}handleRemove(){this.dispatchEvent(new Event("remove"))}};_t([K({type:String,reflect:!0})],mt.prototype,"label",void 0),_t([K({type:String,reflect:!0})],mt.prototype,"icon",void 0),_t([K({type:Boolean,reflect:!0})],mt.prototype,"removable",void 0),_t([K({type:Boolean,reflect:!0})],mt.prototype,"button",void 0),mt=_t([X("wa-tag")],mt);var wt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let xt=class extends ne{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[ie,te`
      :host {
        color: var(--text-1);
        transition: .1s all ease-in-out;
      }
      :host([size="body-1"]) {
        font: var(--body-1);
      }
      :host([size="body-2"]) {
        font: var(--body-2);
      }
      :host([size="header-1"]) {
        font: var(--header-1);
      }
      :host([size="header-2"]) {
        font: var(--header-2);
      }
    `]}render(){return B`
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&(this.style.color=this.color)}};wt([K({type:String,reflect:!0})],xt.prototype,"size",void 0),wt([K({type:String,reflect:!0})],xt.prototype,"color",void 0),xt=wt([X("wa-text")],xt);var kt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let $t=class extends ne{static get styles(){return[ie,te`
      :host {
        display: flex;
        cursor: pointer;
      }
      input {
        display: none;
      }
      /* toggle */
      .bg {
        width: 32px;
        height: 20px;
        margin: 2px;
        padding: 2px;
        border-radius: 12px;
        box-sizing: border-box;
        border: 2px solid rgba(var(--neutral-1), .25);
        transition: .1s all ease-in-out;
      }
      :host([active]) .bg {
        border-color: transparent;
        background: rgb(var(--accent-1));
      }
      .dot {
        display: flex;
        transition: .1s all ease-in-out;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: rgba(var(--neutral-1), .60);
      }
      :host([active]) .dot {
        transform: translateX(12px);
        background: white;
      }
      /* label */
      wa-text {
        flex: 1;
        margin-left: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .2;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:hover:not(:active):not([active])) .bg {
          border-color: rgba(var(--neutral-1), .30);
        }
        :host(:hover:not(:active):not([active])) .dot {
          background: rgba(var(--neutral-1), .90);
        }
      }
    `]}render(){return B`
      <input type="checkbox" ?checked="${this.active}" ?readonly="${this.disabled}" value="${this.label}" name="${this.label}">
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?B` 
        <wa-text>${this.label}</wa-text> 
      `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};kt([K({type:String,reflect:!0})],$t.prototype,"label",void 0),kt([K({type:Boolean,reflect:!0})],$t.prototype,"active",void 0),kt([K({type:Boolean,reflect:!0})],$t.prototype,"disabled",void 0),$t=kt([X("wa-toggle")],$t);var St=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Ct=class extends ne{constructor(){super(...arguments),this.size="m",this.disabled=!1}static get styles(){return[ie,te`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 4px;
        box-sizing: border-box;
        transition: .1s all ease-in-out;
        cursor: pointer;
        border-radius: 4px;
      }
      .label {
        display: -webkit-box;
        width: 100%;
        line-height: 12px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      /* size */ 
      :host([size="m"]) {
        height: 56px;
        width: 56px;
      }
      :host([size="s"]) {
        height: 32px;
        width: 32px;
      }
      /* active */
      :host([active]) {
        background-color: rgba(var(--neutral-1), .10);
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host(:not(:active):not([active]):hover) {
          background-color: rgba(var(--neutral-1), .05);
        }
      }
    `]}render(){return B`
      ${this.icon?B` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      `:""}
      ${!this.label||this.icon&&"s"==this.size?"":B` 
        <wa-text class="label" size="body-2">${this.label}</wa-text> 
      `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};St([K({type:String,reflect:!0})],Ct.prototype,"label",void 0),St([K({type:String,reflect:!0})],Ct.prototype,"icon",void 0),St([K({type:String,reflect:!0})],Ct.prototype,"size",void 0),St([K({type:Boolean,reflect:!0})],Ct.prototype,"toggle",void 0),St([K({type:Boolean,reflect:!0})],Ct.prototype,"active",void 0),St([K({type:Boolean,reflect:!0})],Ct.prototype,"disabled",void 0),Ct=St([X("wa-tool")],Ct);var Pt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let Et=class extends ne{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[ie,te`
      :host {
        position: fixed;
        z-index: 4;
      }
    `]}render(){return B`
      <wa-popover .label="${this.label}" .icon="${this.icon}" flex-direction="${this.flexDirection}" .target="${this.target}" .position="${this.position}" ?visible="${this.visible}">
        <slot name="header" slot="${this.emptyHeader?void 0:"header"}" @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"></slot>
        <slot name="functions" slot="${this.emptyFunctions?void 0:"functions"}" @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"></slot>
        <slot></slot>
        <slot name="footer" slot="${this.emptyFooter?void 0:"footer"}" @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"></slot>
      </wa-popover>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e,t=document.querySelector(this.target);t&&(t.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),t.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}};Pt([K({type:String,reflect:!0})],Et.prototype,"label",void 0),Pt([K({type:String,reflect:!0})],Et.prototype,"icon",void 0),Pt([K({type:String,reflect:!0,attribute:"flex-direction"})],Et.prototype,"flexDirection",void 0),Pt([K({type:String,reflect:!0})],Et.prototype,"position",void 0),Pt([K({type:String,reflect:!0})],Et.prototype,"target",void 0),Pt([K({type:Boolean,reflect:!0})],Et.prototype,"visible",void 0),Pt([K({type:Boolean})],Et.prototype,"emptyHeader",void 0),Pt([K({type:Boolean})],Et.prototype,"emptyFunctions",void 0),Pt([K({type:Boolean})],Et.prototype,"emptyFooter",void 0),Et=Pt([X("wa-tooltip")],Et)}]);