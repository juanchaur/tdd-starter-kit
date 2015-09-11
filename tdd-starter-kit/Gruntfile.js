/* jshint node: true */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: [
				'Gruntfile.js',
				'lib/**/*.js',
				'spec/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		jasmine: {
			pivotal: {

				src: 'app/src/**/*.js',
				options: {
					specs: 'app/test/**/*.spec.js',
					version: '2.0.1'
				}
			}
		},

		watch: {
			files: [
				'app/src/**/*.js',
				'app/test/**/*.spec.js'
			],
			task: ['test']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine')


	grunt.registerTask('test', ['jshint', 'jasmine'])
};
