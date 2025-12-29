---
sidebar_position: 3
---

# Domains

Manage email domains including quotas, policies, and configurations.

## List All Domains

Retrieve paginated list of domains.

**Endpoint:** `GET /domains/list`

**Authentication:** Required

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | Yes | Page number (starts at 1) |
| page_size | integer | Yes | Items per page (max 100) |

### Request

```bash
curl -X GET "{{BASE_URL}}/domains/list?page=1&page_size=10" \
  -H "x-api-key: your-api-key"
```

### Response

**Status:** 200 OK

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

## Get Total Domains Count

Get the total number of domains for the organization.

**Endpoint:** `GET /domains/count`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/domains/count" \
  -H "x-api-key: your-api-key"
```

### Response

**Status:** 200 OK

```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "total_domains": 141
}
```

## Get Specific Domain Info

Retrieve detailed information for a specific domain.

**Endpoint:** `GET /domains/detail/{domain_name}`

**Authentication:** Required

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| domain_name | string | Yes | Domain name |

### Request

```bash
curl -X GET "{{BASE_URL}}/domains/detail/example.com" \
  -H "x-api-key: your-api-key"
```

### Response

**Status:** 200 OK

```json
{
  "domain_name": "example.com",
  "details": {
    "address": "123 Main St",
    "description": "Primary domain"
  },
  "quota_allocated": "7.00",
  "quota_utilized": "0.40",
  "max_mailboxes": 7,
  "is_active": true,
  "spam_destination": "Folder",
  "spam_destination_properties": {
    "description": "Standard spam filtering",
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
    "notify_at": [2, 5, 9]
  },
  "session_timeout": 720,
  "disclaimer_id": null,
  "caution_id": null,
  "created_at": "2025-07-30 10:38:37.531305+00"
}
```