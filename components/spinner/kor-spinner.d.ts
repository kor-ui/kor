import { LitElement } from 'lit';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {'s'|'m'|'l'} size - Defines the size of the component. Possible values are `s`(24px), `m`(32px) and `l`(40px).
 */
export declare class korSpinner extends LitElement {
    size: 's' | 'm' | 'l';
    label: string | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    getSize(): number;
}
