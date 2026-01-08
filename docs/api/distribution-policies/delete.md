# Delete Distribution Policy

This endpoint deletes a distribution policy from your organization.

## Endpoint

`DELETE /distribution-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/distribution-policies/delete/c9d0e1f2-a3b4-5678-2345-789012345678' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the distribution policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Distribution policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the distribution policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete distribution policies
- Returns 404 if distribution policy not found
- Deletion is permanent and cannot be undone
- If the distribution policy is currently in use, emails sent to this distribution list will no longer be distributed
