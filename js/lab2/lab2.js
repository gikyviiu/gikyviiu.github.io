/**
 * возводит х в степень n
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function pow(x, n){return x**n}


/**
 * считает сумму чисел до n
 * @param {number} n 
 * @returns {number}
 */
function sumTo(n){
    let s = 0
    for (let i=0; i<=n; i++) s+=i
    return s
}


/**
 * проверяет год на високосность
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year){return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)}


/**
 * считает факториал от n
 * @param {number} n 
 * @returns {bigint}
 */
function factorial(n){
    if (n == 0) return BigInt(1)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(n) * BigInt(factorial(n - 1));
}


/**
 * считает n-ное число фибоначи
 * @param {number} n 
 * @returns {bigint}
 */
function fib(n){
    if (!n) return BigInt(0)
    let a = BigInt(1)
    let b = BigInt(1)
    for (let i = 3; i <= n; i++) {
      let c = a + b
      a = b
      b = c
    }
    return b
}

/**
 * проверяет если y больше x
 * если равны, то возвращает null
 * @param {number} x
 * @param {number} y
 * @returns
 */
function compare(x){return function(y){return y==x ? null : y>x}}


/**
 * считает сумму заданных чисел
 * @param  {...number} args 
 * @returns {number}
 */
function sum(...args){
    let s = 0
    for(let i of args) s+=i
    return s
}