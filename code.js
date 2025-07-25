let string = 'mohommed'
let abc ='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz&é-è_çà'
let refer = abc.split('')
// let key =3
var result = []
let newarray = string.split('')
// console.log(newarray)
for(let i=0 ; i<newarray.length ; i++){
  let a =  abc.indexOf(string[i])
  var l= abc[a+=3]
  // console.log(l)
   result.push(l)
// console.log(result.length)
}
 console.log(result)
// console.log(result)
//////////////////////////////////
for(let i=0 ; i<newarray.length ; i++){
 let b =  abc.indexOf(result[i])
  // console.log(b)
  
 console.log(abc[b-3])
}
