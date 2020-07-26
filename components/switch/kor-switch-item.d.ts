import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown instead of text label.
 * @prop {Boolean} active - If set to true, a highlight style gets applied. Only one item can be active at a time.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korSwitchItem extends LitElement {
    label: any;
    icon: any;
    active: any;
    disabled: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    connectedCallback(): void;
    handleActive(): void;
}
