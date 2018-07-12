App.ProfileController = Ember.ObjectController.extend({
  actions: {
    deleteProfile: function() {
      if(confirm('Are you sure?')) {
        var profile = this.get('model');
        profile.destroyRecord();
      }
    }
  }
});
