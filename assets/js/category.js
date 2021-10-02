let eventsData =  [
    {
      category_id: 1,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 1,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
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
      photo: "./assets/images/card_vertical_template.png",
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
      photo: "./assets/images/card_vertical_template.png",
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
      photo: "./assets/images/card_vertical_template.png",
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
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: false
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: true
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: false
    },
    {
      category_id: 2,
      name: "Туса века",
      id_str: "toosa_veka",
      photo: "./assets/images/card_vertical_template.png",
      category: "Тусовка",
      address: "Малая Почтовая, 2/2 стр. 1",
      date: "7 сентября",
      time: "20:00",
      link: "https://prohodka.com/event/toosa_veka",
      is_liked: false
    },
  ]

let categoryTemplate = document.createElement('template');
categoryTemplate.innerHTML = `
  <div class="category page__category">
    <div class="category__header">
      <div class="page__box">
        <div class="category__flex-box">
          <div class="category__name"></div>
          <div class="category__toggler category__toggler_inactive">
            Посмотреть полностью
            <svg class="category__arrow">
              <use xlink:href="./assets/svg_sprite.svg#arrow_down"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="category__table none">
      <div class="page__box">
        <div class="category__grid-box">
          <!-- Content -->
        </div>
      </div>
    </div>
  </div>
`;


function Category (cat) {
  this.category        = categoryTemplate.content.cloneNode(true).querySelector('.category');

  this.name            = this.category.querySelector('.category__name');
  this.table           = this.category.querySelector('.category__table');
  this.toggler         = this.category.querySelector('.category__toggler');

  this.name.textContent = cat.name;

  this.events          = [];
  this.id              = cat.id;

  this.category.setAttribute('id', `category_${this.id}`);

  this.getNode = () => {
    return this.category;
  }

  // Получает события с сервера
  let getCards = () => {
    let body = new FormData();
    body.append('category', this.id);
    let options = {
      method: "POST",
      body: body
    }

    fetch('https://prohodka.com/ajax/api/events/get_recomendations', options)
      .then(res => res.json())
      .then(data => {
        for (e of data.events) {
          let card = new Card(e, 'vertical');
          this.events.push(card.getNode());
        }
      })
  }

  // Заполняет DOM категории карточками
  let display = () => {
    for (e of this.events) {
      this.table.querySelector('.category__grid-box').append(e.cloneNode(true));
    }
  }

  this.toggler.addEventListener('click', () => {
    this.category.querySelector('.slider').classList.toggle('none');
    this.table.classList.toggle('none');
    this.toggler.classList.toggle('category__toggler_inactive');
    this.toggler.classList.toggle('category__toggler_active');
  });

  //getCards();
  for (e of eventsData) {
    let card = new Card(e, 'vertical');
    this.events.push(card.getNode());
  }
  display();

  this.slider = new Slider(this.events.slice(0, 5));
  this.category.append(this.slider.getNode());
}
