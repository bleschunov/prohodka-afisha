let searchDropdownData = [
  {
    category_id: 1,
    name: "Туса века",
    id_str: "toosa_veka",
    photo: "./assets/images/card_horizontal_template.png",
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
    photo: "./assets/images/card_horizontal_template.png",
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
    photo: "./assets/images/card_horizontal_template.png",
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
    photo: "./assets/images/card_horizontal_template.png",
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
    photo: "./assets/images/card_horizontal_template.png",
    category: "Тусовка",
    address: "Малая Почтовая, 2/2 стр. 1",
    date: "7 сентября",
    time: "20:00",
    link: "https://prohodka.com/event/toosa_veka",
    is_liked: false
  },
]

let searchDropdowns = document.querySelectorAll('.input__dropdown');

for (event of searchDropdownData) {
  for (searchDropdown of searchDropdowns) {
    let card = new Card(event, 'search');
    searchDropdown.append(card.getNode());
  }
}
