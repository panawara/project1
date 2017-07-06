
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'style.sass',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'style.css': 'style.sass'
                }
            }
        },
        browserSync: {
    		bsFiles: {
        		src : 'style.sass'
    		},
    		options: {
        		server: {
            			baseDir: "./"
        			}
    			}
		}
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};