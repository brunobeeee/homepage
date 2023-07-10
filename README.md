# Homepage
My first attempt of a small homepage w/ name and recent jobs.

## Next Steps:
- add a paralax like effect for the 3 cv cards (seems to be harden than I thought)



# Docker Dev Environment & Docker-Compose
There are 3 Docker related files in this repository to enroll a fully functioning developement environment inside a Docker container. You have the choice between two options for this task.

## 1. Docker DevEnv (recommended)
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to 'Dev Environments -> Create' and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code` which is seemingly the default for this kind of thing.

## 2. Docker-Compose
You can archieve a similar experience when cloning the repository to your local drive and executing `docker-compose up -d`. But I find it a bit useless because the development part happens on the host system. E.g. when I run `npm run build` it uses the npm installed on my host. For development you would want to run the commands *inside* the container which can be archieved with the first method.



# Parcel Dev Server
It is highly recommended to start a Parcel dev server inside the docker container to view changes on your on the website in real time. Run this command:
```bash
npm run dev
```
To view this open `http://localhost:1234` in your browser.


# Cheat-Sheet

## Distribution:
### Build with
```bash
npm run build
```
(outputs all files compressed in `dist/`)

### Build and deploy (auto upload to my github.io)
```bash
npm run deploy
```
This automatically builds the project and pushes the output to my github page github.com/brunobeeee/brunobeeee.github.io.

## Load all `node_modules/`
```bash
npm install
```

## Reinstall Parcel
```bash
npm uninstall parcel
npm install --save-dev parcel
```
