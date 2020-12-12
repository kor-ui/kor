import { LitElement } from 'lit-element';
/**
 * @prop {String} position - Defines the corner where the notification is located. Possible values are top-left, top-right, bottom-left and bottom-right.
 *
 * @slot - Hosts kor-notification-items.
 */
export declare class korNotifications extends LitElement {
    position: string;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
