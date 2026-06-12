import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../text';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {'s'|'m'|'l'} size - Defines the size of the component. Possible values are `s`(24px), `m`(32px) and `l`(40px).
 */

export class korSpinner extends LitElement {
  @property({ type: String, reflect: true }) size: 's' | 'm' | 'l' = 'm';
  @property({ type: String, reflect: true }) label: string | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
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
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: var(--spacing-s);
          text-align: center;
          max-width: 240px;
        }
      `,
    ];
  }

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize() / 2 - 4}"
          cx="${this.getSize() / 2}"
          cy="${this.getSize() / 2}"
        />
      </svg>
      ${this.label ? html` <kor-text>${this.label}</kor-text> ` : ''}
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getSize(): number {
    let size;
    switch (this.size) {
      case 's':
        size = 24;
        break;
      case 'm':
        size = 32;
        break;
      case 'l':
        size = 40;
        break;
    }
    return size;
  }
}

if (!window.customElements.get('kor-spinner')) {
  window.customElements.define('kor-spinner', korSpinner);
}
