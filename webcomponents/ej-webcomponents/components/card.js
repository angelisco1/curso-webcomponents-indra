const template = document.createElement('template')
template.innerHTML = `
	<div>
		<slot name="header">
			<p>OOOOOOO</p>
		</slot>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolorem reiciendis modi, unde dolorum totam deserunt impedit esse repellat optio illo error quos minima mollitia? Architecto ex aut mollitia illum?</p>
		<slot name="footer"></slot>
	</div>
`

class Card extends HTMLElement {
	static get is() {
		return 'wc-card';
	}

	constructor() {
		super();
		const _shadowRoot = this.attachShadow({mode: 'closed'});
		_shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define(Card.is, Card);