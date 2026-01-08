# Delete Caution by ID

This endpoint deletes a caution message from your organization.

## Endpoint

`DELETE /cautions/delete/{caution_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/cautions/delete/a1b2c3d4-e5f6-7890-abcd-ef1234567890' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `caution_id` (required): The UUID of the caution to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Caution deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the caution was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete cautions
- Returns 404 if caution not found
- Deletion is permanent and cannot be undone
- If the caution is currently assigned to domains, you may need to unassign it first
