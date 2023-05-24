# Homepage
My first attempt of a small homepage w/ name and recent jobs.

## Next Steps:
- (major) Replace the "Meine Referenzen" button with a big scrollable landing page



# Docker Dev Environment & Docker-Compose
There are 3 Docker related files in this repository to enroll a fully functioning developement environment inside a Docker container. You have the choice between two options for this task.

## 1. Docker DevEnv (recommended)
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to 'Dev Environments -> Create' and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. It should load a private SSH-Key named "ionos" from your `~/.ssh/` folder into `auth/` inside your container and which you have to manually add to the SSH keychain inside the container with `ssh-add auth/sshkey`. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code` which is seemingly the default for this kind of thing.

## 2. Docker-Compose
You can archieve a similar experience when cloning the repository to your local drive and executing `docker-compose up -d`. Note that whith this approach the directory where all the repository content gets loaded in is `/usr/src/app`.



# Parcel Dev Server
It is highly recommended to start a Parcel dev server inside the docker container to view changes on your on the website in real time. Run this command:
```bash
npx parcel src/index.html
```
To view this open `http://localhost:81` in your browser. I really don't know why Docker picks port 81, because I explicitely exposed port 80 in the `compose-dev.yaml`. But nvm it's working...


# Cheat-Sheet

## Distribution:
### Build with
```bash
npm run build
```
(output in `dist/`)

### Build and deploy (auto upload to my server) with
```bash
npm run build:deploy
```
This automatically builds the project. It also deletes all files on the server provided in `auth/user_hostname.txt` and uploads the new ones. Note that `auth/user_hostname.txt` is not provided in the repository for privacy reasons. You have to load it in manually and write the `user@domain.de` inside it.

## Reload `node_modules/`
```bash
npm install
```

## Reinstall Parcel
```bash
npm uninstall parcel
npm install --save-dev parcel
```
