App.ProfilesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('profile');
  },
  actions: {
    displayErrors: function() {
      return this.render('errors', {
        into: 'profiles',
        outlet: 'errors'
      });
    }
  }
});
