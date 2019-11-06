

class Logo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <img width="150px" src="" />
        `
    }

    static get observedAttributes() {
        return ['imagen']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._imagen = newValue;
        this.changeSrc();
    }

    get imagen() {
        return this._imagen;
    }

    set imagen(value) {
        this._imagen = value;
        this.setAttribute('imagen', value);
    }

    connectedCallback() {
        this.addEventListener('mouseover', this.changeSrc);
    }

    changeSrc() {
        this.firstElementChild.src = this.imagen;
    }

    disconnectedCallback() {
        this.removeEventListener('mouseover', this.changeSrc)
    }

    static get is() {
        return 'wc-logo';
    }
}

window.customElements.define(Logo.is, Logo);