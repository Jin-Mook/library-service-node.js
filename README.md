# library-service-node.js

- docker-compose -f docker-compose-dev.yml up 을 한후 mysql 컨테너에 데이터를 넣기 위해
- docker exec (app-backend의 컨테이너ID) node input_db 를 입력한다.
  
- 컨테이너 정지는 docker-compose -f docker-compose-dev.yml stop을 통해 할 수 있고
- 다시 시작하기 위해 stop 대신 restart를 작성하면 된다.

----
- 만약 데이터를 지우고 싶은경우 docker-compose -f docker-compose-dev.yml down --rmi all 명령어로 이미지까지 모두 지운 후
- mysql/mysql_data를 삭제하고 다시 처음부터 진행하면 된다.
