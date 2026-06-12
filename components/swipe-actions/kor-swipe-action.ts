import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

export class korSwipeAction extends LitElement {
  @property({ reflect: true }) icon: string | undefined;
  @property({ reflect: true, attribute: 'bg-color' }) bgColor:
    | string
    | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([slot='left']) {
          justify-content: flex-start;
        }
        :host([slot='right']) {
          justify-content: flex-end;
        }
        kor-icon {
          position: sticky;
        }
        :host([slot='left']) kor-icon {
          left: var(--spacing-l);
        }
        :host([slot='right']) kor-icon {
          right: var(--spacing-l);
        }
      `,
    ];
  }

  render() {
    return html` <kor-icon .icon="${this.icon}"></kor-icon> `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name === 'bg-color' && newval !== oldval) {
      this.style.backgroundColor = newval;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

if (!window.customElements.get('kor-swipe-action')) {
  window.customElements.define('kor-swipe-action', korSwipeAction);
}
