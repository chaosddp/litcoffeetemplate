var gulp = require("gulp");
var coffee = require("gulp-coffee");
var coffeelint = require("gulp-coffeelint");

gulp.task("compile", function(){
	
	gulp.src("*.litcoffee")
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest("./publish"))
	
});

gulp.task("lint", function(){
	
	gulp.src("*.litcoffee")
		.pipe(coffeelint())
		.pipe(coffeelint.reporter())
	
});

gulp.task("autolint", function(){
	
	gulp.watch("*.litcoffee", ["lint"])
	
});


gulp.task("default", function(){
	
	gulp.watch("*.litcoffee", ["compile"])
	
});