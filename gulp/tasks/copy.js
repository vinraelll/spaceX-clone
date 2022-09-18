// Получаем доступ к исходным файлам, копируем их в папку build
export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}