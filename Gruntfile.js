'use strict';
// http://culttt.com/2013/11/18/setting-sass-grunt/
module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'nested'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
              files: ['scss/*.scss'],
              tasks: ['sass:dist']
            },
            html: {
                files: ['*.html']
            }
        } // watch
    });
   grunt.registerTask('default', ['watch']);
};