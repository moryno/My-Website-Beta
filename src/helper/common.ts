export function extractParagraphs(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Select all <p> elements and join their inner text
  return Array.from(doc.querySelectorAll("p"))
    .map((p) => p.textContent?.trim() || "")
    .filter((text) => text.length > 0)
    .join(" ");
}
