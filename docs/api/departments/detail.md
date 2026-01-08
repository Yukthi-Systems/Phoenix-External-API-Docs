# Get Single Department Details

This endpoint retrieves detailed information about a specific department.

## Endpoint

`GET /departments/detail/{department_id}`

```sh
curl --location 'https://v3-api.test.yukthi.net/departments/detail/c3d4e5f6-a7b8-9012-cdef-123456789012' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `department_id` (required): The UUID of the department to retrieve

## Response

Returns detailed information about the specified department:

```json
{
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "name": "IT Department",
    "description": "Information Technology and Support",
    "is_active": true,
    "created_at": "2025-10-05 13:20:00.000000+00",
    "updated_at": "2025-10-05 13:20:00.000000+00"
}
```

## Response Fields

- `id`: Unique identifier for the department
- `name`: Name of the department
- `description`: Description of the department's purpose or function
- `is_active`: Whether the department is currently active
- `created_at`: Timestamp when the department was created
- `updated_at`: Timestamp when the department was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view departments
- Returns 404 if department not found
