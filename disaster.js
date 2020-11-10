const fetchUrl = require('fetch').fetchUrl;

function getDisasterEvents() {
  fetchUrl(`https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=11`, (error, meta, body) => {
     
      const disasters = JSON.parse(body);
      console.log(disasters.events);
    }
  )
}

getDisasterEvents();