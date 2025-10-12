# `npm-publish`

The `npm-publish` job executes the NPM publish command to deploy the package to the AWS CodeArtifact registry.

```yaml
npm-publish:
  extends: .npm-publish
  needs: [npm-build, npm-qa, npm-unit-test]
```

## Trigger rules

- The job runs **only** on the main branch
- The job is manual
