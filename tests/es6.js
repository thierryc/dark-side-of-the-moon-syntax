import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';

import { randomNum, mult } from 'multiply';

console.log(randomNum()); // Displays random number.
console.log(mult(2, 5)); // 10

// TODO: To do it !
/**
*
* long comment !
*
**/
let toto, tutu;

if (toto == tutu) {

}

const lessIncludes = [path.join(__dirname, 'layout', 'includes')];

gulp.task('less', () => {
  return gulp.src('./layout/**/*.less')
    .pipe(less({
      paths: lessIncludes
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['less']);
