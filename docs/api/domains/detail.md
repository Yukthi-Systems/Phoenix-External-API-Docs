# Get Specific Domain Details

This endpoint retrieves detailed information about a specific domain.

## Endpoint

`GET /domains/detail/{domain_name}`

```sh
curl --location 'https://v3-api.test.yukthi.net/domains/detail/devtest11.yukthi.net' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Path Parameters

- `domain_name` (required): The domain name to retrieve details for

## Response

Returns detailed information about the specified domain:

```json
{
    "domain_name": "devtest11.yukthi.net",
    "details": {
        "address": "Admin Address",
        "description": "Development test domain"
    },
    "quota_allocated": "10.00",
    "quota_utilized": "2.35",
    "max_mailboxes": 50,
    "is_active": true,
    "spam_destination": "Folder",
    "spam_destination_properties": {
        "description": "Standard spam filtering policy for domain",
        "folder_name": "Junk"
    },
    "filter_policy_id": null,
    "attachment_policy_id": null,
    "catch_all": false,
    "catch_all_forward_to_email": null,
    "is_hybrid": false,
    "connector_properties": {
        "description": "Default Hybrid Connector",
        "fqdn": "",
        "ipv4": "",
        "ipv6": "",
        "port": -1
    },
    "max_password_age": 90,
    "max_password_age_properties": {
        "enable_max_password_age": true,
        "max_password_age": 90,
        "notify_at": [7, 14, 21]
    },
    "session_timeout": 30,
    "disclaimer_id": null,
    "caution_id": null,
    "created_at": "2025-11-15 10:22:33.025144+00"
}
```

## Response Fields

See [List All Domains](/docs/api/domains/list) for detailed field descriptions.

## Notes

- Requires authentication via `X-API-Key` header
- Requires `domain:view` permission
- Returns 404 if domain not found
- Domain name in URL should be URL-encoded if it contains special characters
