// ===== ОБРАБОТКА ФОРМЫ КОНТАКТОВ =====

document.addEventListener('DOMContentLoaded', function() {
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Получаем значения полей
      const name = this.querySelector('input[type="text"]').value.trim();
      const phone = this.querySelector('input[type="tel"]').value.trim();
      const email = this.querySelector('input[type="email"]').value.trim();
      const message = this.querySelector('textarea').value.trim();
      
      // Валидация
      if (!name || !phone || !email || !message) {
        showNotification('Пожалуйста, заполните все поля', 'error');
        return;
      }
      
      // Проверка email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('Введите корректный email', 'error');
        return;
      }
      
      // Имитация отправки
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Отправка...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showNotification(`Сообщение отправлено! Мы ответим вам в течение 15 минут.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  // Обработка кликов по соцсетям
  document.querySelectorAll('.footer-social a, .footer-social-dark a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const network = this.textContent;
      showNotification(`Переход в ${network}...`);
    });
  });
  
  console.log('✅ contacts.js загружен');
});