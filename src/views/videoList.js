var VideoListView = Backbone.View.extend({
	initialise: function (exampleVideoData) {
		console.log('init of VideoListView',this.get('collection'))
		this.collection.on('select', this.render , this)
		this.render();
	},


  render: function() {
  	 console.log('render inside video list view')
    
    this.$el = $('.list');
    this.$el.text('');
    //this.$el.children().detach();
    //this.$el.html(this.template());
    this.collection.forEach(this.renderMovie , this);
    return this;
  },
  renderMovie: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },
  template: templateURL('src/templates/videoList.html')

});
