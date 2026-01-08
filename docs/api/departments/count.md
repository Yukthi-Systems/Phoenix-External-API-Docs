# Count All Departments

This endpoint returns the total number of departments in your organization.

## Endpoint

`GET /departments/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/departments/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_departments": 8
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_departments`: Total number of departments in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view departments
- Useful for pagination and dashboard statistics
