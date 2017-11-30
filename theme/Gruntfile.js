module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourceMap: false,
                    outputStyle: 'compressed',
                },
                files: {
                    'source/css/theme.css': 'source/css/theme.scss',
                }
            }
        },
        sass_globbing: {
            dist: {
                files: {
                    'source/css/theme.scss': 'source/scss/**/*.scss',
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'source/css/theme.css': 'source/css/theme.css'
                }
            }
        },
        watch: {
            css: {
                files: 'source/scss/**/*.scss',
                tasks: ['sass_globbing', 'sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('build', ['sass_globbing', 'sass', 'autoprefixer']);
    grunt.registerTask('default', ['watch']);
}