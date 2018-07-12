App.Router.map(function() {
  this.resource('profiles', { path: '/' });
  this.resource('profile', { path: '/profile/:profile_id' });
});
