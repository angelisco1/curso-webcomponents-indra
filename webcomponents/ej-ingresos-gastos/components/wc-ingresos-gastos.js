import Concepto from './wc-concepto.js';

const template = document.createElement('template');
template.innerHTML = `
	<form>
		<div>
			<label for="concepto">Concepto:</label>
			<input type="text" id="concepto" name="concepto" />
		</div>
		<div>
			<label for="cantidad">Cantidad:</label>
			<input type="number" id="cantidad" name="cantidad" />
		</div>
		<button type="submit">Guardar</button>
	</form>
	<div>
		<label for="filtro">Filtrar por:</label>
		<input type="text" id="filtro" name="filtro" />
	</div>
	<div id="listaConceptos">

	</div>
`;

const conceptos = [
	{id: 1, concepto: 'Agua', cantidad: -30},
	{id: 2, concepto: 'Luz', cantidad: -50},
	{id: 3, concepto: 'Loteria', cantidad: 15},
]

class IngresosGastos extends HTMLElement {
	static get is() {
		return 'wc-ingresos-gastos';
	}

	constructor() {
		super();
		const _shadowRoot = this.attachShadow({mode: 'closed'});
		_shadowRoot.appendChild(template.content.cloneNode(true));

		this.$listaConceptos = _shadowRoot.querySelector('#listaConceptos');
		this.$inputConcepto = _shadowRoot.querySelector('#concepto')
		this.$inputCantidad = _shadowRoot.querySelector('#cantidad')
		this.$form = _shadowRoot.querySelector('form');

		this.conceptos = conceptos;
		this.nextId = 4;
	}

	connectedCallback() {
		this.$form.addEventListener('submit', this.guardarConcepto.bind(this));
		this.pintaConceptos(conceptos);
	}

	guardarConcepto(event) {
		event.preventDefault();
		const nuevoConcepto = this.$inputConcepto.value;
		const nuevaCantidad = Number(this.$inputCantidad.value);
		if (this.$form.hasAttribute('edit')) {
			const idEdit = Number(this.$form.getAttribute('edit'));
			const conceptoActualizar = {id: idEdit, concepto: nuevoConcepto, cantidad: nuevaCantidad};
			this.conceptos = this.conceptos.map(c => {
				if (c.id == idEdit) {
					return conceptoActualizar;
				}
				return c;
			})
			this.$form.removeAttribute('edit')
		} else {
			const nuevoId = this._nextId;
			const nuevoObjConcepto = {id: nuevoId, concepto: nuevoConcepto, cantidad: nuevaCantidad};
			this.conceptos = [...this.conceptos, nuevoObjConcepto];
			this.nextId += 1;
		}
		this.$inputConcepto.value = ''
		this.$inputCantidad.value = ''
	}

	pintaConceptos(conceptos) {
		const t0 = window.performance.now();
		// this.$listaConceptos.innerHTML = '';
		// conceptos.forEach((concepto) => {
		// 	const c = new Concepto();
		// 	c.setAttribute('id', concepto.id);
		// 	c.setAttribute('concepto', concepto.concepto);
		// 	c.setAttribute('cantidad', concepto.cantidad);
		// 	this.$listaConceptos.appendChild(c);
		// });
		
		this.$listaConceptos.innerHTML = conceptos.map((c) => {
			return `<wc-concepto id="${c.id}" concepto="${c.concepto}" cantidad="${c.cantidad}"></wc-concepto>`;
		}).join('')

		this.$listaConceptos.childNodes.forEach((c) => {
			c.addEventListener('onDelete', this.deleteConcepto.bind(this))
			c.addEventListener('onEdit', this.editConcepto.bind(this))
		});

		const t1 = window.performance.now();
		console.log(t1-t0);
	}

	deleteConcepto(event) {
		console.log(event.detail)
		this.conceptos = this.conceptos.filter(c => c.id != event.detail);
	}
	
	editConcepto(event) {
		const conceptoEditar = this.conceptos.find(c => c.id == event.detail);
		this.$inputCantidad.value = conceptoEditar.cantidad;
		this.$inputConcepto.value = conceptoEditar.concepto;
		this.$form.setAttribute('edit', conceptoEditar.id);
	}

	get conceptos() {
		return this._conceptos;
	}

	set conceptos(value) {
		this._conceptos = value;
		this.pintaConceptos(this._conceptos)
	}

	get nextId() {
		return this._nextId;
	}

	set nextId(value) {
		this._nextId = value;
	}
}

window.customElements.define(IngresosGastos.is, IngresosGastos);