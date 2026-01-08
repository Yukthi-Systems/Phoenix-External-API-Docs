# Delete the Department

This endpoint deletes a department from your organization.

## Endpoint

`DELETE /departments/delete/{department_id}`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/departments/delete/c3d4e5f6-a7b8-9012-cdef-123456789012' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `department_id` (required): The UUID of the department to delete

## Response

Returns a confirmation message:

```json
{
    "message": "Department deleted successfully"
}
```

## Response Fields

- `message`: Confirmation that the department was deleted

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to delete departments
- Returns 404 if department not found
- Deletion is permanent and cannot be undone
- If the department has assigned users or mailboxes, you may need to reassign them first
