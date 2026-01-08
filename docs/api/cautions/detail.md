# Get Specific Caution Details

This endpoint retrieves detailed information about a specific caution message.

## Endpoint

`GET /cautions/detail/{caution_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/cautions/detail/a1b2c3d4-e5f6-7890-abcd-ef1234567890' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `caution_id` (required): The UUID of the caution to retrieve

## Response

Returns detailed information about the specified caution:

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

## Response Fields

- `id`: Unique identifier for the caution
- `name`: Name of the caution message
- `message`: The actual caution text that will be displayed
- `is_active`: Whether the caution is currently active
- `created_at`: Timestamp when the caution was created
- `updated_at`: Timestamp when the caution was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view cautions
- Returns 404 if caution not found
