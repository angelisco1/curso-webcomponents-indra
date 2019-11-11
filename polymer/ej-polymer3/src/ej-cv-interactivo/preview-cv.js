import { html, PolymerElement } from '@polymer/polymer/polymer-element';

class PreviewCv extends PolymerElement {
  static get is() {
    return 'preview-cv';
  }

  static get template() {
    return html`
      <div>
        <h2>CV de [[nombreCompleto]]</h2>
        <p><strong>Email:</strong> [[email]]</p>
        <p><strong>Skills:</strong></p>
        <ul>
          <template is="dom-repeat" items="[[skills]]">
            <li>[[item]]</li>
          </template>
        </ul>
      </div>
    `;
  }
}

window.customElements.define(PreviewCv.is, PreviewCv);