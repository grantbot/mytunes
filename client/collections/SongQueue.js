// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.queue = [];

    //Listening to ended, remove a song from the queue, call its method

  },

  enqueue: function(song){
    this.queue.push(song);
    console.log(this.queue);
  },

  dequeue: function(){
    var result = this.queue.shift();
    return result;
  }

});
