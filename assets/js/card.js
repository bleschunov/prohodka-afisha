function Card (e, cardType='vertical', isLarge=false) {
  // console.log(e);
  this.card = cardTemplate.content.cloneNode(true).querySelector('.card');
  this.cardName = this.card.querySelector('.card__title');
  this.cardAddress = this.card.querySelector('.card__location');
  this.cardDate = this.card.querySelector('.card__date');
  this.cardBackend = this.card.querySelector('.card__backend');

  this.card.setAttribute('href', e.link);
  this.card.style.backgroundImage = `url('${e.photo}')`;
  if (cardType == 'vertical') {
    this.card.classList.add('card_vertical');
  }
  else if (cardType == 'horizontal') {
    this.card.classList.add('card_horizontal');
  }
  if (isLarge) {
    this.card.classList.add('card_large')
  }
  this.cardName.textContent = e.name;
  this.cardAddress.textContent = e.address;
  this.cardDate.textContent = e.date + ' ' + e.time
  if (e.is_liked) {
    this.cardBackend.setAttribute('checked', '');
  }

  this.getNode = () => {
    return this.card;
  }
}

let cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <a class="card">
    <div class="card__wrapper">
      <div class="card__header">
        <div class="card__repost-wrapper">
          <svg class="card__repost">
            <use xlink:href="./assets/svg_sprite.svg#repost"></use>
          </svg>
        </div>
      </div>
      <div class="card__blur">
        <h4 class="card__title"></h4>
        <p class="card__info card__date">
          Date
        </p>
        <p class="card__info card__location">
          Location
        </p>
        <div class="card__footer">
            <div class="card__tag-wrapper">
              <div class="tag tag_light">от 1000 руб.</div>
            </div>
            <label class="card__like">
              <input class="card__backend" type="checkbox"/>
              <svg class="card__frontend card__frontend_checked">
                <use xlink:href="./assets/svg_sprite.svg#like_checked"></use>
              </svg>
              <svg class="card__frontend card__frontend_unchecked">
                <use xlink:href="./assets/svg_sprite.svg#like_unchecked"></use>
              </svg>
            </label>
        </div>
      </div>
    </div>
  </a>
`;
