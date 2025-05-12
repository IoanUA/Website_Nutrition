"use strict";

// modal.js
document.addEventListener('DOMContentLoaded', () => {
    // 1) создаём контейнер и загружаем туда разметку
    const container = document.createElement('div');
    document.body.appendChild(container);
  
    fetch('modal.html')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(html => {
        container.innerHTML = html;
        setupModal();
      })
      .catch(err => console.error('Ошибка загрузки modal.html:', err));
  
    // 2) вешаем обработчики открытия/закрытия
    function setupModal() {
      const overlay = document.getElementById('modal-overlay');
      const openBtn = document.getElementById('open-modal');
      const closeBtn = document.getElementById('modal-close');
  
      if (!overlay || !openBtn || !closeBtn) {
        console.error('Элементы модалки не найдены');
        return;
      }
  
      openBtn.addEventListener('click', () => overlay.classList.remove('hidden'));
      closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
      overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.add('hidden');
      });
    }
  });
  