import { LitElement } from 'lit-element';
/**
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the component. Possible values are `horizontal` and `vertical`.
 *
 * @slot - Hosts kor-stepper-items.
 */
export declare class korStepper extends LitElement {
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    handleOrientation(): void;
    handleItems(): void;
}
