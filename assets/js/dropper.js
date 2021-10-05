let dropperTemplate = document.createElement('template');
dropperTemplate.innerHTML = `
<details class="dropper">
    <summary class="dropper__toggler">
      <div class="dropper__toggler-left">
        <svg class="dropper__location">
          <use xlink:href="../../assets/svg_sprite.svg#location"></use>
        </svg>
        <div class="dropper__current"></div>
      </div>
      <div class="dropper__arrow-wrapper">
        <svg class="dropper__arrow">
          <use xlink:href="../../assets/svg_sprite.svg#arrow_down"></use>
        </svg>
      </div>
    </summary>
    <div class="dropper__window">
        <ul class="dropper__menu">

        </ul>
    </div>
</details>
`

let dropperItemTemplate = document.createElement('template');
dropperItemTemplate.innerHTML = `
<li class="dropper__item">
  <label>
    <input class="dropper__backend" type="radio" />
    <div class="dropper__frontend"></div>
  </label>
</li>
`
function DropperItem (data) {
  this.name = data.name;
  this.item = dropperItemTemplate.content.cloneNode(true).querySelector('.dropper__item');
  this.input = this.item.querySelector('.dropper__backend');
  this.namePlace = this.item.querySelector('.dropper__frontend');

  this.input.value = data.id_str;
  this.namePlace.textContent = this.name;

  this.getNode = () => {
    return this.item;
  }
}

function Dropper (items, dropperType='light') {
  this.dropper = dropperTemplate.content.cloneNode(true).querySelector('.dropper');
  this.currentItem = this.dropper.querySelector('.dropper__current');
  this.window = this.dropper.querySelector('.dropper__menu');

  this.currentItem.textContent = items[0].name;

  switch (dropperType) {
    case 'light':
      this.dropper.classList.add('dropper_light');
      break;
    case 'dark':
      this.dropper.classList.add('dropper_dark');
      break;
    default:
      this.dropper.classList.add('dropper_light');
  }

  for (item of items) {
    let i = new DropperItem(item);
    i.getNode().querySelector('.dropper__backend').setAttribute('name', 'city');
    i.getNode().querySelector('.dropper__frontend').addEventListener('click', event => {
      this.currentItem.textContent = event.target.textContent;
      this.dropper.querySelector('.dropper__toggler-left').append(this.currentItem);
      this.dropper.removeAttribute('open');
    })
    this.window.append(i.getNode());
  }

  this.getNode = () => {
    return this.dropper;
  }
}
