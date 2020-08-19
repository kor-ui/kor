import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';
import '../text';
import '../icon';

/**
 * @prop {String} label - If set, defines the text label shown next to the icon/image. If the label is set and an image is not defined, the initials will be shown as a placeholder.
 * @prop {String} info - If set, defines the information text shown below the label.
 * @prop {String} image - If set, replaces the placeholder image with a custom image.
 * @prop {Boolean} condensed - If set, the image is shown in a smaller size.
 */

@customElement('kor-avatar')
export class korAvatar extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) info;
  @property({ type: String, reflect: true }) image;
  @property({ type: Boolean, reflect: true }) condensed;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: 8px;
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `,
    ];
  }

  render() {
    return html`
      <!-- image -->
      <div class="image">
        ${this.image
          ? html` <img src="${this.image}" /> `
          : html`
              ${this.label
                ? html` ${this.getInitials(this.label)} `
                : html` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label || this.info
        ? html`
            <div class="text">
              ${this.label
                ? html`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`
                : ''}
              ${this.info
                ? html`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`
                : ''}
            </div>
          `
        : ''}
    `;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getInitials(label) {
    var initials = label.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || '') + (initials.pop() || '')
    ).toUpperCase();
    return initials;
  }
}
