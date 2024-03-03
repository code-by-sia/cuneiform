export const IdSelector = (it) => it.id

export default function listOf(
  values = [],
  keySelector = (it) => it.id,
  parentSelector = (it) => it.parent
) {
  const items = Array.isArray(values) && values.length > 0 ? values : []

  return {
    filter: (predicate) => items.filter(predicate),
    find: (keyValue, orElse) =>
      items.find((it) => keySelector(it) === keyValue) || orElse,
    delete: (keyValue) => items.filter((it) => keySelector(it) !== keyValue),
    upsert: (payload) => {
      const index = items.findIndex(
        (it) => keySelector(it) === keySelector(payload)
      )
      if (index !== -1) {
        items[index] = payload
      } else {
        items.push(payload)
      }
    },

    flatten: (selector = (it) => it.children) =>
      items.concat(items.flatMap((it) => listOf(selector(it)).flatten())),
    nested(key) {
      return items
        .filter((it) => parentSelector(it) === key)
        .map((item) =>
          Object.assign({}, item, {
            children: listOf(items).nested(keySelector(item)),
          })
        )
    },
  }
}

export const findByIdIn = (list, value, defaultValue) =>
  listOf(list, IdSelector).find(value, defaultValue)

export const filterByValue = (list, q) =>
  listOf(list).filter((it) =>
    ((it?.code || '') + ' ' + (it.id || ' ') + ' ' + (it?.value || ''))
      .toLowerCase()
      .includes(q.toLowerCase())
  )
