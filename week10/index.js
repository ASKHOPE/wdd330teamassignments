import { getJSON, getLocation } from "./utilities.js";
const baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

  function testGetQuakesForLocation() {
  // call the getLocation function to get the lat/long
  const getLoca = (getLocation);
  // use that information to build out the correct URL
 // const geoUrl = baseUrl + // add location information here
  // use the url to request the correct quakes 
  const geoUrl = baseUrl + getLoca // add location information here
    // console.log(getLoca);
  //log out the quakes for now.
}

testGetQuakesForLocation();
//getQuakesForLocation();

// console.log("geoUrl");    



//TEST CODE FOR LOCATION REQUEST
// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);