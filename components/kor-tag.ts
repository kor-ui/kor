import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from './shared-styles';
import './kor-icon';
import './kor-text';

@customElement('kor-tag')
export class korTag extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon;
  @property({ type: Boolean, reflect: true }) removable;
  @property({ type: Boolean, reflect: true }) button;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          padding: 4px;
          display: flex;
          height: fit-content;
          width: fit-content;
          max-width: 160px;
          border-radius: 4px;
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: 0.1s ease-in-out;
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
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <!-- icon -->
      ${this.icon ? html` <kor-icon icon="${this.icon}"></kor-icon> ` : ''}
      <!-- label -->
      ${this.label
        ? html` <kor-text class="label">${this.label}</kor-text> `
        : ''}
      <!-- removable -->
      ${this.removable
        ? html`
            <kor-icon
              icon="close"
              button
              @click="${() => this.handleRemove()}"
            ></kor-icon>
          `
        : ''}
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  handleRemove() {
    this.dispatchEvent(new Event('remove'));
  }
}
