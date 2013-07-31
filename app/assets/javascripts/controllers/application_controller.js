App.ApplicationController = Em.Controller.extend({
  menuVisible: false,
   pushBody: function() {
    if (this.get('menuVisible')){
      return $('.ember-application').addClass('push-right');
    }
    $('body').removeClass('push-right');
   }
});
