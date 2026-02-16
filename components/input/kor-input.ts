import { LitElement, css, html, TemplateResult } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined';
import { customElement, property, query } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import type { korSwitchItem } from '../switch/index.d.ts';
import '../card';
import '../icon';

declare global {
  namespace Intl {
    interface ResolvedDateTimeFormatOptions {
      hourCycle?: "h11" | "h12" | "h23" | "h24";
    }
  }
}

/**
 * @prop {String} label - If set, defines the text label shown on top.
 * @prop {String} icon - If set, defines the icon shown before the label/value.
 * @prop {String} value - If set, defines the value of the input. Changes upon user interaction.
 * @prop {'text'|'number'|'select'|'password'|'date'|'datetime'} type - Defines the type. Possible values are `text`, `number`, `select`, `password`, `date` and `datetime`.
 * @prop {String} locale - (If type="date" || type="datetime" only) Sets the locale for the calendar custom popup.
 * @prop {String} name - Sets the name of the input. Corresponds to the native input's 'name' attribute.
 * @prop {String} status - If set, Displays a status icon on the right side of the input.
 * @prop {String} pattern - (If type="number" only) If set, defines a custom input pattern (see full documentation).
 * @prop {String} min - (If type="number" only) If set, defines the minimum value accepted.
 * @prop {String} max - (If type="number" only) If set, defines the maximum value accepted.
 * @prop {Number} step - (If type="number" only) Defines the steps to skip when the user presses the left or right arrows.
 * @prop {Boolean} condensed - If set to true, reduces the height of the input. The label is only shown if the value is undefined.
 * @prop {Boolean} active - If set to true, highlights the label and underline, opens/closes various popups if any.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} readonly - If set to true, disables the input without reducing the opacity.
 * @prop {Boolean} noClear - If set to true, the clear icon and functionality will not be available.
 * @prop {Boolean} autofocus - If set to true, the component gets focused as soon as the page loads.
 *
 * @slot - Displayed inside the content area.
 * @slot functions - Displayed on the right side.
 */
