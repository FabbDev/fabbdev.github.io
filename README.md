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

### Example page for styling

If you navigate to `/styleguide` there's an example page for testing styling. Update it as you see fit.

## Troubleshooting

If you get the following message either set the `origin` remote to GitHub or
follow the instructions in the message.

```
site_1  |    GitHub Metadata: Error processing value 'title':
site_1  |   Liquid Exception: No repo name found. Specify using PAGES_REPO_NWO environment variables, 'repository' in your configuration, or set up an 'origin' git remote pointing to your github.com repository. in /_layouts/default.html
site_1  |              ERROR: YOUR SITE COULD NOT BE BUILT:
site_1  |                     ------------------------------------
site_1  |                     No repo name found. Specify using PAGES_REPO_NWO environment variables, 'repository' in your configuration, or set up an 'origin' git remote pointing to your github.com repository.
```
