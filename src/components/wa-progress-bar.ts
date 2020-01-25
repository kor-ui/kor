import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-progress-bar')
export class waProgressBar extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) info;
  @property({ type: String, reflect: true }) status;
  @property({ type: String, reflect: true }) color;
  @property({ type: Number, reflect: true }) value;
  @property({ type: Boolean, reflect: true }) radial = false;
  @property({ type: Boolean, reflect: true, attribute: 'show-progress' }) showProgress = false;

  static get styles() {
    return [sharedStyles, css`
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
      /* status */
      .status-icon {
        margin-right: 8px;
      }
      .status-icon[icon="cancel"] {
        color: rgb(var(--functional-red));
      }
      .status-icon[icon="error"] {
        color: rgb(var(--functional-yellow));
      }
      .status-icon[icon="check_circle"] {
        color: rgb(var(--functional-green));
      }
    `]
  }

  render() {
    return html`
      <!-- header -->
      ${this.label || this.showProgress ? html` 
        <div class="header">
          <wa-text size="header-2" class="label">${this.label}</wa-text> 
          ${this.showProgress && !this.radial ? html` 
            <wa-text size="header-2">${this.value}%</wa-text> 
          ` : ''}
        </div>
      ` : ''}
      ${!this.radial ? html`
        <!-- linear progress bar -->
        <svg width="100%" height="8">
          <defs>
            <clipPath id="clip-path">
              <rect width="100%" height="8px" rx="4px"/>
            </clipPath>
          </defs>
          <rect class="bg" fill="rgba(var(--neutral-1), .1)" width="100%" rx="4px"></rect>
          <rect class="bar" fill="${this.color ? this.color : 'rgb(var(--accent-1))'}" width="${this.value}%" clip-path="url(#clip-path)"></rect>
        </svg>
      ` : html`
        <!-- radial placeholder -->
      `}
      ${this.info || this.status ? html` 
        <div class="footer">
          <!-- status -->
          ${this.status ? html` <wa-icon class="status-icon" icon="${this.getStatusIcon()}"></wa-icon> ` : ''}
          <!-- info -->
          ${this.info ? html` 
            <wa-text color="text-2" class="info">${this.info}</wa-text> 
          ` : ''}
        </div>
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getStatusIcon(): string {
    let icon;
    switch (this.status) {
      case 'error':
        icon = "cancel";
        break;
      case 'warning':
        icon = "error";
        break;
      case 'success':
        icon = "check_circle";
        break;
    }
    return icon;
  }
  
}
