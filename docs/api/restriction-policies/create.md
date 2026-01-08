# Create New Restriction Policy

This endpoint creates a new restriction policy in your organization.

## Endpoint

`POST /restriction-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/restriction-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "External Domain Restriction",
    "description": "Restrict emails to/from specific external domains",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "External Domain Restriction",
    "description": "Restrict emails to/from specific external domains",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the restriction policy
- `description` (optional): Description of what the restriction policy enforces
- `is_active` (optional): Whether the restriction policy is active (default: true)

## Response

Returns the created restriction policy object:

```json
{
    "id": "a7b8c9d0-e1f2-3456-0123-567890123456",
    "name": "External Domain Restriction",
    "description": "Restrict emails to/from specific external domains",
    "is_active": true,
    "created_at": "2025-06-25 14:10:00.000000+00",
    "updated_at": "2025-06-25 14:10:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create restriction policies
- Restriction policies control who can send and receive emails
