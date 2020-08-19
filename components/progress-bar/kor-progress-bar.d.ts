import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label shown above the bar.
 * @prop {String} info - If set, defines the info text shown below of the bar.
 * @prop {String} value - Defines the value of the bar. Must be a number from 0 to 100.
 * @prop {String} status - If set, shows a status icon besides the information text. Possible values are success, warning and error.
 * @prop {String} color - If set, defines the color of the bar.
 * @prop {Number} size - (Only if radial is true) Defines the size of the bar.
 * @prop {Boolean} radial - If set to true, the bar will become a circle instead of a linear bar.
 * @prop {Boolean} showProgress - If set to true, the value (in %) will be visible.
 */
export declare class korProgressBar extends LitElement {
    label: any;
    info: any;
    status: any;
    color: any;
    size: string;
    value: any;
    radial: boolean;
    showProgress: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    getStatusIcon(): string;
    getSize(): number;
}
