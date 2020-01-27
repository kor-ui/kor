import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-stepper')
export class waStepper extends LitElement {

  @property({ type: String, reflect: true }) orientation = "horizontal";

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        width: 100%;
        height: fit-content;
        overflow: auto;
      }
      /* vertical */
      :host([orientation="vertical"]) {
        flex-direction: column;
      }
    `]
  }

  render() {
    return html`
      <slot @slotchange="${() => { this.handleOrientation(); this.handleItems()} }"></slot>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`)) ;
  }

  handleOrientation() {
    (<any>this.childNodes).forEach(el => {
      el.orientation = this.orientation;
    });
  }

  handleItems() {
    let items: any, length: number;
    items = Array.prototype.slice.call(this.children);
    length = this.children.length;
    items.forEach((el: any) => {
      el.first = el.index == 1;
      el.last = el.index == length;
    });
  }
  
}
