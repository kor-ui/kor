import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are column and row.
 * @prop {String} height - Defines the height of the container (not the overlay).
 * @prop {String} width - Defines the width of the container (not the overlay).
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 * @prop {Boolean} sticky - If set to true, clicking on the background will not hide the component. The close icon will also not be displayed.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */
export declare class korModal extends LitElement {
    label: any;
    icon: any;
    height: string;
    width: string;
    flexDirection: string;
    visible: boolean;
    sticky: any;
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
