import { PolymerElement } from '@polymer/polymer/polymer-element';

const WithHoverEffect = (superClass) => {
  return class extends superClass {
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener('mouseover', this.onHover.bind(this));
      this.addEventListener('mouseout', this.onBlur.bind(this));
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('mouseover', this.onHover.bind(this));
      this.removeEventListener('mouseout', this.onBlur.bind(this));
    }

    onHover() {
      this.style.opacity = 0.4;
    }

    onBlur() {
      this.style.opacity = 1;
    }
  }
}

const WithAjax = (superClass) => {
  return class extends superClass {
    getDatos(url) {
      return fetch(url)
        .then((resp) => resp.json())
    }
  }
}


const WithAjaxAndHover = WithAjax(WithHoverEffect(PolymerElement));

export {
  WithHoverEffect,
  WithAjax,
  WithAjaxAndHover
}