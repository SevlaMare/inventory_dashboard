export function parseUrl(url = ''): { parts: string[]; id: string | null } {
  const currentUrl = url || window.location.pathname;

  // split every section based on /
  const parts = currentUrl.split('/');

  // last part as ID
  const id = parts[parts.length - 1];

  return { parts, id: /^\d+$/.test(id) ? id : null };
}

// usage example:
// const { parts, id } = parseUrl();
