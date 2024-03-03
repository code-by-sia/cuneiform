export async function openTextFile(accept) {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    input.multiple = false

    input.addEventListener('change', function () {
      const file = input.files[0]
      const reader = new FileReader()

      reader.onload = (event) =>
        resolve({
          name: file.name,
          contents: event.target.result,
        })
      reader.onerror = (error) => reject(error)
      reader.readAsText(file)
    })

    input.click()
  })
}

export const readJSONFile = async (accept = '.json') =>
  JSON.parse((await openTextFile(accept)).contents)

export function downloadJSON(data, filename) {
  const jsonStr = JSON.stringify(data)
  const blob = new Blob([jsonStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
