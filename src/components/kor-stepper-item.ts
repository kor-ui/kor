import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'
import './kor-icon'
import './kor-text'

@customElement('kor-stepper-item')
export class korStepperItem extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) info;
  @property({ type: String, reflect: true }) icon;
  @property({ type: Number, reflect: true }) index;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled;
  @property({ type: Boolean, reflect: true }) first;
  @property({ type: Boolean, reflect: true }) last;
  @property({ type: String, reflect: true }) orientation = "horizontal";

  static get styles() {
    return [sharedStyles, css`
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
      kor-icon {
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
      :host([active]) kor-icon {
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
        :host(:hover:not([active])) kor-icon {
          color: var(--text-1);
        }
        :host(:not([active]):not(:active):hover) .circle {
          background-color: rgba(var(--neutral-1), .15);
        }
        :host([active]:not(:active):hover) .circle {
          background-color: rgb(var(--accent-1b));
        }
      }
    `]
  }

  render() {
    return html`
      <!-- circle -->
      <div class="circle">
        ${this.icon ? html`
          <kor-icon icon="${this.icon}"></kor-icon> 
        ` : html `
          <kor-text size="header-1" class="number">${this.index}</kor-text>
        `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label ? html` 
          <kor-text class="label">${this.label}</kor-text> 
        ` : ''}
        ${this.info ? html` 
          <kor-text size="body-2" class="info">${this.info}</kor-text> 
        ` : ''}
      </div>
      <!-- lines -->
      ${!this.first ? html` 
        <div class="line before"></div>
      ` : ''}
      ${!this.last ? html` 
        <div class="line after"></div>
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    this.getIndex();
    this.addEventListener("click", () => {
      let siblings: any = this.parentElement.childNodes;
      siblings.forEach(el => { el.active = false });
      (<any>this).active = true;
    })
  }

  getIndex() {
    let children;
    children = Array.prototype.slice.call(this.parentElement.children);
    this.index = children.indexOf(this) + 1;
  }

}
