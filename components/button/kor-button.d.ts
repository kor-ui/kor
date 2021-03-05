import { LitElement } from 'lit-element';
/**
 * @prop {String} label -	Defines the text label.
 * @prop {String} icon - If set, replaces the text label with a custom icon.
 * @prop {String} color - Defines the color. The possible values are primary, secondary and tertiary
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korButton extends LitElement {
    label: string;
    icon: any;
    color: string;
    disabled: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
