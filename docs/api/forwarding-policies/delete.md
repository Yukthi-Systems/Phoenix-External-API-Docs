# Delete Forwarding Policy

This endpoint deletes a forwarding policy from your organization.

## Endpoint

`DELETE /forwarding-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/forwarding-policies/delete/b8c9d0e1-f2a3-4567-1234-678901234567' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the forwarding policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Forwarding policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the forwarding policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete forwarding policies
- Returns 404 if forwarding policy not found
- Deletion is permanent and cannot be undone
- If the forwarding policy is currently in use, automatic forwarding will stop for affected mailboxes
