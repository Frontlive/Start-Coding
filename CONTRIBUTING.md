# Contributor guidelines

Na początek zalecamy zajrzeć [opisu projektu](https://github.com/Frontlive/Start-Coding/wiki/Opis-projektu). Wszelkie taski i aktualny progres jest do znalezienia [tutaj](https://github.com/orgs/Frontlive/projects/2). Jeśli nie czujesz się gotowy na kontrybucję kodu, to nie ma problemu! Możesz również podzielić się swoimi pomysłami lub uwagami jako [dyskusje](https://github.com/Frontlive/Start-Coding/discussions/categories/pomys%C5%82y) lub [issues](https://github.com/Frontlive/Start-Coding/issues).

## Co muszę wiedzieć, aby kontrybuować?

Jeśli chcesz pomóc w kontrybucji kodu do naszego projektu, używamy następujących technologii:

#### Frontend

- NextJS
- TypeScript
- TCSS + Radix
- ContextAPI + useContextSelector
- Jest + RTL
- Apollo

#### Backend

- Yoga + GraphQL + Nexus
- PostgreSQL
- Jest + Supertest
- Prisma

#### Monorepo

- Turborepo

## Jak mogę wnieść swój wkład?

Nigdy nie wnosiliście wkładu do projektu open source? Zastanawiasz się, jak to działa w naszym projekcie? Oto krótkie omówienie:

1. Znajdź zadanie, które chcesz wykonać. [Lista zadań](https://github.com/orgs/Frontlive/projects/2), [lista issues](https://github.com/Frontlive/Start-Coding/issues).
2. Sforkuj repozytorium związane z problemem do Twojej lokalnej organizacji GitHub. Oznacza to, że będziesz miał kopię repozytorium pod **twoja-nazwa-użytkownika-Github/Start-Coding**.
3. Sklonuj repozytorium na swój lokalną maszynę, używając polecenia:
   `git clone https://github.com/Frontlive/Start-Coding.git`
   lub przy pomocy SSH:
   `git clone git@github.com:Frontlive/Start-Coding.git`
4. Przejdź przez proces konfiguracji projektu, zgodnie z instrukcjami w pliku SETUP.md.
5. Utwórz nową gałąź dla swojej poprawki, używając polecenia:
   `git checkout -b nazwa-gałęzi`
   [Jak tworzyć dobre nazwy branchy](https://github.com/mbiesiad/git-style-guide/tree/pl_PL#ga%C5%82%C4%99zie).
6. Wykonaj odpowiednie zmiany dla problemu, który próbujesz rozwiązać lub funkcji, którą chcesz dodać.
7. Użyj `git add wstaw-ścieżki-zmienionych-plików-tutaj`, aby dodać zawartość zmienionych plików do "snapshota".
8. Użyj `git commit -m "Wstaw krótki opis wprowadzonych zmian tutaj"`, aby przechowywać zawartość indeksu z opisową wiadomością.
   [Zalecamy używać conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
9. Wypchnij zmiany do zdalnego repozytorium za pomocą `git push origin nazwa-gałęzi-tutaj`.
10. Prześlij pull request do repozytorium nadrzędnego (Kliknij `Contribute` na swoim sforkowanym repozytorium).
11. Nadaj pull requestowi tytuł z krótkim opisem wprowadzonych zmian i numerem problemu lub błędu związanego z Twoją zmianą. Na przykład, można zatytułować pull requseta w następujący sposób: **Added more log outputting to resolve #4352**
12. W opisie zgłoszenia (pull request), wyjaśnij zmiany, które wprowadziłeś, ewentualne problemy związane ze zgłoszeniem, które zauważyłeś oraz pytania, jakie masz dla utrzymującego projekt. Jeśli twoje zgłoszenie nie jest idealne (żadne zgłoszenie nie jest!), recenzent będzie mógł pomóc Ci rozwiązać problemy i poprawić je.
13. Poczekaj na review pull requesta przez utrzymującego projekt.
14. Dokonaj zmian w pull requesta, jeśli recenzujący to zaleca.
15. Ciesz się swoim sukcesem po tym, jak twoje zgłoszenie zostanie zmergowane :)

## Gdzie mogę szukać pomocy?

Jeśli potrzebujesz pomocy, zapraszamy do kontaktu na naszym [Discordzie](https://discord.gg/frontlive) na kanale **chat**.

Na koniec uprzejmie prosimy o zachowanie odpowiedniego zachowania w komunikacji z innymi członkami społeczności tj. wyrażanie się do wszystkich z szacunkiem i uprzejmością, w końcu wszyscy tu jesteśmy po to, aby się uczyć i pomóc sobie nawzajem.