@customElement('kor-input')
export class korInput extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true }) value: string | undefined;
  @property({ type: String, reflect: true }) name: string | undefined;
  @property({ type: String, reflect: true }) type:
    | 'text'
    | 'number'
    | 'select'
    | 'password'
    | 'datetime'
    | 'date' = 'text';
  @property({ type: String, reflect: true }) locale: string | undefined;
  @property({ type: String, reflect: true }) status: string | undefined;
  @property({ type: Boolean, reflect: true }) condensed: boolean | undefined;
  @property({ type: Boolean, reflect: true }) active: boolean | undefined;
  @property({ type: Boolean, reflect: true }) disabled: boolean | undefined;
  @property({ type: Boolean, reflect: true }) readonly: boolean | undefined;
  @property({ type: Boolean, reflect: true, attribute: 'no-clear' })
  noClear: boolean | undefined;
  @property({ type: Boolean, reflect: true }) autofocus: boolean = false;
  // input number properties
  @property({ type: String, reflect: true }) pattern: string | undefined;
  @property({ type: String, reflect: true }) min: string | undefined;
  @property({ type: String, reflect: true }) max: string | undefined;
  // BVV: By default increment controls are disabled
  @property({ type: Number, reflect: true }) step: number = 0;
  @query("#main_input", false/*cache*/) main_input!: HTMLInputElement;

  private is12Hour_: boolean = false;
  private isMenuHandlerSet_ = false;

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
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hours,
        .minutes {
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding-top: 8px;
          width: 100%;
          background-color: rgba(var(--neutral-1), 0.05);
          min-width: 2rem;
          text-align: center;
        }
        .hours > input,
        .minutes > input {
          padding-left: 8px;
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
          border-color: rgb(var(--accent-1));
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
          margin-right: var(--spacing-s);
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
          margin-left: var(--spacing-s);
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
        /* select, date and datetime */
        :host([type='date']),
        :host([type='date']) *,
        :host([type='datetime']),
        :host([type='datetime']) *,
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
          padding: var(--spacing-l) 0;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 var(--spacing-s);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
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
        <input id="main_input"
          .type="${this.type === 'date' || this.type === 'datetime' ? 'text' : this.type}"
          .value="${this.value ? this.value : ''}"
          .step="${this.step ? this.step.toString() : 'any'}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly ||
          this.disabled ||
          this.type === 'select'}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}"
          pattern="${ifDefined(this.pattern)}"
          name="${ifDefined(this.name)}"
          @input="${(e: Event)=>{
                    const self = e.target as HTMLInputElement;
                    if (self.value != this.value) {
                      this.handleChange_(e);
                    }
                  }}"
          @focus="${(e: Event)=>{this.handleFocus_(e)}}"
          @blur="${(e: Event)=>{this.handleBlur_(e)}}"
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
                    @click="${(e: Event) => {
                      this.active = false;
                      e.stopPropagation();
                    }}"
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
      <!-- date and datetime -->
      ${this.type === 'date' || this.type === 'datetime'
        ? html`${this.active ? this.getCalendarGrid_(this.value ?? '') : ''}`
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
              @click="${this.handleClear}"
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
      <!-- number increment or month increment -->
      ${((this.type === 'number' && parseFloat(String(this.step)))
         || this.type === 'date' || this.type === 'datetime') && !this.readonly
        ? html`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${(e: Event) => this.handleIncrement_(e, 'left')}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${(e: Event) => this.handleIncrement_(e, 'right')}"
            ></kor-icon>
          `
        : ''}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', (e: Event) => {
      if (this.active) {
        if (this.type === 'select') {
          this.closeSelectMenu(e);
        } else {
          this.active = false;
        }
      } else if (!this.active) {
        this.active = true;
        if (this.type !== 'select' && !this.disabled && !this.readonly) {
          this.main_input?.focus();
        }
      }
    });
    if (this.type === "datetime") {
      const hour_cycle: string|undefined =
        new Intl.DateTimeFormat(this.locale, {hour: 'numeric'}).
          resolvedOptions().hourCycle;
      if (hour_cycle === "h11" || hour_cycle === "h12") {
        this.is12Hour_ = true;
      }
    }
  }

  firstUpdated() {
    if (this.type !== 'select' && !this.disabled && !this.readonly) {
      this.main_input?.focus();
    }
    // BVV: Disable decrements/increments if this.step is not specified
    this.main_input?.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.step && this.type === 'number'
          && (e.key === 'ArrowUp' || e.key === 'ArrowDown'))
      {
        e.preventDefault();
      }
    });
    this.main_input?.addEventListener('wheel', (e: Event) => {
      if (!this.step && this.type === 'number') e.preventDefault();
    }, { passive: false });
    // BVV: Validate and format the date and time according to the locale
    if (this.type === 'date' || this.type === 'datetime') {
      this.value =
        this.validateAndFormatDate_(this.value ?? '');
    }
  }

  private handleChange_(e: Event|Date|undefined) {
    /*! BVV: A special case for date or date and time types,
     *  when the date validation logic is implemented here
     *  together with the calendar_popup re-drawing
     *  It is invoked form this.handleIncrement_, this.setDay_,
     *  this.setHour_, this.setMinute_, this.setAMPM_
     *  as well as from a direct input into the main_input
     */
    if (e instanceof Date) {
      this.value = this.validateAndFormatDate_(e);
    } else if (e instanceof Event
               && typeof (e.target as HTMLInputElement)?.value === "string") {
      this.value = (e.target as HTMLInputElement)!.value;
    }
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
      })
    );
  }

  // BVV:
  private setDay_(day: string) {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    chosen_date_or_now.setDate(parseInt(day) ?? 0);
    this.handleChange_(chosen_date_or_now);
    this.active = false; // close the calendar popup
    this.requestUpdate();
  }

  // BVV:
  private getHour_(): string {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    let hours: number = chosen_date_or_now.getHours();
    if (this.is12Hour_ && hours > 12) {
      hours -= 12;
    }
    return String(hours);
  }
  private setHour_(hours: string) {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    chosen_date_or_now.setHours(parseInt(hours) ?? 0);
    this.handleChange_(chosen_date_or_now);
  }

  // BVV:
  private getMinute_(): string {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    return String(chosen_date_or_now.getMinutes());
  }
  private setMinute_(minutes: string) {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    chosen_date_or_now.setMinutes(parseInt(minutes) ?? 0);
    this.handleChange_(chosen_date_or_now);
  }

  // BVV:
  private getAMPM_(): string {
    if (this.value?.includes("AM")) {
      return "AM";
    } else if (this.value?.includes("PM")) {
      return "PM";
    }
    return "";
  }
  private setAMPM_(ampm: string) {
    let chosen_date_or_now: Date =
      new Date(Date.parse(this.main_input!.value ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    // From PM to AM
    if (chosen_date_or_now.getHours() >= 12 && ampm === "AM") {
      chosen_date_or_now.setHours(chosen_date_or_now.getHours() - 12);
    // From AM to PM
    } else if (chosen_date_or_now.getHours() < 12 && ampm === "PM") {
      chosen_date_or_now.setHours(chosen_date_or_now.getHours() + 12);
    } else {
      return; // Do nothing
    }
    this.handleChange_(chosen_date_or_now);
  }

  handleClear(e: Event) {
    e.stopImmediatePropagation();
    this.value = undefined;
    this.removeAttribute('value');
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleFocus_(e: Event) {
    if (!this.active && this.type !== 'select'
        && this.type !== 'date' && this.type !== 'datetime')
    {
      this.active = true;
    }
  }

  private handleBlur_(e: Event) {
    if (this.type === 'number') {
      this.validateMinMax(parseFloat((e.target! as HTMLInputElement).value));
    }
    if (this.type !== 'select'
        && this.type !== 'date' && this.type !== 'datetime')
    {
      this.active = false;
    }
  }

  private handleIncrement_(e: Event, dir: string) {
    /*! BVV: In case of date or date and time types
     *  the left direction decrements month,
     *  the right direction increments month
     */
    if (this.type === 'date' || this.type === 'datetime') {
      e.stopImmediatePropagation();
      let chosen_date_or_now: Date =
        new Date(Date.parse(this.value ?? ''));
      if (isNaN(chosen_date_or_now.getTime())) {
        chosen_date_or_now = new Date();
      }
      if (dir === 'left') {
        chosen_date_or_now.setMonth(chosen_date_or_now.getMonth() - 1);
      } else {
        chosen_date_or_now.setMonth(chosen_date_or_now.getMonth() + 1);
      }
      this.handleChange_(chosen_date_or_now);
      return;
    }
    const step: number = parseFloat(String(this.step));
    if (isNaN(step) || !step) return;
    if (dir === 'left') {
      // Decrement from the value or from its max
      this.validateMinMax(
        (parseFloat(this.value ?? this.max ?? '0') ?? 0) - step);
    } else if (dir === 'right') {
      // Increment to the value or to its min
      this.validateMinMax(
        (parseFloat(this.value ?? this.min ?? '0') ?? 0) + step);
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
    if (name === 'active'
        && (this.type === 'select'
            || this.type === 'date' || this.type === 'datetime'))
    {
      if (this.active && !this.isMenuHandlerSet_) {
        this.handleMenu();
        this.isMenuHandlerSet_ = true;
      }
    // BVV: Validate and format the date and time according to the locale
    } else if (name == "locale"
               && (this.type === 'date' || this.type === 'datetime'))
    {
      const hour_cycle: string|undefined =
        new Intl.DateTimeFormat(newval, {hour: 'numeric'})
          .resolvedOptions().hourCycle;
      if (hour_cycle === "h11" || hour_cycle === "h12") {
        this.is12Hour_ = true;
      } else {
        this.is12Hour_ = false;
      }
      const validated_date: string =
        this.validateAndFormatDate_(this.value ?? '');
      if (validated_date !== this.value) {
        this.value = validated_date;
      }
    }
  }

  handleMenu() {
    const parent = this.parentElement;
    // Handles scrolling over the main input
    const closePopover = () => {
      this.active = false;
      parent?.removeEventListener('wheel', closePopover);
      this.isMenuHandlerSet_ = false;
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
    if (!isNaN(val) && val !== parseFloat(this.value!)) {
      if (this.min && val < parseFloat(this.min)) {
        this.value = this.min;
      } else if (this.max && val > parseFloat(this.max)) {
        this.value = this.max;
      } else {
        this.value = val.toString();
      }
      this.handleChange_(undefined);
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

  // BVV:
  private validateAndFormatDate_(date: Date|string): string {
    let chosen_date_or_now: Date =
      date instanceof Date ? date : new Date(Date.parse(date ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    const params: Intl.DateTimeFormatOptions = {dateStyle: 'short'};
    if (this.type === 'datetime') {
      // Example output (en-US): "2/11/26, 10:01 PM"
      params.timeStyle = 'short';
    }
    const short_date_formatter: Intl.DateTimeFormat =
      new Intl.DateTimeFormat(this.locale, params);
    return short_date_formatter.format(chosen_date_or_now);
  }

  // BVV:
  private getLocaleDayNames_(): Array<string> {
    // Use the browser's default locale if this.locale == undefined
    const formatter =
      new Intl.DateTimeFormat(this.locale, {weekday: 'narrow'});
    // Start with a known date (e.g., January 2024 starts on a Monday)
    // Day 1 to 7 covers Monday through Sunday
    return [1, 2, 3, 4, 5, 6, 7].map(day => {
      const date = new Date(2024, 0, day); // 2024-01-01 is Monday
      // Marked with dot to be disabled kor-switch-item
      return formatter.format(date) + ".";
    });
  }

  // BVV:
  private getCalendarGrid_(chosen_date: string): TemplateResult {
    // 1. Get the month name according to this.locale value
    let chosen_date_or_now: Date =
      new Date(Date.parse(chosen_date ?? ''));
    if (isNaN(chosen_date_or_now.getTime())) {
      chosen_date_or_now = new Date();
    }
    const month_part: Intl.DateTimeFormatPart[] =
      new Intl.DateTimeFormat(this.locale, {month: 'long'})
        .formatToParts(chosen_date_or_now);
    const month_obj: Record<string, string> =
      month_part.reduce((acc, part) => {
        if (part.type !== 'literal') {
          acc[part.type] = part.value;
        }
        return acc;
      }, {} as Record<string, string>);
    const date_parts: Intl.DateTimeFormatPart[] =
      new Intl.DateTimeFormat(this.locale,
        {day: 'numeric', month: 'numeric', year: 'numeric'})
          .formatToParts(chosen_date_or_now);
    const date_obj: Record<string, string> =
      date_parts.reduce((acc, part) => {
        if (part.type !== 'literal') {
          acc[part.type] = part.value;
        }
        return acc;
      }, {} as Record<string, string>);

    const month: number = parseInt(date_obj.month!) ?? 0;
    const year: number = parseInt(date_obj.year!) ?? 0;
    const month_and_year: string =
      month_obj.month! + " " + date_obj.year!;

    // 2. Here Monday is zero and is the start day,
    // while getDay() has Sunday as zero and Saturday as 6
    let startDay: number =
      new Date(year, month - 1/*indexed from 0*/, 1).getDay();
    // Convert to start from Monday instead of Sunday
    startDay = startDay === 0 ? 6 : startDay - 1;

    // 3. Total days in current and previous month
    const totalDays = new Date(year, month, 0).getDate();
    // Works good even for month - 1 == 0
    const prevMonthTotalDays = new Date(year, month - 1, 0).getDate();

    const grid: Array<string> = [];
    let dayCounter: number = 1;
    let nextMonthCounter: number = 1;

    grid.push(...this.getLocaleDayNames_());
    for (let row: number = 0; row < 6; row++) {
      for (let column: number = 0; column < 7; column++) {
        const cellIndex: number = row * 7 + column;
        if (cellIndex < startDay) {
          // Prev month (marked with dot to be disabled kor-switch-item)
          grid.push(
            `${prevMonthTotalDays - startDay + cellIndex + 1}.`);
        } else if (dayCounter <= totalDays) {
          // Current month
          grid.push(String(dayCounter));
          dayCounter++;
        } else {
          // Next month (marked with dot to be disabled kor-switch-item)
          grid.push(`${nextMonthCounter}.`);
          nextMonthCounter++;
        }
      }
    }
    return html`
      <kor-card id="calendar_popup" class="select-menu"
        style="top: ${this.getMenuStyles().top};
               left: ${this.getMenuStyles().left};
               width: -webkit-fit-content;
               width: -moz-fit-content;
               width: fit-content;
               max-width: 100%;
               min-width: 21rem;
               height: -webkit-fit-content;
               height: fit-content;
               max-height: 24rem;
               padding-left: 0.5rem;
               overflow: hidden;
               display: flex;"
      >
        <kor-text size="body-1">
          ${month_and_year}
        <kor-text>
        <kor-switch>
          <kor-grid columns="7" spacing
            style="grid-template-columns: repeat(7, 3rem);"
          >
            ${grid.map(
              (day: string) => html`
                <kor-switch-item
                  label="${day.includes('.') ? day.slice(0, -1) : day}"
                  grid-cols="1"
                  ?active="${day === date_obj.day}"
                  ?disabled="${day.includes('.')}"
                  @click="${(e: Event)=>{
                    e.stopImmediatePropagation();
                    const self: korSwitchItem = (e.target as korSwitchItem);
                    this.setDay_(self.label ?? '');
                  }}"
                ></kor-switch-item>
              `)}
          </kor-grid>
        </kor-switch>
        ${this.type === "datetime"
          ? html`
            <kor-grid columns="${this.is12Hour_ ? '3' : '2'}" spacing="s"
              style="display: flex;"
            >
              <!-- The hours input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="hours" type="number" step="1"
                    min="0" max="${this.is12Hour_ ? 12 : 24}"
                    value="${this.getHour_()}"
                    @input="${(e: Event)=>{
                      const self: HTMLInputElement = (e.target as HTMLInputElement);
                      if (self.value !== this.getHour_()) {
                        this.setHour_(self.value ?? '');
                      }
                    }}"
                    @click="${(e: Event)=>{
                      e.stopImmediatePropagation();
                    }}"
                  />
                </div>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${(e: Event)=>{
                    e.stopImmediatePropagation();
                    const self: HTMLElement = (e.target as HTMLElement);
                    const inputElement: HTMLInputElement|null =
                      <HTMLInputElement|null>(
                        (self.parentNode as HTMLElement).querySelector('div > input'));
                    if (!inputElement) return;
                    const decrement: number =
                      (parseInt(inputElement.value ?? inputElement.max) ?? 0)
                        - (parseInt(inputElement.step) ?? 0);
                    if (decrement >= (parseInt(inputElement.min) ?? 0)) {
                      inputElement!.value = String(decrement);
                      this.setHour_(inputElement!.value ?? '');
                    }
                  }}"
                ></kor-icon>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${(e: Event)=>{
                    e.stopImmediatePropagation();
                    const self: HTMLElement = (e.target as HTMLElement);
                    const inputElement: HTMLInputElement|null =
                      <HTMLInputElement|null>(
                        (self.parentNode as HTMLElement).querySelector('div > input'));
                    if (!inputElement) return;
                    const increment: number =
                      (parseInt(inputElement.value ?? inputElement.min) ?? 0)
                        + (parseInt(inputElement.step) ?? 0);
                    if (increment <= (parseInt(inputElement.max) ?? 0)) {
                      inputElement!.value = String(increment);
                      this.setHour_(inputElement!.value ?? '');
                    }
                  }}"
                ></kor-icon>
              </div>
              <!-- The minutes input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="minutes" type="number" step="1"
                    min="0" max="60"
                    value="${this.getMinute_()}"
                    @input="${(e: Event)=>{
                      const self: HTMLInputElement = (e.target as HTMLInputElement);
                      if (self.value !== this.getMinute_()) {
                        this.setMinute_(self.value ?? '');
                      }
                    }}"
                    @click="${(e: Event)=>{
                      e.stopImmediatePropagation();
                    }}"
                  />
                </div>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${(e: Event)=>{
                    e.stopImmediatePropagation();
                    const self: HTMLElement = (e.target as HTMLElement);
                    const inputElement: HTMLInputElement|null =
                      <HTMLInputElement|null>(
                        (self.parentNode as HTMLElement).querySelector('div > input'));
                    if (!inputElement) return;
                    const decrement: number =
                      (parseInt(inputElement.value ?? inputElement.max) ?? 0)
                        - (parseInt(inputElement.step) ?? 0);
                    if (decrement >= (parseInt(inputElement.min) ?? 0)) {
                      inputElement!.value = String(decrement);
                      this.setMinute_(inputElement!.value ?? '');
                    }
                  }}"
                ></kor-icon>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${(e: Event)=>{
                    e.stopImmediatePropagation();
                    const self: HTMLElement = (e.target as HTMLElement);
                    const inputElement: HTMLInputElement|null =
                      <HTMLInputElement|null>(
                        (self.parentNode as HTMLElement).querySelector('div > input'));
                    if (!inputElement) return;
                    const increment: number =
                      (parseInt(inputElement.value ?? inputElement.min) ?? 0)
                        + (parseInt(inputElement.step) ?? 0);
                    if (increment <= (parseInt(inputElement.max) ?? 0)) {
                      inputElement!.value = String(increment);
                      this.setMinute_(inputElement!.value ?? '');
                    }
                  }}"
                ></kor-icon>
              </div>
              <!-- The optional AM/PM switch for 12 hour time format -->
              ${this.is12Hour_ ? html`
                  <kor-switch grid-cols="1"
                    style="display: flex; margin: 4px 8px 0 0; max-width: 8rem;"
                  >
                    <kor-grid columns="2" spacing>
                      <kor-switch-item label="AM"
                        ?active="${this.getAMPM_() === 'AM'}"
                        @click="${(e: Event)=>{
                          e.stopImmediatePropagation();
                          const self: korSwitchItem = (e.target as korSwitchItem);
                          this.setAMPM_(self.label ?? '');
                        }}"
                      ></kor-switch-item>
                      <kor-switch-item label="PM"
                        ?active="${this.getAMPM_() === 'PM'}"
                        @click="${(e: Event)=>{
                          e.stopImmediatePropagation();
                          const self: korSwitchItem = (e.target as korSwitchItem);
                          this.setAMPM_(self.label ?? '');
                        }}"
                      ></kor-switch-item>
                    </kor-grid>
                  </kor-switch>
                ` : ''}
            </kor-grid>
          ` : ''}
      </kor-card>
    `;
  }
}

