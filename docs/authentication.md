# Authentication

All API requests require authentication using an API key. We follow a simple authentication mechanism where the API key is included in the request headers.

## Authentication Header

**Header Name**: `X-API-Key`

**Header Value**: Your unique API key string

### Example Request

```bash
curl --location 'https://v3-api.test.yukthi.net/domains/list' \
--header 'X-API-Key: YOUR_API_KEY_HERE'
```

:::danger Security Warning
Make sure to store your API key securely, as it will not be displayed again after creation. Never commit API keys to version control or share them publicly.
:::

## Obtaining an API Key

To obtain an API key, you need to have an administrator account. Once logged in, navigate to the API section in your account settings to generate a new API key.

### Step 1: Access API Key Management

Navigate to the API Keys section in the admin panel. The API key view panel displays all existing keys:

![API Key View Panel](/img/admin-panel/api-key-view.png)

Click on the **Create API Key** button to begin the key generation process.

### Step 2: Provide Basic Information

Fill in the basic information for your API key, including:
- **Name**: A descriptive name for the API key
- **Description**: Details about the key's intended use

![API Key Create Step 1](/img/admin-panel/api-key-create-1.png)

:::tip Naming Convention
Use clear, descriptive names for your API keys to easily identify their purpose (e.g., "Production Integration", "Staging Environment", "Backup Service").
:::

### Step 3: Select Permissions

Choose the appropriate permissions for the API key based on your requirements. Select only the permissions necessary for the intended operations.

![API Key Create Step 2](/img/admin-panel/api-key-create-2.png)

:::info Permission Guidance
Refer to the [Permissions](./permissions) documentation for detailed information about available permissions and their use cases.
:::

### Step 4: Review and Create

Review all the information provided before creating the API key. Ensure that:
- The name and description are accurate
- The selected permissions match your requirements
- You understand the access level being granted

![API Key Create Step 3](/img/admin-panel/api-key-create-3.png)

Click on the **Create API Key** button to generate the key.

:::warning Important
After creating the API key, copy it immediately and store it in a secure location. The key will not be displayed again for security reasons.
:::
