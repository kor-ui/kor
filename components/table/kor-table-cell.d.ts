import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} alignment	- Defines the alignment of items inside the cell. Possible values are left, center and right.
 * @prop {String} sortDirection - (If head, sortable and sorted are true) Defines the direction of sorting. Possible values are asc and desc.
 * @prop {Number} gridCols - Defines how many columns the cell occupies. The sum of all cells in a given row should not surpass the total number of columns in the table (which is 24 by default).
 * @prop {Boolean} head - If set to true, the cell will behave like a table head (use if the parent kor-table-row is placed on the header slot of the table).
 * @prop {Boolean} sortable - (If head is true) If set to true, upon clicking on the cell it will toggle the sorted property.
 * @prop {Boolean} sorted - (If head and sortable are true) If set to true, an arrow will be shown to indicate that the column is sorted.
 *
 * @slot - Hosts plain text or other elements.
 */
export declare class korTableCell extends LitElement {
    gridCols: number | undefined;
    alignment: string;
    head: boolean | undefined;
    sorted: boolean | undefined;
    sortable: boolean | undefined;
    sortDirection: string | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    handleSort(): void;
}
