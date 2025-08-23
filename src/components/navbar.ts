class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<p>Nothing yet chief!</p>';
    }
}

customElements.define( 'app-navbar', NavBar );