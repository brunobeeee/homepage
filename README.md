# Homepage
A small homepage with contact details and recent jobs.

## Getting started
Clone this Repository and start the container.
```
git clone git@github.com:brunobeeee/homepage.git
cd homepage
docker-compose up -d
```

Now you can open VSCode and connect to the container via the Remote-Container extension. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code`.


## Parcel Dev Server
It is highly recommended to start a Parcel dev server inside the docker container to view changes on your on the website in real time on `http://localhost:1234`. If you use the Docker-Compose this should run automatically. If you use anything other than that you may have to start it manually.
```bash
npm run dev
```


## Cheat-Sheet

### Build with
```bash
npm run build
```
(outputs all files compressed in `dist/`)

## Setup project by loading all `node_modules/`
```bash
npm install
```

## Reinstall Parcel
This sometimes fixes bugs.
```bash
npm uninstall parcel
npm install --save-dev parcel
```
