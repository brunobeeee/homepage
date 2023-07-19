# Homepage
A small homepage with contact details and recent jobs.

## Getting started
You can start this project in two ways. Either with Docker-Compose or Docker Dev Environments in the desktop client.

### Docker-Compose (recommended)
Clone this Repository and start the container.
```
docker-compose up -d
```

Now you can open VSCode and connect to the container via the Remote-Container extension. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code`.

### Docker DevEnv
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to 'Dev Environments -> Create' and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code` inside the container.



## Parcel Dev Server
It is highly recommended to start a Parcel dev server inside the docker container to view changes on your on the website in real time. If you chose Docker-Compose this should run automatically. If you chose Docker DevEnv you have to start it manually.
```bash
npm run dev
```
To view it open `http://localhost:1234` in your browser.


## Cheat-Sheet

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
