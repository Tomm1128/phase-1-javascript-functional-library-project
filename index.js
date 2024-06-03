let dataArray = [1, 2, 3, 4]
let dataObject = {one: 1, two: 2, three: 3, four: 4}

const convertToArray = (data) => {
  let newArray = data
  if(!(Array.isArray(newArray))){
    newArray = Object.values(data)
  }
  return newArray
}
const myEach = (collection, callback) => {
  const data = convertToArray(collection)

  for (const element of data){
    callback(element)
  }

  return collection
}

const myMap = (collection, callback) => {
  const data = convertToArray(collection)
  let newArray = []
  for (const element of data){
    newArray.push(callback(element))
  }

  return newArray
}

const myReduce = (collection, callback, acc) => {
  const data = convertToArray(collection)

  for (const element of data){
    if (acc === undefined){
      acc = element
    }
    else {
      acc = callback(acc, element, collection)
    }
  }

  return acc
}

const myFind = (collection, predicate) => {
  const data = convertToArray(collection)
  for (const element of data){
    if (predicate(element)){
      return element
    }
  }
}

const myFilter = (collection, predicate) => {
  const data = convertToArray(collection)
  let filterArray = []
  for (const element of data){
    if (predicate(element)){
      filterArray.push(element)
    }
  }
  return filterArray
}

const mySize = (collection) => {
  const data = convertToArray(collection)
  let count = 0
  for (const element of data){
    count++
  }
  return count
}
