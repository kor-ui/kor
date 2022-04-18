import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - Defines the text label.
 * @prop {String} icon - If set, defines the icon shown before the label.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} toggle - If set to true, clicking on the component will toggle the active property between true and false.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 *
 * @slot - Displayed inside the content area.
 * @slot functions - Shown on the right side.
 */
export declare class korMenuItem extends LitElement {
    label: string;
    icon: string | undefined;
    active: boolean | undefined;
    toggle: boolean;
    disabled: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
