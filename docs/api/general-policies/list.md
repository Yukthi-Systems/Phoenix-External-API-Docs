# List General Policies

This endpoint retrieves a paginated list of all general policies in your organization.

## Endpoint

`GET /general-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/general-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of general policies per page (default: 10)

## Response

Returns an array of general policy objects:

```json
[
    {
        "id": "e5f6a7b8-c9d0-1234-ef01-345678901234",
        "name": "Company Email Policy",
        "description": "General email usage policy for all employees",
        "is_active": true,
        "created_at": "2025-08-20 10:15:00.000000+00",
        "updated_at": "2025-08-20 10:15:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the general policy
- `name`: Name of the general policy
- `description`: Description of what the general policy covers
- `is_active`: Whether the general policy is currently active
- `created_at`: Timestamp when the general policy was created
- `updated_at`: Timestamp when the general policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view general policies
- Results are paginated for better performance
