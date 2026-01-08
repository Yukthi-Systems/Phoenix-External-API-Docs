# List All Filter Policies

This endpoint retrieves a paginated list of all filter policies in your organization.

## Endpoint

`GET /filter-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/filter-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of filter policies per page (default: 10)

## Response

Returns an array of filter policy objects:

```json
[
    {
        "id": "d4e5f6a7-b8c9-0123-def0-234567890123",
        "name": "Spam Filter Policy",
        "description": "Block known spam and malicious content",
        "is_active": true,
        "created_at": "2025-09-12 11:30:00.000000+00",
        "updated_at": "2025-09-12 11:30:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the filter policy
- `name`: Name of the filter policy
- `description`: Description of what the filter policy does
- `is_active`: Whether the filter policy is currently active
- `created_at`: Timestamp when the filter policy was created
- `updated_at`: Timestamp when the filter policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view filter policies
- Results are paginated for better performance
