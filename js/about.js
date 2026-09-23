// ===== АНИМАЦИЯ СЧЁТЧИКОВ СТАТИСТИКИ =====

document.addEventListener('DOMContentLoaded', function() {
  
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;
  
  function animateCounters() {
    if (animated) return;
    animated = true;
    
    statNumbers.forEach(stat => {
      const text = stat.textContent.trim();
      // Извлекаем число из текста (например, "> 5000" → 5000)
      const match = text.match(/\d+/);
      if (!match) return;
      
      const target = parseInt(match[0]);
      const prefix = text.includes('>') ? '> ' : '';
      const duration = 2000; // 2 секунды
      const step = target / (duration / 16); // 60 FPS
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = prefix + Math.floor(current).toLocaleString('ru-RU');
      }, 16);
    });
  }
  
  // Запускаем анимацию когда секция со статистикой появляется на экране
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }
  
  // Плавное появление карточек ценностей
  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100);
  });
  
  console.log('✅ about.js загружен');
});