# Count Total Cautions

This endpoint returns the total number of caution messages in your organization.

## Endpoint

`GET /cautions/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/cautions/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_cautions": 5
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_cautions`: Total number of caution messages in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view cautions
- Useful for pagination and dashboard statistics
