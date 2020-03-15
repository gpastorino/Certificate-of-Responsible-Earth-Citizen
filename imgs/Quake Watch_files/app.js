// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";




$(document).ready(function() {
  console.log("Let's get coding!");

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.78, lng: -122.44},
    });

  const onSuccess = response => {
    const features = response.features;  //which is made up and which are the main core of this tool?
    console.log(features);

  features.forEach(earthquake => {
    const title = earthquake.properties.title; //the names
    console.log(earthquake.properties.title);

    const template = `<p>${title}</p>`;  //append the <p>
    $(`#info`).append(template);

    let latitude = earthquake.geometry.coordinates[1];
    let longitude = earthquake.geometry.coordinates[0];

    var myLatLng = {lat: latitude, lng: longitude};


    //new is generating a new marker.  
    // var image = 'https://git.generalassemb.ly/SF-SEI-7/jquery-geoquakes-lab/blob/master/images/earthquake.png';

    var image = {
      url: "https://git.generalassemb.ly/SF-SEI-7/jquery-geoquakes-lab/blob/master/images/earthquake.png", // url
      scaleSize: new google.maps.Size(25, 25), // scaled size
      size: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
  };
  
    new google.maps.Marker({
      position: myLatLng,
      title: title,
      map: map,
      icon: image
    })
    //create an array to store the values, and show the array.  
  });

  // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  // var beachMarker = new google.maps.Marker({
  //   position: {lat: -33.890, lng: 151.274},
  //   map: map,
  //   icon: image
  // });
};

//separate 
  $.ajax({
    method: 'GET',
    url: `http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson`,
    success: onSuccess,  //res is for results or response. 
    error: error => console.log({error}),
  });
});
