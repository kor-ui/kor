import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-grid')
export class waGrid extends LitElement {

  @property({ type: Number, reflect: true }) columns = 12;

  static get styles() {
    return css`
      /* css goes here */
    `
  }

  render() {
    return html`
      
    `
  }
}
