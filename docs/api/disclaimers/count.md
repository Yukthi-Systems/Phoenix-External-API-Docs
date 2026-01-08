# Get Count of Disclaimers

This endpoint returns the total number of disclaimer messages in your organization.

## Endpoint

`GET /disclaimers/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/disclaimers/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_disclaimers": 3
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_disclaimers`: Total number of disclaimer messages in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view disclaimers
- Useful for pagination and dashboard statistics
