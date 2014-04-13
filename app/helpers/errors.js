Ember.Handlebars.registerBoundHelper('errorsFor', function(object, key) {
  var errors = object.get('errors');
  if (errors && key) {
    errors = errors.errorsFor(key);
    if (errors) {
      return errors.mapBy('message').join(', ');
    }
  }
}, 'errors.isEmpty');
