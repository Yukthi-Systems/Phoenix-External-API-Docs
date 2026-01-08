# Update Disclaimer

This endpoint updates an existing disclaimer message.

## Endpoint

`PUT /disclaimers/update/{disclaimer_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/disclaimers/update/b2c3d4e5-f6a7-8901-bcde-f12345678901' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Legal Disclaimer",
    "message": "This email and any attachments are confidential and legally privileged. If you are not the intended recipient, please delete this email.",
    "is_active": true
}'
```

## Path Parameters

- `disclaimer_id` (required): The UUID of the disclaimer to update

## Request Body

```json
{
    "name": "Updated Legal Disclaimer",
    "message": "This email and any attachments are confidential and legally privileged. If you are not the intended recipient, please delete this email.",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the disclaimer
- `message` (optional): Updated disclaimer text
- `is_active` (optional): Whether the disclaimer is active

## Response

Returns the updated disclaimer object:

```json
{
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "name": "Updated Legal Disclaimer",
    "message": "This email and any attachments are confidential and legally privileged. If you are not the intended recipient, please delete this email.",
    "is_active": true,
    "created_at": "2025-11-15 09:45:00.000000+00",
    "updated_at": "2025-12-20 11:30:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update disclaimers
- Only provided fields will be updated
- Returns 404 if disclaimer not found
- Changes will apply to new emails immediately
