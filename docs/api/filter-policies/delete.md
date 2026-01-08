# Delete Filter Policy

This endpoint deletes a filter policy from your organization.

## Endpoint

`DELETE /filter-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/filter-policies/delete/d4e5f6a7-b8c9-0123-def0-234567890123' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the filter policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Filter policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the filter policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete filter policies
- Returns 404 if filter policy not found
- Deletion is permanent and cannot be undone
- If the filter policy is currently assigned to domains, you may need to unassign it first
