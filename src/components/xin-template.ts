import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('xin-template')
export class xinTemplate extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';

  static get styles() {
    return css`
      /* css goes here */
    `
  }

  render() {
    return html`
      <!-- conditional dom rendering -->
      ${this.label === 'hi' ?
        html`<p>Render some HTML if hi</p>` :
        html`<p>Render some other HTML if not</p>
      `}
      <!-- class-prop binding (ternary equation) -->
      <div class="${this.label ? 'label' : 'icon'}">
        <!-- content-prop binding -->
        ${this.label}
      </div>
    `
  }
}
