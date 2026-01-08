# List Attachment Policies

This endpoint retrieves a paginated list of all attachment policies in your organization.

## Endpoint

`GET /attachment-policies/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/attachment-policies/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of attachment policies per page (default: 10)

## Response

Returns an array of attachment policy objects:

```json
[
    {
        "id": "f6a7b8c9-d0e1-2345-f012-456789012345",
        "name": "Executable File Block Policy",
        "description": "Block executable files and potentially dangerous attachments",
        "is_active": true,
        "created_at": "2025-07-18 15:40:00.000000+00",
        "updated_at": "2025-07-18 15:40:00.000000+00"
    }
]
```

## Response Fields

- `id`: Unique identifier for the attachment policy
- `name`: Name of the attachment policy
- `description`: Description of what the attachment policy does
- `is_active`: Whether the attachment policy is currently active
- `created_at`: Timestamp when the attachment policy was created
- `updated_at`: Timestamp when the attachment policy was last updated

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to view attachment policies
- Results are paginated for better performance
