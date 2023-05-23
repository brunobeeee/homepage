# Homepage
===
My first attempt of a small homepage w/ name and recent jobs.

## Next Steps:
- move Favicon slightly towards the bottom
- (major) Replace the "Meine Referenzen" button with a big scrollable landing page



# Docker Dev Environment & Docker-Compose
===
There are 3 Docker related files in this repository to enroll a fully functioning developement environment inside a Docker container. You have the choice between two options for this task.

## Docker DevEnv (recommended)
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to 'Dev Environments -> Create' and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. It should load a private SSH-Key named "ionos" from your `~/.ssh/` folder into `auth/` inside your container and autmatically add it to the SSH-Keychain inside the container. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code` which is seemingly the default for this kind of thing.

## Docker-Compose
You can archieve a similar experience when cloning the repository to your local drive and executing `docker-compose up -d`. Note that whith this approach the directory where all the repository content gets loaded in is `/usr/src/app`.



# Cheat-Sheet
===

## Distribution:
Build and deploy with
```bash
npm run build
```
This automatically builds the project. It also deletes all files on the server provided in `auth/user_hostname.txt` and uploads the new ones. Note that this file is not provided in the repository for privacy reasons.

## Reload `node_modules/`
```bash
npm install
```

## Reinstall Parcel
```bash
npm uninstall parcel
npm install --save-dev parcel
```
