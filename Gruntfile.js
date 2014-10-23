module.exports = function(grunt){
  grunt.initConfig({

    includereplace: {
		options: {
	    },
	    dist: {
	      src: '*.html',
	      dest: 'build/'
	    }
	   },

    less: {
      dist: {
        files: {
          'build/css/bootstrap.css': 'sources/less/bootstrap.less',
          'build/css/custom.css': 'sources/less/custom.less',
        }
      }
    },
	
    watch: {
      css: {
        files: ['sources/less/*.less', 'sources/mixins/*.less', 'sources/less/custom-*.less'],
        tasks: ['less'],
      },
      includereplace: {
        files: [ '*.html', 'includes/*.html' ],
        tasks: ['includereplace']
	   }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'build/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['includereplace', 'less', 'watch']);
  grunt.registerTask('production', ['includereplace', 'less', 'watch']);
}