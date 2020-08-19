import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label shown on top.
 * @prop {String} icon - If set, defines the icon shown before the label/value.
 * @prop {String} value - If set, defines the value of the input. Changes upon user interaction.
 * @prop {String} type - Defines the type. Possible values are text, number and select.
 * @prop {String} status - If set, Displays a status icon on the right side of the input.
 * @prop {String} pattern - (If type="number" only) If set, defines a custom input pattern (see full documentation).
 * @prop {Number} min - (If type="number" only) If set, defines the minimum value accepted.
 * @prop {Number} max - (If type="number" only) If set, defines the maximum value accepted.
 * @prop {Number} step - (If type="number" only) Defines the steps to skip when the user presses the left or right arrows.
 * @prop {Boolean} condensed - If set to true, reduces the height of the input. The label is only shown if the value is undefined.
 * @prop {Boolean} active - If set to true, highlights the label and underline.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} readonly - If set to true, disables the input without reducing the opacity.
 * @prop {Boolean} noClear - If set to true, the clear icon and functionality will not be available.
 *
 * @slot - Displayed inside the content area.
 * @slot functions - Displayed on the right side.
 */
export declare class korInput extends LitElement {
    label: any;
    icon: any;
    value: any;
    type: string;
    status: any;
    condensed: any;
    active: any;
    disabled: any;
    readonly: any;
    noClear: any;
    pattern: any;
    min: any;
    max: any;
    step: number;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    constructor();
    handleClear(): void;
    handleBlur(e: any): void;
    handleIncrement(dir: any): void;
    handleItems(e: any): void;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    handleMenu(): void;
    validateMinMax(val: any): void;
    getStatusIcon(): string;
    getMenuStyles(): {
        top: string;
        left: string;
        width: string;
    };
}
