import { LitElement } from 'lit-element';
/**
 * @prop {String} label -	If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} image - If set, defines the image shown on top of the card.
 * @prop {String} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are column and row.
 * @prop {Boolean} flat - If set, background, shadows and external padding are not shown.
 *
 * @slot - Displayed inside the content area.
 * @slot header - Shown on top of the card, below the label (if any is set).
 * @slot functions - Shown on the right side of the label or header slot.
 * @slot footer - Shown below the content area.
 */
export declare class korCard extends LitElement {
    label: any;
    icon: any;
    image: any;
    flexDirection: string;
    flat: boolean;
    /** @ignore */
    emptyHeader: boolean;
    /** @ignore */
    emptyFunctions: boolean;
    /** @ignore */
    emptyFooter: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
