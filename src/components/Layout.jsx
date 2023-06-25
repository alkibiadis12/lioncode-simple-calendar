import React from 'react';
import Data from './Data';
import Event from './Event';
import BottomNav from './BottomNav';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './Header';
import EventDetails from './EventDetails';
import HeaderEventDetails from './HeaderEventDetails';

export default function Layout() {
  const [data, setData] = React.useState([]);

  //Receiving data form the Data component
  const receiveData = receivedData => {
    setData(receivedData);
  };

  //=========================================================================================
  //Fixing Days data
  const eventDays = [];
  const searchAndDisplayDays = stringToSearch => {
    let allDays = '';
    let isDayInTheString = stringToSearch.search('Monday');

    //Creating a string with the days which exist in the stringToSearch
    if (isDayInTheString !== -1) allDays += 'Mondays';
    isDayInTheString = stringToSearch.search('Tuesday');
    if (isDayInTheString !== -1) {
      allDays === '' ? (allDays += 'Tuesdays') : (allDays += ', ' + 'Tuesdays');
    }
    isDayInTheString = stringToSearch.search('Wednesday');
    if (isDayInTheString !== -1) {
      allDays === ''
        ? (allDays += 'Wednesdays')
        : (allDays += ', ' + 'Wednesdays');
    }
    isDayInTheString = stringToSearch.search('Thursday');
    if (isDayInTheString !== -1) {
      allDays === ''
        ? (allDays += 'Thursdays')
        : (allDays += ', ' + 'Thursdays');
    }
    isDayInTheString = stringToSearch.search('Friday');
    if (isDayInTheString !== -1) {
      allDays === '' ? (allDays += 'Fridays') : (allDays += ', ' + 'Fridays');
    }
    isDayInTheString = stringToSearch.search('Saturday');
    if (isDayInTheString !== -1) {
      allDays === ''
        ? (allDays += 'Saturdays')
        : (allDays += ', ' + 'Saturdays');
    }
    isDayInTheString = stringToSearch.search('Sunday');
    if (isDayInTheString !== -1) {
      allDays === '' ? (allDays += 'Sundays') : (allDays += ', ' + 'Sundays');
    }
    if (allDays === '') allDays = 'No Days Data';
    // pushing the created string in the eventDays
    eventDays.push(allDays);
  };

  data.forEach(el => {
    const displayedDate = el.event.event_info1.course_inclass_dates;
    searchAndDisplayDays(displayedDate);
  });

  //end of fixing days data
  //=========================================================================================

  //Receiving the selected event from Event component

  const [clickedEvent, setClickedEvent] = React.useState(null);
  const [filteredEvent, setfilteredEvent] = React.useState(null);

  const receiveClickedEvent = clickedEventId => {
    setClickedEvent(clickedEventId);
    //filtering the clicked event
    setfilteredEvent(
      data.filter(e => {
        return e.event.id == clickedEventId;
      })
    );
  };

  //=========================================================================================
  return (
    <>
      {clickedEvent ? (
        <HeaderEventDetails onSendClickedEvent={receiveClickedEvent} />
      ) : (
        <Header />
      )}
      <Box sx={{ backgroundColor: '#F9F9F9', minHeight: '100vh' }}>
        <Container
          minwidth="xs"
          maxWidth="lg"
          sx={{
            paddingBottom: '80px',
            paddingTop: '120px',
          }}
        >
          {data.length === 0 && (
            <CircularProgress
              sx={{
                color: '#838992',
                marginLeft: '44%',
                marginTop: '50px',
              }}
            />
          )}
          {data.length === 0 && <Data onSendData={receiveData} />}
          {clickedEvent === null ? (
            <List>
              {data.length !== 0 &&
                data.map((el, index) => {
                  return (
                    <ListItem key={el.event.id}>
                      <Event
                        id={el.event.id}
                        title={el.event.title}
                        city={el.event.event_info1.course_inclass_city}
                        date={eventDays[index]}
                        onSendClickedEvent={receiveClickedEvent}
                      />
                    </ListItem>
                  );
                })}
            </List>
          ) : (
            <EventDetails filteredEvent={filteredEvent} />
          )}
        </Container>
      </Box>
      <BottomNav id={clickedEvent} onSendClickedEvent={receiveClickedEvent} />
    </>
  );
}
