import React, { useEffect, useState } from 'react';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function Map({ mapSize }) {

  const [width, height] = mapSize.split('*')
  
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
