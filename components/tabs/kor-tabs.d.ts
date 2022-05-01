import { LitElement } from 'lit';
/**
 * @prop {'horizontal'|'vertical'} orientation	- Defines the orientation of the component. Possible values are `horizontal` and `vertical`.
 *
 * @slot - Hosts kor-tab-items.
 */
export declare class korTabs extends LitElement {
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    handleOrientation(): void;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
