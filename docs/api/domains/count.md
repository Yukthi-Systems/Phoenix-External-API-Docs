# Get Total Domains Count

This endpoint returns the total number of domains in your organization.

## Endpoint

`GET /domains/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/domains/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_domains": 141
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_domains`: Total number of domains in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires `domain:view` permission
- Useful for pagination calculations and dashboard statistics
