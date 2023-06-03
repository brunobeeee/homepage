#!/bin/bash

npm install

npm run build

echo "starting dev server"
exec npx parcel src/index.html
