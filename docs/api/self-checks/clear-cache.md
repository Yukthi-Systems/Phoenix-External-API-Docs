# Delete Cached API Key

This endpoint allows you to delete your API key from the cache. This is useful when you want to force a refresh of your API key's permissions or troubleshoot caching issues.

## Endpoint

`DELETE /self/cache`

```sh
curl --location --request DELETE 'https://v3-api.test.yukthi.net/self/cache' \
--header 'X-API-Key: YOUR_API_KEY'
```

Response:

```json
{
    "message": "API key cache entry deleted"
}
```

## Response Fields

- `message`: Confirmation message indicating the cache entry was deleted

## Notes

- This endpoint requires authentication via the `X-API-Key` header
- After clearing the cache, the next API request will fetch fresh permission data from the database
- Use this when you've updated permissions and want to ensure the changes take effect immediately