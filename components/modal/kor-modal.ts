import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles'

@customElement('kor-modal')
export class korModal extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) height = '400px';
  @property({ type: String, reflect: true }) width = '600px';
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection = 'column';
  @property({ type: Boolean, reflect: true }) visible = false;
  @property({ type: Boolean, reflect: true }) sticky;

  // readonly properties
  @property({ type: Boolean }) emptyHeader = true;
  @property({ type: Boolean }) emptyFunctions = true;
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [ 
      sharedStyles, 
      css`
        :host {
          transition: 0.1s all ease-in-out, 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-in-out, 0s top, 0s left;
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-card
        @click="${(e) => e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this
          .height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader ? undefined : 'header'}"
          @slotchange="${(e) =>
            (this.emptyHeader = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot name="functions" slot="functions">
          ${!this.sticky
            ? html`
                <kor-icon
                  button
                  icon="close"
                  @click="${() => (this.visible = false)}"
                ></kor-icon>
              `
            : ''}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter ? undefined : 'footer'}"
          @slotchange="${(e) =>
            (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        ></slot>
      </kor-card>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name === 'visible' && this.visible) {
      this.addEventListener('click', () =>
        !this.sticky ? (this.visible = false) : ''
      );
    }
  }
}
