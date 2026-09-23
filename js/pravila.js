// Обработка кликов по "Подробнее" в шагах
document.querySelectorAll('.step-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Если ссылка ведёт на #, показываем уведомление
    if (href === '#' || href === '') {
      e.preventDefault();
      const stepTitle = this.closest('.step-card').querySelector('h3').textContent;
      showNotification(`Раздел "${stepTitle}" скоро будет доступен`);
    }
    // Иначе — позволяем перейти по ссылке
  });
});