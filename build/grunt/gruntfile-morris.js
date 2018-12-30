module.exports = function(grunt) {
     
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        uglify: {
          options: {
            banner: '/* <%= pkg.description %> ' +
                '(<%= grunt.template.today("yyyy-mm-dd") %>) ' +
                '(c) 2014 - <%= grunt.template.today("yyyy") %> Enterprise Blocks, Inc. ' +
                'License details : <%= pkg.license %> */'
            },
            dist: {
            files: {
                '../lib/eb-morris.min.js': ['../../plugins/eb-morris.js']
            }
          }
        }
        
    });
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['uglify']);
 
};