class BotonColor extends HTMLButtonElement {
	static get is() {
		return 'boton-color'
	}

	constructor() {
		super();
	}

	connectedCallback() {
		this.style.backgroundColor = 'red';
		this.style.color = 'white';
		this.style.borderRadius = "5px";
		this.style.fontWeight = "bold";
		this.style.border = "none";
		this.addEventListener('click', this.mostrarAlert);
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.mostrarAlert);
	}

	mostrarAlert(event) {
		alert('Hola mundo!');
	}
}

window.customElements.define(BotonColor.is, BotonColor, { extends: 'button' });