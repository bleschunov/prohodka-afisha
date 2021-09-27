let toggler = document.querySelector('.category__toggler');
let table = document.querySelector('.category__table');
let categorySlider = document.querySelector('.slider');

toggler.addEventListener('click', function () {
  categorySlider.classList.toggle('none');
  table.classList.toggle('none');
  toggler.classList.toggle('category__toggler_inactive');
  toggler.classList.toggle('category__toggler_active');
});
