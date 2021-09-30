let categoryTemplate = document.createElement('template');
categoryTemplate.innerHTML = `
  <div class="category">
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
  this.events          = [];
  this.id              = cat.id;

  this.category.setAttribute('id', `category_${cat.id}`);
  this.name.textContent = cat.name;
  this.category.classList.add('page__category');

  this.slider = new Slider();
  this.category.append(this.slider.getNode());

  this.getNode = () => {
    return this.category;
  }

  this.addEvent = e => {
    this.events.push(e);
  }

  this.toggler.addEventListener('click', () => {
    this.category.querySelector('.slider').classList.toggle('none');
    this.table.classList.toggle('none');
    this.toggler.classList.toggle('category__toggler_inactive');
    this.toggler.classList.toggle('category__toggler_active');
  });

  this.display = () => {
    for (e of this.events) {
      this.table.querySelector('.category__grid-box').append(e)
    }
    return this.events;
  }

  this.drop = () => {
    this.events = [];
  }
}
