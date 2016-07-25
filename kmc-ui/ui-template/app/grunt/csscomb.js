module.exports = function () {
  "use strict";

  return {
    options: {
      config: '<%= config.source.less %>/.csscomb.json'
    },
    css: {
      expand: true,
      cwd: '<%= config.destination.css %>',
      src: ['**/*.css', '!**/*.min.css'],
      dest: '<%= config.destination.css %>/'
    },
    skins: {
      expand: true,
      cwd: '<%= config.destination.skins %>',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.destination.skins %>'
    },
    site: {
      expand: true,
      cwd: '<%= config.destination.site %>',
      src: ['**/*.css', '!**/*.min.css'],
      dest: '<%= config.destination.site %>'
    }
  };
};
