import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

export default function Map({ mapStyle, mapSize, searchValue }) {

  const [width, height] = mapSize.split('*')
  const [mapCenter, setMapCenter] = useState([-73.935242, 40.730610]);

	  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: mapStyle,
      zoom: 10,
      center: mapCenter
    });

	 const nav = new mapboxgl.NavigationControl();
	  
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      autocomplete: false,
      marker: false,
      limit: 3,
      types: 'place',
      query: searchValue
    });

    geocoder.on('result', function(e) {
      const longitude = e.result.geometry.coordinates[0];
      const latitude = e.result.geometry.coordinates[1];
      setMapCenter([longitude, latitude]);
    });

    map.addControl(nav);
    map.addControl(geocoder);
  }, [mapStyle, mapSize]);

  let mapWidth = 45;
  let mapHeight;

  mapHeight 
  = mapSize === '21*30' ? mapWidth * (height / width)
  : mapSize === '30*40' ? mapWidth * (height / width)
  : mapSize === '40*50' ? mapWidth * (height / width)
  : mapSize === '50*70' ? mapWidth * (height / width)
  : 0;

  return (
    <div id="map" 
      style={{ 
        margin: '0 auto', 
        width: `${mapWidth}vw`, 
        height: `${mapHeight}vw` 
      }}/>
  );
};
