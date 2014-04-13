export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNumbers: DS.hasMany('phoneNumber', {async: true}),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
