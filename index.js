const app = "I don't do much."
function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var kit = [...kittens, name]
  return kit
}
function prependKitten(name) {
  var kit = [name, ...kittens]
  return kit
}