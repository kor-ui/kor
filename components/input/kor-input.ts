import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined';
import { property } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';
import '../card';
import '../icon';

/**
 * @prop {String} label - If set, defines the text label shown on top.
 * @prop {String} icon - If set, defines the icon shown before the label/value.
 * @prop {String} value - If set, defines the value of the input. Changes upon user interaction.
 * @prop {'text'|'number'|'select'|'name'} type - Defines the type. Possible values are `text`, `number`, `select` and `date`.
 * @prop {String} name - Sets the name of the input. Corresponds to the native input's 'name' attribute.
 * @prop {String} status - If set, Displays a status icon on the right side of the input.
 * @prop {String} pattern - (If type="number" only) If set, defines a custom input pattern (see full documentation).
 * @prop {String} min - (If type="number" only) If set, defines the minimum value accepted.
 * @prop {String} max - (If type="number" only) If set, defines the maximum value accepted.
 * @prop {Number} step - (If type="number" only) Defines the steps to skip when the user presses the left or right arrows.
 * @prop {Boolean} condensed - If set to true, reduces the height of the input. The label is only shown if the value is undefined.
 * @prop {Boolean} active - If set to true, highlights the label and underline.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} readonly - If set to true, disables the input without reducing the opacity.
 * @prop {Boolean} noClear - If set to true, the clear icon and functionality will not be available.
 * @prop {Boolean} autofocus - If set to true, the component gets focused as soon as the page loads.
 *
 * @slot - Displayed inside the content area.
 * @slot functions - Displayed on the right side.
 */

export class korInput extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true }) value: string | undefined;
  @property({ type: String, reflect: true }) name: string | undefined;
  @property({ type: String, reflect: true }) type:
    | 'text'
    | 'number'
    | 'select'
    | 'date' = 'text';
  @property({ type: String, reflect: true }) status: string | undefined;
  @property({ type: Boolean, reflect: true }) condensed: boolean | undefined;
  @property({ type: Boolean, reflect: true }) active: boolean | undefined;
  @property({ type: Boolean, reflect: true }) disabled: boolean | undefined;
  @property({ type: Boolean, reflect: true }) readonly: boolean | undefined;
  @property({ type: Boolean, reflect: true, attribute: 'no-clear' })
  noClear: boolean | undefined;
  @property({ type: Boolean, reflect: true }) autofocus = false;
  // input number properties
  @property({ type: String, reflect: true }) pattern: string | undefined;
  @property({ type: String, reflect: true }) min: string | undefined;
  @property({ type: String, reflect: true }) max: string | undefined;
  @property({ type: Number, reflect: true }) step = 1;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: 8px;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px 16px;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 -8px;
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* date */
        .date-icon {
          margin-left: -24px;
          pointer-events: none;
        }
        :host([type='date']) ::-webkit-calendar-picker-indicator {
          background: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.icon
        ? html` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `
        : ''}
      <div class="center">
        ${this.label ? html` <label class="label">${this.label}</label> ` : ''}
        <input
          .type="${this.type}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly || this.disabled || this.type === 'select'}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}"
          .step="${this.step.toString()}"
          pattern="${ifDefined(this.pattern)}"
          value="${ifDefined(this.value)}"
          name="${ifDefined(this.name)}"
          @input="${this.handleChange}"
          @focus="${() => (this.type !== 'select' && !this.active ? this.active = true : '')}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${this.type === 'select'
        ? html`
          <kor-icon
            button
            class="select-icon"
            icon="arrow_drop_down"
          ></kor-icon>
          ${this.active
            ? html`
              <kor-card
                @click="${(e: Event) => { this.active = false; e.stopPropagation(); }}"
                @wheel="${(e: Event) => e.stopPropagation()}"
                class="select-menu"
                .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
              >
                <slot @slotchange="${this.handleItems}"></slot>
              </kor-card>
            `
            : ''}
        `
        : ''}
      <!-- date -->
      ${this.type === 'date'
        ? html` <kor-icon button class="date-icon" icon="event"></kor-icon> `
        : ''}
      <!-- clear -->
      ${!this.disabled &&
        !this.readonly &&
        this.value &&
        !this.noClear &&
        this.type !== 'select'
        ? html`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${() => this.handleClear()}"
            ></kor-icon>
          `
        : ''}
      <!-- status -->
      ${this.status
        ? html`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `
        : ''}
      <!-- number increment -->
      ${this.type === 'number' && !this.readonly
        ? html`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${() => this.handleIncrement('left')}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${() => this.handleIncrement('right')}"
            ></kor-icon>
          `
        : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', (e) => {
      if (this.active && this.type === 'select') {
        this.closeSelectMenu(e);
      } else if (!this.active) {
        this.active = true;
        if (this.type !== 'select' && !this.disabled && !this.readonly) {
          this.shadowRoot?.querySelector('input')?.focus();
        }
      }
    });
  }

  handleChange(e: any) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
      })
    );
  }

  handleClear() {
    this.value = undefined;
    this.removeAttribute('value');
  }

  handleBlur(e: any) {
    if (this.type === 'number') {
      this.validateMinMax(e.target.value);
    }
    if (this.type !== 'select') {
      this.active = false;
    }
  }

  handleIncrement(dir: string) {
    if (dir === 'left') {
      this.validateMinMax(
        parseInt(this.value ? this.value : this.min ? this.min : '0') -
        this.step
      );
    } else if (dir === 'right') {
      this.validateMinMax(
        parseInt(this.value ? this.value : this.min ? this.min : '0') +
        this.step
      );
    }
  }

  handleItems(e: any) {
    const items: NodeList = e.target.assignedNodes();
    items.forEach((el: any) => {
      if (el.tagName === 'KOR-MENU-ITEM') {
        // handle click on menu item
        el.addEventListener('active-changed', (e: any) => {
          if (e.target.active) {
            // unselect siblings
            items.forEach((el: any) => {
              el.active = false;
            });
            e.target.active = true;
            this.value = el.label;
            this.active = false;
          }
        });
      }
    });
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name === 'active' && this.active && this.type === 'select') {
      this.handleMenu();
    }
  }

  handleMenu() {
    const parent = this.parentElement;
    // handle click outside of popover
    const closePopover = () => {
      this.active = false;
      parent?.removeEventListener('wheel', closePopover);
    };
    parent?.addEventListener('wheel', closePopover);
  }

  closeSelectMenu(e: Event): void {
    if (this.type === 'select' && this.active) {
      e.stopImmediatePropagation();
      this.active = false;
    }
  }

  validateMinMax(val: number) {
    if (val) {
      if (this.min && val < parseInt(this.min)) {
        this.value = this.min;
      } else if (this.max && val > parseInt(this.max)) {
        this.value = this.max;
      } else {
        this.value = val.toString();
      }
    }
  }

  getStatusIcon(): string | undefined {
    let icon;
    switch (this.status) {
      case 'error':
        icon = 'cancel';
        break;
      case 'warning':
        icon = 'error';
        break;
      case 'success':
        icon = 'check_circle';
        break;
    }
    return icon;
  }

  getMenuStyles() {
    const styles = {
      top: `${this.getBoundingClientRect().top + this.clientHeight + 1}px`,
      left: `${this.getBoundingClientRect().left}px`,
      width: `${this.clientWidth}px`,
    };
    return styles;
  }
}

if (!window.customElements.get('kor-input')) {
  window.customElements.define('kor-input', korInput);
}
