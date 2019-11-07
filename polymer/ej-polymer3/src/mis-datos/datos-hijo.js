import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class DatosHijo extends PolymerElement {
	static get is() {
		return 'datos-hijo'
	}

	static get template() {
    return html`
      <h3>Hijo</h3>
			<div>
				<input type="text" name="nombre" value="[[nombre]]" on-input="changeProp" />
			</div>
			<div>
				<input type="text" name="apellidos" value="[[apellidos]]" on-input="changeProp" />
			</div>
			<p>[[nombreCompleto]]</p>
		`
	}

	static get properties() {
		return {
			nombre: {
        type: String,
        notify: true
			},
			apellidos: {
				type: String,
			},
			nombreCompleto: {
				type: String,
				computed: 'getNombreCompleto(nombre, apellidos)'
			},
			error: {
				type: String,
				value: ''
			}
		}
	}

	getNombreCompleto(nombre, apellidos) {
		return `${this.nombre} ${this.apellidos}`
	}

	changeProp(event) {
		this[event.target.name] = event.target.value;
	}
}

window.customElements.define(DatosHijo.is, DatosHijo)