App.PostsIndexRoute = Em.Route.extend({

  model: function() {
      return App.Post.find();
  }
});
