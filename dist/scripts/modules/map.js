async function initMap() {
  await ymaps3.ready;

  const maps = document.querySelectorAll("[data-component='map']").forEach((container) => {
    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(container, {
      location: {
        center: [37.588144, 55.733842],
        zoom: 10,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
  });
}

initMap();
