# Fetch One Attachment Policy

This endpoint retrieves detailed information about a specific attachment policy.

## Endpoint

`GET /attachment-policies/detail/{policy_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/attachment-policies/detail/f6a7b8c9-d0e1-2345-f012-456789012345' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the attachment policy to retrieve

## Response

Returns detailed information about the specified attachment policy:

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

## Response Fields

- `id`: Unique identifier for the attachment policy
- `name`: Name of the attachment policy
- `description`: Description of what the attachment policy does
- `is_active`: Whether the attachment policy is currently active
- `created_at`: Timestamp when the attachment policy was created
- `updated_at`: Timestamp when the attachment policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view attachment policies
- Returns 404 if attachment policy not found
