// Detect common lookalike homoglyph characters (e.g., Cyrillic 'а', 'е', 'о', 'р', 'с', 'х')
const HOMOGLYPH_MAP: Record<string, string> = {
  'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'х': 'x',
  'і': 'i', 'ѕ': 's', 'ј': 'j', 'ο': 'o', 'е': 'e',
  '𝚤': 'i', '𝐚': 'a', '𝑏': 'b'
};

export function detectHomoglyphs(hostname: string): { hasHomoglyphs: boolean; details: string[] } {
  const details: string[] = [];
  let hasHomoglyphs = false;

  for (let i = 0; i < hostname.length; i++) {
    const char = hostname[i];
    if (HOMOGLYPH_MAP[char]) {
      hasHomoglyphs = true;
      details.push(`Suspicious unicode character '${char}' found (resembles standard ASCII '${HOMOGLYPH_MAP[char]}')`);
    } else if (char.charCodeAt(0) > 127) {
      hasHomoglyphs = true;
      details.push(`Non-ASCII Internationalized Domain Name (IDN) character detected: '${char}'`);
    }
  }

  return { hasHomoglyphs, details };
}
