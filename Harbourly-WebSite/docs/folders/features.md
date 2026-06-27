# `src/features`

Purpose: feature-based business modules.

Current features:

- `analytics`
- `requests`
- `services-catalog`
- `suppliers`

Data flow:

```text
components -> hooks -> services -> repository interface -> mock/http repository
```

Keep feature-specific types, schemas, services, hooks, repositories and business components inside the owning feature.
