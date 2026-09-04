import { LitElement, TemplateResult } from 'lit';
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
export declare class korInput extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    value: string | undefined;
    name: string | undefined;
    type: 'text' | 'number' | 'select' | 'password' | 'datetime' | 'date';
    locale: string | undefined;
    status: string | undefined;
    condensed: boolean | undefined;
    active: boolean | undefined;
    disabled: boolean | undefined;
    readonly: boolean | undefined;
    noClear: boolean | undefined;
    autofocus: boolean;
    pattern: string | undefined;
    min: string | undefined;
    max: string | undefined;
    step: number;
    main_input: HTMLInputElement;
    private is12Hour_;
    private isMenuHandlerSet_;
    static get styles(): import("lit").CSSResult[];
    render(): TemplateResult<1>;
    constructor();
    firstUpdated(): void;
    private handleChange_;
    private setDay_;
    private getHour_;
    private setHour_;
    private getMinute_;
    private setMinute_;
    private getAMPM_;
    private setAMPM_;
    handleClear(e: Event): void;
    private handleFocus_;
    private handleBlur_;
    private handleIncrement_;
    handleItems(e: any): void;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    handleMenu(): void;
    closeSelectMenu(e: Event): void;
    validateMinMax(val: number): void;
    getStatusIcon(): string | undefined;
    getMenuStyles(): {
        top: string;
        left: string;
        width: string;
    };
    private validateAndFormatDate_;
    private getLocaleDayNames_;
    private getCalendarGrid_;
}
