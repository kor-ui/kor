import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} position - Defines the position of the component in the screen. Possible values are left, right, top and bottom.
 * @prop {String} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are column and row.
 * @prop {String} target - Defines the DOM element to which the mouseover event will be attached. It behaves identically to querySelector, which means tag names, IDs, classes and similar can be used (e.g. #myEl, .myEl, kor-input[type='number']). Please ensure the selector is unique.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */

@customElement('kor-tooltip')
export class korTooltip extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection = 'column';
  @property({ type: String, reflect: true }) position = 'bottom';
  @property({ type: String, reflect: true }) target;
  @property({ type: Boolean, reflect: true }) visible = false;

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
          position: fixed;
          z-index: 4;
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
          slot="${this.emptyHeader ? undefined : 'header'}"
          @slotchange="${(e) =>
            (this.emptyHeader = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions ? undefined : 'functions'}"
          @slotchange="${(e) =>
            (this.emptyFunctions = e.target.assignedNodes().length === 0)}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter ? undefined : 'footer'}"
          @slotchange="${(e) =>
            (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        ></slot>
      </kor-popover>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    // add listener on target changed
    if (name === 'target' && this.target) {
      this.targetObserver();
    }
  }

  targetObserver() {
    let timeout;
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
