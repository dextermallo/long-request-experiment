FROM node:latest

WORKDIR /
COPY package.json ./
RUN npm install

ENV NODE_ENV=development
ENV PORT=3000
EXPOSE 3000

CMD ["node", "./dist/app.js"]
