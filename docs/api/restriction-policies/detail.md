# Detail of One Restriction Policy

This endpoint retrieves detailed information about a specific restriction policy.

## Endpoint

`GET /restriction-policies/detail/{policy_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/restriction-policies/detail/a7b8c9d0-e1f2-3456-0123-567890123456' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the restriction policy to retrieve

## Response

Returns detailed information about the specified restriction policy:

```json
{
    "id": "a7b8c9d0-e1f2-3456-0123-567890123456",
    "name": "External Domain Restriction",
    "description": "Restrict emails to/from specific external domains",
    "is_active": true,
    "created_at": "2025-06-25 14:10:00.000000+00",
    "updated_at": "2025-06-25 14:10:00.000000+00"
}
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
- Returns 404 if restriction policy not found
