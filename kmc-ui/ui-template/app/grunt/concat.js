module.exports = function (grunt) {
  "use strict";

  return {
    options: {
      banner: '<%= banner %>',
      stripBanners: false
    },
    js: {
      expand: true,
      cwd: '<%= config.source.js %>',
      src: ['**/*.js'],
      dest: '<%= config.destination.js %>',
    },
    site: {
      expand: true,
      cwd: '<%= config.source.site %>/js',
      src: ['**/*.js'],
      dest: '<%= config.destination.site %>/js',
    }
  };
};
