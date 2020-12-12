import { LitElement } from 'lit-element';
/**
 * @prop {Number} label -		If set, degines the number shown inside the badge. Numbers bigger than 3 digits are shown as 999+.
 * @prop {String} status - If set, a status icon is shown inside the badge. Accepted values are error, warning, success.
 */
export declare class korBadge extends LitElement {
    label: any;
    status: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    getStatusIcon(): string;
}
