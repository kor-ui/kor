import*as s from"lit";var r={1869(s,r,a){a(3664)},3664(s,r,a){var l=a(2927),c=a(5707),h=a(4399),p=(a(2730),function(s,r,a,l){var c,h=arguments.length,p=h<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(s,r,a,l);else for(var m=s.length-1;m>=0;m--)(c=s[m])&&(p=(h<3?c(p):h>3?c(r,a,p):c(r,a))||p);return h>3&&p&&Object.defineProperty(r,a,p),p});class korCard extends l.LitElement{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[h.g,l.css`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          /* Don't set the right padding to have a vertical scrollbar for overflows */
          padding: 0 0 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return l.html`
      ${this.image?l.html` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?l.html`
                <div class="label">
                  ${this.icon?l.html` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":l.html` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${s=>this.emptyHeader=0===s.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${s=>this.emptyFunctions=0===s.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${s=>this.emptyFooter=0===s.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(s,r,a){super.attributeChangedCallback(s,r,a),this.dispatchEvent(new Event(`${s}-changed`))}}p([(0,c.MZ)({type:String,reflect:!0})],korCard.prototype,"label",void 0),p([(0,c.MZ)({type:String,reflect:!0})],korCard.prototype,"icon",void 0),p([(0,c.MZ)({type:String,reflect:!0})],korCard.prototype,"image",void 0),p([(0,c.MZ)({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),p([(0,c.MZ)({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),p([(0,c.wk)()],korCard.prototype,"emptyHeader",void 0),p([(0,c.wk)()],korCard.prototype,"emptyFunctions",void 0),p([(0,c.wk)()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard)},2730(s,r,a){a(1098)},1098(s,r,a){var l=a(2927),c=a(5707),h=a(4399),__decorate=function(s,r,a,l){var c,h=arguments.length,p=h<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(s,r,a,l);else for(var m=s.length-1;m>=0;m--)(c=s[m])&&(p=(h<3?c(p):h>3?c(r,a,p):c(r,a))||p);return h>3&&p&&Object.defineProperty(r,a,p),p};class korIcon extends l.LitElement{constructor(){super(...arguments),this.size="m"}static get styles(){return[h.g,l.css`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){var s;return l.html` ${(null===(s=this.icon)||void 0===s?void 0:s.indexOf("url"))?l.html` ${this.icon} `:""}`}attributeChangedCallback(s,r,a){super.attributeChangedCallback(s,r,a),this.dispatchEvent(new Event(`${s}-changed`)),"color"==s&&this.color?this.style.color=this.color:"icon"==s&&a.indexOf("url")>-1&&this.setBackgroundImage(a)}setBackgroundImage(s){this.style.backgroundImage=s}}__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([(0,c.MZ)({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([(0,c.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([(0,c.MZ)({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon)},4399(s,r,a){a.d(r,{g:()=>l});const l=a(2927).css`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},2927(r,a,l){r.exports=(s=>{var r={};return l.d(r,s),r})({LitElement:()=>s.LitElement,css:()=>s.css,html:()=>s.html})},1762(s,r,a){a.d(r,{He:()=>o});const o=({finisher:s,descriptor:r})=>(a,l)=>{var c;if(void 0===l){const l=null!==(c=a.originalKey)&&void 0!==c?c:a.key,h=null!=r?{kind:"method",placement:"prototype",key:l,descriptor:r(a.key)}:{...a,key:l};return null!=s&&(h.finisher=function(r){s(r,l)}),h}{const c=a.constructor;void 0!==r&&Object.defineProperty(a,l,r(l)),null==s||s(c,l)}}},6505(s,r,a){a.d(r,{E:()=>e});const e=s=>r=>"function"==typeof r?((s,r)=>(customElements.define(s,r),r))(s,r):((s,r)=>{const{kind:a,elements:l}=r;return{kind:a,elements:l,finisher(r){customElements.define(s,r)}}})(s,r)},5694(s,r,a){a.d(r,{M:()=>n});const i=(s,r)=>"method"===r.kind&&r.descriptor&&!("value"in r.descriptor)?{...r,finisher(a){a.createProperty(r.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:r.key,initializer(){"function"==typeof r.initializer&&(this[r.key]=r.initializer.call(this))},finisher(a){a.createProperty(r.key,s)}};function n(s){return(r,a)=>void 0!==a?((s,r,a)=>{r.constructor.createProperty(a,s)})(s,r,a):i(s,r)}},1124(){var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},9896(s,r,a){a(1124)},1895(s,r,a){a.d(r,{P:()=>i});var l=a(1762);function i(s,r){return(0,l.He)({descriptor:a=>{const l={get(){var r,a;return null!==(a=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(s))&&void 0!==a?a:null},enumerable:!0,configurable:!0};if(r){const r="symbol"==typeof a?Symbol():"__"+a;l.get=function(){var a,l;return void 0===this[r]&&(this[r]=null!==(l=null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(s))&&void 0!==l?l:null),this[r]}}return l}})}},4290(s,r,a){a.d(r,{w:()=>t});var l=a(5694);function t(s){return(0,l.M)({...s,state:!0})}},5707(s,r,a){a.d(r,{EM:()=>l.E,MZ:()=>c.M,P:()=>p.P,wk:()=>h.w});var l=a(6505),c=a(5694),h=a(4290),p=a(1895);a(1124),a(9896)}},a={};function __webpack_require__(s){var l=a[s];if(void 0!==l)return l.exports;var c=a[s]={exports:{}};return r[s](c,c.exports,__webpack_require__),c.exports}__webpack_require__.d=(s,r)=>{for(var a in r)__webpack_require__.o(r,a)&&!__webpack_require__.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:r[a]})},__webpack_require__.o=(s,r)=>Object.prototype.hasOwnProperty.call(s,r);var l,c=__webpack_require__(2927);const h=window,p=h.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:s=>s}):void 0,g="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,f="?"+y,_=`<${f}>`,b=document,u=()=>b.createComment(""),d=s=>null===s||"object"!=typeof s&&"function"!=typeof s,$=Array.isArray,v=s=>$(s)||"function"==typeof(null==s?void 0:s[Symbol.iterator]),x="[ \t\n\f\r]",A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,I=/>/g,C=RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),E=/'/g,T=/"/g,F=/^(?:script|style|textarea|title)$/i,w=s=>(r,...a)=>({_$litType$:s,strings:r,values:a}),B=(w(1),w(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),j=new WeakMap,q=b.createTreeWalker(b,129,null,!1);function P(s,r){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==m?m.createHTML(r):r}const V=(s,r)=>{const a=s.length-1,l=[];let c,h=2===r?"<svg>":"",p=A;for(let r=0;r<a;r++){const a=s[r];let m,f,b=-1,$=0;for(;$<a.length&&(p.lastIndex=$,f=p.exec(a),null!==f);)$=p.lastIndex,p===A?"!--"===f[1]?p=D:void 0!==f[1]?p=I:void 0!==f[2]?(F.test(f[2])&&(c=RegExp("</"+f[2],"g")),p=C):void 0!==f[3]&&(p=C):p===C?">"===f[0]?(p=null!=c?c:A,b=-1):void 0===f[1]?b=-2:(b=p.lastIndex-f[2].length,m=f[1],p=void 0===f[3]?C:'"'===f[3]?T:E):p===T||p===E?p=C:p===D||p===I?p=A:(p=C,c=void 0);const x=p===C&&s[r+1].startsWith("/>")?" ":"";h+=p===A?a+_:b>=0?(l.push(m),a.slice(0,b)+g+a.slice(b)+y+x):a+y+(-2===b?(l.push(void 0),r):x)}return[P(s,h+(s[a]||"<?>")+(2===r?"</svg>":"")),l]};class N{constructor({strings:s,_$litType$:r},a){let l;this.parts=[];let c=0,h=0;const m=s.length-1,_=this.parts,[b,$]=V(s,r);if(this.el=N.createElement(b,a),q.currentNode=this.el.content,2===r){const s=this.el.content,r=s.firstChild;r.remove(),s.append(...r.childNodes)}for(;null!==(l=q.nextNode())&&_.length<m;){if(1===l.nodeType){if(l.hasAttributes()){const s=[];for(const r of l.getAttributeNames())if(r.endsWith(g)||r.startsWith(y)){const a=$[h++];if(s.push(r),void 0!==a){const s=l.getAttribute(a.toLowerCase()+g).split(y),r=/([.?@])?(.*)/.exec(a);_.push({type:1,index:c,name:r[2],strings:s,ctor:"."===r[1]?H:"?"===r[1]?L:"@"===r[1]?z:k})}else _.push({type:6,index:c})}for(const r of s)l.removeAttribute(r)}if(F.test(l.tagName)){const s=l.textContent.split(y),r=s.length-1;if(r>0){l.textContent=p?p.emptyScript:"";for(let a=0;a<r;a++)l.append(s[a],u()),q.nextNode(),_.push({type:2,index:++c});l.append(s[r],u())}}}else if(8===l.nodeType)if(l.data===f)_.push({type:2,index:c});else{let s=-1;for(;-1!==(s=l.data.indexOf(y,s+1));)_.push({type:7,index:c}),s+=y.length-1}c++}}static createElement(s,r){const a=b.createElement("template");return a.innerHTML=s,a}}function S(s,r,a=s,l){var c,h,p,m;if(r===B)return r;let g=void 0!==l?null===(c=a._$Co)||void 0===c?void 0:c[l]:a._$Cl;const y=d(r)?void 0:r._$litDirective$;return(null==g?void 0:g.constructor)!==y&&(null===(h=null==g?void 0:g._$AO)||void 0===h||h.call(g,!1),void 0===y?g=void 0:(g=new y(s),g._$AT(s,a,l)),void 0!==l?(null!==(p=(m=a)._$Co)&&void 0!==p?p:m._$Co=[])[l]=g:a._$Cl=g),void 0!==g&&(r=S(s,g._$AS(s,r.values),g,l)),r}class M{constructor(s,r){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){var r;const{el:{content:a},parts:l}=this._$AD,c=(null!==(r=null==s?void 0:s.creationScope)&&void 0!==r?r:b).importNode(a,!0);q.currentNode=c;let h=q.nextNode(),p=0,m=0,g=l[0];for(;void 0!==g;){if(p===g.index){let r;2===g.type?r=new R(h,h.nextSibling,this,s):1===g.type?r=new g.ctor(h,g.name,g.strings,this,s):6===g.type&&(r=new Z(h,this,s)),this._$AV.push(r),g=l[++m]}p!==(null==g?void 0:g.index)&&(h=q.nextNode(),p++)}return q.currentNode=b,c}v(s){let r=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(s,a,r),r+=a.strings.length-2):a._$AI(s[r])),r++}}class R{constructor(s,r,a,l){var c;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=s,this._$AB=r,this._$AM=a,this.options=l,this._$Cp=null===(c=null==l?void 0:l.isConnected)||void 0===c||c}get _$AU(){var s,r;return null!==(r=null===(s=this._$AM)||void 0===s?void 0:s._$AU)&&void 0!==r?r:this._$Cp}get parentNode(){let s=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===(null==s?void 0:s.nodeType)&&(s=r.parentNode),s}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(s,r=this){s=S(this,s,r),d(s)?s===O||null==s||""===s?(this._$AH!==O&&this._$AR(),this._$AH=O):s!==this._$AH&&s!==B&&this._(s):void 0!==s._$litType$?this.g(s):void 0!==s.nodeType?this.$(s):v(s)?this.T(s):this._(s)}k(s){return this._$AA.parentNode.insertBefore(s,this._$AB)}$(s){this._$AH!==s&&(this._$AR(),this._$AH=this.k(s))}_(s){this._$AH!==O&&d(this._$AH)?this._$AA.nextSibling.data=s:this.$(b.createTextNode(s)),this._$AH=s}g(s){var r;const{values:a,_$litType$:l}=s,c="number"==typeof l?this._$AC(s):(void 0===l.el&&(l.el=N.createElement(P(l.h,l.h[0]),this.options)),l);if((null===(r=this._$AH)||void 0===r?void 0:r._$AD)===c)this._$AH.v(a);else{const s=new M(c,this),r=s.u(this.options);s.v(a),this.$(r),this._$AH=s}}_$AC(s){let r=j.get(s.strings);return void 0===r&&j.set(s.strings,r=new N(s)),r}T(s){$(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,l=0;for(const c of s)l===r.length?r.push(a=new R(this.k(u()),this.k(u()),this,this.options)):a=r[l],a._$AI(c),l++;l<r.length&&(this._$AR(a&&a._$AB.nextSibling,l),r.length=l)}_$AR(s=this._$AA.nextSibling,r){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,r);s&&s!==this._$AB;){const r=s.nextSibling;s.remove(),s=r}}setConnected(s){var r;void 0===this._$AM&&(this._$Cp=s,null===(r=this._$AP)||void 0===r||r.call(this,s))}}class k{constructor(s,r,a,l,c){this.type=1,this._$AH=O,this._$AN=void 0,this.element=s,this.name=r,this._$AM=l,this.options=c,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(s,r=this,a,l){const c=this.strings;let h=!1;if(void 0===c)s=S(this,s,r,0),h=!d(s)||s!==this._$AH&&s!==B,h&&(this._$AH=s);else{const l=s;let p,m;for(s=c[0],p=0;p<c.length-1;p++)m=S(this,l[a+p],r,p),m===B&&(m=this._$AH[p]),h||(h=!d(m)||m!==this._$AH[p]),m===O?s=O:s!==O&&(s+=(null!=m?m:"")+c[p+1]),this._$AH[p]=m}h&&!l&&this.j(s)}j(s){s===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=s?s:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===O?void 0:s}}const U=p?p.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(s){s&&s!==O?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class z extends k{constructor(s,r,a,l,c){super(s,r,a,l,c),this.type=5}_$AI(s,r=this){var a;if((s=null!==(a=S(this,s,r,0))&&void 0!==a?a:O)===B)return;const l=this._$AH,c=s===O&&l!==O||s.capture!==l.capture||s.once!==l.once||s.passive!==l.passive,h=s!==O&&(l===O||c);c&&this.element.removeEventListener(this.name,this,l),h&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var r,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==a?a:this.element,s):this._$AH.handleEvent(s)}}class Z{constructor(s,r,a){this.element=s,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(s){S(this,s)}}const W=h.litHtmlPolyfillSupport;null==W||W(N,R),(null!==(l=h.litHtmlVersions)&&void 0!==l?l:h.litHtmlVersions=[]).push("2.8.0");const if_defined_l=s=>null!=s?s:O;var K=__webpack_require__(5707),G=__webpack_require__(4399),J=(__webpack_require__(1869),__webpack_require__(2730),function(s,r,a,l){var c,h=arguments.length,p=h<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,a):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(s,r,a,l);else for(var m=s.length-1;m>=0;m--)(c=s[m])&&(p=(h<3?c(p):h>3?c(r,a,p):c(r,a))||p);return h>3&&p&&Object.defineProperty(r,a,p),p});let Q=class korInput extends c.LitElement{static get styles(){return[G.g,c.css`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hours,
        .minutes {
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding-top: 8px;
          width: 100%;
          background-color: rgba(var(--neutral-1), 0.05);
          min-width: 2rem;
          text-align: center;
        }
        .hours > input,
        .minutes > input {
          padding-left: 8px;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
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
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
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
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select, date and datetime */
        :host([type='date']),
        :host([type='date']) *,
        :host([type='datetime']),
        :host([type='datetime']) *,
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: var(--spacing-l) 0;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 var(--spacing-s);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){var s;return c.html`
      ${this.icon?c.html` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?c.html` <label class="label">${this.label}</label> `:""}
        <input id="main_input"
          .type="${"date"===this.type||"datetime"===this.type?"text":this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step?this.step.toString():"any"}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${if_defined_l(this.min)}"
          max="${if_defined_l(this.max)}"
          pattern="${if_defined_l(this.pattern)}"
          name="${if_defined_l(this.name)}"
          @input="${s=>{s.target.value!=this.value&&this.handleChange_(s)}}"
          @focus="${s=>{this.handleFocus_(s)}}"
          @blur="${s=>{this.handleBlur_(s)}}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?c.html`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?c.html`
                  <kor-card
                    @click="${s=>{this.active=!1,s.stopPropagation()}}"
                    @wheel="${s=>s.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date and datetime -->
      ${"date"===this.type||"datetime"===this.type?c.html`${this.active?this.getCalendarGrid_(null!==(s=this.value)&&void 0!==s?s:""):""}`:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":c.html`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?c.html`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment or month increment -->
      ${("number"===this.type&&parseFloat(String(this.step))||"date"===this.type||"datetime"===this.type)&&!this.readonly?c.html`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${s=>this.handleIncrement_(s,"left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${s=>this.handleIncrement_(s,"right")}"
            ></kor-icon>
          `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}constructor(){if(super(),this.type="text",this.autofocus=!1,this.step=0,this.is12Hour_=!1,this.isMenuHandlerSet_=!1,this.addEventListener("click",s=>{var r;this.active?"select"===this.type?this.closeSelectMenu(s):this.active=!1:this.active||(this.active=!0,"select"===this.type||this.disabled||this.readonly||null===(r=this.main_input)||void 0===r||r.focus())}),"datetime"===this.type){const s=new Intl.DateTimeFormat(this.locale,{hour:"numeric"}).resolvedOptions().hourCycle;"h11"!==s&&"h12"!==s||(this.is12Hour_=!0)}}firstUpdated(){var s,r,a,l;"select"===this.type||this.disabled||this.readonly||null===(s=this.main_input)||void 0===s||s.focus(),null===(r=this.main_input)||void 0===r||r.addEventListener("keydown",s=>{this.step||"number"!==this.type||"ArrowUp"!==s.key&&"ArrowDown"!==s.key||s.preventDefault()}),null===(a=this.main_input)||void 0===a||a.addEventListener("wheel",s=>{this.step||"number"!==this.type||s.preventDefault()},{passive:!1}),"date"!==this.type&&"datetime"!==this.type||(this.value=this.validateAndFormatDate_(null!==(l=this.value)&&void 0!==l?l:""))}handleChange_(s){var r;s instanceof Date?this.value=this.validateAndFormatDate_(s):s instanceof Event&&"string"==typeof(null===(r=s.target)||void 0===r?void 0:r.value)&&(this.value=s.target.value),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}setDay_(s){var r,a;let l=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(l.getTime())&&(l=new Date),l.setDate(null!==(a=parseInt(s))&&void 0!==a?a:0),this.handleChange_(l),this.active=!1,this.requestUpdate()}getHour_(){var s;let r=new Date(Date.parse(null!==(s=this.value)&&void 0!==s?s:""));isNaN(r.getTime())&&(r=new Date);let a=r.getHours();return this.is12Hour_&&a>12&&(a-=12),String(a)}setHour_(s){var r,a;let l=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(l.getTime())&&(l=new Date);let c=null!==(a=parseInt(s))&&void 0!==a?a:0;this.is12Hour_&&c>0&&c<12&&"PM"===this.getAMPM_()&&(c+=12),l.setHours(c),this.handleChange_(l)}getMinute_(){var s;let r=new Date(Date.parse(null!==(s=this.value)&&void 0!==s?s:""));return isNaN(r.getTime())&&(r=new Date),String(r.getMinutes())}setMinute_(s){var r,a;let l=new Date(Date.parse(null!==(r=this.value)&&void 0!==r?r:""));isNaN(l.getTime())&&(l=new Date),l.setMinutes(null!==(a=parseInt(s))&&void 0!==a?a:0),this.handleChange_(l)}getAMPM_(){var s,r;return(null===(s=this.value)||void 0===s?void 0:s.includes("AM"))?"AM":(null===(r=this.value)||void 0===r?void 0:r.includes("PM"))?"PM":""}setAMPM_(s){var r;let a=new Date(Date.parse(null!==(r=this.main_input.value)&&void 0!==r?r:""));if(isNaN(a.getTime())&&(a=new Date),a.getHours()>=12&&"AM"===s)a.setHours(a.getHours()-12);else{if(!(a.getHours()<12&&"PM"===s))return;a.setHours(a.getHours()+12)}this.handleChange_(a)}handleClear(s){s.stopImmediatePropagation(),this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleFocus_(s){this.active||"select"===this.type||"date"===this.type||"datetime"===this.type||(this.active=!0)}handleBlur_(s){"number"===this.type&&this.validateMinMax(parseFloat(s.target.value)),"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type&&(this.active=!1)}handleIncrement_(s,r){var a,l,c,h,p,m,g;if("date"===this.type||"datetime"===this.type){s.stopImmediatePropagation();let l=new Date(Date.parse(null!==(a=this.value)&&void 0!==a?a:""));return isNaN(l.getTime())&&(l=new Date),"left"===r?l.setMonth(l.getMonth()-1):l.setMonth(l.getMonth()+1),void this.handleChange_(l)}const y=parseFloat(String(this.step));!isNaN(y)&&y&&("left"===r?this.validateMinMax((null!==(h=parseFloat(null!==(c=null!==(l=this.value)&&void 0!==l?l:this.max)&&void 0!==c?c:"0"))&&void 0!==h?h:0)-y):"right"===r&&this.validateMinMax((null!==(g=parseFloat(null!==(m=null!==(p=this.value)&&void 0!==p?p:this.min)&&void 0!==m?m:"0"))&&void 0!==g?g:0)+y))}handleItems(s){const r=s.target.assignedNodes();r.forEach(s=>{"KOR-MENU-ITEM"===s.tagName&&s.addEventListener("active-changed",a=>{a.target.active&&(r.forEach(s=>{s.active=!1}),a.target.active=!0,this.value=s.label,this.active=!1)})})}attributeChangedCallback(s,r,a){var l;if(super.attributeChangedCallback(s,r,a),this.dispatchEvent(new Event(`${s}-changed`)),"active"!==s||"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type){if("locale"==s&&("date"===this.type||"datetime"===this.type)){const s=new Intl.DateTimeFormat(a,{hour:"numeric"}).resolvedOptions().hourCycle;this.is12Hour_="h11"===s||"h12"===s;const r=this.validateAndFormatDate_(null!==(l=this.value)&&void 0!==l?l:"");r!==this.value&&(this.value=r)}}else this.active&&!this.isMenuHandlerSet_&&(this.handleMenu(),this.isMenuHandlerSet_=!0)}handleMenu(){const s=this.parentElement,closePopover=()=>{this.active=!1,null==s||s.removeEventListener("wheel",closePopover),this.isMenuHandlerSet_=!1};null==s||s.addEventListener("wheel",closePopover)}closeSelectMenu(s){"select"===this.type&&this.active&&(s.stopImmediatePropagation(),this.active=!1)}validateMinMax(s){isNaN(s)||s===parseFloat(this.value)||(this.min&&s<parseFloat(this.min)?this.value=this.min:this.max&&s>parseFloat(this.max)?this.value=this.max:this.value=s.toString(),this.handleChange_(void 0))}getStatusIcon(){let s;switch(this.status){case"error":s="cancel";break;case"warning":s="error";break;case"success":s="check_circle"}return s}getMenuStyles(){return{top:`${this.getBoundingClientRect().top+this.clientHeight+1}px`,left:`${this.getBoundingClientRect().left}px`,width:`${this.clientWidth}px`}}validateAndFormatDate_(s){let r=s instanceof Date?s:new Date(Date.parse(null!=s?s:""));isNaN(r.getTime())&&(r=new Date);const a={dateStyle:"short"};"datetime"===this.type&&(a.timeStyle="short");return new Intl.DateTimeFormat(this.locale,a).format(r)}getLocaleDayNames_(){const s=new Intl.DateTimeFormat(this.locale,{weekday:"narrow"});return[1,2,3,4,5,6,7].map(r=>{const a=new Date(2024,0,r);return s.format(a)+"."})}getCalendarGrid_(s){var r,a;let l=new Date(Date.parse(null!=s?s:""));isNaN(l.getTime())&&(l=new Date);const h=new Intl.DateTimeFormat(this.locale,{month:"long"}).formatToParts(l).reduce((s,r)=>("literal"!==r.type&&(s[r.type]=r.value),s),{}),p=new Intl.DateTimeFormat(this.locale,{day:"numeric",month:"numeric",year:"numeric"}).formatToParts(l).reduce((s,r)=>("literal"!==r.type&&(s[r.type]=r.value),s),{}),m=null!==(r=parseInt(p.month))&&void 0!==r?r:0,g=null!==(a=parseInt(p.year))&&void 0!==a?a:0,y=h.month+" "+p.year;let f=new Date(g,m-1,1).getDay();f=0===f?6:f-1;const _=new Date(g,m,0).getDate(),b=new Date(g,m-1,0).getDate(),$=[];let x=1,A=1;$.push(...this.getLocaleDayNames_());for(let s=0;s<6;s++)for(let r=0;r<7;r++){const a=7*s+r;a<f?$.push(`${b-f+a+1}.`):x<=_?($.push(String(x)),x++):($.push(`${A}.`),A++)}return c.html`
      <kor-card id="calendar_popup" class="select-menu"
        style="top: ${this.getMenuStyles().top};
               left: ${this.getMenuStyles().left};
               width: -webkit-fit-content;
               width: -moz-fit-content;
               width: fit-content;
               max-width: 100%;
               min-width: 21rem;
               height: -webkit-fit-content;
               height: fit-content;
               max-height: 24rem;
               padding-left: 0.5rem;
               overflow: hidden;
               display: flex;"
      >
        <kor-text size="body-1">
          ${y}
        <kor-text>
        <kor-switch>
          <kor-grid columns="7" spacing
            style="grid-template-columns: repeat(7, 3rem);"
          >
            ${$.map(s=>c.html`
                <kor-switch-item
                  label="${s.includes(".")?s.slice(0,-1):s}"
                  grid-cols="1"
                  ?active="${s===p.day}"
                  ?disabled="${s.includes(".")}"
                  @click="${s=>{var r;s.stopImmediatePropagation();const a=s.target;this.setDay_(null!==(r=a.label)&&void 0!==r?r:"")}}"
                ></kor-switch-item>
              `)}
          </kor-grid>
        </kor-switch>
        ${"datetime"===this.type?c.html`
            <kor-grid columns="${this.is12Hour_?"3":"2"}" spacing="s"
              style="display: flex;"
            >
              <!-- The hours input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="hours" type="number" step="1"
                    min="0" max="${this.is12Hour_?12:24}"
                    value="${this.getHour_()}"
                    @input="${s=>{var r;const a=s.target;a.value!==this.getHour_()&&this.setHour_(null!==(r=a.value)&&void 0!==r?r:"")}}"
                    @click="${s=>{s.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${s=>{var r,a,l,c,h;s.stopImmediatePropagation();const p=s.target.parentNode.querySelector("div > input");if(!p)return;const m=(null!==(a=parseInt(null!==(r=p.value)&&void 0!==r?r:p.max))&&void 0!==a?a:0)-(null!==(l=parseInt(p.step))&&void 0!==l?l:0);m>=(null!==(c=parseInt(p.min))&&void 0!==c?c:0)&&(p.value=String(m),this.setHour_(null!==(h=p.value)&&void 0!==h?h:""))}}"
                ></kor-icon>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${s=>{var r,a,l,c,h;s.stopImmediatePropagation();const p=s.target.parentNode.querySelector("div > input");if(!p)return;const m=(null!==(a=parseInt(null!==(r=p.value)&&void 0!==r?r:p.min))&&void 0!==a?a:0)+(null!==(l=parseInt(p.step))&&void 0!==l?l:0);m<=(null!==(c=parseInt(p.max))&&void 0!==c?c:0)&&(p.value=String(m),this.setHour_(null!==(h=p.value)&&void 0!==h?h:""))}}"
                ></kor-icon>
              </div>
              <!-- The minutes input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="minutes" type="number" step="1"
                    min="0" max="60"
                    value="${this.getMinute_()}"
                    @input="${s=>{var r;const a=s.target;a.value!==this.getMinute_()&&this.setMinute_(null!==(r=a.value)&&void 0!==r?r:"")}}"
                    @click="${s=>{s.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${s=>{var r,a,l,c,h;s.stopImmediatePropagation();const p=s.target.parentNode.querySelector("div > input");if(!p)return;const m=(null!==(a=parseInt(null!==(r=p.value)&&void 0!==r?r:p.max))&&void 0!==a?a:0)-(null!==(l=parseInt(p.step))&&void 0!==l?l:0);m>=(null!==(c=parseInt(p.min))&&void 0!==c?c:0)&&(p.value=String(m),this.setMinute_(null!==(h=p.value)&&void 0!==h?h:""))}}"
                ></kor-icon>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${s=>{var r,a,l,c,h;s.stopImmediatePropagation();const p=s.target.parentNode.querySelector("div > input");if(!p)return;const m=(null!==(a=parseInt(null!==(r=p.value)&&void 0!==r?r:p.min))&&void 0!==a?a:0)+(null!==(l=parseInt(p.step))&&void 0!==l?l:0);m<=(null!==(c=parseInt(p.max))&&void 0!==c?c:0)&&(p.value=String(m),this.setMinute_(null!==(h=p.value)&&void 0!==h?h:""))}}"
                ></kor-icon>
              </div>
              <!-- The optional AM/PM switch for 12 hour time format -->
              ${this.is12Hour_?c.html`
                  <kor-switch grid-cols="1"
                    style="display: flex; margin: 4px 8px 0 0; max-width: 8rem;"
                  >
                    <kor-grid columns="2" spacing>
                      <kor-switch-item label="AM"
                        ?active="${"AM"===this.getAMPM_()}"
                        @click="${s=>{var r;s.stopImmediatePropagation();const a=s.target;this.setAMPM_(null!==(r=a.label)&&void 0!==r?r:"")}}"
                      ></kor-switch-item>
                      <kor-switch-item label="PM"
                        ?active="${"PM"===this.getAMPM_()}"
                        @click="${s=>{var r;s.stopImmediatePropagation();const a=s.target;this.setAMPM_(null!==(r=a.label)&&void 0!==r?r:"")}}"
                      ></kor-switch-item>
                    </kor-grid>
                  </kor-switch>
                `:""}
            </kor-grid>
          `:""}
      </kor-card>
    `}};J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"label",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"icon",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"value",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"name",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"type",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"locale",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"status",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0})],Q.prototype,"condensed",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0})],Q.prototype,"active",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0})],Q.prototype,"disabled",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0})],Q.prototype,"readonly",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0,attribute:"no-clear"})],Q.prototype,"noClear",void 0),J([(0,K.MZ)({type:Boolean,reflect:!0})],Q.prototype,"autofocus",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"pattern",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"min",void 0),J([(0,K.MZ)({type:String,reflect:!0})],Q.prototype,"max",void 0),J([(0,K.MZ)({type:Number,reflect:!0})],Q.prototype,"step",void 0),J([(0,K.P)("#main_input",!1)],Q.prototype,"main_input",void 0),Q=J([(0,K.EM)("kor-input")],Q);export{Q as korInput};