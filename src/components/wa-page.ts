import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-page')
export class waPage extends LitElement {

  @property({ type: String, reflect: true }) theme = "dark";
  @property({ type: String, reflect: true }) flexDirection = "row";
  @property({ type: Boolean, reflect: true }) flat = false;

  static get styles() {
    return css`
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
      slot[name="top"],
      slot[name="bottom"],
      :host([flexDirection="column"]) slot:not([name]) {
        flex-direction: column;
      }
    `
  }

  render() {
    return html`
      <link rel="stylesheet" href="../wa-styles.css">
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `
  }
}