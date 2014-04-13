import ResourceRoute from 'app/mixins/resource-route';

export default Ember.Route.extend(ResourceRoute, {
  actions: {
    save: function(contact) {
      var _this = this
      contact.save().then(function(value) {
        _this.transitionTo('contacts');
      }, function(reason) {
        /* nope */
      });
    }
  }
});
