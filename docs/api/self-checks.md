---
sidebar_position: 2
---

# Self Checks

Endpoints for verifying API key status and managing authentication cache.

## Check Status (Who Am I)

Verify your API key and retrieve organization information and permissions.

**Endpoint:** `GET /self/whoami`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/self/whoami" \
  -H "x-api-key: d9a23ac5-c6ce-46c8-8c06-ebe79bb1a8cc"
```

### Response

**Status:** 200 OK

```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "permissions": [
    "domain:view",
    "mailbox:view"
  ]
}
```

## Delete Cached API Key

Remove the API key from cache. Useful when permissions change or for troubleshooting.

**Endpoint:** `DELETE /self/cache`

**Authentication:** Required

### Request

```bash
curl -X DELETE "{{BASE_URL}}/self/cache" \
  -H "x-api-key: d9a23ac5-c6ce-46c8-8c06-ebe79bb1a8cc"
```

### Response

**Status:** 200 OK

```json
{
  "message": "API key cache entry deleted"
}
```

## Common Use Cases

- Verify API key validity before operations
- Check current permissions
- Force cache refresh after permission updates
- Debugging authentication issues