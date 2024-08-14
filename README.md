# ATC Dream Match

Bienvenido a **ATC Dream Match**, una aplicación web que te permite crear y gestionar dos equipos de fútbol con tus jugadores favoritos. Esta aplicación está desarrollada con Next.js, TypeScript y Tailwind CSS.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) (para ejecutar la aplicación en un contenedor)
- [Node.js](https://nodejs.org/) (para desarrollo y pruebas locales)

## Instalación

### Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git https://github.com/Lisandrocba/challenge-ATC-
cd challenge-ATC-
```

### Instalación de dependencias

```bash
npm install
```

### Ejecución local

Para ejecutar la aplicación localmente, utiliza los siguientes comandos:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000.

### Docker

Para construir y ejecutar la aplicación utilizando Docker, sigue estos pasos:

Construcción de la imagen Docker:

```bash
docker build -t atc-dream-match .
```

Ejecuta el contenedor con el siguiente comando:

```bash
docker run -p 3000:3000 atc-dream-match
```

### Configuración

La aplicacion utiliza dos variables de entorno las cuales son las siguiente:
-NEXT_PUBLIC_API_BASE_URL=https://apiv3.apifootball.com
-NEXT_PUBLIC_API_KEY

la api key se puede generar en el siguiente enlace:

https://apifootball.com/

