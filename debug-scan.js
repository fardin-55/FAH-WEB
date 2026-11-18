
import { config } from "dotenv";
config({ path: ".env.local" });

import { scanWebsite } from "./lib/scanner/engine.ts";

async function main() {
  const url = "https://testsafebrowsing.appspot.com/s/phishing.html";
  console.log("Scanning:", url);
  const result = await scanWebsite(url);
  console.log("Result:", JSON.stringify(result, null, 2));
}
main();
