---
sidebar_position: 7
---

# Errors

Understanding API error responses and status codes.

## HTTP Status Codes

| Status Code | Meaning | Description |
|-------------|---------|-------------|
| 200 | OK | Request successful |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Missing or invalid API key |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 500 | Internal Server Error | Server error |

## Error Response Format

All error responses follow a consistent format:

```json
{
  "error": "Error type",
  "message": "Human-readable error description",
  "details": {}
}
```

## Common Errors

### Authentication Errors

**Missing API Key**

```json
{
  "error": "Unauthorized",
  "message": "API key is required"
}
```

**Invalid API Key**

```json
{
  "error": "Unauthorized",
  "message": "Invalid API key"
}
```

### Permission Errors

```json
{
  "error": "Forbidden",
  "message": "Insufficient permissions to access this resource"
}
```

### Not Found Errors

```json
{
  "error": "Not Found",
  "message": "Domain not found"
}
```

### Validation Errors

```json
{
  "error": "Bad Request",
  "message": "Invalid request parameters",
  "details": {
    "field": "email",
    "reason": "Invalid email format"
  }
}
```

## Handling Errors

### Best Practices

1. **Check status codes** - Always check HTTP status before parsing response
2. **Log errors** - Log error details for debugging
3. **Retry logic** - Implement exponential backoff for 5xx errors
4. **Validate inputs** - Validate data before sending to avoid 400 errors
5. **Handle 401/403** - Implement proper authentication error handling

### Example Error Handling

```javascript
try {
  const response = await fetch('{{BASE_URL}}/endpoint', {
    headers: {
      'x-api-key': apiKey
    }
  });
  
  if (!response.ok) {
    const error = await response.json();
    console.error('API Error:', error.message);
    // Handle specific error codes
    if (response.status === 401) {
      // Handle authentication error
    }
  }
  
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Network error:', error);
}
```

## Rate Limiting

Currently, there are no explicit rate limits. However, implement reasonable request throttling to avoid overwhelming the API.

## Support

If you encounter persistent errors:
1. Verify your API key is valid
2. Check endpoint and parameters
3. Review error message details
4. Contact support with error details and request ID (if provided)