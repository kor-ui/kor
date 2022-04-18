import { LitElement } from 'lit';
import '../icon';
/**
 * @prop {String} label -	If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} image - If set, defines the image shown on top of the card.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {Boolean} flat - If set, background, shadows and external padding are not shown.
 *
 * @slot - Displayed inside the content area.
 * @slot header - Shown on top of the card, below the label (if any is set).
 * @slot functions - Shown on the right side of the label or header slot.
 * @slot footer - Shown below the content area.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */
export declare class korCard extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    image: string | undefined;
    flexDirection: 'column' | 'row';
    flat: boolean | undefined;
    emptyHeader: boolean;
    emptyFunctions: boolean;
    emptyFooter: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
