/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'angular2-universal': 'node_modules/angular2-universal/dist/polyfills.js',
    'angular2-universal-polyfills': 'node_modules/angular2-universal-polyfills/dist/dev.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-universal': {defaultExtension: 'js'},
    'angular2-universal-polyfills': {defaultExtension: 'js'},
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
