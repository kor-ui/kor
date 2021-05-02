import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';
import '../card';
import '../icon';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 * @prop {Boolean} sticky - If set to true, the close icon will not be displayed.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */

export class korNotificationItem extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'row' | 'column' = 'column';
  @property({ type: Boolean, reflect: true }) visible = false;
  @property({ type: Boolean, reflect: true }) sticky;

  // readonly properties
  /** @ignore */
  @property({ type: Boolean }) emptyHeader = true;
  /** @ignore */
  @property({ type: Boolean }) emptyFunctions = true;
  /** @ignore */
  @property({ type: Boolean }) emptyFooter = true;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          transition: var(--transition-1);
          opacity: 1;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-card
        @click="${(e) => e.stopPropagation()}"
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
  }
}

if (!window.customElements.get('kor-notification-item')) {
  window.customElements.define('kor-notification-item', korNotificationItem);
}
