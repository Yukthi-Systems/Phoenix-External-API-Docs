# Update Distribution Policy

This endpoint updates an existing distribution policy.

## Endpoint

`PUT /distribution-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/distribution-policies/update/c9d0e1f2-a3b4-5678-2345-789012345678' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements and updates",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the distribution policy to update

## Request Body

```json
{
    "name": "Updated Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements and updates",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the distribution policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the distribution policy is active

## Response

Returns the updated distribution policy object:

```json
{
    "id": "c9d0e1f2-a3b4-5678-2345-789012345678",
    "name": "Updated Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements and updates",
    "is_active": true,
    "created_at": "2025-04-15 12:50:00.000000+00",
    "updated_at": "2025-12-27 11:40:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update distribution policies
- Only provided fields will be updated
- Returns 404 if distribution policy not found
- Changes will apply immediately to the distribution list
