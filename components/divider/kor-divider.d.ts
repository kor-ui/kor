import { LitElement } from 'lit-element';
/**
 * @prop {String} spacing -	Defines the space around the divider. Possible values are s, n and l.
 * @prop {String} orientation - Defines the orientation of the divider. Possible values are vertical and horizontal.
 */
export declare class korDivider extends LitElement {
    spacing: string;
    orientation: string;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
