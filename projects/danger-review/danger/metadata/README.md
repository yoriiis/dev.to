# `metadata`

## Rules

- [Error]: Merge request title must contain a Jira ticket (rule name: `jira-ticket-required`)
- [Warning]: Merge request title should be less than 72 characters
- [Error]: Merge request must have assignees
- [Error]: Merge request must have reviewers if marked as ready

### Rule deactivation

Rules with the rule name can be ignored with adding the following text in the merge request desrciption.

```text
[danger-disable: <rule_name>]
```

> :bulb: Ignore multiple rules with `[danger-disable: <rule_name>, <rule_name>]`

## Installation

**Dangerfile**

```ruby
danger.import_dangerfile(
  gitlab: 'danger',
  branch: 'main',
  path: 'danger/metadata/Dangerfile'
)
```
