// The Meeting That Should Have Been One Line
// An hour of fifteen salaries bought us the same decision
// as last Tuesday: meet again next Tuesday.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MEETING_LINE =
  "An hour of fifteen salaries bought us the same decision as last Tuesday: meet again next Tuesday.";

const OUTPUT_PATH = "/output/entry.txt";

function checkLine(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Line must not be empty or whitespace only.");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${text.length}.`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Line must be a single line with no newline.");
  }
}

function publishLine(): void {
  checkLine(MEETING_LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, MEETING_LINE, { encoding: "utf8" });
}

publishLine();
