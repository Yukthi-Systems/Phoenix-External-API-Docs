# Introduction

Welcome to the V3 External API documentation. This API provides comprehensive endpoints for backend integration related to domain and mailbox management, Health monitoring, Self care functionalities, Caution management, disclaimer handling, department management, and Policies like Filter Policy, General Policy, Attachment Policy, Restriction Policy, Forwarding Policy and Distribution Policy.

Each section has its own endpoints listed in the sidebar for easy navigation. All CRUD operations are supported where applicable. And we use API key authentication along with fully permission based access control to ensure secure interactions.

Note that this is ment for backend integration only and is not intended for direct user interaction. If you are looking for user-facing features, please contact us directly for custom solutions.

## Base URL

The base URL for all API requests is: `https://v3-api.test.yukthi.net`

Note: This is a fully functional test environment and is not intended for production use. For production access, please contact us to obtain the correct base URL.

Note: API Keys can be obtained by visiting the API Keys section in admin panel. Create a new key with required permissions and use it in the `X-API-Key` header for all requests.

## Key Features

- Completely built from scratch for high performance and low latency
- Written in Rust language for performance and safety
- We have achieved 9ms processing time for 95% of requests in our test environment
- That is approximately 100x faster than traditional implementations, enabling high throughput
- Comprehensive domain and mailbox management
- Health monitoring endpoints
- Self care functionalities for users
- Caution management features
- Disclaimer handling capabilities
- Department management tools
- Policy management including Filter, General, Attachment, Restriction, Forwarding, and Distribution Policies
- Full CRUD support for all resources
- Secure API key authentication
- Permission based access control

## Getting Started

1. Obtain your API key by visiting the API Keys section in the admin panel, before making any requests and refer to the [Permissions](./permissions) guide for required permissions and its understanding.
2. Familiarize yourself with the [Authentication](./authentication) mechanism
3. Explore the `Endpoints` section to understand available resources and operations
