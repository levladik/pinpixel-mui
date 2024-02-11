import { useEffect, useState } from 'react';
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

	const [mapSize, setMapSize] = useState('30*40');
	const [mapStyle, setStyle] = useState(styles.piter);
	const [mapCenter, setMapCenter] = useState([-73.935242, 40.730610])
	const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }

	const handleChangeMapSize = (event, newAlignment) => {
    setMapSize(newAlignment);
  };
	
	const changeStyle = (styleName) => {
	  setStyle(styles[styleName]);
	}

	return (
		<Stack direction="row">

			<MapData 
				mapSize={ mapSize } 
				changeStyle={ changeStyle } 
				handleChangeMapSize={ handleChangeMapSize } 
				searchValue={ searchValue } 
				handleInputChange={ handleInputChange }
			/>

			<Map 
				mapStyle={ mapStyle } 
				mapSize={ mapSize } 
				// mapCenter={ mapCenter }
				searchValue={ searchValue }
			/>

	  </Stack>	 	
  );
}