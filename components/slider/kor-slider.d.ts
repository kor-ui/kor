import { LitElement } from 'lit';
import '../text';
/**
 * @prop {String} label - If set, defines the text label shown on top.
 * @prop {Number} value - Defines the current value. Must be a value between min and max.
 * @prop {Number} min - Defines the minimum value accepted.
 * @prop {Number} max - Defines the maximum value accepted.
 * @prop {Number} step - Defines the steps to skip when the user drags the thumb.
 * @prop {Boolean} input - If set to true, allows the user to input a value using the keyboard.
 */
export declare class korSlider extends LitElement {
    label: string | undefined;
    value: number;
    min: number;
    max: number;
    step: number;
    input: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    firstUpdated(): void;
    private handleInput;
    private handleThumbPosition;
    private handleThumbDrag;
}
