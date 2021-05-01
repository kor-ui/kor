import { LitElement } from 'lit-element';
/**
 * @prop {'s'|'m'|'l'} spacing -	Defines the space around the divider. Possible values are `s`, `m` and `l`.
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the divider. Possible values are `vertical` and `horizontal`.
 */
export declare class korDivider extends LitElement {
    spacing: 's' | 'm' | 'l';
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
