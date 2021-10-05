let modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
<div class="modal page__modal">
  <div class="modal__header">
    <div class="modal__title">Поделиться</div>
    <svg class="modal__cross">
      <use xlink:href="../../assets/svg_sprite.svg#cross"></use>
    </svg>
  </div>
  <ul class="modal__socials">
    <li class="modal__social-item">
      <a href="#">
        <svg class="modal__social">
          <use xlink:href="../../assets/svg_sprite.svg#vk"></use>
        </svg>
      </a>
    </li>
    <li class="modal__social-item">
      <a href="#">
        <svg class="modal__social">
          <use xlink:href="../../assets/svg_sprite.svg#facebook"></use>
        </svg>
      </a>
    </li>
    <li class="modal__social-item">
      <a href="#">
        <svg class="modal__social">
          <use xlink:href="../../assets/svg_sprite.svg#instagram"></use>
        </svg>
      </a>
    </li>
  </ul>
  <label class="modal__href modal__event">
    <div class="modal__info">Ссылка мероприятия</div>
    <div class="modal__backend">
      <input class="modal__input" type="text" />
      <div class="modal__copy-wrapper">
        <svg class="modal__copy">
          <use xlink:href="../../assets/svg_sprite.svg#copy"></use>
        </svg>
      </div>
    </div>
  </label>
  <label class="modal__href modal__event-page">
    <div class="modal__info">Ссылка страницы мероприятия</div>
    <div class="modal__backend">
      <input class="modal__input" type="text" />
      <div class="modal__copy-wrapper">
        <svg class="modal__copy">
          <use xlink:href="../../assets/svg_sprite.svg#copy"></use>
        </svg>
      </div>
    </div>
  </label>
</div>
<div class="opacitybg modal__opacitybg"></div>
`

let main = document.querySelector('main');

function Repost (event) {
  this.modal = modalTemplate.content.cloneNode(true).querySelector('.modal');
  this.inputs = this.modal.querySelectorAll('.modal__input');
  this.copies = this.modal.querySelectorAll('.modal__copy');
  this.cross = this.modal.querySelector('.modal__cross');
  this.bg = modalTemplate.content.cloneNode(true).querySelector('.opacitybg');

  console.log(this.modal);

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
    main.append(this.modal);
    main.append(this.bg);
  }

  let close = () => {
    this.bg.remove();
    this.modal.remove();
  }

  this.cross.addEventListener('click', close);
}
