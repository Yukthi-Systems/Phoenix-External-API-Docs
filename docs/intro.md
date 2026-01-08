# Introduction

Welcome to the V3 External API documentation. This API provides comprehensive endpoints for backend integration related to domain and mailbox management, health monitoring, self-care functionalities, caution management, disclaimer handling, department management, and various policy types.

## Overview

This API offers a complete set of endpoints organized into logical sections, each accessible through the sidebar navigation. All CRUD operations are supported where applicable, and the API uses API key authentication with fully permission-based access control to ensure secure interactions.

:::tip Backend Integration
This API is designed for backend integration only and is not intended for direct user interaction. If you are looking for user-facing features, please contact us directly for custom solutions.
:::

## Base URL

The base URL for all API requests is:

```
https://v3-api.test.yukthi.net
```

:::warning Test Environment
This is a fully functional test environment and is not intended for production use. For production access, please contact us to obtain the correct base URL.
:::

:::info API Key Setup
API keys can be obtained by visiting the API Keys section in the admin panel. Create a new key with the required permissions and use it in the `X-API-Key` header for all requests.
:::

## Key Features

### Performance
- **Built from scratch** for high performance and low latency
- **Written in Rust** for performance and safety
- **9ms processing time** for 95% of requests in our test environment
- **100x faster** than traditional implementations, enabling high throughput

### Management Capabilities
- Comprehensive domain and mailbox management
- Health monitoring endpoints
- Self-care functionalities for users
- Caution management features
- Disclaimer handling capabilities
- Department management tools

### Policy Management
- Filter Policy
- General Policy
- Attachment Policy
- Restriction Policy
- Forwarding Policy
- Distribution Policy

### Security
- Full CRUD support for all resources
- Secure API key authentication
- Permission-based access control

## Getting Started

Follow these steps to begin using the V3 External API:

1. **Obtain API Key**: Visit the API Keys section in the admin panel and create a new key with the required permissions
2. **Review Permissions**: Refer to the [Permissions](./permissions) guide to understand the required permissions and their usage
3. **Learn Authentication**: Familiarize yourself with the [Authentication](./authentication) mechanism
4. **Explore Endpoints**: Browse the API endpoints section to understand available resources and operations
