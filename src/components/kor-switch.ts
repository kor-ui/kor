import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('kor-switch')
export class korSwitch extends LitElement {

  static get styles() {
    return [sharedStyles, css`
      :host {
        background-color: rgba(var(--neutral-1), .10);
        display: flex;
        width: fit-content;
        height: fit-content;
        border-radius: 4px;
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
