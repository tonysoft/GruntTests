module.exports = function (grunt) {
	var config = {
		dirName: 'calculator',
		fileName: ''
	};

	grunt.initConfig({
		config: config,
		uglify: {
			dist: {
				files: {
					'<%= config.dirName %>.min.js': ['<%= config.dirName %>/*.js']
				},
				options: {
					banner: '/* This is my minified app, built <%= grunt.template.today() %> */\n',
					footer: '\n/* This is the end */'
				}
			},
			single: {
				files: {
					'<%= config.fileName %>.min.js': ['<%= config.dirName %>/<%= config.fileName %>.js']
				},
				options: {
					banner: '/* This is my minified file, built <%= grunt.template.today() %> */\n',
					footer: '\n/* This is the end */'
				}
			}
		},
		watch: {
			files: ['calculator/*.js'],
			tasks: ['uglify:dist']
		}
	});
	require("matchdep").filter('grunt-*').forEach(grunt.loadNpmTasks);
	require("matchdep").filterDev('grunt-*').forEach(grunt.loadNpmTasks);
		// above takes place of: grunt.loadNpmTasks('grunt-*');
		// for EACH Dependency and Dev Dependency

	grunt.registerTask('processAndWatch', [
		'uglify:dist',
		'watch'
	]);
	grunt.registerTask('default', [
		'processAndWatch'
	]);

	grunt.registerTask('minOneTask', [
		'uglify:single'
	]);

	grunt.registerTask('minOne', 'minify a single JS file', function(fileName) {
		config.fileName = fileName;
		grunt.task.run('minOneTask');
	});
};