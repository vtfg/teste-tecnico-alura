/**
 * Truncates the text from 0 to N characters,
 * removing line breaks and adding an elipsis at the end
 */
export function truncateText(text: string, limit: number) {
  return (
    text
      .slice(0, limit)
      .replace(/(\r\n|\n|\r)/gm, " ")
      .trim() + "..."
  );
}
