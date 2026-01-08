# List All Disclaimers

This endpoint retrieves a paginated list of all disclaimer messages in your organization.

## Endpoint

`GET /disclaimers/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/disclaimers/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of disclaimers per page (default: 10)

## Response

Returns an array of disclaimer objects:

```json
[
    {
        "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "name": "Legal Disclaimer",
        "message": "This email and any attachments are confidential and may be privileged.",
        "is_active": true,
        "created_at": "2025-11-15 09:45:00.000000+00",
        "updated_at": "2025-11-15 09:45:00.000000+00"
    }
]
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
- Results are paginated for better performance
