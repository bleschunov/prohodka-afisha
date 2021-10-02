let categoriesData = [{
        name: "Тусовка",
        id: 1
      },
      {
        name: "Вечеринка",
        id: 2
      }
  ]

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
