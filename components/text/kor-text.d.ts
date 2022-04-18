import { LitElement } from 'lit';
/**
 * @prop {'header-1'|'header-2'|'body-1'|'body-2'} size - Defines the size, line height, font family and initial color of the text. Possible values are `header-1`, `header-2`, `body-1` and `body-2`, but custom styles can be set through css.
 * @prop {String} color - If set, overwrites the initial color of the text. Possible values are var(--text-1) (90% neutral color), var(--text-2) (60% neutral color) and var(--text-3) (20% neutral color), but any custom RGB, RGBA, HEX or color variable can be passed to the property as value as well.
 *
 * @slot - Container where plain text (and/or other elements) is written.
 */
export declare class korText extends LitElement {
    size: string;
    color: 'header-1' | 'header-2' | 'body-1' | 'body-2' | string | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
