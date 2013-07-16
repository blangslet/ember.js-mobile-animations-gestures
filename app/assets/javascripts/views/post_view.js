App.PostView = Ember.View.extend({
  templateName: 'post',

  swipeOptions: {
      direction: Em.OneGestureDirection.Right,
      cancelPeriod: 100,
      swipeThreshold: 10
    },

    touchMove: function(event) {
      event.preventDefault();
    },

    swipeEnd: function(recognizer, evt) {
      var direction = recognizer.get('swipeDirection');

      if (direction === Em.OneGestureDirection.Right) {
        this.get('controller').send('backToPosts')
      }
    }
});