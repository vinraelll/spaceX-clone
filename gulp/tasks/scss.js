import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css' // сжатие CSS файла
import webpcss from 'gulp-webpcss' // вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.replace(/@scss\//g, '../css/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.ifPlugin(app.isBuild, groupCssMediaQueries()))
    .pipe(app.plugins.ifPlugin(app.isBuild, webpcss(
      {
        webpClass: '.webp',
        noWebpClass: '.no-webp'
      }
    )))
    .pipe(app.plugins.ifPlugin(app.isBuild, autoprefixer({
      grid: true,
      overrideBrowserlist: ['last 3 versions'],
      cascade: true
    })))
    // Раскомментировать если нужен не сжатая копия файла CSS
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.ifPlugin(app.isBuild, cleanCss()))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}