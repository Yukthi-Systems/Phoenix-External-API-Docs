# Create New Department

This endpoint creates a new department in your organization.

## Endpoint

`POST /departments/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/departments/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "IT Department",
    "description": "Information Technology and Support",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "IT Department",
    "description": "Information Technology and Support",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the department
- `description` (optional): Description of the department's purpose or function
- `is_active` (optional): Whether the department is active (default: true)

## Response

Returns the created department object:

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

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create departments
- Department names should be unique within your organization
