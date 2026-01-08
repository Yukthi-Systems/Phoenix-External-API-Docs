# List All Distribution Policies

This endpoint retrieves a paginated list of all distribution policies in your organization.

## Endpoint

`GET /distribution-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/distribution-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of distribution policies per page (default: 10)

## Response

Returns an array of distribution policy objects:

```json
[
    {
        "id": "c9d0e1f2-a3b4-5678-2345-789012345678",
        "name": "Company-Wide Announcements",
        "description": "Distribution list for company-wide announcements",
        "is_active": true,
        "created_at": "2025-04-15 12:50:00.000000+00",
        "updated_at": "2025-04-15 12:50:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the distribution policy
- `name`: Name of the distribution policy
- `description`: Description of what the distribution policy is used for
- `is_active`: Whether the distribution policy is currently active
- `created_at`: Timestamp when the distribution policy was created
- `updated_at`: Timestamp when the distribution policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view distribution policies
- Results are paginated for better performance
