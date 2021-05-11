import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';
import '../card';

/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'left'|'right'|'top'|'bottom'} position - Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {String} target - Defines the DOM element to which the click event will be attached. It behaves identically to querySelector, which means tag names, IDs, classes and similar can be used (e.g. #myEl, .myEl, kor-input[type='number']). Please ensure the selector is unique.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 * @prop {Boolean} sticky - If set to true, clicking on the page will not hide the component.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */

export class korPopover extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'row' | 'column' = 'column';
  @property({ type: String, reflect: true }) position:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom' = 'bottom';
  @property({ type: String, reflect: true }) target:
    | string
    | HTMLElement
    | undefined;
  @property({ type: Boolean, reflect: true }) visible: boolean | undefined;
  @property({ type: Boolean, reflect: true }) sticky: boolean | undefined;

  // readonly properties
  @state() emptyHeader = true;
  @state() emptyFunctions = true;
  @state() emptyFooter = true;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: var(--border-radius);
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
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
        @click="${(e: any) => e.stopPropagation()}"
        @wheel="${(e: any) => e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
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
      </kor-card>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    // add listener on target changed
    if (name === 'target' && this.target) {
      this.targetObserver();
    }
    // handle position if visibility changes
    else if (name === 'visible' && this.visible) {
      this.visibleObserver();
    }
  }

  targetObserver() {
    const tar =
      typeof this.target === 'string'
        ? document.querySelector(this.target)
        : this.target;
    if (tar) {
      tar.addEventListener('click', () => this.handlePosition(tar));
    }
  }

  visibleObserver() {
    const tar =
      typeof this.target === 'string'
        ? document.querySelector(this.target)
        : this.target;
    if (tar) {
      this.handlePosition(tar);
    }
    !this.sticky && this.target ? this.addDocListener(tar) : '';
  }

  handlePosition(tar: Element | null | undefined) {
    if (!tar) {
      return;
    }
    let self = this;
    let rect = tar.getBoundingClientRect();
    self.visible = true;
    // get y axis
    if (self.position.startsWith('bottom')) {
      self.style.top = `${rect.top + rect.height + 8}px`;
    } else if (self.position.startsWith('top')) {
      self.style.top = `${rect.top - self.clientHeight - 8}px`;
    } else {
      self.style.top = `${rect.top + rect.height / 2 - self.clientHeight / 2}px`;
    }
    // get x axis
    if (self.position.startsWith('right')) {
      self.style.left = `${rect.left + rect.width + 8}px`;
    } else if (self.position.startsWith('left')) {
      self.style.left = `${rect.left - self.clientWidth - 8}px`;
    } else {
      self.style.left = `${rect.left + rect.width / 2 - self.clientWidth / 2}px`;
    }
  }

  addDocListener(tar: Element | null | undefined) {
    let self = this;
    let closePopover = function (e: any) {
      if ((e.target !== tar && e.type === 'click') || e.type === 'wheel') {
        self.visible = false;
        document.removeEventListener('click', closePopover);
        document.removeEventListener('wheel', closePopover);
      }
    };
    document.addEventListener('click', closePopover);
    document.addEventListener('wheel', closePopover);
  }
}

if (!window.customElements.get('kor-popover')) {
  window.customElements.define('kor-popover', korPopover);
}
