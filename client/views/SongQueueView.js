// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  className: "songQueueView",

  initialize: function() {
    var self = this;
    this.render();

    this.collection.on('add', function(song) {
      self.$el.append(new SongQueueEntryView({model: song}).render());
    });

    this.collection.on('remove', function(song) {
      //Is there a better, more model-driven way to remove the song from
      //the DOM queue? Other than self.render()?
      // self.$el.find('tr:first-of-type').remove(); works but clunky
      self.render()
    })


  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    //This doesn't really make sense cuz we always start up with an empty SongQueue
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

})
