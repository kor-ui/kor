import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korToggle extends LitElement {
    label: any;
    active: any;
    disabled: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    connectedCallback(): void;
}
