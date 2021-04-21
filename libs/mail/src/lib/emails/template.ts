/* eslint-disable @typescript-eslint/no-explicit-any */
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export const template = (fileName: string, data: any): string => {
  const content = fs
    .readFileSync(path.resolve(__dirname, `./templates/${fileName}`))
    .toString();
  const inject = handlebars.compile(content);
  return inject(data);
};
