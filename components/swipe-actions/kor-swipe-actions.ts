import { LitElement, css, html } from 'lit';
import { sharedStyles } from '../../shared-styles';

/**
 * @slot - Contains the visible element to be scrolled left or right
 * @slot left - Contains the action shown when the user swipes to the left
 * @slot right - Contains the action shown when the user swipes to the right
 * @event swipe-right - Fired when the user swipes right more than 1/3 of the element's width
 * @event swipe-left - Fired when the user swipes left more than 1/3 of the element's width
 */

export class korSwipeActions extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          overflow: auto;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
        }
        slot[name] {
          display: flex;
          transition: 0.1s opacity ease-out;
        }
        slot:not([name]) {
          min-width: 100%;
          display: block;
          scroll-snap-align: start;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot
        name="left"
        @slotchange="${(e: Event) => this.setSlotWidth(e.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${(e: Event) => this.setSlotWidth(e.target)}"
      ></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('touchend', this.handleTouchEnd);
    this.addEventListener('scroll', this.setSlotOpacity);
  }

  setSlotWidth(tar: EventTarget | null): void {
    if ((<any>tar).assignedNodes().length > 0) {
      (<any>tar).style.minWidth = '100%';
    } else {
      (<any>tar).style.minWidth = 'unset';
    }
  }

  handleTouchEnd(): void {
    const scrollDelta = this.scrollLeft - this.clientWidth;
    if (scrollDelta < (this.clientWidth / 3) * -1) {
      this.dispatchEvent(new Event('swipe-left'));
    } else if (scrollDelta > this.clientWidth / 3) {
      this.dispatchEvent(new Event('swipe-right'));
    }
  }

  setSlotOpacity(): void {
    const leftSlot: any = this.shadowRoot?.querySelector('slot[name="left"]');
    const rightSlot: any = this.shadowRoot?.querySelector('slot[name="right"]');
    const scrollDelta = this.scrollLeft - this.clientWidth;
    if (leftSlot) {
      leftSlot.style.opacity =
        ((scrollDelta * -1) / this.clientWidth) * 3 > 1 ? 1 : 0.5;
    }
    if (rightSlot) {
      rightSlot.style.opacity =
        ((scrollDelta * 1) / this.clientWidth) * 3 > 1 ? 1 : 0.5;
    }
  }

  getSlotOpacity(name: string): number {
    const modifier = name === 'left' ? -1 : 1;
    const opacity =
      (((this.scrollLeft - this.clientWidth) * modifier) / this.clientWidth) *
      3;
    return opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;
  }
}

if (!window.customElements.get('kor-swipe-actions')) {
  window.customElements.define('kor-swipe-actions', korSwipeActions);
}
