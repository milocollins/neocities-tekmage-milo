const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export class DevlogData {
  public id: string;
  public createdAt: Date;
  public title: string;
  public abstract: string;
  public content: string;

  public constructor(
    id: string,
    createdAt: Date,
    title: string,
    abstract: string,
    content: string,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.title = title;
    this.abstract = abstract;
    this.content = content;
  }

  public dateToString(): string {
    let dateString = '';
    dateString += `${this.createdAt.getUTCHours()}:${this.createdAt.getUTCMinutes()} `;
    dateString += `${this.createdAt.getUTCDate()} ${month[this.createdAt.getUTCMonth()]} ${this.createdAt.getUTCFullYear()}`;
    return dateString;
  }
}

export const devlogs: DevlogData[] = [
  new DevlogData(
    'devlog-one',
    new Date(2025, 8, 6, 21, 48),
    'The first month - and on this rock I will build my church.',
    'An insight into my motivation to start and the setup to my project.',
    `
        <p>Up to this point, whilst I've done plenty of front-end dev work, I've mostly been saved from
        touching anything as vanilla as Vite. If I'm being honest, my knowledge wasn't always so unabstracted (he says, only a month behind him)!
        Day-to-day I'm working on an angular-ASP.NET stack on bespoke web applications; something that keeps me nice and safe away from the not so polished parts of development. But no longer!
        </p>
        <p>This has been part of my latest venture of broadening my horizons, on another project I'm taking up React and NestJs. This seems a nice way to engage with the more creative part of the process.
        So, with the aid of many any article, API docs, and curt conversation with AI LLMs I made a start here! I've watched a lot of videos lately about how
        "The internet's dying" and "Web3 is dead", and am often myself finding it hard to create a space for myself on the internet as cold and corporate as it is now.
        But then some new videos came up on my youtube feed, how "This new trend is saving the internet", "Why you should make a personal website", etc.
        But honestly, it didn't take much convincing.
        </p>
        <p>So... after sorting out my local build env with vite building my typescript magic, tailwind for styling, and some basic personal linting and prettier formatting touches I made a start with the layout.</p>
        <p>Site layouts/wrappers are something I've done a fair few times now so it wasn't anything new to me to set it up. Nothing too complicated design wise just straight down the middle with it,
        the colours took a moment though. At first I was going to go with Matrix-terminal core - yaknow the green text on a black background, minimal wireframe type deal.
        But before in some of my painting endeavours blue and orange has been a combo that's settled nicely. It's less of a gimmick imo and in the spirit of neo-web1 I figured
        a more colourful palette would be more appropriate.</p>
        <p>It's been a bit of a learning curve getting custom elements setup. For instance, said layout, is now just a custom element I'm using for each index.
        I'm used to thinking in "components" from angular, but the framework does basically all of the heavy lifting for you in terms of defining elements and managing the innerHtml.
        Turns out, believe it or not, you have to do that without the framework!</p>
        <p>Then, I had to do a bit of studying when it came to how vite build routes. In angular again it's all very programmatic, but here? Nooo you're building directories, adding index files, all this manually that I very much take for granted in my daily development!</p>
        <p>Anywho, starting today I'm going to start building out my devlog page. Setting up local data, building a devlog list custom element. The works!</p>
        <p>I'll let you know how it goes! Be well, stay safe, enjoy your day. :)</p>`,
  ),
];
