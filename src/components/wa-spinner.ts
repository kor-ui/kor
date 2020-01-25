import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-spinner')
export class waSpinner extends LitElement {

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
      /* size */
      :host([size="m"]) svg {
        width: 32px;
      }
      :host([size="s"]) svg {
        width: 24px;
      }
      :host([size="m"]) circle {
        stroke-dasharray: 32;
        stroke-dashoffset: 32;
      }
      :host([size="s"]) circle {
        stroke-dasharray: 24;
        stroke-dashoffset: 24;
      }
      /* label */
      wa-text {
        margin-top: 8px;
      }
    `]
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="${this.size == 's' ? '0 0 24 24' : '0 0 32 32'}">
        <circle r="${this.size == 's' ? '10' : '14'}"
          cx="${this.size == 's' ? '12' : '16'}"
          cy="${this.size == 's' ? '12' : '16'}"/>
      </svg>
      ${this.label ? html` 
        <wa-text>${this.label}</wa-text> 
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

}
