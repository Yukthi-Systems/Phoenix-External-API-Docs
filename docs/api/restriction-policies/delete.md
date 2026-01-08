# Delete Restriction Policy

This endpoint deletes a restriction policy from your organization.

## Endpoint

`DELETE /restriction-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/restriction-policies/delete/a7b8c9d0-e1f2-3456-0123-567890123456' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the restriction policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Restriction policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the restriction policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete restriction policies
- Returns 404 if restriction policy not found
- Deletion is permanent and cannot be undone
- If the restriction policy is currently in use, you may need to remove it from affected users first
