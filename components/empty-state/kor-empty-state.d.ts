import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label -	If set, defines the text label shown under the icon.
 * @prop {String} icon - If set, defines the icon shown above the label.
 *
 * @slot footer - Displayed below the label.
 *
 * @cssprop --footer-gap - Defines the gap between elements in the footer slot.
 */
export declare class korEmptyState extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
