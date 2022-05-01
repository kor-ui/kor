import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} info - If set, defines the information text shown below the label.
 * @prop {String} icon - If set, defines the icon shown instead of the index number.
 * @prop {Number} index - Defines the index number shown inside the bubble (if icon is undefined). It is set dinamically by the component.
 * @prop {Boolean} active - If set to true, a highlight style gets applied. Only one item can be active at a time.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the component. Possible values are `horizontal` and `vertical`.
 */
export declare class korStepperItem extends LitElement {
    label: string | undefined;
    info: string | undefined;
    icon: string | undefined;
    index: number | undefined;
    active: boolean | undefined;
    disabled: boolean | undefined;
    first: boolean | undefined;
    last: boolean | undefined;
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    connectedCallback(): void;
    getIndex(): void;
}
