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

function destructivelyRemoveKitten() {
  kittens.pop()
  return kittens
}