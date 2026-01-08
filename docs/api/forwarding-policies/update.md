# Update Forwarding Policy

This endpoint updates an existing forwarding policy.

## Endpoint

`PUT /forwarding-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/forwarding-policies/update/b8c9d0e1-f2a3-4567-1234-678901234567' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager with filtering",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the forwarding policy to update

## Request Body

```json
{
    "name": "Updated Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager with filtering",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the forwarding policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the forwarding policy is active

## Response

Returns the updated forwarding policy object:

```json
{
    "id": "b8c9d0e1-f2a3-4567-1234-678901234567",
    "name": "Updated Auto-Forward to Manager",
    "description": "Automatically forward specific emails to manager with filtering",
    "is_active": true,
    "created_at": "2025-05-30 09:25:00.000000+00",
    "updated_at": "2025-12-26 08:15:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update forwarding policies
- Only provided fields will be updated
- Returns 404 if forwarding policy not found
- Changes will apply immediately to all affected mailboxes
