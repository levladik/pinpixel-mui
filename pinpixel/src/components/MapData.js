import React, { useState } from 'react';
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

export default function MapData({ changeStyle, mapSize, handleChangeMapSize, handleInputChange }) {  
  
  return (
    <Box sx={{ width: '40%', p: 2 }}>
      <TextField 
        label="Search any location" 
        autoFocus={true} 
        size="small" 
        fullWidth
        onChange={handleInputChange}/>

      <Divider sx={{ m: 2 }}>
        <Chip label="LABELS" color="primary" variant='outlined' />
      </Divider>
      <TextField label="Title" size="small" margin='dense' fullWidth/>
      <TextField label="Subtitle" size="small" margin='dense' fullWidth/>
      <TextField label="Tagline" size="small" margin='dense' fullWidth/>
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
            <ToggleButton value="21*30">21*30</ToggleButton>
            <ToggleButton value="30*40">30*40</ToggleButton>
            <ToggleButton value="40*50">40*50</ToggleButton>
            <ToggleButton value="50*70">50*70</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
    </Box>
  );
}
