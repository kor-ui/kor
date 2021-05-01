import { LitElement } from 'lit-element';
import '../icon';
import '../text';
/**
 * @prop {Number} label -		If set, degines the number shown inside the badge. Numbers bigger than 3 digits are shown as 999+.
 * @prop {'error'|'warning'|'success'|undefined} status - If set, a status icon is shown inside the badge. Accepted values are `error`, `warning`, `success`.
 */
export declare class korBadge extends LitElement {
    label: any;
    status: 'error' | 'warning' | 'success' | undefined;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    getStatusIcon(): string;
}
