import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the component. Possible values are `horizontal` and `vertical`.
 *
 * @slot - Hosts kor-stepper-items.
 */

export class korStepper extends LitElement {
  @property({ type: String, reflect: true }) orientation:
    | 'horizontal'
    | 'vertical' = 'horizontal';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot
        @slotchange="${() => {
          this.handleOrientation();
          this.handleItems();
        }}"
      ></slot>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  handleOrientation() {
    (<NodeListOf<any>>this.childNodes).forEach((el: any) => {
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

if (!window.customElements.get('kor-stepper')) {
  window.customElements.define('kor-stepper', korStepper);
}
