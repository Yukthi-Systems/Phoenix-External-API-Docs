# List All Restriction Policies

This endpoint retrieves a paginated list of all restriction policies in your organization.

## Endpoint

`GET /restriction-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/restriction-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of restriction policies per page (default: 10)

## Response

Returns an array of restriction policy objects:

```json
[
    {
        "id": "a7b8c9d0-e1f2-3456-0123-567890123456",
        "name": "External Domain Restriction",
        "description": "Restrict emails to/from specific external domains",
        "is_active": true,
        "created_at": "2025-06-25 14:10:00.000000+00",
        "updated_at": "2025-06-25 14:10:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the restriction policy
- `name`: Name of the restriction policy
- `description`: Description of what the restriction policy enforces
- `is_active`: Whether the restriction policy is currently active
- `created_at`: Timestamp when the restriction policy was created
- `updated_at`: Timestamp when the restriction policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view restriction policies
- Results are paginated for better performance
