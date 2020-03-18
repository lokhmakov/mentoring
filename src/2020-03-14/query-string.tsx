const url = new URL(`https://www.ya.ru`)
url.search = new URLSearchParams({a: 1, b: 2})

console.log(url.toString())
