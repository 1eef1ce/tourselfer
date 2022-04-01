#!/bin/bash

cd "/home/ubuntu/docker/"

git fetch --all
git reset --hard origin/dev

sudo docker-compose up -d --build --force-recreate --renew-anon-volumes