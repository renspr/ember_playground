export default Ember.Route.extend({

  afterModel: function(model, transition, queryParams) {
    var _this = this;

    if (confirm('Really delete record?')) {
      model.deleteRecord();
      model.save().then(function() {
        /* nope */
      }, function(reason) {
        model.rollback();
      }).then(function() {
        _this.transitionTo('contacts');
      });
    } else {
      transition.abort();
    }
  }

});
