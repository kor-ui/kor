import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('kor-text')
export class korText extends LitElement {

  @property({ type: String, reflect: true }) size = 'body-1';
  @property({ type: String, reflect: true }) color;

  static get styles() {
    return [sharedStyles, css`
      :host {
        color: var(--text-1);
        transition: .1s all ease-in-out;
      }
      :host([size="body-1"]) {
        font: var(--body-1);
      }
      :host([size="body-2"]) {
        font: var(--body-2);
      }
      :host([size="header-1"]) {
        font: var(--header-1);
      }
      :host([size="header-2"]) {
        font: var(--header-2);
      }
    `]
  }

  render() {
    return html`
      <slot></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == "color") {
      this.style.color = this.color;
    }
  }
  
}
