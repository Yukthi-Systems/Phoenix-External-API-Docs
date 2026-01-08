# Update Caution by ID

This endpoint updates an existing caution message.

## Endpoint

`PUT /cautions/update/{caution_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/cautions/update/a1b2c3d4-e5f6-7890-abcd-ef1234567890' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated External Email Warning",
    "message": "CAUTION: This email originated from outside your organization. Please verify before responding.",
    "is_active": true
}'
```

## Path Parameters

- `caution_id` (required): The UUID of the caution to update

## Request Body

```json
{
    "name": "Updated External Email Warning",
    "message": "CAUTION: This email originated from outside your organization. Please verify before responding.",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the caution message
- `message` (optional): Updated caution text
- `is_active` (optional): Whether the caution is active

## Response

Returns the updated caution object:

```json
{
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Updated External Email Warning",
    "message": "CAUTION: This email originated from outside your organization. Please verify before responding.",
    "is_active": true,
    "created_at": "2025-11-20 14:30:00.000000+00",
    "updated_at": "2025-12-15 10:22:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update cautions
- Only provided fields will be updated
- Returns 404 if caution not found
