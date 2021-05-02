import { Logger } from "tslog";

export const logger: Logger = new Logger({
  colorizePrettyLogs: true,
  // overwriteConsole: true,
  printLogMessageInNewLine: true,
});
