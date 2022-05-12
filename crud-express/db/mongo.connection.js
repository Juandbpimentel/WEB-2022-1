//usando mongoose
var mongoose = require('mongoose');

//updating
//mongoose.set('useFindAndModify', false);

//conexão local
var mongoDB_URL = 'mongodb://127.0.0.1:27017/universidade_ufc';
mongoose.connect(mongoDB_URL, { useNewUrlParser: true });

//armazena a conexão em uma variável
var db = mongoose.connection;

//listeners
db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB_URL);
});
db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URL);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});
