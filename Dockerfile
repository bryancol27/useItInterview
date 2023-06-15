# Base build
FROM node:18-alpine3.17 as builder

WORKDIR /app

COPY package.json package-lock.json angular.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copiar los archivos estáticos de la etapa de compilación
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
