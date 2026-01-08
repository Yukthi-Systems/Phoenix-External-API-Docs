# Update Department by ID

This endpoint updates an existing department.

## Endpoint

`PUT /departments/update/{department_id}`

```sh
curl --location --request PUT 'https://v3-api.test.yukthi.net/departments/update/c3d4e5f6-a7b8-9012-cdef-123456789012' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Information Technology Department",
    "description": "IT Support and Infrastructure Management",
    "is_active": true
}'
```

## Path Parameters

- `department_id` (required): The UUID of the department to update

## Request Body

```json
{
    "name": "Information Technology Department",
    "description": "IT Support and Infrastructure Management",
    "is_active": true
}
```

## Request Fields

- `name` (optional): Updated name for the department
- `description` (optional): Updated description
- `is_active` (optional): Whether the department is active

## Response

Returns the updated department object:

```json
{
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "name": "Information Technology Department",
    "description": "IT Support and Infrastructure Management",
    "is_active": true,
    "created_at": "2025-10-05 13:20:00.000000+00",
    "updated_at": "2025-12-18 16:45:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to update departments
- Only provided fields will be updated
- Returns 404 if department not found
