# `create-tag`

The `create-tag` job creates a new Git tag.
The version number is automatically extracted from the `package.json` file.

```yaml
create-tag:
  extends: .create-tag
  needs: [npm-publish]
```

## Required variables

`GITLAB_TOKEN`

A Project Access Token or Personal Access Token with permission to create tags and push to the repository.
It must be defined as a CI/CD variable in the project settings.

## Trigger rules

- The job runs **only** on the main branch
