'use strict';

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt){
  // var centralServerIp = grunt.option('serverIP');
  // console.log(centralServerIp);
  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          'app/**/*.js'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      server: {
        proxies: [
          {
            context: ['/sphero', '/rccar', '/pi'],
            host: '192.168.0.2',
            port: 8080
          }
        ]
      },
      livereload: {
        options: {
          open: true,
          base: [
            './'
          ],
          middleware: function (connect) {
            return [
              proxySnippet,
              mountFolder(connect, './')
            ];
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [
    'configureProxies:server',
    'connect:livereload',
    'watch'
  ]);
};
