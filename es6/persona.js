
export default class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    showInfo() {
        console.log(this.nombre + ' ' + this._apellido);
    }

    static get queSoy() {
        return 'Persona';
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }
}

const angel = new Persona('Angel', 'Villalba');
angel.showInfo();
angel.nombre = 'Pepe';
angel.showInfo();
console.log(Persona.queSoy);
console.log(angel)