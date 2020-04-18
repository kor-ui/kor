import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

@customElement('kor-tool')
export class korTool extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) size = 'm';
  @property({ type: Boolean, reflect: true }) toggle;
  @property({ type: Boolean, reflect: true }) active;
  @property({ type: Boolean, reflect: true }) disabled = false;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 4px;
          box-sizing: border-box;
          transition: 0.1s all ease-in-out;
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
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.icon ? html` <kor-icon icon="${this.icon}"></kor-icon> ` : ''}
      ${this.label && !(this.icon && this.size == 's')
        ? html` <kor-text class="label" size="body-2">${this.label}</kor-text> `
        : ''}
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    // add toggle click listener
    if (name == 'toggle' && this.toggle) {
      this.addEventListener('click', () => {
        this.active = !this.active;
      });
    }
  }
}
