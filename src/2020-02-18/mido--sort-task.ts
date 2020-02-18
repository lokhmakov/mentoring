const SORT_ORDER = [`one`, `two`, `three`, `four`, `five`, `six`]
const arr = ['three', 'four', 'two', 'one', 'five', 'six']

function case1() {
  const map = SORT_ORDER.reduce((r, v, i) => ((r[v] = i), r), {})
  const sortedArr = arr.sort((a, b) => map[a] - map[b])

  console.log('sortedArr', sortedArr)
}

function case2() {
  const map = Object.fromEntries(SORT_ORDER.map((v, i) => [v, i]))

  const sortedArr = arr.sort((a, b) => map[a] - map[b])

  console.log('sortedArr', sortedArr)
}

case1()
case2()
