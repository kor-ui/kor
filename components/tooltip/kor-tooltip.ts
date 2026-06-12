import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../popover';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'left'|'right'|'top'|'bottom'} position - Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`.
 * @prop {'column'|'row'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {String} target - Defines the DOM element to which the mouseover event will be attached. It behaves identically to querySelector, which means tag names, IDs, classes and similar can be used (e.g. #myEl, .myEl, kor-input[type='number']). Please ensure the selector is unique.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */

export class korTooltip extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'column' | 'row' = 'column';
  @property({ type: String, reflect: true }) position:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom' = 'bottom';
  @property({ type: String, reflect: true }) target: string | HTMLElement | undefined;
  @property({ type: Boolean, reflect: true }) visible: boolean | undefined;

  // readonly properties
  @state() emptyHeader = true;
  @state() emptyFunctions = true;
  @state() emptyFooter = true;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: fixed;
          z-index: 4;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        kor-popover {
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader ? 'hidden' : 'header'}"
          @slotchange="${(e: any) =>
            (this.emptyHeader = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions ? 'hidden' : 'functions'}"
          @slotchange="${(e: any) =>
            (this.emptyFunctions = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter ? 'hidden' : 'footer'}"
          @slotchange="${(e: any) =>
            (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        ></slot>
      </kor-popover>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    // add listener on target changed
    if (name === 'target' && this.target) {
      this.targetObserver();
    }
  }

  targetObserver() {
    let timeout: any;
    const tar =
      typeof this.target === 'string'
        ? document.querySelector(this.target)
        : this.target;
    if (tar) {
      // show on mouse over
      tar.addEventListener('mouseover', () => {
        timeout = setTimeout(() => (this.visible = true), 500);
      });
      // hide on mouse out
      tar.addEventListener('mouseout', () => {
        this.visible = false;
        clearTimeout(timeout);
      });
    }
  }
}

if (!window.customElements.get('kor-tooltip')) {
  window.customElements.define('kor-tooltip', korTooltip);
}
