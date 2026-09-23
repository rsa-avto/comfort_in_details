// ===== ОБРАБОТКА ФОРМЫ "ОСТАЛИСЬ ВОПРОСЫ?" =====
document.addEventListener('DOMContentLoaded', function() {
  const guestForm = document.getElementById('guest-form');
  if (guestForm) {
    guestForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[type="text"]').value.trim();
      const phone = this.querySelector('input[type="tel"]').value.trim();
      const message = this.querySelector('textarea').value.trim();
      
      if (!name || !phone || !message) {
        showNotification('Пожалуйста, заполните все поля', 'error');
        return;
      }
      
      if (phone.length < 10) {
        showNotification('Введите корректный номер телефона', 'error');
        return;
      }
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Отправка...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showNotification(`Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

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

  console.log('✅ guests.js загружен');
});