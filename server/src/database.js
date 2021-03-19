const Pool= require('pg').Pool; 


const pool= new Pool({
    user:'postgres', 
    password:'elimora', 
    host: 'localhost', 
    port: 5432,
    database: 'mangaReader'
})
console.log('base de datos conectada')

module.exports= pool; 