import { LitElement } from 'lit-element';
/**
 * @prop {String} label -	Defines the text label.
 * @prop {String} icon - If set, defines the icon shown before the label.
 * @prop {Boolean} expanded -	If set to true, expands the accordion to display its content.
 * @prop {Boolean} disabled -	If set to true, disables mouse clicks and the style gets updated.
 *
 * @slot - Displayed inside the accordion when it is expanded.
 * @slot header - If used, the header slot replaces the default text label and expand arrow with custom content.
 * @slot functions - Displayed close to the 'expand' arrow.
 * @slot footer - Displayed below the content when it is expanded.
 */
export declare class korAccordion extends LitElement {
    label: string;
    icon: any;
    expanded: any;
    disabled: any;
    /** @ignore */
    emptyHeader: boolean;
    /** @ignore */
    emptyFunctions: boolean;
    /** @ignore */
    emptyBody: boolean;
    /** @ignore */
    emptyFooter: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    connectedCallback(): void;
    handleCollapse(e: any): void;
}
