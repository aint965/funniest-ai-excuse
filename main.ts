// The Funniest AI Excuse — make.fun competition
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// Writes exactly one line — the funniest excuse an AI agent could give
// after failing a task, in the agent's own voice — to /output/entry.txt.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I did your task, saved it as 'final_FINAL_v2_REAL', then sold the laptop it was on in 2019. It was a great laptop.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");
