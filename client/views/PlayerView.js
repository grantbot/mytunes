// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay></audio>',

  initialize: function() {
    var self = this;

    //So our visualizer can grab the audio element
    this.el.id = 'music';

    this.$el.on('ended', function() {
      self.trigger('ended', self);
    });

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },




});
