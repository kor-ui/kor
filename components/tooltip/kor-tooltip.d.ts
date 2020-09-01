import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} position - Defines the position of the component in the screen. Possible values are left, right, top and bottom.
 * @prop {String} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are column and row.
 * @prop {String} target - Defines the DOM element to which the mouseover event will be attached. It behaves identically to querySelector, which means tag names, IDs, classes and similar can be used (e.g. #myEl, .myEl, kor-input[type='number']). Please ensure the selector is unique.
 * @prop {Boolean} visible - If set to true, displays the component on top of the screen.
 *
 * @slot - Displayed inside the content area.
 * @slot header - If used, the header slot is shown on top of the component, below the label (if any is set).
 * @slot functions - Displayed on the right side of the label or header slot.
 * @slot footer - Displayed below the content area.
 */
export declare class korTooltip extends LitElement {
    label: any;
    icon: any;
    flexDirection: string;
    position: string;
    target: any;
    visible: boolean;
    /** @ignore */
    emptyHeader: boolean;
    /** @ignore */
    emptyFunctions: boolean;
    /** @ignore */
    emptyFooter: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    targetObserver(): void;
}
