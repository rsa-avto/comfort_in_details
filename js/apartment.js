// ===== ДАННЫЕ О КВАРТИРАХ (те же, что в catalog.js) =====

const apartments = [
  {
    id: 1,
    title: 'Уютная студия с атмосферой',
    city: 'Тольятти',
    district: 'Автозаводский район',
    address: 'ул. Бульварная, 25',
    guests: 2,
    beds: 1,
    rooms: 1,
    rating: 4.9,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200'
    ],
    badge: 'Топ выбор',
    amenities: ['wifi', 'kitchen', 'ac', 'tv', 'washer', 'parking'],
    description: 'Светлая и уютная студия в самом сердце Автозаводского района. Идеально подходит для пар или деловых путешественников. Квартира полностью оборудована всем необходимым для комфортного проживания. Панорамные окна наполняют пространство естественным светом, а продуманный дизайн создаёт атмосферу домашнего уюта. В шаговой доступности магазины, кафе и остановки общественного транспорта. Бесконтактное заселение через кейбокс — вы получите код доступа сразу после оплаты и сможете заехать в любое удобное время.'
  },
  {
    id: 2,
    title: 'Двухуровневые апартаменты',
    city: 'Тольятти',
    district: 'Автозаводский район',
    address: 'ул. Юбилейная, 10',
    guests: 2,
    beds: 1,
    rooms: 2,
    rating: 5.0,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200'
    ],
    badge: 'Хит',
    amenities: ['wifi', 'parking', 'kitchen', 'balcony'],
    description: 'Просторные двухуровневые апартаменты с панорамными окнами и современным ремонтом. Отличный вид на город и тихий район. Идеально для длительного проживания.'
  },
  {
    id: 3,
    title: 'Просторная 1-комнатная у парка',
    city: 'Тольятти',
    district: 'Комсомольский район',
    address: 'ул. Парковая, 5',
    guests: 3,
    beds: 1,
    rooms: 1,
    rating: 4.8,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200'
    ],
    badge: null,
    amenities: ['wifi', 'kitchen', 'washer', 'balcony'],
    description: 'Уютная квартира рядом с парком. Свежий воздух, тишина и всё необходимое для комфортного проживания.'
  },
  {
    id: 4,
    title: 'Современная студия в центре',
    city: 'Тольятти',
    district: 'Центральный район',
    address: 'ул. Центральная, 15',
    guests: 2,
    beds: 1,
    rooms: 1,
    rating: 4.7,
    price: 2600,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200'
    ],
    badge: 'Новинка',
    amenities: ['wifi', 'ac', 'kitchen'],
    description: 'Стильная студия в центре города. Рядом магазины, кафе и остановки общественного транспорта.'
  },
  {
    id: 5,
    title: 'Семейная квартира с детской',
    city: 'Тольятти',
    district: 'Приморский район',
    address: 'ул. Приморская, 8',
    guests: 4,
    beds: 2,
    rooms: 2,
    rating: 4.9,
    price: 3500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200'
    ],
    badge: null,
    amenities: ['wifi', 'kitchen', 'washer', 'parking'],
    description: 'Просторная квартира для семьи с детьми. Оборудованная детская, большая кухня и парковка во дворе.'
  },
  {
    id: 6,
    title: 'Стильная квартира у набережной',
    city: 'Самара',
    district: 'Ленинский район',
    address: 'Набережная, 20',
    guests: 4,
    beds: 2,
    rooms: 2,
    rating: 4.8,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200'
    ],
    badge: 'Самара',
    amenities: ['wifi', 'kitchen', 'washer', 'balcony'],
    description: 'Квартира с видом на Волгу. Идеальное место для отдыха у набережной.'
  },
  {
    id: 7,
    title: 'Лофт в историческом центре',
    city: 'Санкт-Петербург',
    district: 'Центральный район',
    address: 'Невский проспект, 50',
    guests: 4,
    beds: 2,
    rooms: 3,
    rating: 4.9,
    price: 5200,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200'
    ],
    badge: 'Премиум',
    amenities: ['wifi', 'ac', 'kitchen', 'washer', 'balcony'],
    description: 'Дизайнерский лофт в самом сердце Петербурга. Высокие потолки, кирпичные стены и атмосфера старого города.'
  }
];

// ===== СЛОВАРЬ УДОБСТВ =====

const amenitiesNames = {
  wifi: 'Wi-Fi',
  ac: 'Кондиционер',
  kitchen: 'Кухня',
  washer: 'Стиральная машина',
  parking: 'Парковка',
  balcony: 'Балкон',
  tv: 'Телевизор'
};

