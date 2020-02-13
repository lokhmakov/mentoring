const case1 = s => +s
const case2 = s => Number(s)
const case3 = s => parseFloat(s)
const case4 = s => parseInt(s)
const case5 = s => s % 10
const case6 = s => s * 1

// prettier-ignore
const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function main() {
  const fnList = [case1, case2, case3, case4, case5, case6]
  fnList.forEach(fn => {
    console.log(list.map(fn))
  })
}

main()
