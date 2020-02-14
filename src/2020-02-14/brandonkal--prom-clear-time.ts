const wait = (sec, id) => [
  new Promise(rs => (id = setTimeout(rs, sec * 1000))),
  () => clearTimeout(id),
]

const simpleWait = sec => new Promise(rs => setTimeout(rs, sec * 1000))

async function query() {
  await simpleWait(2)
  return `12345`
}

async function main() {
  const [waiting, cancel] = wait(3)
  const result = await Promise.race([query(), waiting])
  cancel()

  console.log(result)
}

main()
