# Create New Forwarding Policy

This endpoint creates a new forwarding policy in your organization.

## Endpoint

`POST /forwarding-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/forwarding-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the forwarding policy
- `description` (optional): Description of what the forwarding policy does
- `is_active` (optional): Whether the forwarding policy is active (default: true)

## Response

Returns the created forwarding policy object:

```json
{
    "id": "b8c9d0e1-f2a3-4567-1234-678901234567",
    "name": "Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager",
    "is_active": true,
    "created_at": "2025-05-30 09:25:00.000000+00",
    "updated_at": "2025-05-30 09:25:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create forwarding policies
- Forwarding policies control automatic email forwarding behavior
