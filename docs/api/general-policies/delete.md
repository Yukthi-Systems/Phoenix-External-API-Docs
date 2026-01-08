# Delete General Policy

This endpoint deletes a general policy from your organization.

## Endpoint

`DELETE /general-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/general-policies/delete/e5f6a7b8-c9d0-1234-ef01-345678901234' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the general policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "General policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the general policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete general policies
- Returns 404 if general policy not found
- Deletion is permanent and cannot be undone
- Removing a general policy will affect system-wide email behavior
