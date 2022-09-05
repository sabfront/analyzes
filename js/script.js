let center = [55.825740, 37.498087];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: 'Хедер балуна',
        balloonContentBody: 'Боди балуна',
        balloonContentFooter: 'Подвал',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/point2.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
    });

    let placemark1 = new ymaps.Placemark(center, {
        balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Старопетровский проезд, 7А, стр. 22</div>
				<div class="balloon__contacts">
	                	пн-пт 7:30-20:00,сб-вс 7:30-20:00
				</div>
			</div>
		`
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/point2.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

    // map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);

    placemark1.balloon.open();
}

ymaps.ready(init);