let sliderTemplate = document.createElement('template');
sliderTemplate.innerHTML = `
    <div class="slider category__slider">
      <div class="page__box">
        <div class="slider__flex-box">
          <div class="slider__button slider__button_left">
            <svg class="slider__icon slider__icon_left">
              <use xlink:href="../../assets/svg_sprite.svg#arrow_down_bold"></use>
            </svg>
          </div>
          <div class="slider__button slider__button_right">
            <svg class="slider__icon slider__icon_right">
              <use xlink:href="../../assets/svg_sprite.svg#arrow_down_bold"></use>
            </svg>
          </div>
          <!-- ...
          Content
          ... -->
        </div>
      </div>
    </div>
`;

let pagePadding = 60

function Slider () {
  // console.log(sliderTemplate.content.cloneNode(true));
  this.slider = sliderTemplate.content.cloneNode(true).querySelector('.slider');
  this.btnLeft = this.slider.querySelector('.slider__button_left');
  this.btnRight = this.slider.querySelector('.slider__button_right');
  this.items = [];
  this.x = 0

  let render = () => {
    for (item of this.items) {
      item.style.transform = `translateX(${this.x}px)`
    }
  }

  let check = () => {
    if (this.x > 0) {
      console.log(1);
      console.log(this.x);
      this.x = 0
    }
    else if (this.x < document.body.clientWidth - this.slider.scrollWidth - pagePadding) {
      console.log(2);
      console.log(this.x);
      console.log(this.slider.scrollWidth);
      this.x = document.body.clientWidth - this.slider.scrollWidth - pagePadding;
    }
  }

  let moveLeft = () => {
    this.x += this.items[0].clientWidth + +getComputedStyle(this.slider.querySelector('.slider__flex-box')).gap.match(/\d+/g)[0];
    check();
    render();
  }

  let moveRight = () => {
    this.x -= this.items[0].clientWidth + +getComputedStyle(this.slider.querySelector('.slider__flex-box')).gap.match(/\d+/);
    check();
    render();
  }

  this.getNode = () => {
    return this.slider;
  }

  this.drop = () => {
    this.items = [];
  }

  this.display = () => {
    for (item of this.items) {
      item.classList.add('slider__item');
      this.btnRight.after(item);
    }
    return this.items;
  }

  this.btnLeft.addEventListener('click', moveLeft);
  this.btnRight.addEventListener('click', moveRight);

  window.addEventListener('resize', () => {
    this.x = 0;
    render();
  });

  this.getNode = () => {
    return this.slider;
  }

  this.addItem = item => {
    this.items.push(item);
  }
}