// ===== ЗАГРУЗКА ДАННЫХ КВАРТИРЫ =====

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const apartmentId = parseInt(urlParams.get('id')) || 1;
  
  const apartment = apartments.find(a => a.id === apartmentId);
  
  if (!apartment) {
    console.log('❌ Квартира не найдена, показываем первую');
    window.location.href = 'apartment.html?id=1';
    return;
  }
  
  // Обновляем заголовок страницы
  document.title = `${apartment.title} — Уют в деталях`;
  
  // Обновляем хлебные крошки
  const breadcrumbsCurrent = document.querySelector('.breadcrumbs .current');
  if (breadcrumbsCurrent) breadcrumbsCurrent.textContent = apartment.title;
  
  // Обновляем заголовок
  const titleEl = document.querySelector('.apartment-header h1');
  if (titleEl) titleEl.textContent = apartment.title;
  
  // Обновляем локацию
  const locationEl = document.querySelector('.apartment-header .apartment-location');
  if (locationEl) {
    locationEl.innerHTML = `
      <svg class="icon-sm" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      ${apartment.city}, ${apartment.district}, ${apartment.address}
    `;
  }
  
  // Обновляем главное фото галереи и миниатюры
  const mainImage = document.getElementById('main-image');
  const thumbs = document.querySelectorAll('.thumb');
  if (mainImage && apartment.images) {
    mainImage.src = apartment.images[0];
    thumbs.forEach((thumb, index) => {
      if (apartment.images[index]) {
        thumb.src = apartment.images[index].replace('w=1200', 'w=400');
        thumb.dataset.full = apartment.images[index];
      }
    });
  }
  
  // Обновляем цену
  const priceEl = document.querySelector('.price-amount');
  if (priceEl) priceEl.textContent = apartment.price.toLocaleString('ru-RU') + ' ₽';
  
  // Обновляем описание
  const descEl = document.querySelector('.apartment-description');
  if (descEl && apartment.description) {
    const paragraphs = descEl.querySelectorAll('p');
    if (paragraphs.length > 0) {
      // Разбиваем длинное описание на абзацы
      const sentences = apartment.description.match(/[^.!?]+[.!?]+/g) || [apartment.description];
      paragraphs.forEach((p, i) => {
        if (sentences[i]) p.textContent = sentences[i].trim();
        else p.style.display = 'none';
      });
    }
  }
  
  // Обновляем удобства
  const amenitiesGrid = document.querySelector('.amenities-grid');
  if (amenitiesGrid && apartment.amenities) {
    amenitiesGrid.innerHTML = apartment.amenities.map(a => `
      <div class="amenity-item">
        <svg class="icon-feature" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
        <span>${amenitiesNames[a] || a}</span>
      </div>
    `).join('');
  }
  
  console.log(`✅ Загружена квартира ID: ${apartmentId} — ${apartment.title}`);
  
  // ===== ГАЛЕРЕЯ =====
  
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  let currentIndex = 0;
  
  const images = apartment.images || Array.from(thumbs).map(thumb => thumb.dataset.full);
  
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImage.src = this.dataset.full;
      currentIndex = index;
    });
  });
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateGallery();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      updateGallery();
    });
  }
  
  function updateGallery() {
    thumbs.forEach(t => t.classList.remove('active'));
    if (thumbs[currentIndex]) {
      thumbs[currentIndex].classList.add('active');
      mainImage.src = images[currentIndex];
    }
  }
  
  // ===== БРОНИРОВАНИЕ =====
  
  const checkinInput = document.getElementById('checkin-date');
  const checkoutInput = document.getElementById('checkout-date');
  const bookingSummary = document.getElementById('booking-summary');
  const nightsCount = document.getElementById('nights-count');
  const subtotal = document.getElementById('subtotal');
  const totalPrice = document.getElementById('total-price');
  const bookBtn = document.getElementById('book-btn');
  
  const PRICE_PER_NIGHT = apartment.price;
  const CLEANING_FEE = 500;
  const SERVICE_FEE = 300;
  
  function calculateBooking() {
    if (!checkinInput.value || !checkoutInput.value) {
      if (bookingSummary) bookingSummary.style.display = 'none';
      return;
    }
    
    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    const diffTime = checkout - checkin;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) {
      if (bookingSummary) bookingSummary.style.display = 'none';
      return;
    }
    
    const subtotalAmount = diffDays * PRICE_PER_NIGHT;
    const totalAmount = subtotalAmount + CLEANING_FEE + SERVICE_FEE;
    
    if (nightsCount) nightsCount.textContent = diffDays;
    if (subtotal) subtotal.textContent = subtotalAmount.toLocaleString('ru-RU') + ' ₽';
    if (totalPrice) totalPrice.textContent = totalAmount.toLocaleString('ru-RU') + ' ₽';
    if (bookingSummary) bookingSummary.style.display = 'block';
  }
  
  if (checkinInput) checkinInput.addEventListener('change', calculateBooking);
  if (checkoutInput) checkoutInput.addEventListener('change', calculateBooking);
  
  if (bookBtn) {
    bookBtn.addEventListener('click', function() {
      if (!checkinInput.value || !checkoutInput.value) {
        showNotification('Пожалуйста, выберите даты заезда и выезда', 'error');
        return;
      }
      
      const checkin = new Date(checkinInput.value);
      const checkout = new Date(checkoutInput.value);
      
      if (checkout <= checkin) {
        showNotification('Дата выезда должна быть позже даты заезда', 'error');
        return;
      }
      
      showNotification('Заявка на бронирование отправлена! Мы свяжемся с вами в течение 15 минут.');
    });
  }
  
  // ===== ИЗБРАННОЕ =====
  
  const favoriteBtn = document.querySelector('.favorite-btn-large');
  let isFavorite = false;
  
  if (favoriteBtn) {
    favoriteBtn.addEventListener('click', function() {
      isFavorite = !isFavorite;
      if (isFavorite) {
        this.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--terracotta)" stroke="var(--terracotta)" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          В избранном
        `;
        this.style.borderColor = 'var(--terracotta)';
        this.style.color = 'var(--terracotta)';
        showNotification('Добавлено в избранное ♥');
      } else {
        this.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          В избранное
        `;
        this.style.borderColor = '';
        this.style.color = '';
        showNotification('Удалено из избранного');
      }
    });
  }
});