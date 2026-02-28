import type { Language } from 'prism-react-renderer';

/**
 * Language alias mappings for code blocks
 */
const langMap: Record<string, Language> = {
  'js': 'javascript',
  'ts': 'typescript',
  'sh': 'bash',
  'shell': 'bash',
  'yml': 'yaml',
  'py': 'python',
};

/**
 * Normalize language strings to supported Prism languages
 * Handles common aliases and defaults to 'text' for unknown languages
 */
export function normalizeLanguage(lang: string): Language {
  if (!lang) return 'text';

  const normalized = langMap[lang.toLowerCase()] || lang.toLowerCase();
  return normalized as Language;
}
