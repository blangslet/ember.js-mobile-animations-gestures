App.PostsIndexView = Ember.View.extend({
  templateName: 'posts_index',

  swipeOptions: {
      direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
      cancelPeriod: 100,
      swipeThreshold: 10
    },

    touchMove: function(event) {
      event.preventDefault();
    },

    swipeEnd: function(recognizer, evt) {
      var direction = recognizer.get('swipeDirection');

      if (direction === Em.OneGestureDirection.Right) {
        this.get('controller').send('goToPostsFromMenu');
      } else if (direction === Em.OneGestureDirection.Left) {
        this.get('controller').send('toggleMenu');
      }
    }
});