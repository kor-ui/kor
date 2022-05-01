import { LitElement } from 'lit';
import '../card';
import '../icon';
/**
 * @prop {String} label -	If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'left'|'right'|'top'|'bottom'} position - Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {String} height - Defines the height of the container (not the overlay).
 * @prop {String} width - Defines the width of the container (not the overlay).
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 * @prop {Boolean} sticky - If set to true, clicking on the background will not hide the component. The close icon will also not be displayed.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Shown on the right side of the label or header slot.
 * @slot footer - Shown below the content area.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */
export declare class korDrawer extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    position: 'left' | 'right' | 'top' | 'bottom';
    height: string;
    width: string;
    flexDirection: 'row' | 'column';
    visible: boolean | undefined;
    sticky: boolean | undefined;
    emptyHeader: boolean;
    emptyFunctions: boolean;
    emptyFooter: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    getCardSize(): any;
}
