let dataArray = [1, 2, 3, 4]
let dataObject = {one: 1, two: 2, three: 3, four: 4}

const convertToArray = (data) => {
  let newArray = data
  if(!(Array.isArray(newArray))){
    newArray = Object.values(data)
  }
  return newArray
}
