import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('kor-spinner')
export class korSpinner extends LitElement {

  @property({ type: String, reflect: true }) size = 'm';
  @property({ type: String, reflect: true }) label;

  static get styles() {
    return [sharedStyles, css`
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
          transform: rotateZ(360deg)
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
        margin-top: 8px;
      }
    `]
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}">
        <circle 
          stroke-dasharray="${this.getSize()}"
          r="${(this.getSize() / 2) - 4}" 
          cx="${this.getSize() / 2}" 
          cy="${this.getSize() / 2}"/>
      </svg>
      ${this.label ? html` 
        <kor-text>${this.label}</kor-text> 
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getSize(): number {
    let size;
    switch (this.size) {
      case 's': size = 24; break;
      case 'm': size = 32; break;
      case 'l': size = 40; break;
    }
    return size;
  }

}
