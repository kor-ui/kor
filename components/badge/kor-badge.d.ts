import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {Number} label -		If set, degines the number shown inside the badge. Numbers bigger than 3 digits are shown as 999+.
 * @prop {'error'|'warning'|'success'|undefined} status - If set, a status icon is shown inside the badge. Accepted values are `error`, `warning`, `success`.
 */
export declare class korBadge extends LitElement {
    label: number | undefined;
    status: 'error' | 'warning' | 'success' | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    getStatusIcon(): string | undefined;
}
