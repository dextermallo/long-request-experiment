# long-request-experiment

## What Is This Repo For

This is a experiment repository for my Medium article -- [A mysterious bug with Nginx](https://dexter-chang.medium.com/a-mysterious-bug-with-nginx-7e19d3d4eea9), which is to reproduce an issue while I was using Nginx with a long request, for the details, please see my article.
## Prerequisite

- Docker
- Node.js (if you want to run server locally)

## How To Run The Server Locally

```sh
npm i
npm run build
npm run start
```

## How To Run With Docker
```sh
docker compose build
docker compose up
```