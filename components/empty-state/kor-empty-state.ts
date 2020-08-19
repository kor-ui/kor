import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../text';

/**
 * @prop {String} label -	If set, defines the text label shown under the icon.
 * @prop {String} icon - If set, defines the icon shown above the label.
 *
 * @slot footer - Displayed below the label.
 */

@customElement('kor-empty-state')
export class korEmptyState extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) icon;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        slot[name='footer'] {
          display: flex;
          margin-top: 16px;
        }
        slot[name='footer']::slotted(*) {
          margin: 0 8px;
        }
        kor-icon + kor-text {
          margin-top: 8px;
        }
        kor-text {
          text-align: center;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.icon
        ? html`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `
        : ''}
      ${this.label
        ? html` <kor-text color="var(--text-2)">${this.label}</kor-text> `
        : ''}
      <slot name="footer"></slot>
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}
