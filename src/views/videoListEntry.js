var VideoListEntryView = Backbone.View.extend({
	initialise : function () {
		this.model.on('change',this.render, this)
	},

  render: function() {
  	console.log('inside render view movie ')
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
