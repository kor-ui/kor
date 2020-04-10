import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from './shared-styles';
import './kor-card';

@customElement('kor-popover')
export class korPopover extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection = 'column';
  @property({ type: String, reflect: true }) position = 'bottom';
  @property({ type: String, reflect: true }) target;
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
          background-color: rgb(var(--base-4));
          border-radius: 4px;
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s all ease-in-out, 0s top, 0s left;
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
      </kor-card>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
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
    let tar = document.querySelector(this.target);
    if (tar) {
      tar.addEventListener('click', () => this.handlePosition(tar));
    }
  }

  visibleObserver() {
    let tar = document.querySelector(this.target);
    if (tar) {
      this.handlePosition(tar);
    }
    !this.sticky && this.target ? this.addDocListener(tar) : '';
  }

  handlePosition(tar) {
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
      self.style.top = `${
        rect.top + rect.height / 2 - self.clientHeight / 2
      }px`;
    }
    // get x axis
    if (self.position.startsWith('right')) {
      self.style.left = `${rect.left + rect.width + 8}px`;
    } else if (self.position.startsWith('left')) {
      self.style.left = `${rect.left - self.clientWidth - 8}px`;
    } else {
      self.style.left = `${
        rect.left + rect.width / 2 - self.clientWidth / 2
      }px`;
    }
  }

  addDocListener(tar) {
    let self = this;
    let closePopover = function (e) {
      if (e.target !== tar) {
        self.visible = false;
        document.removeEventListener('click', closePopover);
      }
    };
    document.addEventListener('click', closePopover);
  }
}
