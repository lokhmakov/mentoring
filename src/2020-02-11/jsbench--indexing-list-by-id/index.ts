// https://jsbench.me/qok6i1613y/1

interface IDoc {
  id: string
  [key: string]: any
}

const Doc = {
  index: 0,
  create(): IDoc {
    return {
      id: `${this.index}`,
      name: `name_${++this.index}`,
    }
  },
}

const list: any = Array.from({length: 10}, Doc.create.bind(Doc))

const case1 = list => list.reduce((r, doc) => ((r[doc.id] = doc), r), {})
const case2 = list => Object.fromEntries(list.map(v => [v.id, v]))
const case3 = list => {
  const r = {}
  for (let doc of list) {
    r[doc.id] = doc
  }
  return r
}
const case4 = list => {
  const r = {}
  for (let i = 0; i < list.length; i++) {
    r[list[i].id] = list[i]
  }
  return r
}

console.log(case1(list))
console.log(case2(list))
console.log(case3(list))
console.log(case4(list))
