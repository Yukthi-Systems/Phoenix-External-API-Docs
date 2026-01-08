# Create One Distribution Policy

This endpoint creates a new distribution policy in your organization.

## Endpoint

`POST /distribution-policies/create`

```sh
curl --location 'https://v3-api.test.yukthi.net/distribution-policies/create' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements",
    "is_active": true
}'
```

## Request Body

```json
{
    "name": "Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements",
    "is_active": true
}
```

## Request Fields

- `name` (required): Name for the distribution policy
- `description` (optional): Description of what the distribution policy is used for
- `is_active` (optional): Whether the distribution policy is active (default: true)

## Response

Returns the created distribution policy object:

```json
{
    "id": "c9d0e1f2-a3b4-5678-2345-789012345678",
    "name": "Company-Wide Announcements",
    "description": "Distribution list for company-wide announcements",
    "is_active": true,
    "created_at": "2025-04-15 12:50:00.000000+00",
    "updated_at": "2025-04-15 12:50:00.000000+00"
}
```

## Notes

- Requires authentication via `X-API-Key` header
- Requires appropriate permissions to create distribution policies
- Distribution policies manage mailing lists and group email distribution
