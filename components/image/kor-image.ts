import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../text';

/**
 * @prop {String} src - Defines the source image to be displayed. Must be a url (web or relative path).
 * @prop {String} alt - Defines the text shown in case the image cannot be loaded.
 * @prop {String} width - Defines the width of the image. Can take a numeric or percentual value.
 * @prop {String} height - Defines the height of the image. Can take a numeric or percentual value.
 * @prop {'fill'|'contain'|'cover'|'none'|'scale-down'} fit - Defines how the image fits to the component. Possible values are `fill`, `contain`, `cover`, `none` and `scale-down`.
 * @prop {String} legend - Defines the legend text.
 * @prop {'inner-top'|'inner-bottom'} legendPosition - Defines the position of the legend. Possible values are `inner-top` and `inner-bottom`. If left unset, the legend is displayed underneath the image
 * @slot top - The container for components overlayed at the top corner of the image.
 * @slot bottom - The container for components overlayed at the bottom corner of the image.
 */

export class korImage extends LitElement {
  @property({ type: String, reflect: true }) src: string | undefined;
  @property({ type: String, reflect: true }) alt: string | undefined;
  @property({ type: String, reflect: true }) height: string | undefined;
  @property({ type: String, reflect: true }) width = '100%';
  @property({ type: String, reflect: true }) fit:
    | 'fill'
    | 'contain'
    | 'cover'
    | 'none'
    | 'scale-down' = 'contain';
  @property({ type: String, reflect: true }) legend: string | undefined;
  @property({ type: String, reflect: true, attribute: 'legend-position' })
  legendPosition: string | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: var(--spacing-s);
        }
        :host([legend-position^='inner-']) kor-text {
          position: absolute;
          padding: var(--spacing-s);
          box-sizing: border-box;
        }
        :host([legend-position='inner-top']) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position='inner-bottom']) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-s);
          position: absolute;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name='top'] {
          top: 0;
        }
        :host([legend][legend-position='inner-top']) slot[name='top'] {
          top: 24px;
        }
        slot[name='bottom'] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name='bottom'],
        :host([legend][legend-position='inner-bottom']) slot[name='bottom'] {
          bottom: 24px;
        }
      `,
    ];
  }

  render() {
    return html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend ? html` <kor-text>${this.legend}</kor-text> ` : ''}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-image')) {
  window.customElements.define('kor-image', korImage);
}
