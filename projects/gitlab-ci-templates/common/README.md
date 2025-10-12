# `common.yaml`

The `common.yaml` file defines shared configuration and default behaviors for all templates.
It centralizes commonly used variables, caching strategies, and retry policies to ensure consistency across pipelines.

## Global variables

| Variable            | Default value    | Description                                               |
| ------------------- | ---------------- | --------------------------------------------------------- |
| `MAIN_BRANCH`       | `main`           | Defines the reference branch for rules and tag creation   |
| `NODE_IMAGE`        | `node:22-alpine` | Default Node.js image used by all jobs                    |
| `WORKING_DIRECTORY` | `./`             | Default working directory where NPM commands are executed |

## Default job configuration (`.default`)

All templates extend this base to ensure consistent CI behavior:

- Enables [FF_USE_FASTZIP](https://docs.gitlab.com/runner/configuration/feature-flags) for faster cache/artifact compression
- Sets jobs as `interruptible: true` to cancel obsolete pipelines
- Defines artifact expiration (`3 days`)
- Adds retry policy for runner and timeout failures

## NPM cache configuration (`.cache-npm`)

Provides reusable caching logic for Node.js dependencies:

```yaml
.cache-npm:
  cache:
    key:
      files:
        - ${WORKING_DIRECTORY}/package-lock.json
    paths:
      - ${WORKING_DIRECTORY}/node_modules
    policy: pull
```

Using this cache ensures faster pipelines and avoids redundant dependency installs across jobs.

> 💡 Templates like `npm-install`, `npm-build`, and `npm-test` automatically extend `.cache-npm` to benefit from caching.
