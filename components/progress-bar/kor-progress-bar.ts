import { LitElement, css, html, customElement, property } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} label - If set, defines the text label shown above the bar.
 * @prop {String} info - If set, defines the info text shown below of the bar.
 * @prop {String} status - If set, shows a status icon besides the information text. Possible values are success, warning and error.
 * @prop {String} color - If set, defines the color of the bar.
 * @prop {String} size - (Only if radial is true) Defines the size of the bar. Possible values are s, m and l.
 * @prop {Number} value - Defines the value of the bar. Must be a number from 0 to 100.
 * @prop {Boolean} radial - If set to true, the bar will become a circle instead of a linear bar.
 * @prop {Boolean} showProgress - If set to true, the value (in %) will be visible.
 */

@customElement('kor-progress-bar')
export class korProgressBar extends LitElement {
  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) info;
  @property({ type: String, reflect: true }) status;
  @property({ type: String, reflect: true }) color;
  @property({ type: String, reflect: true }) size = 'm';
  @property({ type: Number, reflect: true }) value;
  @property({ type: Boolean, reflect: true }) radial = false;
  @property({ type: Boolean, reflect: true, attribute: 'show-progress' })
  showProgress = false;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: 8px;
        }
        .footer {
          margin-top: 8px;
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: 8px;
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
      <!-- header -->
      ${this.label || this.showProgress
        ? html`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress && !this.radial
                ? html` <kor-text size="header-2">${this.value}%</kor-text> `
                : ''}
            </div>
          `
        : ''}
      ${!this.radial
        ? html`
            <!-- linear -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect fill="rgba(var(--neutral-1), .1)" width="100%" height="100%" rx="4px" />
              <rect
                fill="${this.color ? this.color : 'rgb(var(--accent-1))'}"
                width="${this.value}%"
                height="100%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `
        : html`
            <!-- radial -->
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize() / 2 - 4}"
                  cx="${this.getSize() / 2}"
                  cy="${this.getSize() / 2}"
                />
                <circle
                  stroke="${this.color ? this.color : 'rgb(var(--accent-1))'}"
                  stroke-dasharray="${2 * Math.PI * (this.getSize() / 2 - 4)}"
                  stroke-dashoffset="${2 *
                  Math.PI *
                  (this.getSize() / 2 - 4) *
                  (1 - this.value / 100)}"
                  r="${this.getSize() / 2 - 4}"
                  cx="${this.getSize() / 2}"
                  cy="${this.getSize() / 2}"
                />
              </svg>
              ${this.showProgress
                ? html` <kor-text size="header-2">${this.value}%</kor-text> `
                : ''}
            </div>
          `}
      ${this.info || this.status
        ? html`
            <div class="footer">
              <!-- status -->
              ${this.status
                ? html`
                    <kor-icon
                      class="status-icon"
                      icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `
                : ''}
              <!-- info -->
              ${this.info
                ? html`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `
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

  getStatusIcon(): string {
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

  getSize(): number {
    let size;
    switch (this.size) {
      case 's':
        size = 48;
        break;
      case 'm':
        size = 64;
        break;
      case 'l':
        size = 80;
        break;
    }
    return size;
  }
}
