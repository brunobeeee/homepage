#!/bin/bash

# Read the username and hostname from the file user_hostname.txt
# NOTE: Normally I would use this path `./auth/user_hostname.txt` but since this script
# is called from another script, the path is relative to the other script
user_hostname=$(cat ./auth/user_hostname.txt)

# Directory path to the desired directory
directory_path="~"

# Establish SSH connection and execute the delete-command
ssh "$user_hostname" "cd $directory_path && find . -maxdepth 1 -not -path './logs' -not -path './.*' -not -name '.' -not -name '..' -exec rm -rf {} \;"

# SCP command to upload files from dist/ directory
scp -r dist/* "$user_hostname:$directory_path"