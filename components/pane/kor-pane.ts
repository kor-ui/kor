import { LitElement, css, html, customElement, property } from 'lit-element';
import '../card';

@customElement('kor-pane')
export class korPane extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection = 'column';
  @property({ type: String, reflect: true }) size = 'l';

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [
      css`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-in-out;
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-card
        label="${this.label ? this.label : ''}"
        icon="${this.icon ? this.icon : ''}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader ? '' : 'header'}"
          @slotchange="${(e) =>
            (this.emptyHeader = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions ? '' : 'functions'}"
          @slotchange="${(e) =>
            (this.emptyFunctions = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter ? '' : 'footer'}"
          @slotchange="${(e) =>
            (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        ></slot>
      </kor-card>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
