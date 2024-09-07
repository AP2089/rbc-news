# RBC news

## Установка зависимостей

```sh
# Установка пакетов
npm install

# Установка pre-commit
npm run prepare
```

## Переменные окружения

```dotenv
# Текущее окружение
APP_ENV=local
# Хост приложения
APP_HOST=127.0.0.1
# Порт приложения
APP_PORT=3000
# Url приложения
APP_URL=http://${APP_HOST}:${APP_PORT}
# Url для обращения к API
APP_URL_API=http://static.feed.rbc.ru
# Поддерживаемые языки
APP_LOCALES=ru
# Язык по умолчанию
APP_DEFAULT_LOCALE=ru
```

## Запуск в development режиме

```sh
# Запуск с hot-reload на APP_URL
npm run dev
```

## Запуск в production режиме

```sh
# Сборка приложения
npm run build

# Запуск на APP_URL
npm run preview
```
