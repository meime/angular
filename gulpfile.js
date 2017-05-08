var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('proxy-middleware'); 
var modRewrite = require('connect-modrewrite');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify'); 
var host = "http://bjp2p.kfxfd.cn:9080";

//js文件压缩
gulp.task('script', function(){
  gulp.src(['app/components/*/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js'))
});
//less编译
gulp.task('less', function () {
    gulp.src('app/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/styles'))
        .pipe(livereload())
});

//监控
gulp.task('watch', ['less'], function () {
    gulp.watch('app/styles/*.less', ['less']);
});

//启动项目
gulp.task('connect', function () {
	connect.server({
		root: './app',
		port: 8010,
		livereload: false,
		middleware: function (connect, o) {
			return [
				(function () {
					var url = require('url');
					var proxy = require('proxy-middleware');
					var options = url.parse(host + '/P2PSystem');
					options.route = '/P2PSystem';
					return proxy(options);
				})(),
				modRewrite([
					'!\\.html|\\.js|\\.css|\\.swf|\\.jp(e?)g|\\.png|\\.gif|\\.eot|\\.woff|\\.ttf|\\.svg$ /index.html'
				])
			];
		}
	});
});
gulp.task('dev', ['less', 'connect', 'script','watch']);