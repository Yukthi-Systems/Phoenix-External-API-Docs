# Update Attachment Policy

This endpoint updates an existing attachment policy.

## Endpoint

`PUT /attachment-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/attachment-policies/update/f6a7b8c9-d0e1-2345-f012-456789012345' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Enhanced Executable Block Policy",
    "description": "Block executable files, scripts, and potentially dangerous attachments with enhanced detection",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the attachment policy to update

## Request Body

```json
{
    "name": "Enhanced Executable Block Policy",
    "description": "Block executable files, scripts, and potentially dangerous attachments with enhanced detection",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the attachment policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the attachment policy is active

## Response

Returns the updated attachment policy object:

```json
{
    "id": "f6a7b8c9-d0e1-2345-f012-456789012345",
    "name": "Enhanced Executable Block Policy",
    "description": "Block executable files, scripts, and potentially dangerous attachments with enhanced detection",
    "is_active": true,
    "created_at": "2025-07-18 15:40:00.000000+00",
    "updated_at": "2025-12-24 12:55:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update attachment policies
- Only provided fields will be updated
- Returns 404 if attachment policy not found
- Changes will apply to all domains using this policy
