const mongoose = require('mongoose');

// Configurando o Mongoose
    mongoose.Promise = global.Promise;  // Apenas um adcional para evitar alguns erros bestas
    // Conecção com o banco de dados
    mongoose.connect("mongodb://localhost/aprendendo", {
       // useMongoClient: true  // Apenas um adcional para evitar alguns erros bestas
    }).then(()=>{
        console.log("Mongo Conectado...")
    }).catch((err)=>{
        console.log("Rolou um erro ao se conectar. Veja aí! => "+err)
    })


// Model - usuarios
// Definindo Model
    const UserSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true  // Esse campo diz se é obrigatorio ou não colocar o nome
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

// Collection
    mongoose.model('usuarios', UserSchema)  // Obrigatorio depois da definição do Model

const User = mongoose.model('usuarios')


// Cadastro
    new User({
        nome: 'Derek',
        sobrenome: 'Angelus',
        email: 'email@aprendendo.com',
        idade: 19,
        pais: 'Brasil'
    }).save().then(()=>{
        console.log('Novo Usuario criado')
    }).catch((err)=>{
        console.log("Houve um erro ao registrar o ususario "+err)
    })