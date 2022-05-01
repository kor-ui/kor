import { LitElement } from 'lit';
/**
 * @prop {String} icon - Defines the icon shown. Takes any string from the Material Design Library or custom url('') pointing to local or remote images or vectors.
 * @prop {'s'|'m'|'l'|'xl'} size - If set, defines the size of the icon. Possible values are `xl`(48px) `l`(32px), `m`(24px) and `s`(16px), but css font-size can be used to set custom sizes.
 * @prop {String} color -	If set, replaces the text label with a custom icon.
 * @prop {Boolean} button - If set to true, updates hover, click effects and cursors.
 * @prop {Boolean} disabled -	If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korIcon extends LitElement {
    icon: string | undefined;
    color: string | undefined;
    size: 's' | 'm' | 'l' | 'xl';
    button: boolean | undefined;
    disabled: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    private setBackgroundImage;
}
