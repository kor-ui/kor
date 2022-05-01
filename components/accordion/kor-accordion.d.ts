import { LitElement } from 'lit';
import '../icon';
import '../card';
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
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */
export declare class korAccordion extends LitElement {
    label: string;
    icon: string | undefined;
    expanded: boolean | undefined;
    disabled: boolean | undefined;
    emptyHeader: boolean;
    emptyFunctions: boolean;
    emptyBody: boolean;
    emptyFooter: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    connectedCallback(): void;
    handleCollapse(e: any): void;
}
