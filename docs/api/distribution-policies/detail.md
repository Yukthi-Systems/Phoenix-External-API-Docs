# Detail of One Distribution Policy

This endpoint retrieves detailed information about a specific distribution policy.

## Endpoint

`GET /distribution-policies/detail/{policy_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/distribution-policies/detail/c9d0e1f2-a3b4-5678-2345-789012345678' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the distribution policy to retrieve

## Response

Returns detailed information about the specified distribution policy:

```json
{
    "id": "c9d0e1f2-a3b4-5678-2345-789012345678",
    "name": "Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements",
    "is_active": true,
    "created_at": "2025-04-15 12:50:00.000000+00",
    "updated_at": "2025-04-15 12:50:00.000000+00"
}
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
- Returns 404 if distribution policy not found
