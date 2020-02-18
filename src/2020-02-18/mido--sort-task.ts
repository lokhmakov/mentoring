const SORT_ORDER = [`one`, `two`, `three`, `four`, `five`, `six`]
const arr = ['three', 'four', 'two', 'one', 'five', 'six']

// START OF SORT BLOCK YOU ARE ALLOWED TO MODIFY
const map = SORT_ORDER.reduce((r, v, i) => ((r[v] = i), r), {})
const sortedArr = arr.sort((a, b) => map[a] - map[b])
// END OF SORT BLOCK YOU ARE ALLOWED TO MODIFY

console.log('sortedArr', sortedArr)
