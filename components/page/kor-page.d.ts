import { LitElement } from 'lit';
/**
 * @prop {'dark'|'light'|undefined} theme - Defines the color theme of the page. Possible values are `dark` and `light`.
 * @prop {String} padding - Defines the padding style of the default slot.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {Boolean} flat - If set to true, the page background will be flat, without the need to use card as containers for the content.
 * @prop {Boolean} scrollable - If set to true, the page content will scroll if there is an overflow of content.
 *
 * @slot - The main content area.
 * @slot top - Shown on the top. Hosts components such as kor-app-bar and kor-nav-bar.
 * @slot bottom - Shown on the bottom. Hosts components such as kor-nav-bar.
 * @slot left - Shown on the left side. Hosts components such as kor-pane.
 * @slot right - Shown on the right side. Hosts components such as kor-pane.
 */
export declare class korPage extends LitElement {
    theme: 'dark' | 'light' | undefined;
    padding: string;
    flexDirection: 'row' | 'column';
    flat: boolean | undefined;
    scrollable: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
