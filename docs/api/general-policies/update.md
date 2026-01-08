# Update General Policy

This endpoint updates an existing general policy.

## Endpoint

`PUT /general-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/general-policies/update/e5f6a7b8-c9d0-1234-ef01-345678901234' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Company Email Policy",
    "description": "Revised email usage policy with new guidelines",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the general policy to update

## Request Body

```json
{
    "name": "Updated Company Email Policy",
    "description": "Revised email usage policy with new guidelines",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the general policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the general policy is active

## Response

Returns the updated general policy object:

```json
{
    "id": "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "name": "Updated Company Email Policy",
    "description": "Revised email usage policy with new guidelines",
    "is_active": true,
    "created_at": "2025-08-20 10:15:00.000000+00",
    "updated_at": "2025-12-23 09:10:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update general policies
- Only provided fields will be updated
- Returns 404 if general policy not found
- Changes will apply system-wide immediately
