var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(datumArrOfObj) {
    this.collection.on('change', this.render)
  },


  render: function() {
  	console.log('render of AppView');
  	this.$el.html(this.template());
    new VideoListView({
    	el: $('.list'),
    	collection: this.collection
    }).render();
  },
/*
  render: function() {
    this.$el.html(this.template());
    return this;
  },
*/
  template: templateURL('src/templates/app.html')

});
