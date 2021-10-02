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
    is_liked: true
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

let arr = [];
for (e of topEventsData) {
  let card = new Card(e, 'vertical', true);
  arr.push(card.getNode());
}
let topEventsSlider = new Slider(arr, true);

document.body.querySelector('.header').after(topEventsSlider.getNode());
