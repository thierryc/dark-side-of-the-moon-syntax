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

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9

function getKey(k) {
  return `a key named ${k}`;
}

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};

// good
function concatenateAll(...args) {
  return args.join('');
}

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number
}));
