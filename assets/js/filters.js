let filtersData = [
  {
    name: 'filter 1',
    id_str: 'value1'
  },
  {
    name: 'filter 2',
    id_str: 'value2'
  },
  {
    name: 'filter 3',
    id_str: 'value3'
  },
  {
    name: 'filter 4',
    id_str: 'value4'
  }
]

let filterBox = document.querySelector('.filters__flex-box');

for (let i = 0; i < 4; i++) {
  let filter = new Dropper(filtersData, 'dark');
  filterBox.prepend(filter.getNode());
}
