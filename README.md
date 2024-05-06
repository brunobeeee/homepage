# Homepage
A small homepage with contact details and recent jobs.

## Getting started
Clone this Repository and start the dev container.
```
git clone git@github.com:brunobeeee/homepage.git
cd homepage
docker compose up -d
```

This starts a dev container with webserver on `localhost:1234`. You can attach to the container with:
```
docker compose exec homepage ash
```


### Parcel Dev Server
It is highly recommended to start a Parcel dev server inside the docker container to view changes on your on the website in real time on `http://localhost:1234`. If you use the Docker-Compose this should run automatically. If you use anything other than that you may have to start it manually.
```
npm run dev
```

## Production
This repo comes with a production container. It executes these steps:
1. Freshly `npm install` all node modules
2. Build & bundle the website into `dist`
3. Upload the bundle to a FTP server. The credentials have to be provided in `.env.prod`

To run this container execute
```
docker compose -f production.yml up --build
```
