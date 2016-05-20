module.exports = function() {
	"use strict";

	return {
		options: {
			force: true
		},
		html : '<%= config.html %>',
		css : '<%= config.destination.css %>',
		js : '<%= config.destination.js %>',
		skins : '<%= config.destination.skins %>/**/*.css',
		site : [ '<%= config.destination.site %>/css/**/*.css', '<%= config.destination.site %>/js/**/*.js' ]
	};
};
