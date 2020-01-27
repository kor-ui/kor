import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-text')
export class waText extends LitElement {

  @property({ type: String, reflect: true }) size = 'body-1';
  @property({ type: String, reflect: true }) color = 'text-1';

  static get styles() {
    return [sharedStyles, css`
      :host {
        transition: .1s all ease-in-out;
      }
      :host([color="text-1"]) {
        color: var(--text-1);
      }
      :host([color="text-2"]) {
        color: var(--text-2);
      }
      :host([color="text-3"]) {
        color: var(--text-3);
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
  }
  
}
