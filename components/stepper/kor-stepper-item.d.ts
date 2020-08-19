import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} info - If set, defines the information text shown below the label.
 * @prop {String} icon - If set, defines the icon shown instead of the index number.
 * @prop {Number} index - Defines the index number shown inside the bubble (if icon is undefined). It is set dinamically by the component.
 * @prop {Boolean} active - If set to true, a highlight style gets applied. Only one item can be active at a time.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korStepperItem extends LitElement {
    label: any;
    info: any;
    icon: any;
    index: any;
    active: any;
    disabled: any;
    first: any;
    last: any;
    orientation: string;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    connectedCallback(): void;
    getIndex(): void;
}
