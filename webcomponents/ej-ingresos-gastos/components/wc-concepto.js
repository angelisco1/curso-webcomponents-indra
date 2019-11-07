const template = document.createElement('template');
template.innerHTML = `
	<style>
		div#contenedor {
			display: flex;
		}
		div#contenedor > div {
			margin: 0 10px;
		}
	</style>
	<div id="contenedor">
		<div id="color">&nbsp;</div>
		<div id="concepto"></div>
		<div id="cantidad"></div>
		<div id="opciones">
			<button type="button" id="btn-eliminar">Eliminar</button>
			<button type="button" id="btn-editar">Editar</button>
		</div>
	</div>
`;

export default class Concepto extends HTMLElement {
	static get is() {
		return 'wc-concepto';
	}

	constructor() {
		super();
		const _shadowRoot = this.attachShadow({mode: 'closed'});
		_shadowRoot.appendChild(template.content.cloneNode(true));

		this.$color = _shadowRoot.querySelector('#color');
		this.$concepto = _shadowRoot.querySelector('#concepto');
		this.$cantidad = _shadowRoot.querySelector('#cantidad');
		this.$btnEliminar = _shadowRoot.querySelector('#btn-eliminar');
		this.$btnEditar = _shadowRoot.querySelector('#btn-editar');
	}

	connectedCallback() {
		this.$btnEditar.addEventListener('click', this.editarConcepto.bind(this));
		this.$btnEliminar.addEventListener('click', this.eliminarConcepto.bind(this));
	}

	static get observedAttributes() {
		return ['concepto', 'cantidad'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		switch(name) {
			case 'concepto':
				this.$concepto.innerText = newVal;
				break;
			case 'cantidad':
				this.$cantidad.innerText = newVal + '€';
				this.$color.style.backgroundColor = newVal < 0 ? 'red' : 'yellowgreen';
				break;
		}
	}
	
	disconnectedCallback() {
		this.$btnEditar.removeEventListener('click', this.editarConcepto.bind(this));
		this.$btnEliminar.removeEventListener('click', this.eliminarConcepto.bind(this));
	}

	editarConcepto(event) {
		console.log('Editar')
		this.dispatchEvent(new CustomEvent('onEdit', {detail: this.id}))
	}
	
	eliminarConcepto(event) {
		console.log('Eliminar')
		this.dispatchEvent(new CustomEvent('onDelete', {detail: this.id}))
	}

	get id() {
		return this.getAttribute('id');
	}
}

window.customElements.define(Concepto.is, Concepto);