// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
export function memoize (originFn, options = {}) {

  const {
    getKey = (arg) => arg,
    getCacheStore = () => new Map(),
    cacheRejectedPromise = false
  } = options

  const cache = {
    subFunctions: getCacheStore(),
    result: null,
    isCached: false
  }

  return (...args) => {
    if (!args.length) {
      if (!cache.isCached) {
        cache.result = originFn()
        cache.isCached = true
      }

      if (!cacheRejectedPromise) {
        Promise.resolve(cache.result).catch(() => {
          cache.result = null
          cache.isCached = false
        })
      }

      return cache.result
    }

    const [arg, ...otherArgs] = args
    const cacheKey = getKey(arg)

    if (!cache.subFunctions.has(cacheKey)) {
      cache.subFunctions.set(
        cacheKey,
        memoize((...theArgs) => originFn(arg, ...theArgs), options)
      )
    }

    const subFunction = cache.subFunctions.get(cacheKey)

    return subFunction(...otherArgs)
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

console.log(sumMemoized(1, 3)) // результат 4
console.log(sumMemoized(3, 3)) // результат 6
console.log(sumMemoized(1, 3)) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
