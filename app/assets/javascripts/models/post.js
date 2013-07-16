App.Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  comments: DS.hasMany('App.Comment')
});