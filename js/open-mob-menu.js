


const openBtn = document.querySelector('.mob-menu_open');
const closeBtn = document.querySelector('.mob-menu_close');
const modal = document.querySelector('.mobail-modal');

// Открытие модального окна
openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  openBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
});