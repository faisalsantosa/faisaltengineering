////////////////////////////////
// Setup
////////////////////////////////

// Gulp and package
const { src, dest, parallel, series, watch } = require("gulp");

// Plugins
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

/* for development */
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
/* js babel */
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

/* .env TODO: read the file */
const dotenv = /* read the .env file */
const productionMode = /* missing code */

// Paths TODO: with proper path
const paths = {
  css:  ``,
  sass: ``,
  js: ``,

};

////////////////////////////////
// Tasks (Complete the missing parts)
////////////////////////////////

// JavaScript Task (Complete the missing code)
function scripts() {
  return /* use project.js for starting */(`${paths.js}/project.js`)
    .transform( /* TODO Fill in missing transformation */ )
    .bundle()
    .pipe(source("project.js"))
    .pipe(buffer())
    .pipe(plumber())
    .pipe(gulpif(!productionMode, sourcemaps.init({ loadMaps: true })))
    .pipe( /* TODO Minify JavaScript */ )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpif(!productionMode, sourcemaps.write("./")))
    .pipe(dest(paths.js));
}

// SCSS Task (Complete the missing code)
function styles() {
  const processCss = [
    autoprefixer(),
  ]; 

  const minifyCss = [
    cssnano({ preset: "default" }), // minify result
  ];

  return src(`${paths.sass}/project.scss`)
    .pipe(gulpif(!productionMode, sourcemaps.init()))
    .pipe(plumber())
    .pipe(postcss(processCss))
    .pipe(postcss(minifyCss))
    .pipe(gulpif(!productionMode, sourcemaps.write("./")))
    .pipe(dest(paths.css));
}

// Watch Task (Optional Bonus Question)
function watchPaths() {
  watch( /* Watch SCSS files for changes */ , styles);
  watch( /* Watch JavaScript files for changes */ , scripts);
}


// Generate all assets
const generateAssets = parallel(styles, scripts);

exports.default = series(generateAssets, watchPaths);
