import * as React from 'react';
import Map from '../mapbox/Map';
import MapData from './MapData';

export default function Editor() {
	return (
		<div className='editor wrapper'>
			<MapData />
			<Map />
	  </div>	 
  );
}