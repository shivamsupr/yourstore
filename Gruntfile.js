module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['src/static/application/js/app.js'],
                tasks: ['uglify']
            },
            css: {
                files: 'src/static/application/css/app.css',
                tasks: ['cssmin']
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                beautify: false,
                report: 'gzip, min',
                banner: '/*\n YourStore <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            dist: {
                files: {
                    'src/static/application/js/app.min.js': ['src/static/application/js/app.js']
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                banner: '/*\n YourStore <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            combine: {
                files: {
                    'src/static/application/css/app.min.css': 'src/static/application/css/app.css'
                }
            },
            minify: {
                expand: true,
                cwd: 'src/static/application/css',
                src: ['*.css', '!*.min.css'],
                dest: 'src/static/application/css',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};