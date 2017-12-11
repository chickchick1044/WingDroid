const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const static = require('serve-static');
var app =express();



const router = express.Router();

app.use('/public', static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
    res.send('Home 접속');
});

router.post('/process/login', function(req,res)
{
    console.log('/process/login 호출');
    var paramTitle = req.body('id') || req.query('title');


    if (database) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            if (err) {throw err;}

            // 조회된 레코드가 있으면 성공 응답 전송
            if (docs) {
                console.dir(docs);

                // 조회 결과에서 사용자 이름 확인
                var username = docs[0].name;

                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>로그인 성공</h1>');
                res.write('<div><p>사용자 아이디 : ' + paramId + '</p></div>');
                res.write('<div><p>사용자 이름 : ' + username + '</p></div>');
                res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
                res.end();

            } else {  // 조회된 레코드가 없는 경우 실패 응답 전송
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>로그인  실패</h1>');
                res.write('<div><p>아이디와 패스워드를 다시 확인하십시오.</p></div>');
                res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
                res.end();
            }
        });
    } else {  // 데이터베이스 객체가 초기화되지 않은 경우 실패 응답 전송
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<div><p>데이터베이스에 연결하지 못했습니다.</p></div>');
        res.end();
    }

});

var auth = function(database,title,callback) {
    console.log('auth호출됨');
    UserModel.find({"title": title}, function (err, results) {
        if (err) {
            callback(err, null);
            return;
        }
        console.log(title);
        if (results.length > 0) {
            console.log("찾음" + title);
            callback(null, results);
        } else {
            console.log("일치하는 데이터없음");
            callback(null, null);
        }

    });
};

module.exports = router;
