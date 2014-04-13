var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  // location: 'history'
});

Router.map(function() {
  this.resource('contacts', { path: '/contacts' }, function() {
    this.route('new');
    this.route('edit',   { path: ':contact_id/edit'   })
    this.route('delete', { path: ':contact_id/delete' })
  });
  this.route('about')
});

export default Router;
