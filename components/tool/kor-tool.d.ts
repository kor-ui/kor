import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown above the text label (if set).
 * @prop {'s'|'m'} size - Defines the size of the component. Possible values are `s` and `m`.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} toggle - If set to true, clicking on the menu item will toggle the active property between true and false.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korTool extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    size: 's' | 'm';
    toggle: boolean | undefined;
    active: boolean | undefined;
    disabled: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
