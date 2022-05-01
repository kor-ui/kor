import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label shown next to the icon/image. If the label is set and an image is not defined, the initials will be shown as a placeholder.
 * @prop {String} info - If set, defines the information text shown below the label.
 * @prop {String} image - If set, replaces the placeholder image with a custom image.
 * @prop {Boolean} condensed - If set, the image is shown in a smaller size.
 */
export declare class korAvatar extends LitElement {
    label: string | undefined;
    info: string | undefined;
    image: string | undefined;
    condensed: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    getInitials(label: string): string;
}
