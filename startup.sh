#!/usr/bin/env sh

mysqld --user=mysql &
node src/index.js
