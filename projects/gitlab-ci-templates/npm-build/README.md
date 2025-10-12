# `npm-build`

The `npm-build` job executes a build command.

```yaml
npm-build:
  extends: .npm-build
  needs: [npm-install]
```

## Variables

`COMMAND`

Default value: `npm run build`

Allows you to customize the build command.

```yaml
npm-build:
  extends: .npm-build
  needs: [npm-install]
  variables:
    COMMAND: 'npm run build-prod'
```
