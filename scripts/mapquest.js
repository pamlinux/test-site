L.mapquest.key = 'p6djjaVF6pObWfqLxoZm2UU5eRMMteCS';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [46.63502331770257, 7.051898469002719],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 12
});

map.addControl(L.mapquest.control({ position: 'bottomright' }));

let searchControl = L.mapquest.searchControl({
    className: '',
    hoverMarker: {
      icon: 'marker',
      iconOptions: {
        size: 'sm',
        primaryColor: '#333333',
        secondaryColor: '#333333'
      }
    },
    search: {
      sort: 'relevance',
      pageSize: 20
    },
    searchInput: {
      searchAheadOptions: {
        limit: 6,
        collection: 'address,adminArea,airport,poi,category,franchise'
      },
      compactResults: true,
      placeholderText: 'Search',
      clearTitle: 'Clear search'
    },
    searchLayer: {
        buffer: 256,
        collisionMargin: 2,
        marker: {
          icon: 'via',
          iconOptions: {
            primaryColor: '#ffffff',
            secondaryColor: '#333333',
            size: 'lg'
          },
          popupEnabled: true
        },
        paddingTopLeft: [420, 20],
        paddingBottomRight: [20, 20],
        searchResponse: {},
        updateResultsOnMapMove: true
      }
    }).addTo(map);

    L.marker([46.63502331770257, 7.051], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#22407F',
          secondaryColor: '#3B5998',
          shadow: true,
          size: 'md',
          symbol: 'A'
        })
      })
      .bindPopup('This is Manchester!')
      .addTo(map);