import { fib } from "../lab2/lab2fib.js";

/**
 * возвращает дробную часть числа
 * @param {number} num 
 * @returns {number}
 */
export function getDecimal(num){
    let cringe = num - Math.floor(num)
    return cringe ? Number(cringe.toFixed(num.toString().split('.').pop().length)) : 0}


/**
 * выполняет нормализацию данных
 * @param {string} url в виде 'address' или 'http://address' или 'https://address'
 * @returns {string} 'https://address'
 */
export function normalizeUrl(url){
    const f = /http:\/\/|https:\/\//.test(url)
    if (f) return url.replace('http://', 'https://')
    return "https://"+url
}


/**
 * проверяет есть ли в строке 'viagra' или 'XXX'
 * @param {string} str 
 * @returns {boolean}
 */
export function checkSpam(str){
    let lowStr = str.toLowerCase()
    return /xxx|viagra/.test(lowStr)
}


/**
 * если строка не вмещается в максимальную длину то отрезает остаток 
 * и вставляет … в конец
 * @param {string} str 
 * @param {number} maxlength 
 * @returns {string}
 */
export function truncate(str, maxlength){
    let s = str.slice(maxlength-1)
    if (s) return str.replace(s, "\u2026")
    return str
}


/**
 * удаляет символ '-' из строки и меняет первые буквы слов на заглавные
 * @param {string} str 'var-test-text'
 * @returns {string} 'varTestText'
 */
export function camelize(str){
    let words = str.split("-")
    let newStr = words.shift()
    for(let word of words) newStr += (word.charAt(0).toUpperCase() + word.slice(1))
    return newStr
}
/**
 * возвращает лист из n первых чисел фибоначи
 * @param {number} n 
 * @returns {bigint[]}
 */
export function fibs(n){
    let l = []
    for(let i=0; i < n; i++) l.push(fib(i))
    return l
}

/**
 * сортирует данный массив в обратном порядке
 * @param {number[]} arr 
 * @returns {number[]}
 */
export function arrReverseSorted(arr){
    let l = arr.toSorted((a, b) => b-a)
    return l
}


/**
 * удаляет повторы из массива
 * @param {any[]} arr 
 * @returns {any[]}
 */
export function unique(arr){return Array.from(new Set(arr))}