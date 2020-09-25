const browserSync = require('browser-sync').create();

const port = process.env.PORT || '4444';
const host = process.env.HOST || '127.0.0.1';

browserSync.init({
    server: {
        baseDir: __dirname,
        index: 'app/index.html'
    },
    files: ['app/**/*.js'],
    port: port
});