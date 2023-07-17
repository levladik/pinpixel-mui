import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

export default function Map({ mapStyle }) {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: mapStyle,
    });

	 const nav = new mapboxgl.NavigationControl();
	  
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      autocomplete: false,
      limit: 3,
      types: 'place'
    });

    map.addControl(nav);
    map.addControl(geocoder);
  }, []);

  return (
    <div id="map" style={{ width: '50vw', height: '100vh' }}></div>
  );
};
