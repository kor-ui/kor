import { LitElement } from 'lit';
import '../popover';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {'left'|'right'|'top'|'bottom'} position - Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`.
 * @prop {'column'|'row'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {String} target - Defines the DOM element to which the mouseover event will be attached. It behaves identically to querySelector, which means tag names, IDs, classes and similar can be used (e.g. #myEl, .myEl, kor-input[type='number']). Please ensure the selector is unique.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 * @cssprop --header-gap - Defines the gap between elements in the header slot.
 * @cssprop --functions-gap - Defines the gap between elements in the functions slot.
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */
export declare class korTooltip extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    flexDirection: 'column' | 'row';
    position: 'left' | 'right' | 'top' | 'bottom';
    target: string | undefined;
    visible: boolean | undefined;
    emptyHeader: boolean;
    emptyFunctions: boolean;
    emptyFooter: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    targetObserver(): void;
}
