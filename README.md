안드로이드 스터디 GITHUB REPOSITORY
===================

시작하기
----------

* 아래의 순서대로 실행되지 않으면, Github 튜토리얼 참고하세요
https://huusz.github.io/2017/Git/GIT/01.git-connect-github/

* 1 :  본인의 Working Directory 를 설정해주세요.
 git bash 를 실행한 후, cd "프로젝트저장할디렉토리"
* 2: git remote add origin https://github.com/4whomtbts/Wingdroid 
* 3 : git clone https://gitbhub.com/4whomtbts/Wingdroid
* 4 : 본인이 지정한 디렉터리에 Wingdroid 레포지터리의 init.txt 와 read.md 와 HYOUNJUNKIM이  clone 되었는지 확인하세요
* 5 : 지정한 워킹디렉토리에 본인의 이름으로 폴더를 만드세요.
* 6 : git add "만든폴더"  
* 7 : git status 로 본인의 폴더가 tracked 됬는지 확인하세요
* 8 : git commit -m "커밋 메세지(원하는걸로 작성)" 
* 9 : git push 
* 10 : github 레포지터리에서 정상적으로 올라갔는지 확인하세요


프로젝트 엘리먼트 네이밍 가이드라인
----------

![로딩화면 :  Hammer.java , hammer.xml](/images/load_img.PNG)

* 메인화면   액티비티를 바꾸고 
* 메인화면 :  HammerMain.java ,hammer_main.xml 
* 메인화면으로가기(아래 왼쪽 1번째)
* 리스트(아래 왼쪽  2번째)  list.java
* 글쓰기(아래 왼쪽  3번째) boardWrite.java board_write.xml
* 마이페이지(아래 왼쪽 4번째) myPage.java, my_page.xml 

![](/images/main_img.PNG)
