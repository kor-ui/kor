import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('kor-switch')
export class korSwitch extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: fit-content;
          height: fit-content;
          border-radius: 4px;
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
