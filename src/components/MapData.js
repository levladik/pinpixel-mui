import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MapStyles from './MapStyles';
import { SearchBox } from '@mapbox/search-js-react';

export default function MapData({ 
  accessToken, 
  map, 
  changeStyle, 
  mapSize, 
  handleChangeMapSize, 
  handleChangeMapCenter 
}) {  
  
  return (
    <Box sx={{ width: '40%', p: 2 }}>
      <SearchBox
        options={{
          types: 'place',
          zoom: 12
          }}
        accessToken={accessToken} 
        map={map}
        value=''
        placeholder='Enter your city'
        onRetrieve={(response) => {
          // handleChangeMapCenter(response.features[0].geometry.coordinates);
        }}
      />

      <Divider sx={{ m: 2 }}>
        <Chip label="LABELS" color="primary" variant='outlined' />
      </Divider>

      {/* <TextField label="Title" size="normal" margin='dense' variant="outlined" fullWidth/>
      <TextField label="Subtitle" size="normal" margin='dense' variant="outlined" fullWidth/>
      <TextField label="Tagline" size="normal" margin='dense' variant="outlined" fullWidth/> */}

      <TextField label="Title" variant="outlined" margin="dense" fullWidth />
      <TextField label="Subtitle" variant="outlined" margin="dense" fullWidth/>
      <TextField label="Tagline" variant="outlined" margin="dense" fullWidth/>

		  <FormGroup>
				<FormControlLabel sx={{ mt: -1 }} control={<Switch defaultChecked />} label="Labels" labelPlacement="start"/>
		  </FormGroup>

      <Divider sx={{ m: 2 }}>
        <Chip label="STYLES" color="primary" variant='outlined'/>
      </Divider>

      <Stack direction="row" spacing={1} justifyContent="center">
        <MapStyles changeStyle={changeStyle} />
      </Stack>

      <Divider sx={{ m: 2 }}>
        <Chip label="SIZE" color="primary" variant='outlined'/>
      </Divider>

      <Stack direction="row" justifyContent="center">
        <ToggleButtonGroup
          color="primary"            
          exclusive            
          aria-label="Size"
          value={mapSize}
          onChange={handleChangeMapSize}
        >
          <ToggleButton value="21*30">21 × 30 cm</ToggleButton>
          <ToggleButton value="30*40">30 × 40 cm</ToggleButton>
          <ToggleButton value="40*50">40 × 50 cm</ToggleButton>
          <ToggleButton value="50*70">50 × 70 cm</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );
}
