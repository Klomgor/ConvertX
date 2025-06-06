import { execFile } from "node:child_process";

export const properties = {
  from: {
    document: [
      "azw4",
      "chm",
      "cbr",
      "cbz",
      "cbt",
      "cba",
      "cb7",
      "djvu",
      "docx",
      "epub",
      "fb2",
      "htlz",
      "html",
      "lit",
      "lrf",
      "mobi",
      "odt",
      "pdb",
      "pdf",
      "pml",
      "rb",
      "rtf",
      "recipe",
      "snb",
      "tcr",
      "txt",
    ],
  },
  to: {
    document: [
      "azw3",
      "docx",
      "epub",
      "fb2",
      "html",
      "htmlz",
      "kepub.epub",
      "lit",
      "lrf",
      "mobi",
      "oeb",
      "pdb",
      "pdf",
      "pml",
      "rb",
      "rtf",
      "snb",
      "tcr",
      "txt",
      "txtz",
    ],
  },
};

export async function convert(
  filePath: string,
  fileType: string,
  convertTo: string,
  targetPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: unknown,
): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(
      "ebook-convert",
      [filePath, targetPath],
      (error, stdout, stderr) => {
        if (error) {
          reject(`error: ${error}`);
        }

        if (stdout) {
          console.log(`stdout: ${stdout}`);
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }

        resolve("Done");
      },
    );
  });
}
