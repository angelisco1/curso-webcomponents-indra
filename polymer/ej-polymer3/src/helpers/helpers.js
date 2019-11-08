import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';

class Helpers extends PolymerElement {
  static get is() {
    return 'wc-helpers';
  }

  static get template() {
    return html`
      <template is="dom-if" if="[[mostrar]]" >
        <p>Se muestra si la propiedad mostrar es true</p>
      </template>
      
      <dom-if if="[[mostrar]]">
        <template>
          <p>Se muestra si la propiedad mostrar es true</p>
        </template>
      </dom-if>

      <button type="button" on-click="toggleMostrar">Toggle mostrar</button>

      <form on-submit="addSugus">
        <input type="text" id="sabor" placeholder="Sabor" />
        <input type="text" id="color" placeholder="Color" />
        <button type="submit">Añadir sugus</button>
      </form>

      <ul>
        <template is="dom-repeat" items="[[sugusFiltrados]]" as="sugu" index-as="pos">
          <li>
            ([[getIndex(pos)]]) <strong>[[sugu.sabor]]: </strong>[[sugu.color]]
            <button type="button" data-pos$="[[pos]]" on-click="deleteSugus">Eliminar</button>
          </li>
        </template>
      </ul>

      <input type="text" on-input="changeFiltro" value="[[filtro]]" />
      <ul>
        <dom-repeat items="[[sugus]]" as="sugu" index-as="pos" filter="[[tienenA(filtro)]]" sort="ordenarPorSabor">
          <template>
            <li>([[getIndex(pos)]]) <strong>[[sugu.sabor]]: </strong>[[sugu.color]]</li>
          </template>
        </dom-repeat>
      </ul>
    `
  }

  static get properties() {
    return {
      filtro: {
        type: String,
        value: ''
      },
      mostrar: {
        type: Boolean,
        value: true
      },
      sugusFiltrados: {
        type: Array,
        computed: 'getSugusFiltrados(sugus, filtro)'
      },
      sugus: {
        type: Array,
        value() {
          return [
            {color: 'azul', sabor: 'piña'},
            {color: 'naranja', sabor: 'naranja'}
          ]
        }
      }
    }
  }

  getSugusFiltrados(sugus, filtro) {
    return sugus.filter(s => s.sabor.includes(filtro) || s.color.includes(filtro))
  }

  ordenarPorSabor(item1, item2) {
    return item1.sabor > item2.sabor ? 1 : -1;
  }

  tienenA(filtro) {
    return (item) => {
      console.log('Pasa')
      return item.sabor.includes(filtro) || item.color.includes(filtro)
    }
  }

  deleteSugus(event) {
    const pos = event.target.dataset.pos;
    this.sugus = this.sugus.filter((sugus, index) => index != pos);
  }

  addSugus(event) {
    event.preventDefault();
    const sabor = event.target.querySelector('#sabor').value;
    const color = event.target.querySelector('#color').value;
    this.sugus = [...this.sugus, {sabor: sabor, color: color}];
  }

  changeFiltro(event) {
    this.filtro = event.target.value;
  }
  
  getIndex(i) {
    return i+1;
  }

  toggleMostrar() {
    this.mostrar = !this.mostrar
  }
}

window.customElements.define(Helpers.is, Helpers)