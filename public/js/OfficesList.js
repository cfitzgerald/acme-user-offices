// from tripplanner-live-ui
function OfficesList(config) { // passing in the config object
  // console.log('config = ', config);
  var template = `
    ul.list-group
      each office in offices
        li.list-group-item #[h4 #{ office.address }]
          div.office-location
            h5 lat: #{ office.lat }
            h5 lng: #{ office.lng }
          div.office-users
            if office.users.length === 1
              label.label.label-default #{ office.users.length } User
            else
              label.label.label-default #{ office.users.length } Users
          div.form-group
            button.btn.btn-warning.btn-sm.pull-right(data-id=office.id) Delete Office
            br
  `;
  var container = $(config.id);
  container.empty();

  var $html = $(template);

  $html.on('click', '.btn-warning', function() {
    config.onDelete($(this).attr('data-id'));
  });

  container.html($html);
}
