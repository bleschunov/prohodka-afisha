//let response = fetch("prohodka.com/cities")

const data = {
"status": "OK",
"cities":
  [
    {
    "name":"Рязань",
    "id_ str":"ryazan",
    "link":"https://prohodka.com? city=ryazan"
    },
    {
      "name":"Москва",
      "id_ str":"ryazan",
      "link":"https://prohodka.com? city=ryazan"
    },
    {
      "name":"Владивосток",
      "id_ str":"ryazan",
      "link":"https://prohodka.com? city=ryazan"
    }
  ]
}

const template = document.getElementById('item');

let dropper = document.getElementById('cityDropper');
let currentCityNode = document.getElementById('currentCity');
let list = document.getElementById('cityMenu');

let currentCity = data.cities[0].name;
currentCityNode.innerHTML = currentCity;

for (city of data.cities) {
  let item = template.content.cloneNode(true);
  item.querySelector(".dropper__frontend").innerHTML = city.name;

  list.appendChild(item);

  let handler = cacheCityName(city.name);
  list.lastElementChild.addEventListener('click', handler);

  list.lastElementChild.addEventListener('click', () => {
    dropper.removeAttribute('open');
  })
}
list.firstElementChild.nextElementSibling.querySelector('.dropper__backend').setAttribute('checked', 'true');

function cacheCityName (cityName) {
  cityName = city.name;

  return function () {
    currentCityNode.innerHTML = cityName;
  }
}
