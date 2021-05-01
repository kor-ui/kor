import { LitElement, css, html, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} label -	If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} image - If set, defines the image shown on top of the card.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {Boolean} flat - If set, background, shadows and external padding are not shown.
 *
 * @slot - Displayed inside the content area.
 * @slot header - Shown on top of the card, below the label (if any is set).
 * @slot functions - Shown on the right side of the label or header slot.
 * @slot footer - Shown below the content area.
 */

export class korCard extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true }) image;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'column' | 'row' = 'column';
  @property({ type: Boolean, reflect: true }) flat = false;

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
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: 16px;
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: 16px;
        }
        slot[name='footer']:not(.empty) {
          padding-top: 16px;
        }
        .label {
          flex: 1;
          display: flex;
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        .label kor-icon {
          margin-right: 8px;
        }
        slot[name='footer']::slotted(*:not(:first-child)),
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 16px;
          margin-right: -16px;
          margin-left: -16px;
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        :host([flex-direction='column'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-bottom: 12px;
        }
        :host([flex-direction='row'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-right: 12px;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: -16px -16px 16px -16px;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.image ? html` <img class="image" src="${this.image}" /> ` : ''}
      <div
        class="top ${this.emptyHeader &&
        this.emptyFunctions &&
        !this.label &&
        !this.icon
        ? 'empty'
        : ''}"
      >
        <div class="header">
          ${this.label || this.icon
        ? html`
                <div class="label">
                  ${this.icon
            ? html` <kor-icon icon="${this.icon}"></kor-icon> `
            : ''}
                  <p>${this.label}</p>
                </div>
                ${!this.emptyHeader && (this.label || this.icon)
            ? html` <div style="margin-top: 16px"></div> `
            : ''}
              `
        : ''}
          <slot
            name="header"
            @slotchange="${(e) =>
        (this.emptyHeader = e.target.assignedNodes().length === 0)}"
            class="${this.emptyHeader ? 'empty' : ''}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${(e) =>
        (this.emptyFunctions = e.target.assignedNodes().length === 0)}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${(e) =>
        (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        class="${this.emptyFooter ? 'empty' : ''}"
      ></slot>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-card')) {
  window.customElements.define('kor-card', korCard);
}