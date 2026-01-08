# Create New Disclaimer

This endpoint creates a new disclaimer message in your organization.

## Endpoint

`POST /disclaimers/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/disclaimers/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Legal Disclaimer",
    "message": "This email and any attachments are confidential and may be privileged.",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Legal Disclaimer",
    "message": "This email and any attachments are confidential and may be privileged.",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the disclaimer
- `message` (required): The disclaimer text to be appended to emails
- `is_active` (optional): Whether the disclaimer is active (default: true)

## Response

Returns the created disclaimer object:

```json
{
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "name": "Legal Disclaimer",
    "message": "This email and any attachments are confidential and may be privileged.",
    "is_active": true,
    "created_at": "2025-11-15 09:45:00.000000+00",
    "updated_at": "2025-11-15 09:45:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create disclaimers
- The disclaimer will be automatically appended to outgoing emails from domains where it is assigned
