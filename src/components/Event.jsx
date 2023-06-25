import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

export default function Event(props) {
  const clickHandler = e => {
    props.onSendClickedEvent(props.id);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: '100%',
          minHeight: '130px',
          borderLeft: '10px solid #687487',
          borderRadius: '10px',
          padding: '8px 0 8px 0',
          cursor: 'pointer',
          ':hover': {
            boxShadow: '0 0 0 2px #687487',
          },
        }}
        onClick={clickHandler}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              component="h2"
              sx={{ paddingTop: '2px', paddingLeft: '5px' }}
            >
              {props.title.at(0).toUpperCase() + props.title.slice(1)}
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={5}>
              <Box sx={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                <RoomIcon style={{ color: '#687487' }} />
                <Typography variant="body2" component="p">
                  {props.city === null ? 'No City Data' : props.city}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                sx={{
                  display: 'flex',
                  gap: '5px',
                  marginRight: '5px',
                  alignItems: 'center',
                }}
              >
                <CalendarMonthIcon />
                <Typography variant="body2" component="p">
                  {props.date}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
