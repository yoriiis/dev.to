# `changelog`

## Rules

- [Error]: Changelog must be updated and contain a link to the merge request (rule name : `changelog-required`)

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
  path: 'danger/changelog/Dangerfile'
)
```
