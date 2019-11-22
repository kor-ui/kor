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
      /* active */
      :host([color="primary"]:active) {
        background-color: rgb(var(--accent-1c));
      }
      :host([color="secondary"]:active) {
        background-color: rgba(var(--neutral-1), .05);
      }
      :host([color="tertiary"]:active) {
        border-color: rgba(var(--neutral-1), .20);
      }
      /* label */
      .label {
        flex: 1;
        text-align: center;
        font: bold 13px/24px 'open-sans';
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      :host([color="primary"]) .label,
      :host([color="primary"][icon]) xin-icon {
        color: white;
      }
      :host(:not([color="primary"])) .label,
      :host(:not([color="primary"])[icon]) xin-icon {
        color: rgba(var(--neutral-1), .9);
      }
      :host([color="secondary"]) .label,
      :host([color="tertiary"]) .label {
        color: rgba(var(--neutral-1), .9);
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
