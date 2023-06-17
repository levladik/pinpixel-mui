import * as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MapData() {
	return(
		<editorData>
				<dataGroup className="group-location">
					<TextField className='data-group__item' id="outlined-basic" label="Search any location" variant="outlined" size="small" fullWidth margin="dense" />
				</dataGroup>
				<dataGroup className="group-labels">
					<Divider textAlign="left">1. Labels</Divider>
					<TextField id="outlined-basic" label="Title" variant="outlined" size="small" fullWidth margin="dense"/>
	  				<TextField id="outlined-basic" label="Subtitle" variant="outlined" size="small" fullWidth margin="dense"/>
					<TextField id="outlined-basic" label="Tagline" variant="outlined" size="small" fullWidth margin="dense" />
					<FormControlLabel
          			value="start"
          			control={<Switch color="primary" />}
          			label="Labels:"
          			labelPlacement="start"
        			/>
				</dataGroup>
				<dataGroup className="group-styles">
					<Divider textAlign="left">2. Styles</Divider>
					<Stack direction="row" spacing={2}>
						<Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }} src="/static/images/avatar/1.jpg" />
						<Avatar alt="Travis Howard" sx={{ width: 60, height: 60 }} src="/static/images/avatar/2.jpg" />
						<Avatar alt="Cindy Baker" sx={{ width: 60, height: 60 }} src="/static/images/avatar/3.jpg" />
						<Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }} src="/static/images/avatar/1.jpg" />
						<Avatar alt="Travis Howard" sx={{ width: 60, height: 60 }} src="/static/images/avatar/2.jpg" />
						<Avatar alt="Cindy Baker" sx={{ width: 60, height: 60 }} src="/static/images/avatar/3.jpg" />
   				</Stack>				
				</dataGroup>
				<dataGroup className="group-sizes">
					<Divider textAlign="left">3. Size</Divider>
					<Box
						sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						'& > *': {
							mt: 0,
						},
						}}
					>
						<ButtonGroup size="medium" aria-label="medium button group" color="primary">
							<Button key="one">21*30</Button>
							<Button key="two">30*40</Button>			
							<Button key="three">40*50</Button>
							<Button key="three">50*70</Button>
						</ButtonGroup>
					</Box>
				</dataGroup>
		</editorData>
	)
}