# Count Filter Policies

This endpoint returns the total number of filter policies in your organization.

## Endpoint

`GET /filter-policies/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/filter-policies/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_filter_policies": 6
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_filter_policies`: Total number of filter policies in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view filter policies
- Useful for pagination and dashboard statistics
