# ¿Cómo correr el proyecto PROD?

Primero clona el proyecto.

## Tienes dos formas:

1. Docker
2. Manera tradicional

### Docker:

> Para docker solo ejecuta los siguientes comandos en la terminal (recuerda tener docker instalado)

```
// Construye las imagenes del docker compose:
docker-compose build
// Levanta los entornos locales:
docker-compose up
```

La aplicación estará en la ruta `http://localhost:8080/` y la fake API en `http://localhost:3000/users`.

### Manera tradicional:

-   Instala dependencias `npm i`
-   Instala json-server `npm install -g json-server`
-   Levanta la fake API `json-server --watch ./db/db.json`
-   Genera el build de la aplicación `npm run build`
-   Corre el HTML que quedo en la carpeta `./dist`

# UseItInterview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
