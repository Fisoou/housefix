ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [47.230756, 39.610593],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [47.230756, 39.610593],
      {
        balloonContent: "ул. Малиновского, 25, Ростов-на-Дону",
      },
      {
        preset: "islands#icon",
        iconColor: "#0095b6",
      }
    )
  );
}
