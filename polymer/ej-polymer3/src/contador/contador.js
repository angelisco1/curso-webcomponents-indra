import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class Contador extends PolymerElement {
	static get is() {
		return 'wc-contador';
	}

	static get template() {
		return html`
			<p>Has hecho [[clicks]]</p>
			<p>Has hecho [[numClicks]]</p>
			<button type="button" on-click="decrementar">-</button>
			<span>[[cuenta]]</span>
			<button id="btnIncrementar" type="button">+</button>
		`
	}

	static get properties() {
		return {
			cuenta: {
				type: Number,
				value: 0,
				observer: 'changeClicks',
				reflectToAttribute: true
			},
			clicks: {
				type: Number,
				value: 0
			},
			numClicks: {
				type: String,
				computed: 'changeNumClicks(clicks)'
			}
		}
	}

	changeClicks(newCuenta) {
		this.clicks++;
	}

	changeNumClicks(newNumClicks) {
		return newNumClicks + ' clicks!'
	}

	connectedCallback() {
		super.connectedCallback();
		this.shadowRoot.querySelector('#btnIncrementar').addEventListener('click', this.incrementar.bind(this));
	}

	incrementar(event) {
		this.cuenta++;
		this.dispatchEvent(new CustomEvent('cuentaCambiada', {detail: this.cuenta}));
		// this.clicks++;
	}
	
	decrementar(event) {
		this.cuenta--;
		// this.clicks++;
	}
}

window.customElements.define(Contador.is, Contador);