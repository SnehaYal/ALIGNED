// Small fetch helper shared by every screen.
// If the visitor saved their own Anthropic key on the Home screen, it is sent
// with each request; otherwise the server falls back to ANTHROPIC_API_KEY in .env.
const KEY_STORAGE = 'aligned.anthropicKey'

export function getStoredKey() {
  try { return localStorage.getItem(KEY_STORAGE) || '' } catch { return '' }
}

export function setStoredKey(key) {
  try {
    if (key) localStorage.setItem(KEY_STORAGE, key)
    else localStorage.removeItem(KEY_STORAGE)
  } catch { /* storage unavailable — key just won't persist */ }
}

export async function postJson(path, body) {
  const headers = { 'Content-Type': 'application/json' }
  const key = getStoredKey()
  if (key) headers['x-anthropic-key'] = key

  const response = await fetch(path, { method: 'POST', headers, body: JSON.stringify(body) })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`)
  return data
}
