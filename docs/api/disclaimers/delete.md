# Delete Disclaimer

This endpoint deletes a disclaimer message from your organization.

## Endpoint

`DELETE /disclaimers/delete/{disclaimer_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/disclaimers/delete/b2c3d4e5-f6a7-8901-bcde-f12345678901' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `disclaimer_id` (required): The UUID of the disclaimer to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Disclaimer deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the disclaimer was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete disclaimers
- Returns 404 if disclaimer not found
- Deletion is permanent and cannot be undone
- If the disclaimer is currently assigned to domains, you may need to unassign it first
