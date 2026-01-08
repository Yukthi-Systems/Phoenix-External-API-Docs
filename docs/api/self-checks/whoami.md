# Check API Key Status

This endpoint allows you to verify your API key and check the permissions associated with it. It's useful for debugging authentication issues and confirming your access level.

## Endpoint

`GET /self/whoami`

```sh
curl --location 'https://v3-api.test.yukthi.net/self/whoami' \
--header 'X-API-Key: YOUR_API_KEY'
```

Response:

```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "permissions": [
        "domain:view",
        "mailbox:view"
    ]
}
```

## Response Fields

- `organization_id`: The unique identifier of your organization
- `permissions`: An array of permission strings indicating what actions your API key can perform

## Notes

- This endpoint requires authentication via the `X-API-Key` header
- Use this endpoint to verify that your API key is valid and to check which permissions are granted
- This is particularly useful when debugging permission-related issues
