var VideoListView = Backbone.View.extend({
	initialise: function (exampleVideoData) {
		
		this.listenTo( this.collection , 'sync', this.render);
		this.collection.on('change', this.render , this);
	},


  render: function() {
  	 console.log('render inside video list view')
    this.$el = $(this.el);
    this.$el.html('');
    this.collection.forEach(this.renderMovie , this);
    return this;
  },
  renderMovie: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },
  template: templateURL('src/templates/videoList.html')

});
