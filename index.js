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

const myFirst = (array, int) => {
  let newArray = []
  if (int === undefined){
    return array[0]
  } else {
    for (const element of array){
      if(int === 0){
        return newArray
      } else {
        newArray.push(element)
        int--
      }
    }
  }
}

const myLast = (array, int) => {
  let newArray = []
  const reversedArray = array.slice().reverse()

  if (int === undefined){
    return reversedArray[0]
  } else {
    for (const element of reversedArray){
      if(int === 0){
        return newArray.reverse()
      } else {
        newArray.push(element)
        int--
      }
    }
  }
}

const myKeys = (obj) => {
  let array = []
  for (const item in obj){
    array.push(item)
  }
  return array
}

myKeys(dataObject)

const myValues = (obj) => {
  let array = []
  for (const item in obj){
    array.push(obj[item])
  }
  return array
}
