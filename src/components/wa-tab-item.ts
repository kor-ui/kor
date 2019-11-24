import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-tab-item')
export class waTabItem extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled;
  @property({ type: Boolean, reflect: true }) vertical;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: 72px;
        max-width: 240px;
        height: 56px;
        padding: 8px 16px 6px 16px;
        box-sizing: border-box;
        transition: .1s all ease-in-out;
        cursor: pointer;
        border-width: 0px 0px 2px 0px;
        border-color: transparent;
        border-style: solid;
      }
      .label {
        width: 100%;
        font: var(--body-1);
        line-height: 16px;
        text-align: center;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      /* vertical */
      :host([vertical]) .label {
        line-height: 24px;
        text-align: left;
      }
      :host([vertical]) {
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        min-width: unset;
        max-width: 100%;
        height: fit-content;
        padding: 8px 16px 8px 14px;
        border-width: 0px 0px 0px 2px;
      }
      :host([vertical]) wa-icon {
        margin-right: 8px;
      }
      /* active */
      :host([active]) {
        border-color: rgb(var(--accent-1));
      }
      /* disabled */
      :host([disabled]) {
        pointer-events: none;
        opacity: .20;
      }
      :host(:not([active]):not(:hover)),
      :host(:not([active]):not(:hover)) wa-icon {
        color: var(--text-2);
      }
      :host(:hover),
      :host(:hover) wa-icon,
      :host([active]),
      :host([active]) wa-icon {
        color: var(--text-1);
      }
    `
  }

  render() {
    return html`
      ${this.icon ? html` <wa-icon icon="${this.icon}"></wa-icon> ` : ''}
      ${this.label ? html` <div class="label">${this.label}</wa-icon> ` : ''}
    `
  }

  constructor() {
    super();
    this.addEventListener("click", function() {
      let siblings: any = this.parentElement.childNodes
      siblings.forEach(el => { el.active = false });
      (<any>this).active = true
    })
    
  }
}
