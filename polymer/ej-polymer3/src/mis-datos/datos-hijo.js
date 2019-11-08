import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class DatosHijo extends PolymerElement {
	static get is() {
		return 'datos-hijo'
	}

	static get template() {
    return html`
			<h3>Hijo</h3>
			<a id="href1" href="[[url]]" target="_blank">Ir a Google</a> 
			<a id="href2" href$="[[url]]" target="_blank">Ir a Google</a>
			<button type="button" on-click="muestraHref1">Muestra href 1</button>
			<button type="button" on-click="muestraHref2">Muestra href 2</button>
			<div class$="aaa">
				<input type="text" name="url" value="[[url]]"on-change="changeProp" />
			</div>
			<div class$="aaa">
				<input type="text" name="nombre" value="[[nombre]]"on-input="changeProp" />
			</div>
			<div>
				<input type="text" name="apellidos" value="[[apellidos]]" on-input="changeProp" />
			</div>
			<p>[[nombreCompleto]]</p>
		`
	}

	static get properties() {
		return {
			url: {
				type: String,
				value: 'http://www.google.es'
			},
			nombre: {
        type: String,
				notify: true,
				// value: 'Nombre',
				// readOnly: true
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

	muestraHref1() {
		console.log(this.shadowRoot.querySelector('#href1').getAttribute('href'));
	}
	
	muestraHref2() {
		console.log(this.shadowRoot.querySelector('#href2').getAttribute('href'));
	}

	getNombreCompleto(nombre, apellidos) {
		return `${this.nombre} ${this.apellidos}`
	}

	changeProp(event) {
		this[event.target.name] = event.target.value;
	}
}

window.customElements.define(DatosHijo.is, DatosHijo)