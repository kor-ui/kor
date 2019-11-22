import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wu-button')
export class wuButton extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) color = 'primary';
  @property({ type: String, reflect: true }) icon;

  static get styles() {
    return css`
    :host {
      display: flex;
      width: fit-content;
      min-width: 64px;
      max-width: 160px;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: .1s all ease-in-out;
    }
    .label {
      flex: 1;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      font-weight: bold;
    }

    :host([color="primary"]) {
      background: rgb(var(--accent-1));
    }
    :host([color="primary"]:hover) {
      background: rgba(var(--accent-1), .9)
    }
    :host([color="primary"]:active) {
      background: rgba(var(--accent-1), .8)
    }
    :host([color="primary"]) .label {
      color: white;
    }

    :host([color="secondary"]) {
      background: rgb(var(--neutral-1), .1);
    }
    :host([color="secondary"]:hover) {
      background: rgba(var(--neutral-1), .2)
    }
    :host([color="secondary"]:active) {
      background: rgba(var(--neutral-1), .3)
    }
    :host([color="secondary"]) .label,
    :host([color="tertiary"]) .label {
      color: rgba(var(--neutral-1), .9);
    }

    :host([color="tertiary"]) {
      border: 1px solid rgb(var(--neutral-1), .1);
    }
    :host([color="tertiary"]:hover) {
      border: 1px solid rgb(var(--neutral-1), .2);
    }
    :host([color="tertiary"]:active) {
      border: 1px solid rgb(var(--neutral-1), .3);
    }
  `}

  render() {
    return html`
      <div class="${this.icon ? 'icon' : 'label'}">${this.label}</div>
    `}
}
