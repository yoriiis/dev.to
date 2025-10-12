# `npm-install`

The `npm-install` job installs the project's `node_modules` and automatically caches them in GitLab. The cache key is generated from the `${WORKING_DIRECTORY}/package-lock.json` file.

```yaml
npm-install:
  extends: .npm-install
```

Example usage with a parallel job to install `node_modules` in multiple directories:

```yaml
npm-install:
  extends: .npm-install
  variables:
    WORKING_DIRECTORY: ${directory}
  parallel:
    matrix:
      - { directory: '.' }
      - { directory: './demo' }
```
