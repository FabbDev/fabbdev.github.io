## Requirements

- `docker` and `docker-compose`.

## Local development

From the project root run `docker-compose up`. This should build the site and
serve it at http://localhost:4000. It can take some time - wait until you see
```
site_1  |     Server address: http://0.0.0.0:4000
site_1  |   Server running... press ctrl-c to stop.
```
It seems to automatically rebuild the site on changes to the source. To stop
the server just press <kbd>Ctrl</kbd>+<kbd>C</kbd> on the docker compose output.
