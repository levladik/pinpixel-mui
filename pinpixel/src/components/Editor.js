import { useEffect, useRef, useState } from 'react';
import Map from '../mapbox/Map';
import MapData from './MapData';
import Stack from '@mui/material/Stack';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

mapboxgl.accessToken = accessToken;

const styles = {
	piter: 'mapbox://styles/levladik/ckwas7w420a0h15s8xanbvf8j',
	newyork: 'mapbox://styles/levladik/ckwaqs32n6iax15p1xy9twrc4',
	paris: 'mapbox://styles/levladik/ckn5wwkxc0zfk17oqooi5o2bp',
	tokyo: 'mapbox://styles/levladik/ckw3oabba2evs14k6chimh5vr',
	barcelona: 'mapbox://styles/levladik/ckn5xz5420qrw17s6q2agidvw',
	lisbon: 'mapbox://styles/levladik/ckw3o3cmm2nyz14nyhwj428nf',
}

const useMap = (mapStyle, mapSize, searchValue) => {
	const [mapCenter, setMapCenter] = useState([-73.935242, 40.730610]);
	const [map, setMap] = useState(null);

	useEffect(() => {
		const mapInstance = new mapboxgl.Map({
			container: "map",
			style: mapStyle,
			zoom: 8.8,
			center: mapCenter,
		});

		const nav = new mapboxgl.NavigationControl();
		
		const geocoder = new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl,
			autocomplete: false,
			marker: false,
			limit: 10,
			type: 'city'
		});
	
		mapInstance.addControl(nav);
		mapInstance.addControl(geocoder);

		setMap(mapInstance);
		
	}, [mapStyle, mapSize]);

	return map;
}

export default function Editor() {
	const [mapSize, setMapSize] = useState('30*40');
	const [mapStyle, setStyle] = useState(styles.piter);
	const [searchValue, setSearchValue] = useState('Paris');

	const handleChangeMapSize = (event, newAlignment) => {
		setMapSize(newAlignment);
	};
	
	const changeStyle = (styleName) => {
		setStyle(styles[styleName]);
	};

	const map = useMap(mapStyle, mapSize, searchValue);

	return (
		<Stack direction="row">
			<MapData 
				accessToken={ accessToken }
				map={ map }
				mapSize={ mapSize } 
				changeStyle={ changeStyle } 
				handleChangeMapSize={ handleChangeMapSize }
			/>
			<Map 
				mapSize={ mapSize } 
			/>
		</Stack>	 	
	);
}
