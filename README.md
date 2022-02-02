# Запуск приложения локально

## Подготовительные работы
1. Скачиваем и устанавливаем Docker on Desktop по ссылке https://docs.docker.com/desktop/windows/install/
2. В корневой директории с проектом создаем разделы:
-
3. Переходим через shell в директорию, в которую склонирован репозиторий, запускаем команду:
```bash
docker-compose up -d --build --force-recreate --renew-anon-volumes
```