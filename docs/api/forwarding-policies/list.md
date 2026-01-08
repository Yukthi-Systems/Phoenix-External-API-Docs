# List All Forwarding Policies

This endpoint retrieves a paginated list of all forwarding policies in your organization.

## Endpoint

`GET /forwarding-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/forwarding-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of forwarding policies per page (default: 10)

## Response

Returns an array of forwarding policy objects:

```json
[
    {
        "id": "b8c9d0e1-f2a3-4567-1234-678901234567",
        "name": "Auto-Forward to Manager",
        "description": "Automatically forward specific emails to manager",
        "is_active": true,
        "created_at": "2025-05-30 09:25:00.000000+00",
        "updated_at": "2025-05-30 09:25:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the forwarding policy
- `name`: Name of the forwarding policy
- `description`: Description of what the forwarding policy does
- `is_active`: Whether the forwarding policy is currently active
- `created_at`: Timestamp when the forwarding policy was created
- `updated_at`: Timestamp when the forwarding policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view forwarding policies
- Results are paginated for better performance
