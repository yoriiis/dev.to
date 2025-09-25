# `retry`

Add a retry link to the Danger comment to retry the latest Danger pipeline if errors or warnign are displayed.

⚠️ This import must be placed at the end

## Installation

**Dangerfile**

```ruby
danger.import_dangerfile(
  gitlab: 'danger',
  branch: 'main',
  path: 'danger/retry/Dangerfile'
)
```
