function UsersList(config) {
  var template = `
    ul.list-group
      each user in users
        li.list-group-item #[h4 #{ user.name }]
          select.form-control
            option(value='0' selected='true') -- Select --
            each office in offices
              option(value=office.id) #{ office.address }
          div.form-group
            button.btn.btn-warning.btn-sm Remove User
  `;

  var container = $(config.id);
  container.on('click', '.btn-warning', function() {
    config.onDelete($(this).attr('data-id'));
  });
  container.on('change', 'select', function() {
    var $this = $(this);
    config.onChange({
      id: $this.attr('data-user-id')*1,
      officeId: $this.val() ? $this.val()*1 : null
    });
  });

  container.empty();
  var $html = $(template);
  container.html($html);
}
