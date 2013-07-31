// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require vendor/jquery.sparkline.min
//= require ember
//= require ember-data
//= require vendor/ember-animated-outlet
//= require vendor/ember-touch
//= require vendor/ember-fastclick
//= require_self
//= require app
App = Ember.Application.create();

App.normalizeTouchEvent = function(event) {
    if (!event.touches) {
        event.touches = event.originalEvent.touches;
    }
    if (!event.pageX) {
        event.pageX = event.originalEvent.pageX;
    }
    if (!event.pageY) {
        event.pageY = event.originalEvent.pageY;
    }
    return event;
};

//= require_tree .
