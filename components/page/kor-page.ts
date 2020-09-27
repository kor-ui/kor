import { LitElement, css, html, customElement, property } from "lit-element";
import { sharedStyles } from "../../shared-styles";

/**
 * @prop {String} theme - Defines the color theme of the page. Possible values are dark and light.
 * @prop {String} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are column and row.
 * @prop {Boolean} flat - If set to true, the page background will be flat, without the need to use card as containers for the content.
 * @prop {Boolean} scrollable - If set to true, the page content will scroll if there is an overflow of content.
 *
 * @slot - The main content area.
 * @slot top - Shown on the top. Hosts components such as kor-app-bar and kor-nav-bar.
 * @slot bottom - Shown on the bottom. Hosts components such as kor-nav-bar.
 * @slot left - Shown on the left side. Hosts components such as kor-pane.
 * @slot right - Shown on the right side. Hosts components such as kor-pane.
 */

@customElement("kor-page")
export class korPage extends LitElement {
  @property({ type: String, reflect: true }) theme;
  @property({ type: String, reflect: true, attribute: "flex-direction" })
  flexDirection = "row";
  @property({ type: Boolean, reflect: true }) flat = false;
  @property({ type: Boolean, reflect: true }) scrollable = false;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        slot:not([name]) {
          padding: 16px;
        }
        :host[scrollable] slot:not([name]) {
          overflow: auto;
        }
        slot[name="top"],
        slot[name="bottom"],
        :host([flex-direction="column"]) slot:not([name]) {
          flex-direction: column;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
