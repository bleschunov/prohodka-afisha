function Card (e, cardType='vertical', cardSize=false) {
  // console.log(e);
  this.card = cardTemplate.content.cloneNode(true).querySelector('.card');
  this.image = this.card.querySelector('.card__image');
  this.cardName = this.card.querySelector('.card__title');
  this.cardAddress = this.card.querySelector('.card__location');
  this.cardDate = this.card.querySelector('.card__date');
  this.cardBackend = this.card.querySelector('.card__backend');
  this.cardRepost = this.card.querySelector('.card__repost-wrapper');

  this.card.setAttribute('href', e.link);
  switch (cardType) {
    case 'vertical':
      this.card.classList.add('card_vertical');
      this.card.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_light')
      break;
    case 'horizontal':
      this.card.classList.add('card_horizontal');
      this.card.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_light')
      break;
    case 'search':
      this.card.classList.add('card_search');
      this.image.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_dark')
      break;
    default:
      this.card.classList.add('card_vertical');
      this.card.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_light')
  }

  switch (cardSize) {
    case false:
      break
    case 'large':
      this.card.classList.add('card_large');
      this.card.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_light')
      break;
    case 'medium':
      this.card.classList.add('card_medium');
      this.card.style.backgroundImage = `url('${e.photo}')`;
      this.card.querySelector('.tag').classList.toggle('tag_light')
      break;
    default:
      break;
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

  let repost = () => {
    let r = new Repost({link: e.link, href: e.link});
    r.display();
  }

  this.cardRepost.addEventListener('click', repost);
}

let cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <div class="card">
    <a class="card__buy">
      Купить
    </a>
    <div class="card__image" style="background-image: url('../../assets/images/card_horizontal_template.png')"></div>
    <div class="card__wrapper">
      <div class="card__header">
        <div class="card__repost-wrapper">
          <svg class="card__repost">
            <use xlink:href="./assets/svg_sprite.svg#repost"></use>
          </svg>
        </div>
      </div>
      <div class="card__blur">
        <!-- <a class="card__href"> -->
          <!-- <div class="card__flex-box"> -->
            <h4 class="card__title"><sup class="card__age">16+</sup></h4>
            <p class="card__info card__date">
              Date
            </p>
            <p class="card__info card__location">
              Location
            </p>
            <div class="card__footer">
                <div class="card__tag-wrapper">
                  <div class="tag">от 1000 руб.</div>
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
            <!-- </div> -->
          </div>
        <!-- </a> -->
      </div>
    </div>
  </div>
`;
