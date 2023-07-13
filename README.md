# Homepage
A small homepage with contact details and recent jobs.

## Next Steps:
- add a paralax like effect for the 3 cv cards (seems to be harden than I thought)



# Docker Dev Environment & Docker-Compose
There are 3 Docker related files in this repository to enroll a fully functioning developement environment inside a Docker container. You have the choice between two options for this task.

## 1. Docker DevEnv (recommended)
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to 'Dev Environments -> Create' and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code` inside the container.

## 2. Native
You can also just clone this repository on your machine and run `npm install` locally.



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

## Load all `node_modules/`
```bash
npm install
```

## Reinstall Parcel
```bash
npm uninstall parcel
npm install --save-dev parcel
```
