#!/bin/bash

# Copy all files from dist to my github.io website repository.
cd /deploy/brunobeeee.github.io
git pull
cp -r /com.docker.devenvironments.code/dist/* .

# push to master branch
git add --all
git commit -m "automatic upload"
git push -u origin main