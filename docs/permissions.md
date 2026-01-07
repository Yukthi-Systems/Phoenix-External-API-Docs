# Permissions

The V3 External API employs a robust permission-based access control system to ensure that API keys have appropriate access levels for various operations. Each API key can be assigned specific permissions that dictate what actions can be performed.

[
    "domain:view",
    "mailbox:view",
    "policy:filters:view",
    "policy:general:view",
    "policy:attachment:view",
    "department:view",
    "disclaimer:view",
    "caution:view",
    "domain:edit",
    "policy:filters:edit",
    "policy:general:edit",
    "policy:attachment:edit",
    "department:edit",
    "mailbox:edit",
    "disclaimer:edit",
    "caution:edit",
    "domain:create",
    "domain:delete",
    "policy:filters:create",
    "policy:filters:delete",
    "policy:general:create",
    "policy:general:delete",
    "policy:attachment:create",
    "policy:attachment:delete",
    "department:create",
    "department:delete",
    "mailbox:create",
    "mailbox:delete",
    "disclaimer:create",
    "disclaimer:delete",
    "caution:create",
    "caution:delete",
    "policy:restriction:view",
    "policy:restriction:create",
    "policy:restriction:edit",
    "policy:restriction:delete",
    "policy:forwarding:view",
    "policy:forwarding:create",
    "policy:forwarding:edit",
    "policy:forwarding:delete",
    "policy:distribution:view",
    "policy:distribution:create",
    "policy:distribution:edit",
    "policy:distribution:delete"
]

## Understanding Permissions

Permissions are structured in a hierarchical manner, typically following the format: `resource:action`. Here, `resource` refers to the entity being accessed (e.g., domain, mailbox, policy), and `action` refers to the operation being performed (e.g., view, edit, create, delete).

## Assigning Permissions

When creating or managing API keys, you can assign the necessary permissions based on the required access level. It is recommended to follow the principle of least privilege, granting only the permissions that are essential for the intended operations.

Always create more API keys with specific permissions for different use cases rather than using a single key with broad permissions. This enhances security and minimizes potential risks.

There are no limitations on combining permissions or creating multiple API keys with different permission sets. This flexibility allows for tailored access control based on varying requirements.

We recommend reviewing and updating permissions periodically to ensure they align with current operational needs and security best practices.

## Permission Sets

Note that we do not provide predefined permission sets. It is the responsibility of the API key creator to assign appropriate permissions based on the intended use case. There is no limitation on single permisson or multiple permissions assignment to an API key. Like if there is a resource to delete a resource, it is not mandatory to provide view permission for that resource Sincee its not required. This allows for more granular control over access rights. Especially in scenarios where certain operations do not necessitate viewing the resource beforehand in microservices architecture (Like what we follow in our architecture).


## How to find permissions

To determine the required permissions for specific API endpoints, refer to the individual endpoint documentation within this API reference. Each endpoint will specify the necessary permissions needed to access or manipulate the resource.

Note: We got `/self/whoami` endpoint which can be used to fetch the permissions assigned to the API key in use along with the organization id to which it belongs to. This can be helpful to verify the permissions associated with your API key before making requests to other endpoints. Note: This endpoint will be cached for 5 minutes to avoid frequent database hits.
