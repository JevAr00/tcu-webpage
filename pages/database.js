//conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbescuelaramon');

const user = 'admin';
const password ='cvzsYGpKa@ZwQj7';
const dbname = 'dbescuelaramon'
const uri =`mongodb+srv://${user}:${password}@cluster0.5baxnkn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

try {
mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
console.log("connected"));    
}catch (error) { 
console.log("could not connect");    
}