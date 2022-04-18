import { LitElement } from 'lit';
/**
 * @prop {'top-left'|'top-right'|'bottom-left'|'bottom-right'} position - Defines the corner where the notification is located. Possible values are `top-left`, `top-right`, `bottom-left` and `bottom-right`.
 *
 * @slot - Hosts kor-notification-items.
 *
 * @cssprop --body-gap - Defines the gap between elements in the body slot.
 */
export declare class korNotifications extends LitElement {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
