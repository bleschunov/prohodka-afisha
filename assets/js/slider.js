let flexBox = document.querySelector('.slider__flex-box');
let btnLeft = document.querySelector('.slider__button_left');
let btnRight = document.querySelector('.slider__button_right');
let items = document.querySelectorAll('.slider__item');

let itemWidth = getComputedStyle(items[0]).width;
itemWidth = +itemWidth.split('px')[0];

let gap = getComputedStyle(flexBox).gap;
gap = +gap.split('px')[0];

let x = 0;

function render () {
  console.log(x);
  for (item of items) {
    item.style.transform = `translate(${x}px)`
  }
}

function check () {
  if (x > 0) {
    x = 0
  }
  else if (x < document.body.clientWidth - (items.length * (itemWidth + gap) - gap)) {
    x = document.body.clientWidth - (items.length * (itemWidth + gap) - gap);
  }
}

function moveLeft () {
  // x += 158;
  x += itemWidth + gap;
  check();
  render();
}

function moveRight () {
  // x -= 158;
  x -= itemWidth + gap;
  check();
  render();
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

window.addEventListener('resize', function () {
  x = 0;
  render();
});
