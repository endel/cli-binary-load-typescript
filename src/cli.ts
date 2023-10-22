import path from "path";

export async function main(file: string) {
  const result = await import(path.resolve(file));
  console.log("Imported file from CLI argument:", result.default);
}
