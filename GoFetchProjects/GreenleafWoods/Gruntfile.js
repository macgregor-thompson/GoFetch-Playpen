/*
 * Generated on 2015-09-28
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        config: {
            src: 'src',
            dist: 'dist'
        },

        watch: {
            assemble: {
                files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml,css,js}'],
                tasks: ['copy','assemble']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.dist %>/{,*/}*.html',
                    '<%= config.dist %>/assets/{,*/}*.css',
                    '<%= config.dist %>/assets/{,*/}*.js',
                    '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        /*    connect: {
         options: {
         port: 9000,
         livereload: 35729,
         // change this to '0.0.0.0' to access the server from outside
         hostname: 'localhost'
         },
         livereload: {
         options: {
         open: true,
         base: [
         '<%= config.dist %>'
         ]
         }
         }
         },*/

        assemble: {
            pages: {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>/assets',
                    layout: '<%= config.src %>/templates/layouts/default.hbs',
                    data: '<%= config.src %>/data/*.{json,yml}',
                    partials: '<%= config.src %>/templates/partials/**/*.hbs',
                    plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
                    collections: [
                        {
                            title: 'pages',
                            sortorder: 'asc'
                        }
                    ],
                    sitemap: {
                        homepage: 'http://www.chimexmpp.com',
                        changefreq: 'weekly',
                        priority: '1.0',
                        /*exclude: ['download, all-charts-and-reports'],*/
                        relativedist: '/'
                    }
                },
                files: {
                    '<%= config.dist %>/': ['<%= config.src %>/templates/pages/**/*.hbs']
                }
            }/*,

            tacticalPages: {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>/assets',
                    layout: '<%= config.src %>/templates/layouts/default.hbs',
                    data: '<%= config.src %>/data/!*.{json,yml}',
                    partials: '<%= config.src %>/templates/partials/!**!/!*.hbs',
                    plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap']
                },
                files: {
                    '<%= config.dist %>/': ['<%= config.src %>/templates/tacticalPages/!*.hbs']
                }
            }*/
        },

        copy: {
            theme: {
                expand: true,
                cwd: 'src/assets/',
                src: '**',
                dest: '<%= config.dist %>/assets/css/'
            },
            images: {
                expand: true,
                cwd: 'img/',
                src: '**',
                dest: '<%= config.dist %>/assets/img/'
            },
            js: {
                expand: true,
                cwd: 'js',
                src: '**',
                dest: '<%= config.dist %>/assets/js/'
            },
            resources: {
                expand: true,
                cwd: 'resources',
                src: '**',
                dest: '<%=config.dist %>/assets/resources/'
            },
            favicon: {
                src: 'src/favicon.ico',
                dest: '<%= config.dist %>/'
            },
            styles: {
                expand: true,
                cwd: 'css',
                src: '**',
                dest: '<%= config.dist %>/assets/css'
            },
            fonts: {
                expand: true,
                cwd: 'fonts',
                src: '**',
                dest: '<%= config.dist %>/assets/fonts'
            }
        },

        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: [
                    'W001',//missing utf-8 meta tag
                    'W002',//IE compatibility meta tag
                    'W003',//missing viewport meta tag (responsiveness)
                    'W005',//Missing jQuery
                    'E001'//missing !doctype

                ]
            },
            files: ['<%= config.src %>/templates/{pages,lync,partials,releasenotes,tacticalPages}/*hbs'/*, '<%= config.dist %>*!//!*.hbs','<%= config.dist %>/releaseNotes*!//!*.hbs','<%= config.dist %>/lync*!//!*.hbs'*/]
        },

        // Before generating any new files,
        // remove any previously-created files.
        clean: ['<%= config.dist %>/**/*.{html,xml}']
    });

    grunt.loadNpmTasks('assemble');

    grunt.loadNpmTasks('bootlint');

    grunt.registerTask('server', [
        'build',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy',
        'assemble'
    ]);

    grunt.registerTask('default', [
        'build', 'bootlint'
    ]);
};
