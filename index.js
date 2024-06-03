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
