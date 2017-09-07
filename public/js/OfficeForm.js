function OfficeForm(config) { // passing in the config object
  var container = $(config.id);

  var template = `
    h2 Offices
      div#officeForm.well
        div.form-group
          input#pac-input.form-control(name='name' placeholder='Enter a location...' type='text' autocomplete='off')
  `; // pug

  var $html = $(template);
  var element = $html.find('[name="name"]');

  var autocomplete = new google.maps.places.Autocomplete(element[0]);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    config.onSave({
      name: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  });

  $html.on('click', 'button', function() {
    var input = container.find('[name="name"]');
    config.onSave({
      name: input.val()
    });
  });

  container.empty();
  container.append($html);
}
