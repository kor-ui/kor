import { LitElement, css, html, customElement, property } from 'lit-element';
import '../icon';
import '../text';

@customElement('kor-breadcrumb-item')
export class korBreadcrumbItem extends LitElement {
  @property({ type: String, reflect: true }) label = 'Label';
  @property({ type: Boolean, reflect: true }) active = false;

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 4px;
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      ${!this.firstItem()
        ? html`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `
        : ''}
      <kor-text>${this.label}</kor-text>
    `;
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
