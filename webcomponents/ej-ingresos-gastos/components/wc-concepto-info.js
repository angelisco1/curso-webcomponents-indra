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
	</div>
`;

export default class ConceptoInfo extends HTMLElement {
	static get is() {
		return 'wc-concepto-info';
	}

	constructor() {
		super();
		const _shadowRoot = this.attachShadow({mode: 'closed'});
		_shadowRoot.appendChild(template.content.cloneNode(true));

		this.$color = _shadowRoot.querySelector('#color');
		this.$concepto = _shadowRoot.querySelector('#concepto');
		this.$cantidad = _shadowRoot.querySelector('#cantidad');
    }
    
    connectedCallback() {
        const total = this.getAttribute('total');
        this.$cantidad.innerText = total + '€'
        this.$color.style.backgroundColor = total < 0 ? 'red' : 'yellowgreen';
        this.$concepto.innerText = this.getAttribute('concepto');
    }
}

window.customElements.define(ConceptoInfo.is, ConceptoInfo);