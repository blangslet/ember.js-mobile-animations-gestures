App.ApplicationRoute = Em.Route.extend({
  events: {
    goToPost: function(post) {
      this.transitionToAnimated('post', {posts: 'slideLeft'}, post);
    },
    backToPosts: function() {
      this.transitionToAnimated('posts.index', {posts: 'slideRight'})
    }
  }
});
