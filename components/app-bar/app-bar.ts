import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/** 
 * @prop {String} label -	If set, defines the text label shown on the left side (if mobile is unset)..
 * @prop {String} logo - If set, defines the logo shown on the left side.
 * @prop {Boolean} mobile - If set, toggles the mobile variation.
 * 
 * @slot - The central content area. Used for hosting components such as Tabs.
 * @slot functions - Displayed on the right side (if mobile is unset). Used for hosting components such as Icon and Avatar.
 * @slot left - Displayed on the left side (if mobile is set to true). Used for hosting components such as Icon.
 * @slot right - Displayed on the right side (if mobile is set to true). Used for hosting components such as Icon.
 */

@customElement('kor-app-bar')
export class korAppBar extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) logo;
  @property({ type: Boolean, reflect: true }) mobile;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          z-index: 3;
          height: 56px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
        }
        .logo {
          height: 24px;
          margin-right: 32px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          margin-right: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          margin: 0 16px;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `,
    ];
  }

  render() {
    return html`
      ${!this.mobile
        ? html`
            ${this.logo ? html` <img class="logo" src="${this.logo}" /> ` : ''}
            ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
            <slot></slot>
            <slot name="functions"></slot>
          `
        : html`
            <slot name="left"></slot>
            ${this.label ? html` <div class="label">${this.label}</div> ` : ''}
            <slot name="right"></slot>
          `}
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
