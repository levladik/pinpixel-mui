import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/levladik/ckn5xz5420qrw17s6q2agidvw",
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
    <div id="map" style={{ width: '40vw', height: '90vw' }}></div>
  );
};

export default Map;
