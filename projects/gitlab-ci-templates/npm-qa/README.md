# `npm-qa`

The `npm-qa` job runs a QA command (e.g., linting or static analysis).

```yaml
npm-qa:
  extends: .npm-qa
  needs: [npm-install]
```

## Variables

`COMMAND`

Default value: `npm run test:qa`

Allows you to customize the QA command.

```yaml
npm-qa:
  extends: .npm-qa
  needs: [npm-install]
  variables:
    COMMAND: 'npm run qa'
```
