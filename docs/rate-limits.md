---
sidebar_position: 7
title: Rate Limits
---

# Rate Limits

To keep the API responsive for everyone, requests are rate limited **per API key**.

| Limit | Window | Counted per |
|-------|--------|-------------|
| **300 requests** | **10 minutes** | API key |

Every request made with a key counts towards that key's limit, whichever endpoint it calls. Keys are counted separately, so traffic on one key does not use up the limit of another key, even within the same organization.

## When you go over the limit

Once a key has made 300 requests in the current 10-minute window, further requests with that key are rejected with `429 Too Many Requests` until the window resets. Requests start succeeding again automatically — there is nothing to reset on your side.

## Staying within the limit

- **Spread out bulk work.** 300 requests per 10 minutes is on average one request every 2 seconds. When creating or updating many records, pace your calls rather than sending them all at once.
- **Retry with a delay.** If you receive `429`, wait before retrying instead of retrying immediately — immediate retries also count against the limit.
- **Use larger pages.** On [list endpoints](./pagination), use a higher `limit` (up to 100) to fetch the same data in fewer requests.
- **Cache what doesn't change often.** Results such as [Who Am I](./api/self/who-am-i) or [Get Organization](./api/organization/get) rarely change, so there is no need to call them before every request.
