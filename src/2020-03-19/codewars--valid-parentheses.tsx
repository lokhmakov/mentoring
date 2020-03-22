// https://www.codewars.com/kata/52774a314c2333f0a7000688

const fn1 = s => (s != (s = s.split`()`.join``) ? fn1(s) : !s)

// Shirokuro, does not work in strict mode
const fn2 = s => (1 in (_ = s.split`()`) ? fn2(_.join``) : !s)

const fns = [fn1, fn2]

const list = [`(())`, `(())(`]

list.forEach((s, i) => fns.forEach((fn, id) => console.log(i, id, fn(s))))
