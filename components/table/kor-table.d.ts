import { LitElement } from 'lit';
/**
 * @prop {String} columns - Defines the column template. It accepts any value also accepted by the standard css grid-template-columns (e.g. repeat(4, 1fr), 40px 1fr auto).
 * @prop {Boolean} readonly - If set to true, disables selection on mouse clicks and the hover effects.
 * @prop {Boolean} condensed - If set to true, condensed the height of the rows and cells.
 *
 * @slot - The container where the table body is rendered (kor-table-rows).
 * @slot header - The container for the header (kor-table-row). It does not scroll with the content, but remains sticky on top.
 * kor-table itself does not overflow (nor its content), but the table has to be placed into kor-card to be scrolled.
 * That reduces additional scrollbars and provides an ability to stick header on top and to stick any cells or column in any way,
 * see kor-table-cell sticky and related attributes
 */
export declare class korTable extends LitElement {
    readonly: boolean | undefined;
    condensed: boolean | undefined;
    columns: string;
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
