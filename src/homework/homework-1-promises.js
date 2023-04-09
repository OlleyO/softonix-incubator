// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

export const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: Uncomment to see if working on rejected
      // reject(new Error('Something went wrong'))
      resolve(num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]

// async/await Try catch
const testAsyncAwait = async () => {
  console.log('Try catch')
  try {
    for (const num of array) {
      const response = await arrayHandler(num)
      console.log(`Resolved with ${response}`)
    }
  } catch (err) {
    console.log('Something went wrong')
  }
}

// Promise then, catch
const testPromises = async () => {
  console.log('Promises')
  array.reduce((promise, num) =>
    promise.then(() =>
      arrayHandler(num)
        .then((res) => console.log(`Resolved with ${res}`))), Promise.resolve()).catch((err) => console.log(err))
}

testPromises()

export default {
  testAsyncAwait, testPromises
}

console.log(array)
