$(function () {

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  function initMap() {
    // get the HTML input element for the autocomplete search box
    var input = document.getElementById('pac-input');
    // create the autocomplete object
    var autocomplete = new google.maps.places.Autocomplete(input);

    // add a listener
    autocomplete.addListener('place_changed', function() {
      // get the place details from the autocomplete object
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // console.log('place = ', place);
      // name
      // geometry -> location -> lat
      // geometry -> location -> lng
      var address = place.name;
      var lat = place.geometry.location.lat;
      var lng = place.geometry.location.lng;

    });
  }

  function renderOfficeForm() {

  }

  function renderOfficesList() {

  }

  function renderUserForm() {

  }

  function renderUsersList() {

  }

  // call functions...
  initMap();

});
