var VideoListEntryView = Backbone.View.extend({
	initialise : function () {
		this.model.on('change',this.render, this);
	},

  render: function() {
  	console.log('inside render view movie ')
    //this.$el.append(this.template(this.model.attributes));
    this.$el.append(`<div class="video-list-entry media">
  <div class="media-left">
    <img class="media-object" src="${this.model.attributes.snippet.thumbnails.default.url}" />
  </div>
  <div class="media-body">
    <div class="video-list-entry-title" >${this.model.attributes.snippet.title}</div>
    <div class="video-list-entry-detail">${this.model.attributes.snippet.description}</div>
  </div>
</div>`);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});


