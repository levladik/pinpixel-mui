import { useState } from 'react';
import Map from '../mapbox/Map';
import MapData from './MapData';
import Stack from '@mui/material/Stack';

const styles = {
			piter: 'mapbox://styles/levladik/ckwas7w420a0h15s8xanbvf8j',
			newyork: 'mapbox://styles/levladik/ckwaqs32n6iax15p1xy9twrc4',
			paris: 'mapbox://styles/levladik/ckn5wwkxc0zfk17oqooi5o2bp',
			tokyo: 'mapbox://styles/levladik/ckw3oabba2evs14k6chimh5vr',
			barcelona: 'mapbox://styles/levladik/ckn5xz5420qrw17s6q2agidvw',
			lisbon: 'mapbox://styles/levladik/ckw3o3cmm2nyz14nyhwj428nf',
	}
	
export default function Editor() {

	const [mapStyle, setStyle] = useState(styles.piter);
	
	const changeStyle = (styleName) => {
	  setStyle(styles[styleName]);
	  console.log(mapStyle);
	}

	return (
		<Stack direction="row" >
			<MapData changeStyle={ changeStyle } />
			<Map mapStyle={mapStyle} />
	   </Stack>	 	
  );
}