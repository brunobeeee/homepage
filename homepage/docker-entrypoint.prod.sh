#!/bin/sh

# Get credentials from .env.prod
username="$FTP_USERNAME"
password="$FTP_PASSWORD"
servername="$FTP_SERVERNAME"
uploaddir="$FTP_UPLOADDIR"

echo "Username: $username"
echo "Servername: $servername"
echo "Uploaddir: $uploaddir"

echo
echo "Connect to ftp server"
lftp -u "$username","$password" ftp://$servername:21 << EOF
cd $uploaddir

# Delete all files in $uploaddir
rm -r .
cd ..

# Upload files from dist/
mirror -R dist/. $uploaddir/
EOF

echo "Finished upload"
