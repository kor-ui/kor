import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../card';

/**
 * @prop {String} label -	Defines the text label.
 * @prop {String} icon - If set, defines the icon shown before the label.
 * @prop {Boolean} expanded -	If set to true, expands the accordion to display its content.
 * @prop {Boolean} disabled -	If set to true, disables mouse clicks and the style gets updated.
 *
 * @slot - Displayed inside the accordion when it is expanded.
 * @slot header - If used, the header slot replaces the default text label and expand arrow with custom content.
 * @slot functions - Displayed close to the 'expand' arrow.
 * @slot footer - Displayed below the content when it is expanded.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */

export class korAccordion extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: Boolean, reflect: true }) expanded: boolean | undefined;
  @property({ type: Boolean, reflect: true }) disabled: boolean | undefined;

  // readonly properties
  @state() emptyHeader = true;
  @state() emptyFunctions = true;
  @state() emptyBody = true;
  @state() emptyFooter = true;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: var(--spacing-s) var(--spacing-l);
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        slot:not([name]) {
          transition: var(--transition-1);
          display: inherit;
          flex-direction: inherit;
          gap: inherit;
        }
        slot[name='footer'] {
          justify-content: flex-end;
        }
        /* expanded */
        :host([expanded]) slot:not([name]) {
          margin-top: var(--spacing-l);
        }
        :host(:not([expanded])) slot:not([name]) {
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: var(--spacing-s);
        }
        slot[name='header'] p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
          flex: 1;
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-card
        @click="${() => (!this.expanded ? (this.expanded = true) : '')}"
      >
        <slot
          name="header"
          slot="header"
          @click="${(e: any) => this.handleCollapse(e)}"
        >
          <div class="header">
            ${this.icon
              ? html` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `
              : ''}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot name="functions" slot="functions"></slot>
        <slot></slot>
        ${this.expanded
          ? html`
              <slot
                name="footer"
                slot="${this.emptyFooter ? 'hidden' : 'footer'}"
                @slotchange="${(e: any) =>
                  (this.emptyFooter = e.target.assignedNodes().length === 0)}"
              ></slot>
            `
          : ''}
      </kor-card>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  connectedCallback() {
    super.connectedCallback();
    // remove card padding
    setTimeout(() => {
      const topNode: HTMLElement | null | undefined = this.shadowRoot
        ?.querySelector('kor-card')
        ?.shadowRoot?.querySelector('.top');
      if (topNode) {
        topNode.style.padding = '0';
      }
    }, 0);
  }

  handleCollapse(e: any) {
    if (this.expanded) {
      this.expanded = false;
      e.stopPropagation();
    }
  }
}

if (!window.customElements.get('kor-accordion')) {
  window.customElements.define('kor-accordion', korAccordion);
}
