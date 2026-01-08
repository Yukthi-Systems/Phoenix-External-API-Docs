# Create New Caution

This endpoint creates a new caution message in your organization.

## Endpoint

`POST /cautions/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/cautions/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "External Email Warning",
    "message": "CAUTION: This email originated from outside the organization.",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "External Email Warning",
    "message": "CAUTION: This email originated from outside the organization.",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the caution message
- `message` (required): The caution text to be displayed
- `is_active` (optional): Whether the caution is active (default: true)

## Response

Returns the created caution object:

```json
{
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "External Email Warning",
    "message": "CAUTION: This email originated from outside the organization.",
    "is_active": true,
    "created_at": "2025-11-20 14:30:00.000000+00",
    "updated_at": "2025-11-20 14:30:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create cautions
- The caution message will be displayed to users based on your configuration
