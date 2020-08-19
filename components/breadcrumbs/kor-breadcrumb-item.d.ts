import { LitElement } from 'lit-element';
/**
 * @prop {String} label - Defines the text label.
 * @prop {Boolean} active - Defines whether the item is currently active or not.
 */
export declare class korBreadcrumbItem extends LitElement {
    label: string;
    active: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    firstItem(): boolean;
}
