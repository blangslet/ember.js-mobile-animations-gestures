App.Comment = DS.Model.extend({
  post: DS.belongsTo('App.Post'),
  text: DS.attr('string')
});