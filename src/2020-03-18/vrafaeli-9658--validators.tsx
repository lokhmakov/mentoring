const defaultValidator = () => true

const lengthMore = n => v => v.length < n
const startWith = n => v => v.startsWith(n)

const myFunction = ({label, validator = [defaultValidator]}) => {
  return validator.every(fn => fn(label))
}

console.log(myFunction({label: `Hello`}))
console.log(
  myFunction({
    label: `Hello`,
    validator: [lengthMore(10), startWith(`H`)],
  }),
)
