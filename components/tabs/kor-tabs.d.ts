import { LitElement } from 'lit-element';
/**
 * @prop {String} orientation	- Defines the orientation of the component. Possible values are horizontal and vertical.
 *
 * @slot - Hosts kor-tab-items.
 */
export declare class korTabs extends LitElement {
    orientation: string;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    handleOrientation(): void;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
