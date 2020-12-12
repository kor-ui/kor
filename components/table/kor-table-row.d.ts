import { LitElement } from 'lit-element';
/**
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 *
 * @slot - Hosts (kor-table-cells).
 */
export declare class korTableRow extends LitElement {
    active: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    connectedCallback(): void;
    handleActive(): void;
    handleColumns(): void;
}
