export default DS.Model.extend({
  contact: DS.belongsTo('contact'),
  number: DS.attr()
});
