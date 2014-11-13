// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('isPlayingSong', false);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      var isPlayingSong = this.get('isPlayingSong');

      if(!isPlayingSong){
        this.set('currentSong', song);
        this.set('isPlayingSong', true);
      } else {
        song.enqueue();
      }
    }, this);

//////////////////////
    var self = this;
    params.library.on('enqueue', function(song) {
      self.get('songQueue').add(song);
    });

  }

});

///Why is the model listening? isnt' the controller supposed to listen for user interactions?
