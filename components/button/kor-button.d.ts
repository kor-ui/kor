import { LitElement } from 'lit';
import '../icon';
/**
 * @prop {String} label -	Defines the text label.
 * @prop {String} icon - If set, replaces the text label with a custom icon.
 * @prop {'primary'|'secondary'|'tertiary'} color - Defines the color. The possible values are `primary`, `secondary` and `tertiary`
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korButton extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    color: 'primary' | 'secondary' | 'tertiary';
    disabled: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
