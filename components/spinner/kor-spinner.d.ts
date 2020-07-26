import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} size - Defines the size of the component. Possible values are s (24px), m (32px) and l (40px).
 */
export declare class korSpinner extends LitElement {
    size: string;
    label: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    getSize(): number;
}
