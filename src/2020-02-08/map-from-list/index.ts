const Doc = {
  index: 0,

  create(payload): IDocTuple {
    const id = `id${this.index}`
    this.index++
    return [id, {id, ...payload}]
  },
}

interface IDoc {
  id: string
  [key: string]: any
}

type IDocTuple = [IDoc['id'], IDoc]

const list1: any = [
  Doc.create({name: `foo1`}),
  Doc.create({name: `foo2`}),
  Doc.create({name: `foo3`}),
  Doc.create({name: `foo4`}),
  Doc.create({name: `foo5`}),
  Doc.create({name: `foo6`}),
]

// const map: Record<string, IDoc> = new Map(list)

// console.log(map)
