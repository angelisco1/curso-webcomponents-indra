import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { WithAjaxAndHover } from './mixins';


class Boton extends WithAjaxAndHover {
  static get is() {
    return 'wc-boton';
  }

  static get template() {
    return html`
      <button type="button" on-click="muestraDatos">Mi boton</button>
    `
  }

  muestraDatos() {
    this.getDatos('http://api.icndb.com/jokes/random/2')
      .then(datos => {
        const datosJSON = JSON.stringify(datos.value, null, 4);
        alert(datosJSON)
      });
  }
}

window.customElements.define(Boton.is, Boton);