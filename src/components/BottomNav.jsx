import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

//STYLING MUI COMPONENTS
const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  border-top: 2px solid #BDBDBD;
  &.Mui-selected {
    color: #424549;
    border-top: 2px solid #424242;
  }
`);

export default function BottomNav(props) {
  const [value, setValue] = React.useState('page1');

  React.useEffect(() => {
    setValue(props.id !== null ? 'page2' : 'page1');
  }, [props.id]);

  const handleChange = event => {
    setValue('page1');
  };

  return (
    <>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: '100%' }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            value="page1"
            icon={<SchoolOutlinedIcon />}
            disabled={Boolean(!props.id)}
            onClick={() => props.onSendClickedEvent(null)}
          />
          <BottomNavigationAction
            value="page2"
            icon={<PersonOutlineOutlinedIcon />}
            disabled={Boolean(!props.id)}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
