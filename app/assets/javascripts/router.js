App.Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
   });

  this.route('realTimeGraph');

});