let ourModalTemplate = document.createElement('template');
ourModalTemplate.innerHTML = `
<div class="ourModal page__ourModal">
  <div class="ourModal__header">
    <div class="ourModal__title">Поделиться</div>
    <svg class="ourModal__cross">
      <use xlink:href="./assets/svg_sprite.svg#cross"></use>
    </svg>
  </div>
  <ul class="ourModal__socials">
    <li class="ourModal__social-item">
      <a href="#">
        <svg class="ourModal__social">
          <use xlink:href="./assets/svg_sprite.svg#vk"></use>
        </svg>
      </a>
    </li>
    <li class="ourModal__social-item">
      <a href="#">
        <svg class="ourModal__social">
          <use xlink:href="./assets/svg_sprite.svg#facebook"></use>
        </svg>
      </a>
    </li>
    <li class="ourModal__social-item">
      <a href="#">
        <svg class="ourModal__social">
          <use xlink:href="./assets/svg_sprite.svg#instagram"></use>
        </svg>
      </a>
    </li>
  </ul>
  <label class="ourModal__href ourModal__event">
    <div class="ourModal__info">Ссылка мероприятия</div>
    <div class="ourModal__backend">
      <input class="ourModal__input" type="text" />
      <div class="ourModal__copy-wrapper">
        <svg class="ourModal__copy">
          <use xlink:href="./assets/svg_sprite.svg#copy"></use>
        </svg>
      </div>
    </div>
  </label>
  <label class="ourModal__href ourModal__event-page">
    <div class="ourModal__info">Ссылка страницы мероприятия</div>
    <div class="ourModal__backend">
      <input class="ourModal__input" type="text" />
      <div class="ourModal__copy-wrapper">
        <svg class="ourModal__copy">
          <use xlink:href="./assets/svg_sprite.svg#copy"></use>
        </svg>
      </div>
    </div>
  </label>
</div>
<div class="opacitybg ourModal__opacitybg"></div>
`

let main = document.querySelector('main');

function Repost (event) {
  this.ourModal = ourModalTemplate.content.cloneNode(true).querySelector('.ourModal');
  this.inputs = this.ourModal.querySelectorAll('.ourModal__input');
  this.copies = this.ourModal.querySelectorAll('.ourModal__copy-wrapper');
  this.cross = this.ourModal.querySelector('.ourModal__cross');
  this.bg = ourModalTemplate.content.cloneNode(true).querySelector('.opacitybg');

  console.log(this.ourModal);

  this.inputs[0].value = event.link;
  this.copies[0].addEventListener('click', () => {
    this.inputs[0].select();
    document.execCommand('copy');
  });
  this.inputs[1].value = event.href;
  this.copies[1].addEventListener('click', () => {
    this.inputs[1].select();
    document.execCommand('copy');
  });

  this.display = () => {
    main.append(this.ourModal);
    main.append(this.bg);
  }

  let close = () => {
    this.bg.remove();
    this.ourModal.remove();
  }

  this.cross.addEventListener('click', close);
}
