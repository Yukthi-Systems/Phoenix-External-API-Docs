# Update One Restriction Policy

This endpoint updates an existing restriction policy.

## Endpoint

`PUT /restriction-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/restriction-policies/update/a7b8c9d0-e1f2-3456-0123-567890123456' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Enhanced External Domain Restriction",
    "description": "Restrict emails to/from specific external domains with enhanced security",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the restriction policy to update

## Request Body

```json
{
    "name": "Enhanced External Domain Restriction",
    "description": "Restrict emails to/from specific external domains with enhanced security",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the restriction policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the restriction policy is active

## Response

Returns the updated restriction policy object:

```json
{
    "id": "a7b8c9d0-e1f2-3456-0123-567890123456",
    "name": "Enhanced External Domain Restriction",
    "description": "Restrict emails to/from specific external domains with enhanced security",
    "is_active": true,
    "created_at": "2025-06-25 14:10:00.000000+00",
    "updated_at": "2025-12-25 10:30:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update restriction policies
- Only provided fields will be updated
- Returns 404 if restriction policy not found
- Changes will apply immediately to all users affected by this policy
