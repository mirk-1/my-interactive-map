// Создаем карту
const map = L.map('map').setView([55.0, 82.9], 10); // Координаты Новосибирска

// Добавляем слой карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Добавляем маркер
L.marker([55.0, 82.9]).addTo(map)
    .bindPopup('Это Новосибирск!')
    .openPopup();