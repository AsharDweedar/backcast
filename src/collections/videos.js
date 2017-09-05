var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function(datumArrOfObj) {
    this.on('change', this.select, this);
  }

});
