let categoriesData = [{
        name: "Тусовка",
        id: 1
      },
      {
        name: "Вечеринка",
        id: 2
      }
  ]

// Categories

let categoryBox = document.querySelector('.page__category-box');
let categories = []

let getCategories = () => {
  fetch('https://prohodka.com/ajax/api/get_categories')
    .then(res => res.json())
    .then(data => {
      for (category of data.categories) {
        let cat = new Category(category);
        categories.push(cat.getNode());
      }
    })
}

let display = () =>  {
  for (category of categories) {
    categoryBox.append(category);
  }
}

let drop = () => {
  for (category of categories) {
    category.remove();
  }
  categories = [];
}

drop();
// getCategories();
for (category of categoriesData) {
  let cat = new Category(category);
  categories.push(cat.getNode());
}
display();

// Recommendations
let recommendationsData = [
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: true
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
]

let recommendationsCards = []
for (c of recommendationsData) {
  let card = new Card(c, 'horizontal');
  recommendationsCards.push(card.getNode());
}
let recommendationsSlider = new Slider(recommendationsCards);
recommendationsSlider.getNode().classList.add('page__recommendations');
document.querySelector('#recommendations').after(recommendationsSlider.getNode());


// TopTen
let topTenCardsSlider = []
let topTenCardsCarousel = []
let topTenData = [
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: true
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: true
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
]
for (c of topTenData) {
  let card = new Card(c, 'horizontal');
  topTenCardsSlider.push(card.getNode());
  card = new Card(c, 'horizontal', 'medium');
  topTenCardsCarousel.push(card.getNode());
}
let topTenSlider = new Slider(topTenCardsSlider);
let topTenCarousel = new Carousel(topTenCardsCarousel, 'Топ-10');
topTenSlider.getNode().classList.add('page__top-ten-slider');
topTenCarousel.getNode().classList.add('page__top-ten-carousel');
document.querySelector('#topTen').after(topTenSlider.getNode());
document.querySelector('#topTen').after(topTenCarousel.getNode());

// Gives
document.querySelector('.page__gives .category__toggler').addEventListener('click', () => {
  document.querySelector('.page__gives .slider').classList.toggle('none');
  document.querySelector('.page__gives .category__table').classList.toggle('none');
  document.querySelector('.page__gives .category__toggler').classList.toggle('category__toggler_inactive');
  document.querySelector('.page__gives .category__toggler').classList.toggle('category__toggler_active');
});

let givesData = document.querySelectorAll('.page__gives .infocard');
let givesSlider = new Slider([].slice.call(givesData, 0, 4));
document.querySelector('.page__gives .category').append(givesSlider.getNode());
