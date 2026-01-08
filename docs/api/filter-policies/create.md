# Create Filter Policy

This endpoint creates a new filter policy in your organization.

## Endpoint

`POST /filter-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/filter-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Spam Filter Policy",
    "description": "Block known spam and malicious content",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Spam Filter Policy",
    "description": "Block known spam and malicious content",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the filter policy
- `description` (optional): Description of what the filter policy does
- `is_active` (optional): Whether the filter policy is active (default: true)

## Response

Returns the created filter policy object:

```json
{
    "id": "d4e5f6a7-b8c9-0123-def0-234567890123",
    "name": "Spam Filter Policy",
    "description": "Block known spam and malicious content",
    "is_active": true,
    "created_at": "2025-09-12 11:30:00.000000+00",
    "updated_at": "2025-09-12 11:30:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create filter policies
- Filter policies can be assigned to domains to control email filtering
