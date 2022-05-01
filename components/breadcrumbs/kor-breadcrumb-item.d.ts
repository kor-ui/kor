import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - Defines the text label.
 * @prop {Boolean} active - Defines whether the item is currently active or not.
 */
export declare class korBreadcrumbItem extends LitElement {
    label: string;
    active: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    firstItem(): boolean;
}
