# Get All Departments

This endpoint retrieves a paginated list of all departments in your organization.

## Endpoint

`GET /departments/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/departments/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of departments per page (default: 10)

## Response

Returns an array of department objects:

```json
[
    {
        "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
        "name": "IT Department",
        "description": "Information Technology and Support",
        "is_active": true,
        "created_at": "2025-10-05 13:20:00.000000+00",
        "updated_at": "2025-10-05 13:20:00.000000+00"
    }
]
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
- Results are paginated for better performance
