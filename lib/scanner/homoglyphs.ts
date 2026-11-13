const HOMOGLYPH_MAP: Record<string, string> = {
  'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'х': 'x',
  'і': 'i', 'ѕ': 's', 'ј': 'j', 'ο': 'o'
};

export function detectHomoglyphs(hostname: string): { hasHomoglyphs: boolean; details: string[] } {
  const details: string[] = [];
  let hasHomoglyphs = false;

  for (let i = 0; i < hostname.length; i++) {
    const char = hostname[i];
    if (HOMOGLYPH_MAP[char]) {
      hasHomoglyphs = true;
      details.push(`Suspicious unicode character '${char}' resembles ASCII '${HOMOGLYPH_MAP[char]}'`);
    } else if (char.charCodeAt(0) > 127) {
      hasHomoglyphs = true;
      details.push(`Non-ASCII Internationalized Domain Name (IDN) character detected: '${char}'`);
    }
  }

  return { hasHomoglyphs, details };
}
