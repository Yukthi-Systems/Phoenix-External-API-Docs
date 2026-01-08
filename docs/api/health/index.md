# Check API Health

This endpoint allows you to check the health status of the API service. It is useful for monitoring and ensuring that the API is operational.

## Endpoint

`GET /api/health/check`

```sh
curl --location 'https://v3-api.test.yukthi.net/health/status'
```

Response:

```json
{
    "api": "OK",
    "cache": "OK",
    "database": "OK"
}
```

Failed Response Example:

```json
{
    "api": "OK",
    "cache": "ERROR",
    "database": "ERROR"
}
```

## Response Fields

- `api`: Status of the API service. Possible values are "OK" or "ERROR".
- `cache`: Status of the caching service. Possible values are "OK" or "ERROR".
- `database`: Status of the database service. Possible values are "OK" or "ERROR

## Notes

- A status of "OK" indicates that the respective service is functioning properly, while "ERROR" indicates an issue that needs attention.
- Its a GET endpoint and does not require any request body.
- Permissions: This endpoint is publicly accessible and does not require authentication.
- Rate Limiting: This endpoint is not subject to rate limiting.
- Caching: Responses from this endpoint are not cached to ensure real-time health status.
- Timeout: The request to this endpoint should complete within 5 seconds.
