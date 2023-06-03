#!/bin/bash

echo "npm install"
npm install

echo "starting dev server"
npx parcel src/index.html

# keep container running
tail -f /dev/null
