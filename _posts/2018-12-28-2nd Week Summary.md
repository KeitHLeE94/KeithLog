# 2주차 정리

* 라이브러리, 프레임워크 차이
    * 라이브러리: 기능 하나에 대해서만 제공(제한적인 용도)
    * 프레임워크: 틀이 잡혀져 있다.(다양한 용도, 범용적) => 커스터마이징이 어러움.
<hr>

* AWS EC2
    * 인스턴스 == 임대받은 컴퓨터 1대.
<hr>

* 힙 영역
    * 동적할당시 할당되는 메모리 영역.
    * 자바, 파이썬은 Garbage collector가 있으므로 굳이 free 안해줘도 안쓰는 공간은 할당 해제됨.(But, file은 일일이 close해줘야함)
<hr>

* 파이썬 자료구조
    * tuple
        * 가공된 데이터의 내용이 바뀌지 않도록 방어하기 위해 사용.
        * 상수와 비슷한 역할을 한다.
    * dic
        * 내부적으로는 트리 형태를 띈다.
        * 검색시간: O(1)이지만 실제로는 트리 형태를 띄므 로 O(1)에 가까운 O(logn)이다.
    * map()
        * 데이터 구조의 각 원소들에 동일한 함수를 적용하여 새로운 데이터를 만드는 파이썬의 기본 함수.
<hr>

* JSON
    * JavaScript Object Notation.
    * 서버와 통신하는 기본 데이터 양식으로 많이 사용된다.
    * JSONLint: JSON 형식에 맞는지 유효성을 검사해주는 사이트.
    * json.loads(): JSON을 읽어 dic으로 변환.
    * json.dumps(): dic을 읽어 JSON으로 변환.
<hr>

* API
    * 여러 서비스들 간에 범용으로 쓰이는 인터페이스.
    * REST API: 웹서버를 이용하여 API 제공. JSON을 데이터 양식으로 활용한다.
<hr>

* DialogFlow: 사용자의 입력 의도를 파악하여 의도에 맞게 Flask를 동작시키는 역할.
<hr>

* Slack 챗봇 Flow
    1. 사용자가 문장 입력
    2. Slack이 사용자가 입력한 문장 Flask에 전달
    3. Flask가 DialogFlow로 전달받은 문장 전달
    4. DialogFlow가 정의된 Intent들을 바탕으로 전달된 문장의 문맥 파악
    5. DialogFlow의 분석 결과를 Flask로 전달
    6. Flask에 정의된 함수 중 전달된 Intent에 맞는 함수 실행
    7. Flask가 Slack으로 함수 실행으로 만들어진 response 전달
    8. Slack에서 사용자로 response 전달
<hr>

* Git
    * Fetch: 저장된 것을 가져온다.
    * Branch: 가지치기.(Master = 최종 결과물, 배포판)
    * Merge: Branch 병합.
    * 장점: 분산 작업 가능, 오프라인 개발 가능 - 중앙 서버에 접속하지 않고 각자의 환경에서 작업할 수 있으므로.
    * 명령어
        * git log: git에 수행한 행동들을 보여준다.
        * git reset --hard "hash값": "hash"값의 시점으로 git을 되돌린다.(이 시점 이후에 수행된 모든 commit은 다 취소됨)
        * git push -f: 강제로 push.
        * git commit --amend: commit 메시지 수정 가능.
    * topic branch: 기능 추가, 버그 수정 등 단위작업을 위한 branch.
    * Merge 과정
        1. 다른 branch에서 commit
        2. Master에서 git merge 실행
        3. conflict 없으면 commit, conflict 있으면 어떤 부분을 반영할지 결정 후 commit
        4. git에 push
    * pull: fetch와 merge를 한번에 진행한다.
<hr>
