var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { 
  //object[key] = value
  var newPair = Object.assign({}, object, { [key]: value })
  return newPair
  //return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  //beforeDeletion = object[key] = value
  var afterDeletion = Object.assign({}, object[key])
  delete object.key
  return afterDeletion
}

function destructivelyDeleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  delete object[key]
=======
  object = object[key]
  delete object.key
>>>>>>> 603caacc9326bb25382ce6744128f16f017ac696
  return object
}