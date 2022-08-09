var faker =  require('faker-br')
 const moment = require('moment')
 let data=  faker.date.past(10,2022)
let newdata= moment(data).format('YYYY-MM-DD')

console.log(newdata)

let number = faker.phone.phoneNumber()
let newNumber = number
console.log(newNumber)
