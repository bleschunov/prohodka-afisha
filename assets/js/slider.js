let sliderTemplate = document.createElement('template');
sliderTemplate.innerHTML = `
    <div class="slider category__slider">
      <div class="slider__tag">
        Важные мероприятия
      </div>
      <div class="slider__button slider__button_left">
        <svg class="slider__icon slider__icon_left">
          <use xlink:href="./assets/svg_sprite.svg#arrow_down_bold"></use>
        </svg>
      </div>
      <div class="slider__button slider__button_right">
        <svg class="slider__icon slider__icon_right">
          <use xlink:href="./assets/svg_sprite.svg#arrow_down_bold"></use>
        </svg>
      </div>
      <div class="page__box">
        <div class="slider__flex-box">

          <!-- ...
          Content
          ... -->
        </div>
      </div>
    </div>
`;

let pagePadding = 60

function Slider (items, isExtended=false) {
  this.slider = sliderTemplate.content.cloneNode(true).querySelector('.slider');
  this.flexBox = this.slider.querySelector('.slider__flex-box');
  this.btnLeft = this.slider.querySelector('.slider__button_left');
  this.btnRight = this.slider.querySelector('.slider__button_right');

  this.items = items;
  // this.step = getComputedStyle(this.items[0]).width.match(/\d+/)[0];
  // console.log(getComputedStyle(this.items[0]).width)
  this.step = 325;
  this.counter = false;
  this.x = 0

  if (isExtended) {
    this.slider.classList.add('slider_extended')
    this.step = 720;
    this.counter = 1;
  }

  this.getNode = () => {
    return this.slider;
  }

  // Заполняет DOM элементами
  let display = () => {
    for (item of this.items) {
      item.classList.add('slider__item');
      this.flexBox.append(item);
    }
  }

  // Функции для работы слайдера
  let render = () => {
    this.slider.querySelector('.slider__flex-box').style.transform = `translateX(${this.x}px)`
  }

  let check = () => {
    if (this.counter && this.counter == 6) {
      this.x = 0;
      this.counter = 1;
    }
    else if (this.counter == 0) {
      this.x = document.body.clientWidth - this.flexBox.scrollWidth - 2 * pagePadding;
      this.counter = 5;
    }
    else if (this.x > 0) {
      this.x = 0
    }
    else if (this.x < document.body.clientWidth - this.flexBox.scrollWidth - 2 * pagePadding) {
      this.x = document.body.clientWidth - this.flexBox.scrollWidth - 2 * pagePadding;
    }
  }

  let moveLeft = () => {
    if (this.counter) {
      this.counter--;
    }
    this.x += this.step;
    check();
    render();
  }

  let moveRight = () => {
    if (this.counter) {
      this.counter++;
    }
    this.x -= this.step;
    check();
    render();
  }

  this.btnLeft.addEventListener('click', moveLeft);
  this.btnRight.addEventListener('click', moveRight);

  window.addEventListener('resize', () => {
    this.x = 0;
    render();
  });

  display();
}
