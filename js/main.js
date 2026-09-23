document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Подсветка активного пункта меню в шапке
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 2. Переключение избранного (сердечки)
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // Останавливаем переход по ссылке, если кнопка внутри <a>
      
      if (this.textContent.trim() === '♡') {
        this.textContent = '♥';
        this.style.color = '#B8734F';
        showNotification('Добавлено в избранное ♥');
      } else {
        this.textContent = '♡';
        this.style.color = '';
        showNotification('Удалено из избранного');
      }
    });
  });

  // 3. Вспомогательная функция для красивых уведомлений
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 24px;
      background: #B8734F;
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      z-index: 9999;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 2500);
  }

  // Добавляем анимацию для уведомления в стили
  if (!document.getElementById('notif-style')) {
    const style = document.createElement('style');
    style.id = 'notif-style';
    style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
    document.head.appendChild(style);
  }
});