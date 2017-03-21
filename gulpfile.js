var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    minifycss=require("gulp-clean-css"),
    imagemin = require('gulp-imagemin');


//将less自动编译成css
gulp.task('less' ,function() {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'))
        .pipe(minifycss());   //执行压缩
});


gulp.task("watchFiles", function(){
    gulp.watch('./less/*.less', ['less']);
});

//压缩js
gulp.task('script',function(){
    gulp.src("./js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});

//压缩css
gulp.task('minifycss', function() {
    gulp.src('./less/*.less')      //压缩的文件
        .pipe(gulp.dest('./build/css'))   //输出文件夹
        .pipe(minifycss())   //执行压缩
});

//压缩图片
gulp.task('testimagin',function(){
    gulp.src('./img/*.*')
        .pipe(gulp.dest('./build/img'))
        .pipe(imagemin({
            progressive: true
        }))
});


gulp.task("default", ['less', "watchFiles","script","minifycss","testimagin"]);
