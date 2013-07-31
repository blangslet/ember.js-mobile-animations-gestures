App.RealTimeGraphView = Ember.View.extend({
  templateName: 'real_time_graph',

  mouseMove: function(event) {
    var mouseDistance = 0;
    var mousex = event.pageX;
    var mousey = event.pageY;
    mouseDistance += Math.max( Math.abs(mousex), Math.abs(mousey) );
    this.set('controller.mouseDistance', mouseDistance);
  },
  touchMove: function(event) {
    event.preventDefault();
    this.mouseMove(App.normalizeTouchEvent(event));
  }
});