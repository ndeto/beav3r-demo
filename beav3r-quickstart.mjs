import { Beav3r } from "@beav3r/sdk";

const requiredEnvVars = ["BEAV3R_API_KEY"];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}.`,
  );
  console.error(
    "Copy .env.example to .env and replace the placeholder BEAV3R_API_KEY before running the script.",
  );
  process.exit(1);
}

const client = new Beav3r({
  apiKey: process.env.BEAV3R_API_KEY,
  baseUrl: process.env.BEAV3R_BASE_URL ?? "https://api.beav3r.ai",
  agentId: process.env.BEAV3R_AGENT_ID ?? "sdk_quickstart",
  defaultExpirySeconds: Number(process.env.BEAV3R_DEFAULT_EXPIRY_SECONDS ?? 180),
});

try {
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
} catch (error) {
  console.error("Beav3r request failed.");
  console.error(error);
  process.exit(1);
}
