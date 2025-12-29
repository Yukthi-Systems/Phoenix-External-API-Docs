---
sidebar_position: 5
---

# Disclaimers

Manage email disclaimer messages appended to outgoing emails.

## List All Disclaimers

Get paginated list of disclaimers.

**Endpoint:** `GET /disclaimers/list`

**Authentication:** Required

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | Yes | Page number |
| page_size | integer | Yes | Items per page |

### Request

```bash
curl -X GET "{{BASE_URL}}/disclaimers/list?page=1&page_size=10" \
  -H "x-api-key: your-api-key"
```

### Response

```json
[
  {
    "disclaimer_id": "1b8625bb-d267-4b6d-a20b-6ca0fcf30a64",
    "disclaimer_name": "Privacy Policy Disclaimer",
    "details": {
      "address": "456 Business Ave, Town, State",
      "description": "Privacy policy document"
    },
    "is_active": false,
    "html_content": "<p>Privacy policy <em>content</em> here.</p>",
    "text_content": "Privacy policy content here.",
    "created_at": "2025-11-06 07:16:23.43735+00"
  }
]
```

## Get Count of Disclaimers

Get total number of disclaimers.

**Endpoint:** `GET /disclaimers/count`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/disclaimers/count" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "total_disclaimers": 17
}
```

## Get Disclaimer by ID

Retrieve specific disclaimer details.

**Endpoint:** `GET /disclaimers/detail/{disclaimer_id}`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/disclaimers/detail/1b8625bb-d267-4b6d-a20b-6ca0fcf30a64" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "disclaimer_id": "1b8625bb-d267-4b6d-a20b-6ca0fcf30a64",
  "disclaimer_name": "Privacy Policy Disclaimer",
  "details": {
    "address": "456 Business Ave, Town, State",
    "description": "Privacy policy document"
  },
  "is_active": false,
  "html_content": "<p>Privacy policy <em>content</em> here.</p>",
  "text_content": "Privacy policy content here.",
  "created_at": "2025-11-06 07:16:23.43735+00"
}
```

## Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| disclaimer_id | UUID | Unique identifier |
| disclaimer_name | string | Display name |
| is_active | boolean | Whether disclaimer is active |
| html_content | string | HTML formatted content |
| text_content | string | Plain text version |
| created_at | timestamp | Creation timestamp |