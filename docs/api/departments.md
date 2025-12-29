---
sidebar_position: 6
---

# Departments

Manage organizational departments and authorized contacts.

## Get All Departments

Retrieve paginated list of departments.

**Endpoint:** `GET /departments/list`

**Authentication:** Required

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | Yes | Page number |
| page_size | integer | Yes | Items per page |

### Request

```bash
curl -X GET "{{BASE_URL}}/departments/list?page=1&page_size=10" \
  -H "x-api-key: your-api-key"
```

### Response

```json
[
  {
    "department_id": "1bd7a5ae-3d57-4e2d-9d32-a89fcf196725",
    "department_name": "Information Technology",
    "details": {
      "address": "Floor 3, IT Wing, Main Building",
      "authorized_persons": [
        {
          "email": "john.doe@company.com",
          "name": "John Doe",
          "phone": "+1234567890"
        }
      ],
      "description": "Manages all IT infrastructure and support",
      "notes": "Contact for technical support"
    },
    "created_at": "2025-11-06 07:18:00.725614+00",
    "updated_at": "2025-11-26 11:48:49.373684+00"
  }
]
```

## Count All Departments

Get total department count.

**Endpoint:** `GET /departments/count`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/departments/count" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
  "total_departments": 16
}
```

## Get Single Department

Retrieve specific department details.

**Endpoint:** `GET /departments/detail/{department_id}`

**Authentication:** Required

### Request

```bash
curl -X GET "{{BASE_URL}}/departments/detail/1bd7a5ae-3d57-4e2d-9d32-a89fcf196725" \
  -H "x-api-key: your-api-key"
```

## Create New Department

Create a new department.

**Endpoint:** `POST /departments/create`

**Authentication:** Required

### Request Body

```json
{
  "department_name": "Human Resources",
  "details": {
    "notes": "HR department notes",
    "address": "Floor 2, HR Wing",
    "description": "Human resources department",
    "authorized_persons": [
      {
        "name": "Jane Smith",
        "email": "jane@company.com",
        "phone": "+1234567890"
      }
    ]
  }
}
```

### Request

```bash
curl -X POST "{{BASE_URL}}/departments/create" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

### Response

```json
{
  "message": "Department created successfully",
  "new_department_id": "ff9e811d-ba57-4487-80d2-b5a8db808794"
}
```

## Update Department

Update an existing department.

**Endpoint:** `PUT /departments/update/{department_id}`

**Authentication:** Required

### Request

```bash
curl -X PUT "{{BASE_URL}}/departments/update/ff9e811d-ba57-4487-80d2-b5a8db808794" \
  -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{...}'
```

### Response

```json
{
  "message": "Department updated successfully",
  "updated_department_id": "ff9e811d-ba57-4487-80d2-b5a8db808794"
}
```

## Delete Department

Delete a department by ID.

**Endpoint:** `DELETE /departments/delete/{department_id}`

**Authentication:** Required

### Request

```bash
curl -X DELETE "{{BASE_URL}}/departments/delete/1bd7a5ae-3d57-4e2d-9d32-a89fcf196725" \
  -H "x-api-key: your-api-key"
```

### Response

```json
{
  "deleted_department_id": "1bd7a5ae-3d57-4e2d-9d32-a89fcf196725",
  "message": "Department deleted successfully"
}
```