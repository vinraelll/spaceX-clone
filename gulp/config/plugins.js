import replace from 'gulp-replace' // поиск и замена
import plumber from 'gulp-plumber' // обработка ошибок
import notify from 'gulp-notify' // сообщения (подсказки)
import browsersync from 'browser-sync' // локальный сервер
import newer from 'gulp-newer' // проверкао обновления
import ifPlugin from 'gulp-if' // условное ветвление

// экспорт объекта
export const plugins = {
  replace,
  plumber,
  notify,
  browsersync,
  newer,
  ifPlugin
}