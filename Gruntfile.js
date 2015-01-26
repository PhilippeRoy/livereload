module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'              // Can be nested, compact, compressed, expanded.
        },
        files: {                         // Dictionary of files
          'style.css': 'style.scss'       // 'destination': 'source'
        }
      }
    },


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  // Default task(s).
  grunt.registerTask('default', ['watch']);


};
