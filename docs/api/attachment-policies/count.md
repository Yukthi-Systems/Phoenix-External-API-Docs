# Count Attachment Policies

This endpoint returns the total number of attachment policies in your organization.

## Endpoint

`GET /attachment-policies/count`

```sh
curl --location 'https://v3-api.test.yukthi.net/attachment-policies/count' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Response

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "total_attachment_policies": 5
}
```

## Response Fields

- `organization_id`: Your organization's unique identifier
- `total_attachment_policies`: Total number of attachment policies in your organization

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view attachment policies
- Useful for pagination and dashboard statistics
