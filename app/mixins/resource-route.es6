var ResourceRoute = Ember.Mixin.create({
  actions: {
    willTransition: function(transition) {
      var model = this.get('controller.model');
      if (model) {
        if (model.get('isDirty')) {
          if (confirm('You have unsaved changes. Abort?')) {
            model.rollback();
            return true;
          } else {
            transition.abort();
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }
});

export default ResourceRoute;
