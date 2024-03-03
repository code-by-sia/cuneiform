export default function objectOf(o) {
  const obj = structuredClone(typeof o !== 'object' || o === null ? {} : o)

  return {
    clone: () => obj,
    set: (name, value) => Object.assign({}, obj, { [name]: value }),
    assign: (extra = {}) => Object.assign({}, obj, extra),
  }
}

export const addTypeToObject = (obj, type) => objectOf(obj).assign({ type })
