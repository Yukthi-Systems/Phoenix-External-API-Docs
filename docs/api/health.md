---
sidebar_position: 1
---

# Health Endpoints

Monitor system health and component status.

## Check All Health Status

Check the status of API, cache, and database components.

**Endpoint:** `GET /health/status`

**Authentication:** Not required

### Request

```bash
curl -X GET "{{BASE_URL}}/health/status"
```

### Success Response

**Status:** 200 OK

```json
{
  "api": "OK",
  "cache": "OK",
  "database": "OK"
}
```

### Partial Failure Response

**Status:** 200 OK

```json
{
  "api": "OK",
  "cache": "ERROR",
  "database": "ERROR"
}
```

## Use Cases

- Health checks for monitoring systems
- Load balancer health probes
- System status dashboards
- Automated alerting