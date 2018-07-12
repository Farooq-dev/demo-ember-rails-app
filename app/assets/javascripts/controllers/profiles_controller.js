App.ProfilesController = Ember.ArrayController.extend({
  itemController: 'profile',
  sortProperties: ['id'],
  actions: {
    createProfile: function() {
      var controller = this;
      var name = this.get('newName') || '';
      var email = this.get('newEmail') || '';
      var upworkName = this.get('newUpwork') || '';
      var message = this.get('newMessage') || '';
      $.post('/api/profiles.json', { profile: { name: name, email: email, message: message, upwork_name: upworkName } })
      .done( function(response) {
        controller.store.push('profile', response.profile);
        controller.set('newName', '');
        controller.set('newEmail', '');
        controller.set('newUpwork', '');
        controller.set('newMessage', '');
      })
      .fail( function(xhr, textStatus, errorThrown) {
        var errors = $.parseJSON(xhr.responseText).errors
        controller.set('errors', errors);
        controller.send('displayErrors');
      });
    }
  }
});
