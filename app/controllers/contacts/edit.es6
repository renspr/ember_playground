export default Ember.ObjectController.extend({

  hasErrors: function() {
    return !this.get('errors.isEmpty');
  }.property('errors.isEmpty')

});
