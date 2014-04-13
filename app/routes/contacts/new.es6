import ResourceRoute from 'app/mixins/resource-route';

export default Ember.Route.extend(ResourceRoute, {
  model: function() {
    return this.store.createRecord('contact')
  },

  actions: {
    save: function(contact) {
      var _this = this;
      contact.save().then(function() {
        _this.transitionTo('contacts');
      }, function(reason) {
        /* nope */
      });
    }
  }
});
