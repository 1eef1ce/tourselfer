# Запуск приложения локально

## Подготовительные работы
1. Скачиваем и устанавливаем Docker on Desktop по ссылке https://docs.docker.com/desktop/windows/install/
2. Переходим через shell в директорию, в которую склонирован репозиторий, запускаем команду:
```bash
docker-compose up -d --build --force-recreate --renew-anon-volumes
```

## API документация
Актуальная API-дока находится здесь https://api.stage1.test.tourselfer.tech/api/documentation