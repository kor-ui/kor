import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-tab-item')
export class waTabItem extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled;
  @property({ type: String, reflect: true }) orientation = "horizontal";

  static get styles() {
    return [sharedStyles, css`
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
    `]
  }

  render() {
    return html`
      ${this.icon ? html` 
        <wa-icon icon="${this.icon}"></wa-icon> 
      ` : ''}
      ${this.label ? html` 
        <wa-text class="label">${this.label}</wa-text> 
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => this.handleActive());
  }

  handleActive() {
    let siblings: any = this.parentElement.childNodes;
    siblings.forEach(el => { el.active = false });
    (<any>this).active = true;
  }
  
}
