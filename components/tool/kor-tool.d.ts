import { LitElement } from 'lit-element';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown above the text label (if set).
 * @prop {'s'|'m'} size - Defines the size of the component. Possible values are `s` and `m`.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} toggle - If set to true, clicking on the menu item will toggle the active property between true and false.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class korTool extends LitElement {
  label: any;
  icon: any;
  size: 's' | 'm';
  toggle: any;
  active: any;
  disabled: boolean;
  static get styles(): import('lit-element').CSSResult[];
  render(): import('lit-element').TemplateResult;
  attributeChangedCallback(name: any, oldval: any, newval: any): void;
}
