let topEventsData = [
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/large_card.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2 стр. 1",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/large_card.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2 стр. 1",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/large_card.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2 стр. 1",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/large_card.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2 стр. 1",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
]

let carouselTemplate = document.createElement('template');
carouselTemplate.innerHTML = `
    <div class="carousel page__carousel">
      <div class="carousel__tag"></div>
      <div class="carousel__button carousel__button_left">
        <svg class="carousel__icon carousel__icon_left">
          <use xlink:href="./assets/svg_sprite.svg#arrow_down_bold"></use>
        </svg>
      </div>
      <div class="carousel__button carousel__button_right">
        <svg class="carousel__icon carousel__icon_right">
          <use xlink:href="./assets/svg_sprite.svg#arrow_down_bold"></use>
        </svg>
      </div>
      <div class="carousel__progress">
        <!-- <div class="carousel__unit carousel__unit_current"></div>
        <div class="carousel__unit"></div>
        <div class="carousel__unit"></div>
        <div class="carousel__unit"></div>
        <div class="carousel__unit"></div> -->
      </div>
      <div class="carousel__scroll-box">
        <div class="carousel__flex-box">

            <!-- ...
            Content
            ... -->
        </div>
      </div>
    </div>
`;

function Carousel (items, title=false) {
  this.carousel = carouselTemplate.content.cloneNode(true).querySelector('.carousel');
  this.flexBox = this.carousel.querySelector('.carousel__flex-box');
  this.scrollBox = this.carousel.querySelector('.carousel__scroll-box');
  this.prev = this.carousel.querySelector('.carousel__button_left');
  this.next = this.carousel.querySelector('.carousel__button_right');
  this.units = [];
  this.items = items;
  this.transitionDuration = getComputedStyle(items[0]).transitionDuration;
  // this.step = getComputedStyle(items[0]).clientWidth + parseInt(slider.)
  this.counter = 0;
  this.currentScroll = 0;

  for (item of this.items) {
    let unit = document.createElement('div');
    unit.classList.add('carousel__unit');
    this.units.push(unit);
    this.carousel.querySelector('.carousel__progress').append(unit);
    console.log(unit);
  }
  this.units[0].classList.add('carousel__unit_current');

  if (title) {
    this.carousel.querySelector('.carousel__tag').textContent = title;
  }

  this.getNode = () => {
    return this.carousel;
  }

  for (item of this.items) {
    item.classList.add('carousel__item');
    this.flexBox.append(item);
  }

  let moveRight = () => {
    let width = this.items[0].clientWidth;
    let gap = parseInt(getComputedStyle(this.flexBox).gap);
    let step = width + gap;
    updateX(-step);
    this.items.push(this.items.shift());
    updateX(step*(this.items.length-1), this.items[this.items.length-1]);
  }

  let moveLeft = () => {
    let width = this.items[0].clientWidth;
    let gap = parseInt(getComputedStyle(this.flexBox).gap);
    let step = width + gap;
    updateX(step);
    this.items.unshift(this.items.pop());
    updateX(-step*(this.items.length-1), this.items[0]);
  }

  let updateX = (x, item=-1) => {
    if (item != -1) {
      item.style.opacity = 0;
      let dx = x + getTranslateX(item);
      item.style.transform = `translateX(${dx}px)`;
      // setTimeout(() => {item.style.opacity = 1}, this.transitionDuration);
      setTimeout(() => {item.style.opacity = 1}, 800);
    }
    else if (x != -1){
      for (item of this.items) {
        let dx = x + getTranslateX(item);
        item.style.transform = `translateX(${dx}px)`;
      }
    }
    else if (x == -1) {
      for (item of this.items) {
        item.style.transform = `translateX(0px)`;
      }
    }
  }

  let getTranslateX = item => {
    return +getComputedStyle(item).transform.match(/matrix.*\((.+)\)/)[1].split(',')[4];
  }

  let updateUnits = () => {
    let scrollLeft = this.scrollBox.scrollLeft;
    let clientWidth = this.items[0].clientWidth;
    console.log(this.currentScroll);
    if (scrollLeft % clientWidth == 0 && scrollLeft - this.currentScroll != 0) {
      let dx = Math.abs(scrollLeft - this.currentScroll) / clientWidth;
      if (this.currentScroll - scrollLeft < 0) {
        this.counter += dx;
        this.units[this.counter - dx].classList.toggle('carousel__unit_current');
      }
      else if (this.currentScroll - this.scrollBox.scrollLeft > 0) {
        this.counter -= dx;
        this.units[this.counter + dx].classList.toggle('carousel__unit_current');
      }
      this.units[this.counter].classList.toggle('carousel__unit_current');
      this.currentScroll = scrollLeft;
    }
  }

  let e = new Event('scroll');

  this.prev.addEventListener('click', moveRight);
  this.next.addEventListener('click', moveLeft);
  window.addEventListener('resize', () => {
    updateX(-1);
  })
  this.scrollBox.addEventListener('scroll', updateUnits);
}

let arr = [];
for (e of topEventsData) {
  let card = new Card(e, 'vertical', 'large');
  arr.push(card.getNode());
}
let topEventsSlider = new Carousel(arr, 'Важные события');

document.body.querySelector('.page__main').prepend(topEventsSlider.getNode());
