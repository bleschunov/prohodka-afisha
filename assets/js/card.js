function Card (name, photo, category, address, date, time, link, is_liked, card_type) {
  let card = cardTemplate.content.cloneNode(true).querySelector('.card');
  let cardName = card.querySelector('.card__title');
  let cardAddress = card.querySelector('.card__location');
  let cardDate = card.querySelector('.card__date');
  let cardBackend = card.querySelector('.card__backend');

  card.setAttribute('href', link);
  card.style.backgroundImage = `url('${photo}')`;
  if (card_type == 'vertical') {
    card.classList.add('card_vertical');
  }
  cardName.textContent = name;
  cardAddress.textContent = cardAddress;
  cardDate.textContent = date + ' ' + time
  if (is_liked) {
    cardBackend.setAttribute('checked', '');
  }

  return card;
}

let cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <a class="card card_vertical">
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
