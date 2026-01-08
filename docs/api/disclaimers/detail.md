# Get Disclaimer by ID

This endpoint retrieves detailed information about a specific disclaimer.

## Endpoint

`GET /disclaimers/detail/{disclaimer_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/disclaimers/detail/b2c3d4e5-f6a7-8901-bcde-f12345678901' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `disclaimer_id` (required): The UUID of the disclaimer to retrieve

## Response

Returns detailed information about the specified disclaimer:

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

## Response Fields

- `id`: Unique identifier for the disclaimer
- `name`: Name of the disclaimer
- `message`: The disclaimer text that will be appended to emails
- `is_active`: Whether the disclaimer is currently active
- `created_at`: Timestamp when the disclaimer was created
- `updated_at`: Timestamp when the disclaimer was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view disclaimers
- Returns 404 if disclaimer not found
