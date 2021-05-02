import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {'s'|'m'|'l'} spacing -	Defines the space around the divider. Possible values are `s`, `m` and `l`.
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the divider. Possible values are `vertical` and `horizontal`.
 */

export class korDivider extends LitElement {
  @property({ type: String, reflect: true }) spacing: 's' | 'm' | 'l' = 'm';
  @property({ type: String, reflect: true }) orientation:
    | 'horizontal'
    | 'vertical' = 'horizontal';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: 8px 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: 16px 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: 32px 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 8px;
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 16px;
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 32px;
        }
      `,
    ];
  }

  render() {
    return html`<div class="line"></div>`;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-divider')) {
  window.customElements.define('kor-divider', korDivider);
}
