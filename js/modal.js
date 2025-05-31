"use strict";

document.addEventListener('DOMContentLoaded', () => {
  // Загружаем разметку модалок из внешнего файла
  fetch('modal.html')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => {
      const container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container);
      setupModals(); // Инициализируем модалки после вставки
    })
    .catch(err => console.error('Ошибка загрузки modal.html:', err));

  function setupModals() {
    const openButtons = document.querySelectorAll('[data-modal-open]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');
    const overlays = document.querySelectorAll('.modal-overlay');

    // Обработка открытия
    openButtons.forEach(button => {
      const modalId = button.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        button.addEventListener('click', () => {
          modal.classList.remove('hidden');
          document.body.classList.add('no-scroll'); // блокируем прокрутку
        });
      }
    });

    // Обработка закрытия по кнопке
    closeButtons.forEach(button => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        button.addEventListener('click', () => {
          modal.classList.add('hidden');
          document.body.classList.remove('no-scroll');
        });
      }
    });

    // Обработка закрытия по клику вне модального окна
    overlays.forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  }
});
  