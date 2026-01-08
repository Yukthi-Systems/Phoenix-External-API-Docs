# List Cautions

This endpoint retrieves a paginated list of all caution messages in your organization.

## Endpoint

`GET /cautions/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/cautions/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of cautions per page (default: 10)

## Response

Returns an array of caution objects:

```json
[
    {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "name": "External Email Warning",
        "message": "CAUTION: This email originated from outside the organization.",
        "is_active": true,
        "created_at": "2025-11-20 14:30:00.000000+00",
        "updated_at": "2025-11-20 14:30:00.000000+00"
    }
]
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
- Results are paginated for better performance
