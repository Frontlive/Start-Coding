Sczegółowa konfiguracja BackEndu Frontlive-Start-Coding

1. Utworzenie aplikacji auth0

   https://manage.auth0.com/dashboard/

   Applications -> Applications -> Create Application -> Single Page Web Applications (Nazwa dowolna)

   Settings -> Applications URls

   -> Allowed Callback URLs (np.: http://localhost:3000/api/auth/callback)

   -> Allowed Logout URLs (np.: http://localhost:3000/)
   Save Changes

   Applications -> APIs -> Create API (Nazwa dowolna)

   -> Identifier (np.: https://localhost:4000/graphql)


2. Konfiguracja GH (utworzenie aplikacji w GH)

   https://github.com/settings/developers

   OAuth Apps -> New OAuth App

   (nazwa dowolna)

   Hompage URL: Domain z auth0 (https://yourdomain.auth0.com)

   Authorization callback URL: Domain z auth0 (https://yourdomain.auth0.com/login/callback)

   Register application

   Generate a new client secret


3. Włączenie logowania za pomocą GH

   https://manage.auth0.com/dashboard/

   Applications -> Applications -> Single Page Web Applications -> Settings -> Connections -> Social

   Włącz GitHub

   (Jeżeli nie ma GitHuba w Social to trzeba dodać)
   Authentication -> Social -> Create Connection -> GitHub

   (uzupełnić danymi z https://github.com/settings/applications/)

   Client ID: Client ID z GH

   Client Secret: Client Secret z GH

   Save Changes


4. Konfiguracja .env

   api/.env

        PORT= (np.: „4000”)

        DATABASE_URL=posgress URL (np.: postgres://postgres:postgres@127.0.0.1:5432/api)

        AUTH0_DOMAIN=domena z auth0 (yourdomain.auth0.com)

        BASE_URL=url BE (np.: http://localhost:4000)

        NODE_ENV="development"

        WEBHOOK_SECRET=dowolny string

   web/.env

        NEXT_PUBLIC_GRAPH_API_URI= url do grqphql (np.: http://localhost:4000/graphql)

        AUTH0_SECRET=randomowy string

        AUTH0_BASE_URL=url aplikacji (np.: http://localhost:3000)

        AUTH0_ISSUER_BASE_URL=domena z auth0 (https://yourdomain.auth0.com)

        AUTH0_CLIENT_ID=Client ID z auth0 (aplikacja -> settings -> basic information)

        AUTH0_CLIENT_SECRET=Client Secret z auth0 (aplikacja -> settings -> basic information)