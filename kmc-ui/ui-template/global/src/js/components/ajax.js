$.components.register("ajax", {
    defaults: {
    },
    init: function(context) {
    },
    api: function() {
    	$(document).on('click.site.ajax', '[data-plugin="ajax"]', function(e) {
    	    e.preventDefault();
    	    var $this = $(this);
    	    var href, url = $(this).attr('data-target') || (href = $(this).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
    	    var successEvent = $.Event('success.site.ajax', {
    	    	relatedTarget: $this[0]
    	    });
    	    var failureEvent = $.Event('failure.site.ajax', {
    	    	relatedTarget: $this[0]
    	    });
    	    $.get(url).then(function() {
        		$this.trigger(successEvent);
    	    }, function() {
        		$this.trigger(failureEvent);
    	    });
    	});
    }
});