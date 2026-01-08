# List All Domains

This endpoint retrieves a paginated list of all domains in your organization.

## Endpoint

`GET /domains/list`

```sh
curl --location 'https://v3-api.test.yukthi.net/domains/list?page=1&page_size=10' \
--header 'X-API-Key: YOUR_API_KEY'
```

## Query Parameters

- `page` (optional): Page number for pagination (default: 1)
- `page_size` (optional): Number of domains per page (default: 10)

## Response

Returns an array of domain objects:

```json
[
    {
        "domain_name": "testdomain127.com",
        "details": {
            "address": "Admin Address 127",
            "description": "Test domain 127 for webmail and load testing"
        },
        "quota_allocated": "5.00",
        "quota_utilized": "0.00",
        "max_mailboxes": 15,
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
        "max_password_age": 91,
        "max_password_age_properties": {
            "enable_max_password_age": true,
            "max_password_age": 91,
            "notify_at": [3, 6, 10]
        },
        "session_timeout": 30,
        "disclaimer_id": null,
        "caution_id": null,
        "created_at": "2025-12-22 08:33:55.025144+00"
    }
]
```

## Response Fields

- `domain_name`: The domain name
- `details`: Object containing address and description
- `quota_allocated`: Storage quota allocated in GB
- `quota_utilized`: Storage quota used in GB
- `max_mailboxes`: Maximum number of mailboxes allowed
- `is_active`: Whether the domain is active
- `spam_destination`: Where spam emails go ("Folder" or other)
- `spam_destination_properties`: Spam handling configuration
- `filter_policy_id`: ID of applied filter policy
- `attachment_policy_id`: ID of applied attachment policy
- `catch_all`: Whether catch-all is enabled
- `catch_all_forward_to_email`: Email address for catch-all forwarding
- `is_hybrid`: Whether hybrid mode is enabled
- `connector_properties`: Hybrid connector configuration
- `max_password_age`: Maximum password age in days
- `max_password_age_properties`: Password age policy details
- `session_timeout`: Session timeout in minutes
- `disclaimer_id`: ID of applied disclaimer
- `caution_id`: ID of applied caution
- `created_at`: Domain creation timestamp

## Notes

- Requires authentication via `X-API-Key` header
- Requires `domain:view` permission
- Results are paginated for better performance
