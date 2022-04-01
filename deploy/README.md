1. На локальной машине генерируем закрытый и публичный ключ:
```bash
ssh-keygen -t rsa -b 4096 -N '' -f pipelines
```

2. Выполяем
Linux:
```bash
base64 -w 0 < pipelines
```
Mac OS X:
```bash
base64 < pipelines
```

и результат кладем в переменную окружения STAGE_SSH_KEY

3. Содержимое файла pipelines.pub добавляем в ~/.ssh/authorized_keys на удаленном хосте

4. Запускаем на локальной машине:
```bash
ssh-keyscan -t rsa server.example.com > my_known_hosts
```
Содержимое файла кладем в /deploy/known_hosts