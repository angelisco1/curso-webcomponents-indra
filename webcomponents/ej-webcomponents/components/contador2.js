const template = document.createElement('template');
template.innerHTML = `
    <button type="button" id="btnResta">-</button>
    <span></span>
    <button type="button" id="btnSuma">+</button>
`

export default class Contador2 extends HTMLElement {
    static get is() {
        return 'wc-contador2';
    }

    constructor() {
        super();
        const dom = this.attachShadow({mode: 'closed'})
        dom.appendChild(template.content.cloneNode(true));

        this.$btnResta = dom.querySelector('#btnResta');
        this.$btnSuma = dom.querySelector('#btnSuma');
        this.$spanCuenta = dom.querySelector('span')

        this.cuenta = 0;
    }

    connectedCallback() {
        this.$btnResta.addEventListener('click', this.restar.bind(this));
        this.$btnSuma.addEventListener('click', this.sumar.bind(this));
    }

    restar() {
        this.cuenta--;
    }

    sumar() {
        this.cuenta++;
    }

    pintarCuenta() {
        this.$spanCuenta.innerText = this.cuenta;
    }

    get cuenta() {
        return this._cuenta
    }

    set cuenta(value) {
        this._cuenta = value;
        this.pintarCuenta();
    }
}

window.customElements.define(Contador2.is, Contador2);