import { LitElement, html, customElement, property } from 'lit-element';

@customElement('wu-button')
export class wuButton extends LitElement {
  @property({ type: String }) foo = '';

  alert() {
    alert('You have pressed a button.');
  }

  render() {
    return html`
      <button @click="${this.alert}">${this.foo}</button>
    `;
  }
}
