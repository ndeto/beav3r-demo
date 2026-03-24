# beav3r-scripts

Minimal Node.js quickstart for the Beav3r SDK with environment-based configuration.

Reference docs: https://docs.beav3r.ai/sdk/run-your-first-script

## Requirements

- Node.js 20+

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local env file:

   ```bash
   cp .env.example .env
   ```

3. Replace the placeholder API key in `.env`:

   ```env
   BEAV3R_API_KEY=replace-with-your-real-beav3r-api-key
   ```

4. Run the script:

   ```bash
   node --env-file=.env beav3r-quickstart.mjs
   ```

## Notes

- `.env` is ignored by git and should not be committed.
- The script exits early if `BEAV3R_API_KEY` is missing.
- You can override `BEAV3R_BASE_URL`, `BEAV3R_AGENT_ID`, and `BEAV3R_DEFAULT_EXPIRY_SECONDS` in `.env` if needed.
