import { devlogs } from '../assets/devlog-data';

export class DevlogList extends HTMLElement {
  connectedCallback() {
    const sortedDevlogs = devlogs.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
    this.innerHTML = sortedDevlogs
      .map(
        (devlog) => `
            <div class="p-2 bg-[var(--colour-card-border)]">
            <div class="flex items-center mb-2">
                <button data-devlog-id="${devlog.id}" class="minimise-btn w-6 h-6 me-2 bg-orange-400 hover:bg-orange-300 border border-white cursor-pointer flex items-center justify-center rounded-full">
                  <span class="text-white rounded-0">◉</span>
                </button>
                <a href="/devlogs/${devlog.id}.html" class="w-6 h-6 me-2 bg-green-600 hover:bg-green-500 border border-white flex items-center justify-center rounded-full">
                    <span class="text-white rounded-0">□</span>
                </a>
                <h3 class="border border-white p-1 text-white text-nowrap w-1/2 overflow-hidden text-ellipsis">
                    https://tekmage-milo.neocities.org/devlogs/${devlog.id}
                </h3>
            </div>
            <div class="p-2 bg-[var(--colour-card-body)] text-black" id="${devlog.id}">
                <h1 class="text-lg">
                    <span class="underline">${devlog.title}</span>
                    <time> - (${devlog.dateToString()})</time>
                </h1>
                <p class="text-black">${devlog.abstract}</p>
                <div class="flex justify-end">
                    <a href="/devlogs/${devlog.id}.html" class="text-blue-400 hover:text-blue-300 text-sm">
                        Read more →
                    </a>
                </div>
            </div>
        </div>`,
      )
      .join('<div class="p-1"></div>');

    this._addEventListeners();
  }

  private _addEventListeners(): void {
    const hideButtons = this.querySelectorAll('.minimise-btn');
    hideButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const devlogId = target
          .closest('button')
          ?.getAttribute('data-devlog-id');
        if (devlogId) {
          this._hideLog(devlogId, button);
        }
      });
    });
  }

  private _hideLog(id: string, button: Element): void {
    const element = document.querySelector(`#${id}`);
    if (!element) {
      return;
    }

    const isHidden: boolean = element.classList.contains('hidden');
    if (isHidden) {
      element.classList.remove('hidden');
      button.textContent = '◉';
    } else {
      element.classList.add('hidden');
      button.textContent = '○';
    }
  }
}

customElements.define('cast-devlog-list', DevlogList);
