---
sidebar_position: 1
---

# Introduction

Welcome to the V3 External API documentation. The API is built in Rust on Actix Web and is currently in **active early-stage development** — the reference below covers what's live today and will grow as new resources ship.

:::warning Early Stage
This API is public and under active development. Endpoints, request/response shapes, and permission names may change without a deprecation period until the API reaches a stable release.
:::

## Base URL

```
https://v3-api.test.yukthi.net
```

:::warning Test Environment
This is a test environment and is not intended for production use. For production access, please contact us to obtain the correct base URL.
:::

## What's available today

- **[API Health](./api/health)** — an unauthenticated check that the API, database, and cache are all reachable
- **[Self](./api/self)** — inspect the organization and permissions tied to your API key, and refresh its cached session

## Authentication at a glance

Every protected endpoint expects an `X-API-Key` header. See the [Authentication](./authentication) guide for the full details, and [Who Am I](./api/self/who-am-i) to check what a key is allowed to do.

## What's coming next

A number of resource modules — domains, mailboxes, departments, identities, and organization management — are scaffolded in the API but not yet exposed publicly. They'll be documented here as they ship.

## Getting Started

1. **Check [API Health](./api/health)** to confirm you can reach the API
2. **Read [Authentication](./authentication)** to obtain and use your `X-API-Key`
3. **Call [Who Am I](./api/self/who-am-i)** to verify your key and see its permissions
