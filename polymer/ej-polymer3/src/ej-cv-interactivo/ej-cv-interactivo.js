import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import './form-cv';
import './preview-cv';

class CvInteractivo extends PolymerElement {
  static get is() {
    return 'ej-cv-interactivo';
  }

  static get template() {
    return html`
      <div>
        <h1>Mi CV Interactivo</h1>
        <form-cv
          nombre="{{nombre}}"
          apellidos="{{apellidos}}"
          email="{{email}}"
          skills="{{skills}}"></form-cv>
        <preview-cv
          nombre-completo="[[nombreCompleto]]"
          email="[[email]]"
          skills="[[skills]]"></preview-cv>
      </div>
    `;
  }

  static get properties() {
    return {
      nombre: {
        type: String,
        value: '',
      },
      apellidos: {
        type: String,
        value: '',
      },
      nombreCompleto: {
        type: String,
        computed: 'getNombreCompleto(nombre, apellidos)'
      },
      email: {
        type: String,
        value: '',
      },
      skills: {
        type: Array,
        value() {
          return []
        }
      }
    }
  }

  getNombreCompleto(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
  }
}

window.customElements.define(CvInteractivo.is, CvInteractivo);