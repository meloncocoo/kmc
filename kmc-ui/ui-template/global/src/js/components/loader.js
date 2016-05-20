$.components.register("loader", {
	api: function() {
		$(document).on('click.site.loader', '[data-plugin="loader"]', function(e) {
			e.preventDefault();
			var $this = $(this);
			var api = $this.data('loader-api');
			var callback = $this.data('loadCallback');
			
			if ($.isFunction(window[callback])) {
				api.load(window[callback]);
			} else {
				api.load();
			}
		});
	},
	init: function(context) {
		$('[data-plugin="loader"]', context).each(function() {
			var $this = $(this);
			var isLoading = false;
			var $loading;
			var $target = $("body");
			var self = this;

			var api = {
				load: function(callback) {
					var type = $this.data('load-type');
					if (!type) {
						type = 'blue-only';
					}
					
					$loading = $('<div class="loader-loading">' +
    		            '<div class="loader-wrapper active">' +
    		            '<div class="loader-layer loader-' + type + '">' +
    		            '<div class="loader-circle-left">' +
    		            '<div class="circle"></div>' +
    		            '</div>' +
    		            '<div class="loader-circle-gap"></div>' +
    		            '<div class="loader-circle-right">' +
    		            '<div class="circle"></div>' +
    		            '</div>' +
    		            '</div>' +
    		            '</div>' +
    		            '</div>');
					
					$loading.appendTo($target);
					$target.addClass('is-loading');
					$this.trigger('loading.site.loader');
					isLoading = true;

					var href, url = $this.data('loadTarget') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
					var holder = $this.data('loadHolder');
					
					$.get(url).then($.proxy(function(html) {
						$(holder).html(html);
						if ($.isFunction(callback)) {
							callback.call(self, this.done);
							return;
						}

						this.done();
					}, this), $.proxy(function() {
						this.done();
					}, this));
				},
				done: function(callback) {
					if (isLoading === true) {
						$loading.remove();
						$target.removeClass("is-loading");
						$this.trigger("loading.done.site.loader");
					}
				}
			};
			
			$this.data('loader-api', api);
		});
	}
});