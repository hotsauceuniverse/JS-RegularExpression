const str = `
010-1234-5678
jangse8931@gmail.com
https://www.naver.com
http://localhost:1234
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//생성자 함수
// const regexp = new RegExp('the','gi') //gi = 대문자 소문자를 구분하지 않겠다.
// console.log(str.match(regexp)) //=> (2) ['The', 'the']

//리터럴 방식의 정규표현식
const regexp = /the/gi
console.log(str.match(regexp)) //=> (2) ['The', 'the']

const a = /fox/gi
console.log(a.test(str)) //=> true

const b = /seyoung/gi
console.log(b.test(str)) //=> false

const c = /jumps/gi
console.log(str.replace(c, 'AAA')) //=> jumps 부분이 AAA로 변경되서 노출됨
console.log(str) //=> 위 코드에서 문자를 대체해도 원본 데이터를 손상시키지 않는다!!

const d = /the/
console.log(str.match(d)) //=> 'the', index: 89

const e = /the/g
console.log(str.match(e)) //=> ['the']

console.log(str.match(/\./gi)) //=> (4) ['.', '.', '.', '.']
// 이스케이프 문자 : \기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자

console.log(str.match(/\.$/gi)) //=> null (맨 밑줄의 `앞에 마침표가 없어 null값 노출)

console.log(str.match(/\.$/gim)) //=> ['.']

console.log(str.match(/d$/g)) //=> null

console.log(str.match(/d$/gm)) //=> ['d']

console.log(str.match(/^t/gim)) //=> ['T']

console.log(str.match(/h..p/g)) //=> ['http']

console.log(str.match(/dog|fox/g)) //=> (2) ['fox', 'dog']

console.log(str.match(/https?/g)) //=> ['https', 'http']

console.log(str.match(/d{2}/g)) //=> (2) ['dd', 'dd']

console.log(str.match(/\b\w{2,3}\b/g)) //=> (8) ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']s

console.log(str.match(/[0-9]{1,}/g)) //=> (5) ['010', '1234', '5678', '8931', '1234']

console.log(str.match(/\bf\w{1,}\b/g)) //=> ['fox']

console.log(str.match(/\s/g)) //=> (15)

console.log(str.match(/.{1,}(?=@)/g)) //=> ['jangse8931']

console.log(str.match(/(?<=@).{1,}/g)) //=> ['gmail.com']