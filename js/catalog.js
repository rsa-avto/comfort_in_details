// ===== ДАННЫЕ О КВАРТИРАХ =====

const apartments = [
  {
    id: 1,
    title: 'Уютная студия с атмосферой',
    city: 'tolyatti',
    cityName: 'Тольятти',
    district: 'Автозаводский район',
    address: 'ул. Бульварная, 25',
    guests: 2,
    beds: 1,
    rooms: 1,
    rating: 4.9,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    badge: 'Топ выбор',
    amenities: ['wifi', 'kitchen', 'ac'],
    description: 'Светлая и уютная студия в самом сердце Автозаводского района. Идеально подходит для пар или деловых путешественников. Панорамные окна наполняют пространство естественным светом.'
  },
  {
    id: 2,
    title: 'Двухуровневые апартаменты',
    city: 'tolyatti',
    cityName: 'Тольятти',
    district: 'Автозаводский район',
    address: 'ул. Юбилейная, 10',
    guests: 2,
    beds: 1,
    rooms: 2,
    rating: 5.0,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    badge: 'Хит',
    amenities: ['wifi', 'parking', 'kitchen'],
    description: 'Просторные двухуровневые апартаменты с панорамными окнами и современным ремонтом. Отличный вид на город и тихий район.'
  },
  {
    id: 3,
    title: 'Просторная 1-комнатная у парка',
    city: 'tolyatti',
    cityName: 'Тольятти',
    district: 'Комсомольский район',
    address: 'ул. Парковая, 5',
    guests: 3,
    beds: 1,
    rooms: 1,
    rating: 4.8,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800',
    badge: null,
    amenities: ['wifi', 'kitchen', 'washer', 'balcony'],
    description: 'Уютная квартира рядом с парком. Свежий воздух, тишина и всё необходимое для комфортного проживания.'
  },
  {
    id: 4,
    title: 'Современная студия в центре',
    city: 'tolyatti',
    cityName: 'Тольятти',
    district: 'Центральный район',
    address: 'ул. Центральная, 15',
    guests: 2,
    beds: 1,
    rooms: 1,
    rating: 4.7,
    price: 2600,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    badge: 'Новинка',
    amenities: ['wifi', 'ac', 'kitchen'],
    description: 'Стильная студия в центре города. Рядом магазины, кафе и остановки общественного транспорта.'
  },
  {
    id: 5,
    title: 'Семейная квартира с детской',
    city: 'tolyatti',
    cityName: 'Тольятти',
    district: 'Приморский район',
    address: 'ул. Приморская, 8',
    guests: 4,
    beds: 2,
    rooms: 2,
    rating: 4.9,
    price: 3500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    badge: null,
    amenities: ['wifi', 'kitchen', 'washer', 'parking'],
    description: 'Просторная квартира для семьи с детьми. Оборудованная детская, большая кухня и парковка во дворе.'
  },
  {
    id: 6,
    title: 'Стильная квартира у набережной',
    city: 'samara',
    cityName: 'Самара',
    district: 'Ленинский район',
    address: 'Набережная, 20',
    guests: 4,
    beds: 2,
    rooms: 2,
    rating: 4.8,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    badge: 'Самара',
    amenities: ['wifi', 'kitchen', 'washer', 'balcony'],
    description: 'Квартира с видом на Волгу. Идеальное место для отдыха у набережной.'
  },
  {
    id: 7,
    title: 'Лофт в историческом центре',
    city: 'spb',
    cityName: 'Санкт-Петербург',
    district: 'Центральный район',
    address: 'Невский проспект, 50',
    guests: 4,
    beds: 2,
    rooms: 3,
    rating: 4.9,
    price: 5200,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
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
  balcony: 'Балкон'
};

// ===== РЕНДЕР ГОРИЗОНТАЛЬНЫХ КАРТОЧЕК =====

function renderApartments(list) {
  const container = document.getElementById('apartments-list');
  if (!container) return;
  
  if (list.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 60px 20px; color: var(--gray); font-size: 16px;">По вашему запросу ничего не найдено. Попробуйте изменить фильтры.</p>';
    return;
  }
  
  container.innerHTML = list.map(apt => `
    <article class="apartment-card-horizontal" onclick="window.location.href='apartment.html?id=${apt.id}'" style="cursor: pointer;">
      <div class="apartment-image">
        <img src="${apt.image}" alt="${apt.title}">
        ${apt.badge ? `<span class="badge">${apt.badge}</span>` : ''}
        <button class="favorite-btn" onclick="event.stopPropagation()">♡</button>
      </div>
      <div class="apartment-info">
        <div>
          <h3>${apt.title}</h3>
          <div class="apartment-location">
            <svg class="icon-sm" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${apt.cityName}, ${apt.district}
          </div>
          <div class="apartment-meta">
            <span>
              <svg class="icon-sm" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              до ${apt.guests} ${getGuestsWord(apt.guests)}
            </span>
            <span>
              <svg class="icon-sm" viewBox="0 0 24 24"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
              ${apt.beds} ${getBedsWord(apt.beds)}
            </span>
            <span>
              <svg class="icon-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${apt.rating}
            </span>
          </div>
          <div class="apartment-amenities">
            ${apt.amenities.map(a => `<span class="amenity-tag">${amenitiesNames[a] || a}</span>`).join('')}
          </div>
        </div>
        <div class="apartment-footer">
          <div class="apartment-price">от ${apt.price.toLocaleString('ru-RU')} ₽ <small>/ ночь</small></div>
          <a href="apartment.html?id=${apt.id}" class="btn-outline" onclick="event.stopPropagation()">Забронировать</a>
        </div>
      </div>
    </article>
  `).join('');
  
  // Переподключаем обработчики избранного
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
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
}

function getBedsWord(n) {
  if (n === 1) return 'кровать';
  if (n >= 2 && n <= 4) return 'кровати';
  return 'кроватей';
}

function getGuestsWord(n) {
  if (n === 1) return 'гость';
  if (n >= 2 && n <= 4) return 'гостя';
  return 'гостей';
}

// ===== ФИЛЬТРАЦИЯ =====

function filterApartments() {
  const minPrice = parseInt(document.getElementById('min-price')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('max-price')?.value) || 100000;
  
  // Получаем выбранные комнаты
  const selectedRooms = Array.from(document.querySelectorAll('.filter-checkboxes input[type="checkbox"]:checked'))
    .filter(cb => ['studio', '1room', '2room', '3room'].includes(cb.value))
    .map(cb => cb.value);
  
  // Получаем выбранные удобства
  const selectedAmenities = Array.from(document.querySelectorAll('.filter-checkboxes input[type="checkbox"]:checked'))
    .filter(cb => ['wifi', 'ac', 'kitchen', 'washer', 'parking', 'balcony'].includes(cb.value))
    .map(cb => cb.value);
  
  // Фильтр по городу из URL
  const urlParams = new URLSearchParams(window.location.search);
  const cityFilter = urlParams.get('city');
  
  let filtered = apartments.filter(apt => {
    // Фильтр по цене
    if (apt.price < minPrice || apt.price > maxPrice) return false;
    
    // Фильтр по городу
    if (cityFilter && apt.city !== cityFilter) return false;
    
    // Фильтр по комнатам
    if (selectedRooms.length > 0) {
      let roomMatch = false;
      
      if (selectedRooms.includes('studio') && apt.rooms === 1 && apt.title.toLowerCase().includes('студия')) {
        roomMatch = true;
      }
      if (selectedRooms.includes('1room') && apt.rooms === 1 && !apt.title.toLowerCase().includes('студия')) {
        roomMatch = true;
      }
      if (selectedRooms.includes('2room') && apt.rooms === 2) {
        roomMatch = true;
      }
      if (selectedRooms.includes('3room') && apt.rooms >= 3) {
        roomMatch = true;
      }
      
      if (!roomMatch) return false;
    }
    
    // Фильтр по удобствам
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every(amenity => apt.amenities.includes(amenity));
      if (!hasAllAmenities) return false;
    }
    
    return true;
  });
  
  renderApartments(filtered);
}

// ===== ИНИЦИАЛИЗАЦИЯ =====

document.addEventListener('DOMContentLoaded', function() {
  renderApartments(apartments);
  
  const applyBtn = document.getElementById('apply-filters');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      filterApartments();
      showNotification('Фильтры применены');
    });
  }
  
  document.querySelectorAll('.filter-checkboxes input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', filterApartments);
  });
  
  const priceInputs = document.querySelectorAll('.price-range input');
  priceInputs.forEach(input => {
    input.addEventListener('change', filterApartments);
  });
  
  console.log('✅ catalog.js загружен');
});