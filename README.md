# Start-Coding

Wiele początkujących czy nawet już bardziej zaawansowanych programistów zmaga się z problemem, gdzie nie mają pomysłu na jakieś ciekawe projekty. Szukają czegoś jak codewars, ale z bardziej praktycznymi zadaniami (np [Kodifaj Tasks](https://github.com/czechue/kodifaj-tasks)).

Naszym pomysłem jest stworzenie platformy Start-Coding, gdzie userzy mogliby wstawiać swoje własne pomysły na projekty po zatwierdzeniu oraz komentować i recenzować.

Więcej informacji o projekcie dostępnych jest w Wiki [tutaj](https://github.com/Frontlive/Start-Coding/wiki/Opis-projektu)

## Badges

[![Licencja MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Wymagania

- Docker
- Yarn v1

## Instalacja i uruchomienie

Wykorzystując yarn

```bash
  cd start-coding
  yarn
  yarn dev
```

## Zmienne środowiskowe

Żeby odpalić projekt, będziesz potrzebował następujących zmiennych. Bardzo dobry opis konfiguracji Auth0 jest [tutaj](https://github.com/auth0/nextjs-auth0#auth0-configuration)

### web

W pliku apps/web/.env

`NEXT_PUBLIC_GRAPH_API_URI=` <- URL backendu z suffixem /graphql
`AUTH0_SECRET=` <- twój wygenerowany secret
`AUTH0_BASE_URL=` <- base url twojej apki np. http://localhost:3000
`AUTH0_ISSUER_BASE_URL=` <- base URL z dashboardu Auth0
`AUTH0_CLIENT_ID=` <- CLIENT_ID z dashboardu Auth0
`AUTH0_CLIENT_SECRET=` <- CLIENT_SECRET z dashboardu Auth0

### api

W pliku apps/api/.env

`DATABASE_URL=` <- postgresql connection string
`PORT=` <- port na którym ma być odpalony serwer
`AUTH0_DOMAIN=` <- domena z dashboardu Auth0
`BASE_URL=` <- base URL backendu np. http://localhost:4000
`NODE_ENV="development"` <- ustawia środowisko na dev
`WEBHOOK_SECRET=` <- wygenerowany secret, musi być taki sam jak w akcji w panelu Auth0
`CLOUDINARY_URL=` <- cloudinary connection string

## Contributors

Projekt jest rozwijany dzięki tym wspaniałym ludziom:

<a href="https://github.com/frontlive/start-coding/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frontlive/start-coding" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
