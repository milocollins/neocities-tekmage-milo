class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav>
      <ul>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2"><a href="/">Home</a></li>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2"><a href="/warhammer/">Warhammer</a></li>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2"><a href="/devlogs/">Devlogs</a></li>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2"><a href="/404/">404 :(</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('cast-navbar', NavBar);
