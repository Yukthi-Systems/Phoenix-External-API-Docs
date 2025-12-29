---
sidebar_position: 4
---

# Cautions

Manage email caution messages displayed to users.

## Count Total Cautions

Get total number of cautions in the organization.

**Endpoint:** `GET /cautions/count`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/cautions/count" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "total_cautions": 32
}
```

## List Cautions

Get paginated list of cautions.

**Endpoint:** `GET /cautions/list`

**Authentication:** Required

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | Yes | Page number |
| page_size | integer | Yes | Items per page |

### Request

```bash
curl -X GET "{{BASE_URL}}/cautions/list?page=1&page_size=10" \
  -H "x-api-key: your-api-key"
```

### Response

```json
[
  {
    "caution_id": "b9a18559-e9a4-47f8-beff-2e00566c6bd5",
    "caution_name": "Data Privacy Alert",
    "details": {
      "description": "Privacy alert description",
      "notes": "Optional notes",
      "severity": "Medium"
    },
    "html_content": "<html>...</html>",
    "text_content": "Text version of caution",
    "created_at": "2025-08-26 05:51:24.682038+00",
    "updated_at": "2025-12-15 10:27:56.156661+00"
  }
]
```

## Get Specific Caution

Retrieve details of a specific caution by ID.

**Endpoint:** `GET /cautions/detail/{caution_id}`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/cautions/detail/b9a18559-e9a4-47f8-beff-2e00566c6bd5" \
  -H "x-api-key: your-api-key"
```

## Create New Caution

Create a new caution message.

**Endpoint:** `POST /cautions/create`

**Authentication:** Required

### Request Body

```json
{
  "caution_name": "Security Notice",
  "details": {
    "notes": "Important security information",
    "severity": "High",
    "description": "Critical security update"
  },
  "html_content": "<p>Security notice content</p>",
  "text_content": "Security notice text"
}
```

### Request

```bash
curl -X POST "{{BASE_URL}}/cautions/create" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

### Response

```json
{
  "message": "Caution created successfully",
  "new_caution_id": "9b3e1910-9f8d-46f8-be97-6a46a2b7d9c8"
}
```

## Update Caution

Update an existing caution.

**Endpoint:** `PUT /cautions/update/{caution_id}`

**Authentication:** Required

### Request

```bash
curl -X PUT "{{BASE_URL}}/cautions/update/b9a18559-e9a4-47f8-beff-2e00566c6bd5" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

### Response

```json
{
  "message": "Caution updated successfully",
  "updated_caution_id": "b9a18559-e9a4-47f8-beff-2e00566c6bd5"
}
```

## Delete Caution

Delete a caution by ID.

**Endpoint:** `DELETE /cautions/delete/{caution_id}`

**Authentication:** Required

### Request

```bash
curl -X DELETE "{{BASE_URL}}/cautions/delete/9b3e1910-9f8d-46f8-be97-6a46a2b7d9c8" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "deleted_caution_id": "9b3e1910-9f8d-46f8-be97-6a46a2b7d9c8",
  "message": "Caution deleted successfully"
}
```