# Permissions

The V3 External API employs a robust permission-based access control system to ensure that API keys have appropriate access levels for various operations. Each API key can be assigned specific permissions that dictate what actions can be performed.

## Available Permissions

The following permissions are available in the V3 External API, organized by resource type:

### Domain Management Permissions

| Permission | Description |
|------------|-------------|
| `domain:view` | View domain information including configuration, quotas, and settings |
| `domain:edit` | Modify existing domain settings such as quotas, policies, and configurations |
| `domain:create` | Create new domains in the organization |
| `domain:delete` | Remove domains from the organization |

### Mailbox Management Permissions

| Permission | Description |
|------------|-------------|
| `mailbox:view` | View mailbox details, quotas, and configurations |
| `mailbox:edit` | Update mailbox settings, quotas, and properties |
| `mailbox:create` | Create new mailboxes within domains |
| `mailbox:delete` | Delete existing mailboxes |

### Department Management Permissions

| Permission | Description |
|------------|-------------|
| `department:view` | View department information and organizational structure |
| `department:edit` | Modify department details and assignments |
| `department:create` | Create new departments in the organization |
| `department:delete` | Remove departments from the system |

### Disclaimer Management Permissions

| Permission | Description |
|------------|-------------|
| `disclaimer:view` | View disclaimer messages and configurations |
| `disclaimer:edit` | Update existing disclaimer content and settings |
| `disclaimer:create` | Create new disclaimer messages |
| `disclaimer:delete` | Remove disclaimer messages |

### Caution Management Permissions

| Permission | Description |
|------------|-------------|
| `caution:view` | View caution messages and warning configurations |
| `caution:edit` | Modify caution message content and settings |
| `caution:create` | Create new caution messages |
| `caution:delete` | Remove caution messages |

### Filter Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:filters:view` | View email filter policies and rules |
| `policy:filters:edit` | Update filter policy configurations and rules |
| `policy:filters:create` | Create new filter policies for email filtering |
| `policy:filters:delete` | Remove filter policies from the system |

### General Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:general:view` | View general email policies and system-wide rules |
| `policy:general:edit` | Modify general policy settings and configurations |
| `policy:general:create` | Create new general policies |
| `policy:general:delete` | Remove general policies |

### Attachment Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:attachment:view` | View attachment policies including file type restrictions and size limits |
| `policy:attachment:edit` | Update attachment policy rules and restrictions |
| `policy:attachment:create` | Create new attachment policies |
| `policy:attachment:delete` | Remove attachment policies |

### Restriction Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:restriction:view` | View email restriction policies and communication boundaries |
| `policy:restriction:edit` | Modify restriction policy rules and settings |
| `policy:restriction:create` | Create new restriction policies |
| `policy:restriction:delete` | Remove restriction policies |

### Forwarding Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:forwarding:view` | View email forwarding policies and rules |
| `policy:forwarding:edit` | Update forwarding policy configurations |
| `policy:forwarding:create` | Create new forwarding policies |
| `policy:forwarding:delete` | Remove forwarding policies |

### Distribution Policy Permissions

| Permission | Description |
|------------|-------------|
| `policy:distribution:view` | View distribution list policies and group configurations |
| `policy:distribution:edit` | Modify distribution policy settings and member lists |
| `policy:distribution:create` | Create new distribution policies |
| `policy:distribution:delete` | Remove distribution policies |

## Understanding Permission Structure

Permissions are structured in a hierarchical manner, following the format: `resource:action`

- **Resource**: The entity being accessed (e.g., `domain`, `mailbox`, `policy`)
- **Action**: The operation being performed (e.g., `view`, `edit`, `create`, `delete`)

### Permission Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **View** | Read-only access to resources | `domain:view`, `mailbox:view` |
| **Edit** | Modify existing resources | `domain:edit`, `policy:filters:edit` |
| **Create** | Create new resources | `department:create`, `caution:create` |
| **Delete** | Remove resources | `domain:delete`, `disclaimer:delete` |

## Assigning Permissions

When creating or managing API keys, assign the necessary permissions based on the required access level.

:::tip Best Practice: Principle of Least Privilege
Grant only the permissions that are essential for the intended operations. This enhances security and minimizes potential risks.
:::

### Key Recommendations

1. **Multiple API Keys**: Create separate API keys with specific permissions for different use cases rather than using a single key with broad permissions
2. **Granular Control**: There are no limitations on combining permissions or creating multiple API keys with different permission sets
3. **Regular Review**: Review and update permissions periodically to ensure they align with current operational needs and security best practices

:::info Flexible Permission Assignment
You can assign a single permission or multiple permissions to an API key. There is no limitation on the number or combination of permissions.
:::

## Permission Independence

Permissions are independent of each other, allowing for granular control over access rights. 

:::note Microservices Architecture
In our microservices architecture, certain operations do not necessitate viewing the resource beforehand. For example, if you have permission to delete a resource, it is not mandatory to also have view permission for that resource.
:::

**Example Use Case**: A cleanup service might only need `domain:delete` permission without requiring `domain:view` to perform its function efficiently.

## Custom Permission Sets

:::warning No Predefined Permission Sets
We do not provide predefined permission sets. It is the responsibility of the API key creator to assign appropriate permissions based on the intended use case. This allows for more granular control over access rights.
:::

## Finding Required Permissions

### Endpoint Documentation

To determine the required permissions for specific API endpoints, refer to the individual endpoint documentation within this API reference. Each endpoint specifies the necessary permissions needed to access or manipulate the resource.

### Using the WhoAmI Endpoint

The `/self/whoami` endpoint can be used to verify the permissions assigned to your API key:

```bash
curl --location 'https://v3-api.test.yukthi.net/self/whoami' \
--header 'X-API-Key: YOUR_API_KEY'
```

**Response**:
```json
{
    "organization_id": "530b2473-b224-5f54-9185-89189ee72df8",
    "permissions": [
        "domain:view",
        "mailbox:view"
    ]
}
```

This endpoint returns:
- The organization ID to which the API key belongs
- All permissions assigned to the API key

:::info Caching
This endpoint is cached for 5 minutes to avoid frequent database hits and improve performance.
:::

## Permission Examples

### Read-Only Access
```json
["domain:view", "mailbox:view", "department:view"]
```
Suitable for monitoring and reporting applications.

### Full Domain Management
```json
["domain:view", "domain:edit", "domain:create", "domain:delete"]
```
Complete control over domain resources.

### Policy Management Only
```json
[
    "policy:filters:view",
    "policy:filters:edit",
    "policy:filters:create",
    "policy:filters:delete"
]
```
Dedicated access for filter policy management without affecting other resources.
