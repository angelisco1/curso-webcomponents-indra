import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import './datos-hijo';

class MisDatos extends PolymerElement {
	static get is() {
		return 'mis-datos'
	}

	static get template() {
		return html`
			<h3>Padre</h3>
			<div>
				<input type="text" name="nombre" value="[[nombre]]" on-input="changeProp" />
				<span>[[error]]</span>
			</div>
			<div>
				<input type="text" name="apellidos" value="[[apellidos]]" on-input="changeProp" />
			</div>
			<p>[[nombreCompleto]]</p>
			<datos-hijo nombre="{{nombre}}" apellidos="[[apellidos]]"></datos-hijo>
		`
	}

	static get properties() {
		return {
			nombre: {
				type: String,
				value: 'Angel',
				observer: 'validateIsStark'
			},
			apellidos: {
				type: String,
				value: ''
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

	validateIsStark(nombre) {
		this.error = 'Checking...'
		setTimeout(() => {
			if (!['robb', 'arya', 'rickon', 'tony', 'sansa'].includes(nombre.toLowerCase())) {
				this.error = 'No es un Stark';
			} else {
				this.error = '';
			}
		}, 1000)
	}

	getNombreCompleto(nombre, apellidos) {
		return `${this.nombre} ${this.apellidos}`
	}

	changeProp(event) {
		this[event.target.name] = event.target.value;
	}
}

window.customElements.define(MisDatos.is, MisDatos)