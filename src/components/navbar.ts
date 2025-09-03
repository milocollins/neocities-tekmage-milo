class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav>
      <ul>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2 text-lg"><a href="/">Home</a></li>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2 text-lg"><a href="/warhammer/">Warhammer</a></li>
        <li class="bg-[var(--colour-my-orange)] px-2 my-2 text-lg"><a href="/devlogs/">Devlogs</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('cast-navbar', NavBar);
