import { LitElement, css, html, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';
import '../card';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {'s'|'m'|'l'} size - Defines the size (width) of the component. Possible values are `s`(80px), `m`(120px) and `l`(320px).
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */

export class korPane extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'row' | 'column' = 'column';
  @property({ type: String, reflect: true }) size: 's' | 'm' | 'l' = 'l';

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

if (!window.customElements.get('kor-pane')) {
  window.customElements.define('kor-pane', korPane);
}
