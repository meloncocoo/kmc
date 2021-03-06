/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

    app.import('vendor/jquery-mmenu/jquery-mmenu.css');
    app.import('vendor/jquery-mmenu/jquery.mmenu.min.js');
    app.import('bower_components/breakpoints.js/dist/breakpoints.js');
    app.import('vendor/bootstrap/bootstrap.js');

    // import datatables vendor
    app.import('vendor/datatables-bootstrap/dataTables.bootstrap.css');
    app.import('vendor/datatables-fixedheader/dataTables.fixedHeader.css');
    app.import('vendor/datatables-responsive/dataTables.responsive.css');
    app.import('vendor/datatables/jquery.dataTables.js');
    app.import('vendor/datatables-fixedheader/dataTables.fixedHeader.js');
    app.import('vendor/datatables-bootstrap/dataTables.bootstrap.js');
    app.import('vendor/datatables-responsive/dataTables.responsive.js');
    app.import('vendor/datatables-tabletools/dataTables.tableTools.js');

    return app.toTree();
};
