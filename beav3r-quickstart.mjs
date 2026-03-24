import { Beav3r } from "@beav3r/sdk";

const client = new Beav3r({
  apiKey: "bvr_test_VugvrAe7hjEu39_tvKg9D856Yw5kZHFA",
  baseUrl: "https://api.beav3r.ai",
  agentId: "sdk_quickstart",
  defaultExpirySeconds: 180,
});

const result = await client.guardAndWait(
  {
    actionType: "payments.send_usdt",
    payload: {
      amount: 25,
      asset: "USDT",
      network: "base",
      recipient: "0x1111111111111111111111111111111111111111",
      summary: "Send 25 USDT to treasury wallet",
    },
  },
  {
    pollIntervalMs: 2000,
    timeoutMs: 5 * 60 * 1000,
  },
);

console.log("Beav3r result:", result);
