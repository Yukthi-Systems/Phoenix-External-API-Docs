# Create General Policy

This endpoint creates a new general policy in your organization.

## Endpoint

`POST /general-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/general-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Company Email Policy",
    "description": "General email usage policy for all employees",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Company Email Policy",
    "description": "General email usage policy for all employees",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the general policy
- `description` (optional): Description of what the general policy covers
- `is_active` (optional): Whether the general policy is active (default: true)

## Response

Returns the created general policy object:

```json
{
    "id": "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "name": "Company Email Policy",
    "description": "General email usage policy for all employees",
    "is_active": true,
    "created_at": "2025-08-20 10:15:00.000000+00",
    "updated_at": "2025-08-20 10:15:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create general policies
- General policies apply system-wide to control email behavior
