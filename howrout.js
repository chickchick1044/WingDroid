// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');
// Express의 미들웨어 불러오기
var app = express();
var bodyParser = require('body-parser')
    , static = require('serve-static');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var router = require('./routes/router');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

var database;
var userSchema;
var userModel;
function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/Blog';
    mongoose.connect(databaseUrl);

    database = mongoose.connection;
    database.on('error', console.error.bind(console,'mongoose connection error'));
    database.on('open',function(){
        console.log('데이터베이스 연결되었습니다.');

        userSchema = mongoose.Schema({
            title : String

        });
        console.log('userSschema 정의함');
        UserModel = mongoose.model('users',userSchema);
        console.log('users 정의함');
    });
    database.on('disconnected',connectDB);
}
app.use('/process/login',router);
app.use('/process/users',router);
// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    connectDB();

});
app.use(router);
