---
sidebar_position: 2
---

# Authentication

All API requests require authentication using an API key.

## API Key Header

Include your API key in the `x-api-key` header:
```bash
curl -X GET "{{BASE_URL}}/endpoint" \
  -H "x-api-key: your-api-key-here"
```

## Verify Your API Key

Use the `/self/whoami` endpoint to verify your API key and check permissions:
```bash
curl -X GET "{{BASE_URL}}/self/whoami" \
  -H "x-api-key: your-api-key"
```

Response:
```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "permissions": [
    "domain:view",
    "mailbox:view"
  ]
}
```