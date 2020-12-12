import { LitElement } from 'lit-element';
/**
 * @prop {String} label - If set, defines the text label shown next to the icon/image. If the label is set and an image is not defined, the initials will be shown as a placeholder.
 * @prop {String} info - If set, defines the information text shown below the label.
 * @prop {String} image - If set, replaces the placeholder image with a custom image.
 * @prop {Boolean} condensed - If set, the image is shown in a smaller size.
 */
export declare class korAvatar extends LitElement {
    label: any;
    info: any;
    image: any;
    condensed: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    getInitials(label: any): any;
}
