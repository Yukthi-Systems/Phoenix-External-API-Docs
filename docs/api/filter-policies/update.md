# Replace Filter Policy

This endpoint updates an existing filter policy.

## Endpoint

`PUT /filter-policies/update/{policy_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/filter-policies/update/d4e5f6a7-b8c9-0123-def0-234567890123' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Advanced Spam Filter Policy",
    "description": "Block known spam, malicious content, and suspicious attachments",
    "is_active": true
}'
```

## Path Parameters

- `policy_id` (required): The UUID of the filter policy to update

## Request Body

```json
{
    "name": "Advanced Spam Filter Policy",
    "description": "Block known spam, malicious content, and suspicious attachments",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the filter policy
- `description` (optional): Updated description
- `is_active` (optional): Whether the filter policy is active

## Response

Returns the updated filter policy object:

```json
{
    "id": "d4e5f6a7-b8c9-0123-def0-234567890123",
    "name": "Advanced Spam Filter Policy",
    "description": "Block known spam, malicious content, and suspicious attachments",
    "is_active": true,
    "created_at": "2025-09-12 11:30:00.000000+00",
    "updated_at": "2025-12-22 14:20:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update filter policies
- Only provided fields will be updated
- Returns 404 if filter policy not found
- Changes will apply to all domains using this policy
