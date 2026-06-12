import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../text';

/**
 * @prop {Number} label -		If set, degines the number shown inside the badge. Numbers bigger than 3 digits are shown as 999+.
 * @prop {'error'|'warning'|'success'|undefined} status - If set, a status icon is shown inside the badge. Accepted values are `error`, `warning`, `success`.
 */

export class korBadge extends LitElement {
  @property({ type: Number, reflect: true }) label: number | undefined;
  @property({ type: String, reflect: true }) status:
    | 'error'
    | 'warning'
    | 'success'
    | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `,
    ];
  }

  render() {
    return html`
      ${!this.status
        ? html`
            ${this.label
              ? html`
                  <kor-text size="body-2">
                    ${this.label > 999 ? html` 999+ ` : html` ${this.label} `}
                  </kor-text>
                `
              : ''}
          `
        : html`
            <!-- status -->
            ${this.status
              ? html`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `
              : ''}
          `}
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getStatusIcon(): string | undefined {
    let icon;
    switch (this.status) {
      case 'error':
        icon = 'cancel';
        break;
      case 'warning':
        icon = 'error';
        break;
      case 'success':
        icon = 'check_circle';
        break;
    }
    return icon;
  }
}

if (!window.customElements.get('kor-badge')) {
  window.customElements.define('kor-badge', korBadge);
}
