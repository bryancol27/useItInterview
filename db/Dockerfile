FROM node:18-alpine3.17

RUN npm install -g json-server

WORKDIR /app

COPY db.json .

EXPOSE 3000

CMD json-server --watch db.json --port 3000 --host 0.0.0.0
