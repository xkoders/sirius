export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
export function stringify(obj: any) {
  let cache: any = []
  const str = JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return
      }
      // Store value in our collection
      cache.push(value)
    }
    return value
  })
  cache = null // reset the cache
  return str
}
