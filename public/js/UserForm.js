function UserForm(config) { // passing in the config object
  // console.log('userForm config = ', config); // {id: "#userForm"}
  var container = $(config.id);
  // console.log('container = ', $container); // [div#userForm.well]

  var template = `
    div.form-group
      input.form-control(name='name' placeholder='Enter a name...')
    div.form-group
      button.btn.btn-primary.btn-sm Add User
  `; // pug

  container.empty();
  var $html = $(template);

  $html.on('click', 'button', function() {
    // console.log('add user CLICK! ->', this);
    var input = container.find('[name="name"]');
    console.log('container.find = ', input);
    config.onSave({
      name: input.val()
    });
  });

  container.append($html);
}
