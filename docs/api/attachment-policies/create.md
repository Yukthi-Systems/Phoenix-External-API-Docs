# Create New Attachment Policy

This endpoint creates a new attachment policy in your organization.

## Endpoint

`POST /attachment-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/attachment-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Executable File Block Policy",
    "description": "Block executable files and potentially dangerous attachments",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Executable File Block Policy",
    "description": "Block executable files and potentially dangerous attachments",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the attachment policy
- `description` (optional): Description of what the attachment policy does
- `is_active` (optional): Whether the attachment policy is active (default: true)

## Response

Returns the created attachment policy object:

```json
{
    "id": "f6a7b8c9-d0e1-2345-f012-456789012345",
    "name": "Executable File Block Policy",
    "description": "Block executable files and potentially dangerous attachments",
    "is_active": true,
    "created_at": "2025-07-18 15:40:00.000000+00",
    "updated_at": "2025-07-18 15:40:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create attachment policies
- Attachment policies can be assigned to domains to control file attachments
