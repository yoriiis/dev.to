# `npm-unit-test`

The `npm-unit-test` job runs the unit test command.

> 💡 JUnit report (`junit.xml`) at the root of `$WORKING_DIRECTORY}` is automatically uploaded as artifact.

```yaml
npm-unit-test:
  extends: .npm-unit-test
  needs: [npm-install]
```

## Variables

`COMMAND`

Default value: `npm run test:unit`

Allows you to customize the unit test command.

```yaml
npm-unit-test:
  extends: .npm-unit-test
  needs: [npm-install]
  variables:
    COMMAND: 'npm run jest'
```
