import { LitElement } from 'lit';
/**
 * @prop {Number} columns -	Defines how many columns the grid has.
 * @prop {Number} rows - If set, defines how many rows the grid has. If left undefined, the rows will be automatically populated according to the columns wrapping.
 * @prop {'s'|'m'|'l'} spacing -	Defines the gap between the elements in the grid. Possible values are `s`(8px), `m`(12px) and `l`(16px).
 *
 * @slot - The slot where the content is rendered.
 */
export declare class korGrid extends LitElement {
    columns: number;
    rows: Number | undefined;
    spacing: 's' | 'm' | 'l';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
