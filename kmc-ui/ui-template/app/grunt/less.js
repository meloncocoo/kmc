module.exports = function () {
  "use strict";

  return {
    options: {
      strictMath: false,
      paths: [
        '<%= config.source.less %>',
        '<%= config.global.less %>',
        '<%= config.bootstrap.less %>',
        '<%= config.bootstrap.mixins %>'
      ]
    },
    compileSite: {
      options: {
        strictMath: true
      },
      src: '<%= config.source.less %>/site.less',
      dest: '<%= config.destination.css %>/site.css'
    },
    skins: {
      options: {
        strictMath: true,
        paths: [
          '<%= config.source.skins %>/less',
          '<%= config.global.skins %>',
          '<%= config.source.less %>',
          '<%= config.global.less %>',
          '<%= config.bootstrap.less %>',
          '<%= config.bootstrap.mixins %>'
        ]
      },
      expand: true,
      cwd: '<%= config.source.skins %>',
      src: ['*.less'],
      dest: '<%= config.destination.skins %>',
      ext: '.css',
      extDot: 'last'
    },
    site: {
      expand: true,
      cwd: '<%= config.source.site %>/less',
      src: ['**/*.less'],
      dest: '<%= config.destination.site %>/css',
      ext: '.css',
      extDot: 'last'
    },
  };
};
