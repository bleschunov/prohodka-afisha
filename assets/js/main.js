let eventsData = {
  status: "OK",
  events:
  [
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
}

let categoriesData = {
  status: "OK",
  categories: [
      {
        name: "Тусовка",
        id: 1
      },
      {
        name: "Вечеринка",
        id: 2
      }
    ]
}

let categoryBox = document.querySelector('.page__category-box');

// let response = fetch('https://prohodka.com/ajax/api/get_cities', {
//   method: 'POST',
//   mode: 'no-cors'
// }).then(res => console.log(res));

// Загрузка событий при открытии страницы (фильтры дефолт)
// и отображание категорий
let categories = categoriesData.categories;
let categoryList = [];
for (category of categories) {
  category = new Category(category);
  categoryList.push(category);
  categoryBox.append(category.getNode());
}

// Загрузка карточек в соответствующие категории
function updateCategories (events) {
  for (category of categoryList) {
    category.drop();
    category.slider.drop();
  }
  for (e of events) {
    for (category of categoryList) {
      if (e.category_id == category.id) {
        let card = new Card(e.name, e.photo, e.category,
          e.address, e.date, e.time, e.link, e.is_liked, e.card_type);
        category.addEvent(card);
        if (category.slider.items.length < 5) {
          category.slider.addItem(card.cloneNode(true));
        }
      }
    }
  }
}

// Выводит категории на страницу
function printCategories (categoryList) {
  removeCategories();
  for (category of categoryList) {
    category.display();
    category.slider.display();
    categoryBox.append(category.getNode());
  }
}

// Стирает все категории со страницы
function removeCategories () {
  let currentCategoryList = document.querySelectorAll('.category');
  if (currentCategoryList.length != 0) {
    for (category of currentCategoryList) {
      category.remove();
    }
  }
}

updateCategories(eventsData.events);
printCategories(categoryList);
