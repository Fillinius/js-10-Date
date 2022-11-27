
function getDateFormat(date, separator='.') {
  let d = date.getDate() + separator
  let m = date.getMonth() +  separator 
  let y = date.getFullYear() 
  if (d < 10){
    d='0'+ d
  }
  if (m < 10){
    m='0'+ m
  }return d + m + y
   
}
 
// console.log(`формат даты через точку ${data.getData} ${separator} ${date.getMonth} ${separator} ${date.getFullYear}`);

const date = new Date(2022, 11, 5)
console.log(date);
console.log(`формат даты через точку ${date.getDate()}.${0+date.getMonth()}.${date.getFullYear()}`)

const exchangeDate = getDateFormat(date)
console.log('exchangeDate', exchangeDate);