import { LitElement } from 'lit';
/**
 * @prop {String} label -	If set, defines the text label shown on the left side (if mobile is unset).
 * @prop {String} logo - If set, defines the logo shown on the left side.
 * @prop {Boolean} mobile - If set, toggles the mobile variation.
 *
 * @slot - The central content area. Used for hosting components such as Tabs.
 * @slot functions - Displayed on the right side (if mobile is unset). Used for hosting components such as Icon and Avatar.
 * @slot left - Displayed on the left side (if mobile is set to true). Used for hosting components such as Icon.
 * @slot right - Displayed on the right side (if mobile is set to true). Used for hosting components such as Icon.
 *
 * @fires logo-clicked - Fired when clicking on the logo.
 *
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 */
export declare class korAppBar extends LitElement {
    label: string | undefined;
    logo: string | undefined;
    mobile: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    handleLogoClick(): void;
}
