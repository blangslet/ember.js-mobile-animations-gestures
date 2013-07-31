App.ApplicationRoute = Em.Route.extend({
  events: {
    goToPost: function(post) {
      this.transitionToAnimated('post', {posts: 'slideLeft'}, post);
    },
    backToPosts: function() {
      this.transitionToAnimated('posts.index', {posts: 'slideRight'})
    },
    toggleMenu: function() {
        this.controller.toggleProperty('menuVisible');
        this.controller.pushBody();
    },
    goToPostsFromMenu: function() {
      this.send('toggleMenu');
      this.transitionTo('posts.index');
    },
    goToRealTimeGraph: function() {
      this.send('toggleMenu');
      this.transitionTo('realTimeGraph');
    }
  }
});