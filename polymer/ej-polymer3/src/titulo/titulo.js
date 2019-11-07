import { html, PolymerElement } from '@polymer/polymer/polymer-element';

class Titulo extends PolymerElement {
	static get is() {
		return 'wc-titulo';
	}

	static get template() {
		return html`
			<h1>[[titulo]]</h1>
		`
	}

	static get properties() {
		return {
			// titulo: String,
			titulo: {
				type: String,
				value: 'Un titulo',
			},
			// items: {
			// 	type: Array,
			// 	value() {
			// 		return []
			// 	}
			// }
		}
	}
}

window.customElements.define(Titulo.is, Titulo);