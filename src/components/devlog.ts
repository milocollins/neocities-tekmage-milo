import { devlogs } from '../assets/devlog-data';

export class Devlog extends HTMLElement {
  static get observedAttributes() {
    return ['devlog-id'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const devlogId = this.getAttribute('devlog-id');
    const devlog = devlogs.find((d) => d.id === devlogId);

    if (!devlog) {
      this.innerHTML = '<p>Devlog not found</p>';
      return;
    }

    this.innerHTML = `
      <article class="p-4 rounded-lg mb-6 text-white">
        <header class="flex justify-between items-center p-3 border-b border-white mb-4">
          <h1 class="text-2xl">${devlog.title}</h1>
          <time class="text-sm">${devlog.dateToString()}</time>
        </header>
        <div class="p-4">
          ${devlog.content}
        </div>
      </article>
    `;
  }
}

customElements.define('cast-devlog', Devlog);
