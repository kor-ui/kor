import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('xin-button')
export class xinButton extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) color = 'primary';
  @property({ type: String, reflect: true }) icon;

  static get styles() {
    return css`
      :host {
        display: flex;
        height: fit-content;
        width: fit-content;
        border-radius: 4px;
        cursor: pointer;
        transition: .1s all ease-in-out;
      }
      :host(:not([icon])) {
        min-width: 64px;
        max-width: 160px;
        padding: 4px 8px;
      }
      :host([icon]) {
        padding: 4px;
      }
      .label {
        flex: 1;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        font-weight: bold;
        user-select: none;
      }
      /* color = primary */
      :host([color="primary"]) {
        background-color: rgb(var(--accent-1));
      }
      :host([color="primary"]:active) {
        background-color: rgba(var(--accent-1), .80);
      }
      :host([color="primary"]) .label,
      :host([color="primary"][icon]) xin-icon {
        color: white;
      }
      /* color = secondary */
      :host([color="secondary"]) {
        background-color: rgb(var(--neutral-1), .15);
      }
      :host([color="secondary"]:active) {
        background-color: rgba(var(--neutral-1), .10);
      }
      :host([color="secondary"]) .label,
      :host([color="tertiary"]) .label {
        color: rgba(var(--neutral-1), .9);
      }
      /* color = tertiary */
      :host([color="tertiary"]) {
        border-width: 1px;
        border-style: solid;
        border-color: rgb(var(--neutral-1), .25);
      }
      :host([color="tertiary"]:active) {
        border-color: rgb(var(--neutral-1), .20);
      }
      :host([color="tertiary"]:not([icon])) {
        padding: 3px 7px;
      }
      :host([color="tertiary"][icon]) {
        padding: 3px;
      }
      /* hover inputs */
      @media (hover: hover) {
        :host([color="primary"]:not(:active):hover) {
          background-color: rgba(var(--accent-1), .90);
        }
        :host([color="secondary"]:not(:active):hover) {
          background-color: rgba(var(--neutral-1), .20);
        }
        :host([color="tertiary"]:not(:active):hover) {
          border-color: rgb(var(--neutral-1), .30);
          background-color: rgb(var(--neutral-1), .05);
        }
      }
    `
  }

  render() {
    return html`
    ${!this.icon ? html`
      <div class="label">${this.label}</div>
    ` : html`
      <xin-icon icon="${this.icon}"></xin-icon>
    `}
    `
  }
}
