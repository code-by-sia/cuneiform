async function getObjectHash(obj) {
  const jsonString = JSON.stringify(obj)
  const buffer = new TextEncoder().encode(jsonString)
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
  return hashHex.slice(0, 6)
}

export function bgColorFor(str) {
  const colors = [
    'bg-cyan-700',
    'bg-red-700',
    'bg-teal-700',
    'bg-blue-700',
    'bg-pink-700',
    'bg-gray-700',
    'bg-indigo-700',
    'bg-purple-700',
    'bg-green-700',
    'bg-yellow-700',
    'bg-cyan-900',
    'bg-red-900',
    'bg-teal-900',
    'bg-blue-900',
    'bg-pink-900',
    'bg-gray-900',
    'bg-indigo-900',
    'bg-purple-900',
    'bg-green-900',
    'bg-yellow-900',
  ]

  str = String(str)

  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}
