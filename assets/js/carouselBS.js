let topEventsDataBS = [
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

let carouselTemplateBS = document.createElement('template');
carouselTemplateBS.innerHTML = `
  <div id="carouselExampleControl" class="carousel slide page__carousel" data-bs-ride="carousel">
    <div class="carousel__tag">Важные события</div>
    <div class="carousel-indicators">
    </div>
    <div class="carousel-inner">
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
`
function CarouselBS (items, name) {
  this.carousel = carouselTemplateBS.content.cloneNode(true).querySelector('.carousel');
  this.items = items;
  this.name = name;

  this.carousel.id = this.name;
  this.carousel.querySelector('.carousel-control-prev').setAttribute('data-bs-target', `#${this.name}`);
  this.carousel.querySelector('.carousel-control-next').setAttribute('data-bs-target', `#${this.name}`);

  this.getNode = () => {
    return this.carousel;
  }

  //<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
  //class="active" aria-current="true" aria-label="Slide 1"></button>
  for (i = 0; i < this.items.length; i++) {
    console.log(i);
    let indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', this.name);
    indicator.setAttribute('data-bs-slide-to', i);
    indicator.dataBsSlideTo = i;
    if (i == 0) {
      indicator.classList.add('active');
      indicator.setAttribute('aria-current', 'true');
    }
    indicator.setAttribute('aria-label', `Slide ${i+1}`);

    this.carousel.querySelector('.carousel-indicators').append(indicator);

    let div = document.createElement('div');
    div.classList.add('carousel-item');
    if (i == 0) {
      div.classList.add('active');
    }
    div.append(this.items[i]);
    this.carousel.querySelector('.carousel-inner').append(div);
  }
}

let arrBS = [];
for (e of topEventsDataBS) {
  let card = new Card(e, 'vertical', 'large');
  arrBS.push(card.getNode());
}
let topSlider = new CarouselBS(arrBS, 'mainCarousel');
document.body.querySelector('.page__main').prepend(topSlider.getNode());
