import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-spinner')
export class waSpinner extends LitElement {

  @property({ type: String, reflect: true }) size = 'm';

  static get styles() {
    return [sharedStyles, css`
      svg {
        animation: 2s linear infinite svg-animation;
        max-width: 100px;
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
        animation: 1.4s ease-in-out infinite both circle-animation;
        display: block;
        fill: transparent;
        stroke: #2f3d4c;
        stroke-linecap: round;
        stroke-dasharray: 283;
        stroke-dashoffset: 280;
        stroke-width: 10px;
        transform-origin: 50% 50%;
      }
      @keyframes circle-animation {
        0%,
        25% {
          stroke-dashoffset: 280;
          transform: rotate(0);
        }
        50%,
        75% {
          stroke-dashoffset: 75;
          transform: rotate(45deg);
        }
        100% {
          stroke-dashoffset: 280;
          transform: rotate(360deg);
        }
      }
    `]
  }

  render() {
    return html`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45"/>
      </svg>
    `
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

}
