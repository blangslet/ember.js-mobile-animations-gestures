App.SparklineView = Ember.View.extend({
    classNames: ['sparkline'],
    data: [1,2],
    didInsertElement: function() {
      this.sample();
    },
    sample: function() {
      var nextSample = Ember.run.later(this, function() {
        var data=this.get('data');
        this.$().attr('values', data);
        this.$().sparkline(data, {type:"line", barWidth:"5", lineWidth:"2", width:"100", lineColor:"#0d77b6", fillColor:"#80B9DB", highlightLineColor:"#afdefa", spotRadius:"5", width:"300", height:"60"});
        var mouseDistance = this.get('controller.mouseDistance');
        //data.shift drops the first array object if array length >9
        if (data.length > 15) {
          data.shift();
        }
        data.push(mouseDistance);
        this.sample();
      }, 300);
      this.set('nextSample', nextSample);
    },
    willDestroyElement: function() {
      var nextSample = this.get('nextSample');
      Ember.run.cancel(nextSample);
    }
});