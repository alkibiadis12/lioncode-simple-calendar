import React from 'react';

export default function Data(props) {
  React.useEffect(() => {
    //IIFE
    (async function () {
      try {
        const response = await fetch(
          'http://testlc.lncdoo.com/api/myprofile/events'
        );
        //catch error 404
        if (!response.ok) throw new Error('Problem getting events.');
        const data = await response.json();
        //filtering data
        const filteredData = data.data.filter(e => e?.is_inclass);
        //Passing Data to Display component
        props.onSendData(filteredData);
      } catch (err) {
        // TODO:
        //HAVE TO DISPLAY THE ERROR
        console.error(`${err} 💥💥💥`);
      }
    })();
  }, []);

  return <></>;
}
