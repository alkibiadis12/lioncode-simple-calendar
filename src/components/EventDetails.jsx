import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';

//============================================================
//custom mui styling

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: 'none',
    border: `1px solid white`,
    '.MuiAccordionDetails-root': {},
    '.MuiAccordionSummary-root': {
      backgroundColor: '#838992',
      color: '#fff',
    },
  };
});

//============================================================
//styles

const iconContainer = {
  display: 'flex',
  gap: '1px',
  marginTop: '10px',
  alignItems: 'center',
};

const iconStyle = { color: '#687487', fontSize: '20px' };

//============================================================

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//=================================================================================

export default function EventDetails(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#27292c' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{
            style: { background: '#838992' },
          }}
        >
          <Tab label="SCHEDULE" {...a11yProps(0)} />
          <Tab label="TAB1" {...a11yProps(1)} />
          <Tab label="TAB2" {...a11yProps(2)} />
          <Tab label="TAB3" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {props.filteredEvent[0].calendar.map((e, index) => {
          return (
            <Box key={e.time}>
              <CustomAccordion
                index={index}
                // GIVING BORDER RADIUS TO THE FIRST AND LAST ACCORDION
                sx={{
                  '.MuiAccordionSummary-root': {
                    borderTopLeftRadius: `${index === 0 ? '10px' : '0'}`,
                    borderTopRightRadius: `${index === 0 ? '10px' : '0'}`,
                    borderBottomLeftRadius: `${
                      index === props.filteredEvent[0].calendar.length - 1
                        ? '10px'
                        : '0'
                    }`,
                    borderBottomRightRadius: `${
                      index === props.filteredEvent[0].calendar.length - 1
                        ? '10px'
                        : '0'
                    }`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1">
                    {e.instructor_name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                        marginTop: '20px',
                      }}
                    >
                      <Box sx={iconContainer}>
                        <AccessTimeIcon style={iconStyle} />
                        <Typography variant="subtitle1">
                          {e.time.slice(-8).slice(0, 5)}
                        </Typography>
                      </Box>
                      <Box sx={iconContainer}>
                        <CalendarMonthIcon style={iconStyle} />
                        <Typography variant="subtitle1">
                          {e.date_time}
                        </Typography>
                      </Box>
                      <Box sx={iconContainer}>
                        <LocationOnIcon style={iconStyle} />
                        <Typography variant="subtitle1">
                          {props.filteredEvent[0].event.event_info1
                            ?.course_inclass_city
                            ? props.filteredEvent[0].event.event_info1
                                .course_inclass_city
                            : 'No city Data'}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                      <Avatar />
                    </Box>
                  </Box>
                </AccordionDetails>
              </CustomAccordion>
            </Box>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        TAB2
      </TabPanel>
      <TabPanel value={value} index={2}>
        TAB3
      </TabPanel>
      <TabPanel value={value} index={3}>
        TAB4
      </TabPanel>
    </Box>
  );
}
