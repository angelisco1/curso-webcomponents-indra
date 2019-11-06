import P from './persona.js';
// import mostrarMsg, { suma as s, resta } from './helpers.js';
// import * as fns from './helpers.js';

// fns.resta();

class Formador extends P {
    constructor(nombre, apellido, curso) {
        super(nombre, apellido);
        this._curso = curso;
    }

    get curso() {
        return this._curso;
    }

    set curso(value) {
        this._curso = value;
    }
}

const charly = new Formador('Charly', 'Falco', 'Infiltración en bandas peligrosas');
console.log(charly.curso);
charly.showInfo();