# Delete Attachment Policy

This endpoint deletes an attachment policy from your organization.

## Endpoint

`DELETE /attachment-policies/delete/{policy_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/attachment-policies/delete/f6a7b8c9-d0e1-2345-f012-456789012345' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `policy_id` (required): The UUID of the attachment policy to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Attachment policy deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the attachment policy was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete attachment policies
- Returns 404 if attachment policy not found
- Deletion is permanent and cannot be undone
- If the attachment policy is currently assigned to domains, you may need to unassign it first
