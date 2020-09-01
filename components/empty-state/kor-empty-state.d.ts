import { LitElement } from 'lit-element';
/**
 * @prop {String} label -	If set, defines the text label shown under the icon.
 * @prop {String} icon - If set, defines the icon shown above the label.
 *
 * @slot footer - Displayed below the label.
 */
export declare class korEmptyState extends LitElement {
    label: any;
    icon: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
