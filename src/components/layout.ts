export class Layout extends HTMLElement {
  connectedCallback() {
    // const shadow = this.attachShadow({ mode: 'open' });
    this.innerHTML = `<div class="min-h-screen flex flex-col">
      <header id="banner" class="z-1 flex-none">
        <h1 class="text-4xl font-bold">Tekmage Milo's Tinkory</h1>
        <h2 class="text-2xl font-semibold">Welcome, make yourself at home!</h2>
      </header>
      <div class="flex-1 flex flex-col md:grid md:grid-cols-6 gap-4">
          <cast-navbar class="w-full flex-shrink-0 self-start md:col-span-1 p-4"></cast-navbar>
          <main class="flex-1 md:col-span-4 bg-[var(--colour-my-body)] flex flex-col">
            <div class="flex-1">
              ${this.innerHTML}
            </div>
            <footer class="flex-none m-2 bg-[var(--colour-my-footer)] rounded-md md:w-1/2 md:mx-auto">
              <div class="grid grid-cols-3 divide-x-3 divide-solid divide-white p-1 text-stone-100 text-shadow-pink-500 text-shadow-sm text-center">
                <a class="underline hover:text-stone-300 hover:text-shadow-pink-600 text-lg"
                  href="https://github.com/milocollins">My Github</a>
                <a class="underline hover:text-stone-300 hover:text-shadow-pink-600 text-lg"
                  href="https://axion816.itch.io">My games</a>
                <a class="underline hover:text-stone-300 hover:text-shadow-pink-600 text-lg"
                  href="https://www.youtube.com/watch?v=hvL1339luv0">Cute cat video</a>
              </div>
            </footer>
          </main>
      </div>
    </div>`;
  }
}

customElements.define('cast-layout', Layout);
