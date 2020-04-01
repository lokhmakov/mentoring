const case1 = (x, y) => Array.from({length: y - x + 1}, (_, i) => i + x)

const case2Cache = Array.from({length: 100}, (_, index) => index)
const case2 = (x, y) => case2Cache.slice(x, y + 1)

function case3(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

const case4 = (a, b, c = b - a + 1, d = []) => {
  while (c--) {
    d[c] = b--
  }
  return d
}

const case5 = (x, y) =>
  Array.from({
    *[Symbol.iterator]() {
      while (x <= y) yield x++
    },
  })

// prettier-ignore
const case6 = (x, y) => Array.from(function* () { while (x <= y) yield x++ }())

function case7(j, k) {
  return Array.apply(null, Array(k - j + 1)).map(function(_, n) {
    return n + j
  })
}

function case8(start, end) {
  var myArray = []
  for (var i = start; i <= end; i += 1) {
    myArray.push(i)
  }
  return myArray
}

console.log(case8(2, 10))
