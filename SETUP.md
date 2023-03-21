## Wymagania

- Docker
- Yarn v1
- ngrok

### Krok 1

Bardzo dobry opis konfiguracji Auth0 jest [tutaj](https://github.com/auth0/nextjs-auth0#auth0-configuration).

lub

możesz również skonfigurować projekt przy pomocy konfiguracji przygotowanej przez nas (zalecane):

##### Utworzenie aplikacji auth0

1. [Auth0 Dashboard](https://manage.auth0.com/dashboard) -> Applications -> Applications -> Create Application -> Single Page Web Applications (Nazwa dowolna)

2. Settings -> Applications URls
   Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
   Allowed Logout URLs: `http://localhost:3000/`

3. Zapisz zmiany

4. [Auth0 Dashboard](https://manage.auth0.com/dashboard) -> Applications -> APIs -> Create API (Nazwa dowolna)

5. Identifier: `http://localhost:4000/graphql`

##### Konfiguracja GH (utworzenie aplikacji w GH)

1. [Github developer settings](https://github.com/settings/developers) -> OAuth Apps -> New OAuth App (nazwa dowolna)

2. Hompage URL: Domain z auth0 (`https://yourdomain.auth0.com`)
   Authorization callback URL: Domain z auth0 (`https://yourdomain.auth0.com/login/callback`)

3. Register application

4. Generate a new client secret (zapisz go, bo będzie potrzebny w następnym kroku)

##### Włączenie logowania za pomocą GH

1.  [Auth0 Dashboard](https://manage.auth0.com/dashboard) -> Authentication -> Social -> Create Connection -> GitHub
    (uzupełnić danymi z aplikacji dodanej w poprzednim kroku https://github.com/settings/developers)
    Client ID: Client ID z GH
    Client Secret: Client Secret z GH
    Zapisz zmiany (Create)

2.  [Auth0 Dashboard](https://manage.auth0.com/dashboard) -> Applications -> Applications -> Your Single Page Web Application -> Connections
    Włącz GitHub

##### Konfiguracja .env

`apps/api/.env`

```bash
PORT=4000 # Można użyć innego portu

DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/api # Postgres URL

AUTH0_DOMAIN=yourdomain.auth0.com # Twoja domena z auth0, trzeba podmienić

BASE_URL=http://localhost:4000 # URL do backendu

NODE_ENV="development"

WEBHOOK_SECRET=randowmowy-string
```

`apps/web/.env`

```bash
NEXT_PUBLIC_GRAPH_API_URI=http://localhost:4000/graphql # URL do graphql backendu

AUTH0_SECRET=randowmowy-string

AUTH0_BASE_URL=http://localhost:3000 # URL do frontendu

AUTH0_ISSUER_BASE_URL=yourdomain.auth0.com # Twoja domena z auth0, trzeba podmienić

AUTH0_CLIENT_ID= # Client ID z auth0 (twoja aplikacja -> settings -> basic information)

AUTH0_CLIENT_SECRET= # Client Secret z auth0 (twoja aplikacja -> settings -> basic information)
```

Stringi do AUTH0_SECRET i WEBHOOK_SECRET można wygenerować za pomocą skryptu:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

### Krok 2

Oprócz tego będziesz potrzebował skonfigurowanego flow logowania, żeby informacje o logowaniu/rejestracji były przekazywane do twojej aplikacji.

[Auth0 Dashboard](https://manage.auth0.com/dashboard) -> Actions -> Flows -> Login -> [+] -> Build custom

Skopiuj tam zawartość pliku `apps/api/login_action.ts`

W dependencies dodaj wymagane dla snippetu zależności. (Dependencies i Secrets są dostępne w sidebarze po lewej stronie)

W secrets dodaj `WEBHOOK_SECRET`, który ma być taki sam jak ten użyty w `apps/api/.env`
Tak utworzoną akcję przeciągnij pomiędzy do flow logowania pomiędzy `Start` a `Complete`.

Zauważ, że w kodzie tej akcji znajduje się zmienna `domain` w której znajduje się adres webhooka. Aby testować lokalnie należy tam wrzucić adres np. z ngroka uzyskany przy pomocy komendy:

```bash
ngrok http PORT
# PORT to port backendu np. 4000
```

### Krok 3

Instalacja paczek i uruchomienie projektu wykorzystując yarn:

```bash
  cd start-coding
  yarn
  yarn dev
```
