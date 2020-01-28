import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-breadcrumb-item')
export class waBreadcrumbItem extends LitElement {

  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: Boolean, reflect: true }) active = false;

  static get styles() {
    return [sharedStyles, css`
      :host {
        display: flex;
        align-items: center;
      }
      wa-icon {
        pointer-events: none;
        margin: 0 4px;
      }
      wa-text {
        color: var(--text-2);
        cursor: pointer;
        font-weight: bold;
      }
      :host([active]) wa-text {
        color: var(--text-1);
      }
      /* hover inputs */
      @media (hover: hover) {
        wa-text:hover:not(:active) {
          color: var(--text-1);
        }
      }
    `]
  }

  render() {
    return html`
      ${!this.firstItem() ? html `
        <wa-icon icon="keyboard_arrow_right" color="var(--text-2)"></wa-icon>
      ` : ''}
      <wa-text>${this.label}</wa-text>
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  firstItem(): boolean {
    let firstItem: boolean, children: any;
    children = Array.prototype.slice.call(this.parentElement.children);
    firstItem = children.indexOf(this) == 0;
    return firstItem;
  }
  
}
