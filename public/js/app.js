$(function () {

  // // This example requires the Places library. Include the libraries=places
  // // parameter when you first load the API. For example:
  // // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  // function initMap() {
  //   // get the HTML input element for the autocomplete search box
  //   var input = document.getElementById('pac-input');
  //   // create the autocomplete object
  //   var autocomplete = new google.maps.places.Autocomplete(input);

  //   // add a listener
  //   autocomplete.addListener('place_changed', function() {
  //     // get the place details from the autocomplete object
  //     var place = autocomplete.getPlace();
  //     if (!place.geometry) {
  //       // User entered the name of a Place that was not suggested and
  //       // pressed the Enter key, or the Place Details request failed.
  //       window.alert("No details available for input: '" + place.name + "'");
  //       return;
  //     }

  //     // console.log('place = ', place);
  //     // name
  //     // geometry -> location -> lat
  //     // geometry -> location -> lng
  //     var address = place.name;
  //     var lat = place.geometry.location.lat;
  //     var lng = place.geometry.location.lng;

  //     $.post('/offices', {
  //       address,
  //       lat,
  //       lng,
  //     })

  //   });
  // }

  function renderOfficeForm() {
    OfficeForm({
      id: '#officeForm',
      onSave: function(office) {
        // console.log('onSave office = ', office);
        $.post('/offices', office)
          .then(function() {
            renderOfficesList();
            renderOfficeForm();
            renderUsersList();
          });
      }
    });
  }

  function renderOfficesList() {
    $.get('/offices')
      .then(function(offices) {
        OfficesList({
          id: '#officesList',
          offices: offices,
          onDelete: function(id) {
            $.ajax({
              url: `/offices/${ id }`,
              method: 'DELETE'
            })
            .then( () => {
              renderOfficesList();
              renderUsersList();
            });
          }
        });
      });
  }

  function renderUserForm() {
    UserForm({
      id: '#userForm',
      onSave: function(user) {
        // console.log('onSave user = ', user);
        $.post('/users', user)
          .then(function() {
            renderUsersList();
            renderUserForm();
          });
      }
    });
  }

  function renderUsersList() {
    return Promise.all([
      $.get('/users'),
      $.get('/offices')
    ])
      .then(function(result) {
        // console.log('renderUsersList() result = ', result);
        var offices = result[1];
        var users = result[0];
        UsersList({
          id: '#usersList',
          users: users,
          offices: offices,
          onDelete: function(id) {
            $.ajax({
              url: `/users/${ id }`,
              method: 'DELETE'
            })
            .then( () => {
              renderUsersList();
            });
          },
          onChange: function(user) {
            $.ajax({
              contentType: 'application/json',
              method: 'PUT',
              url: `/users/${ user.id }`,
              data: JSON.stringify(user)
            })
            .then(renderOfficesList);
          }
        });
      });
  }

  // call functions...
  // initMap();
  renderOfficeForm();
  renderUserForm();
  renderOfficesList();
  renderUsersList();
});
