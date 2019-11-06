const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            --color: blue;
            border: 1px solid var(--color);
        }

        span {
            color: var(--color);
        }
    </style>
    <button type="button" id="btnRestar">-</button>
    <span></span>
    <button type="button" id="btnSumar">+</button>
`

export default class Contador extends HTMLElement {
    static get is() {
        return 'wc-contador';
    }

    constructor() {
        super();
        const _shadowRoot = this.attachShadow({mode: 'closed'});
        // _shadowRoot.innerHTML = this.render();
        _shadowRoot.appendChild(template.content.cloneNode(true));

        this.$btnSumar = _shadowRoot.querySelector('#btnSumar')
        this.$btnRestar = _shadowRoot.querySelector('#btnRestar')
        this.$spanCuenta = _shadowRoot.querySelector('span')
    }

    // render() {
    //     return `
    //         <style>
    //             :host {
    //                 --color: blue;
    //                 border: 1px solid var(--color);
    //             }

    //             span {
    //                 color: var(--color);
    //             }
    //         </style>
    //         <button type="button" id="btnRestar">-</button>
    //         <span></span>
    //         <button type="button" id="btnSumar">+</button>
    //     `;
    // }

    static get observedAttributes() {
        return ['cuenta'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.pintarCuenta();
    }

    connectedCallback() {
        this.$btnRestar.addEventListener('click', this.restar.bind(this));
        this.$btnSumar.addEventListener('click', this.sumar.bind(this));
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
        return this.getAttribute('cuenta')
    }

    set cuenta(value) {
        this.setAttribute('cuenta', value);
    }
}

window.customElements.define(Contador.is, Contador);