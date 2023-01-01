# Vegalore: Backend

## Directory

```bash
cd backend
```

## Install the Backend dependencies

```bash
npm install
```

## Run the Backend in development mode

Standalone:

```bash
./start
```

Dockerized:

```bash
docker-compose up -d backend
```

The API is available at [http://localhost:4000/](http://localhost:4000/).

## Build the Backend

```bash
npm run build
```

## Run the Backend in production mode

Note: If you run it locally, you'll have to manually set the required environment variables.

```bash
npm run production
```
