var store = [{
        "title": "2nd week summary",
        "excerpt":"2주차 정리      라이브러리, 프레임워크 차이            라이브러리: 기능 하나에 대해서만 제공(제한적인 용도)       프레임워크: 틀이 잡혀져 있다.(다양한 용도, 범용적) =&gt; 커스터마이징이 어러움.               AWS EC2            인스턴스 == 임대받은 컴퓨터 1대.               힙 영역            동적할당시 할당되는 메모리 영역.       자바, 파이썬은 Garbage collector가 있으므로 굳이 free 안해줘도 안쓰는 공간은 할당 해제됨.(But, file은 일일이 close해줘야함)               파이썬 자료구조            tuple                    가공된 데이터의 내용이 바뀌지 않도록 방어하기 위해 사용.           상수와 비슷한 역할을 한다.                       dic                    내부적으로는 트리 형태를 띈다.           검색시간: O(1)이지만 실제로는 트리 형태를 띄므 로 O(1)에 가까운 O(logn)이다.                       map()                    데이터 구조의 각 원소들에 동일한 함수를 적용하여 새로운 데이터를 만드는 파이썬의 기본 함수.                               JSON            JavaScript Object Notation.       서버와 통신하는 기본 데이터 양식으로 많이 사용된다.       JSONLint: JSON 형식에 맞는지 유효성을 검사해주는 사이트.       json.loads(): JSON을 읽어 dic으로 변환.       json.dumps(): dic을 읽어 JSON으로 변환.               API            여러 서비스들 간에 범용으로 쓰이는 인터페이스.       REST API: 웹서버를 이용하여 API 제공. JSON을 데이터 양식으로 활용한다.               DialogFlow: 사용자의 입력 의도를 파악하여 의도에 맞게 Flask를 동작시키는 역할.       Slack 챗봇 Flow            사용자가 문장 입력       Slack이 사용자가 입력한 문장 Flask에 전달       Flask가 DialogFlow로 전달받은 문장 전달       DialogFlow가 정의된 Intent들을 바탕으로 전달된 문장의 문맥 파악       DialogFlow의 분석 결과를 Flask로 전달       Flask에 정의된 함수 중 전달된 Intent에 맞는 함수 실행       Flask가 Slack으로 함수 실행으로 만들어진 response 전달       Slack에서 사용자로 response 전달               Git            Fetch: 저장된 것을 가져온다.       Branch: 가지치기.(Master = 최종 결과물, 배포판)       Merge: Branch 병합.       장점: 분산 작업 가능, 오프라인 개발 가능 - 중앙 서버에 접속하지 않고 각자의 환경에서 작업할 수 있으므로.       명령어                    git log: git에 수행한 행동들을 보여준다.           git reset –hard “hash값”: “hash”값의 시점으로 git을 되돌린다.(이 시점 이후에 수행된 모든 commit은 다 취소됨)           git push -f: 강제로 push.           git commit –amend: commit 메시지 수정 가능.                       topic branch: 기능 추가, 버그 수정 등 단위작업을 위한 branch.       Merge 과정                    다른 branch에서 commit           Master에서 git merge 실행           conflict 없으면 commit, conflict 있으면 어떤 부분을 반영할지 결정 후 commit           git에 push                       pull: fetch와 merge를 한번에 진행한다.            ","categories": ["SSAFY"],
        "tags": ["Basics"],
        "url": "http://localhost:4000/KeithLog/ssafy/2nd-Week-Summary/",
        "teaser":null},{
        "title": "3rd week summary",
        "excerpt":"Markdown 문법 정리    1. #: 제목 쓸때 사용.  This is h1  This is h2  This is h3  This is h4  This is h5  This is h6    2. «!– –&gt;hr/&gt;: 줄바꿀때 쓴다.  —, , * * *, **, - - -: 전부 줄바꿀때 쓰는 명령어.    3. &gt;: 블럭인용문자.     This is BlockQuote            이거슨 인용문자                      이런식으로 nest 구조를 만드는것도 가능하고                                    이런식으로 인용문 안에 다른 명령어나 코드도 넣을 수 있다.                                                      List                                                   #include &lt;iostream&gt; int main(){    cout &lt;&lt; \"Hello, World!\" &lt;&lt; '\\n';    return 0; }                            4. ```: 코드 입력 가능. 입력 끝나면 다시 써서 닫으면 됨.  #include &lt;iostream&gt; int main(){     cout &lt;&lt; \"Hello, World!\" &lt;&lt; '\\n';     return 0; }    5. 숫자 리스트     첫번째   두번째   세번째   …    6. 순서 없는 리스트     First            Second                    Third                            Fourth                                    Fifth                                            Sixth                                                    Seventh                                                            …                                                                                                                                                                                                                                    7. 링크  Link: [Google][googlelink] [googlelink]https://google.com \"Go google\"  이런식으로 링크걸면됨.  Link: Google   https://keithlee94.github.io/KeithLog/  이런식으로 바로 거는방법도 있음.   https://keithlee94.github.io/KeithLog/    8. 강조  *하이라이트*, _하이라이트_: 이탤릭체 **강조**, __강조__: 볼드체 ~~취소선~~: 단어에 취소선 생김  하이라이트   중요해   강조   강조   취소선    9. 이미지 삽입  ![Alt text](/path/to/img.jpg) - url 넣어줘도 됨. 사이즈 조절 기능은 없기 때문에 &lt;img width=\"\" height=\"\"&gt;&lt;/img&gt;를 이용한다.  ","categories": ["SSAFY"],
        "tags": ["Markdown"],
        "url": "http://localhost:4000/KeithLog/ssafy/3rd-Week-Summary/",
        "teaser":null},{
        "title": "2108",
        "excerpt":"백준 2108번  Link: 2108번: 통계학     문제 설명  문제에서 제시된 간단한 통계를 구하는 문제였다.   평균, 최댓값, 범위까지는 쉽게쉽게 구했는데 최빈값을 어떻게 구할지에 대해서 많이 고민했던 문제.   처음에는 8000개짜리 배열 만들고 숫자 넣을때마다 배열 값에다 1씩 더해서 빈도를 저장하려고 했는데 하다보니 아니다 싶어서 map을 사용했다.   input으로 준 숫자가 map에 없으면 (input, 1)로 초기호하고 있으면 빈도에 해당하는 1을 하나씩 더해가는 방식으로 구현했다.   최빈값을 찾기 위해 map을 한번 싹 돌았다.   조건 중에 최빈값이 여러개면 두번째로 작은 값을 최빈값으로 하라는 조건이 있었는데, 이걸 구현하기 위해 map을 한번 더 돌았다. 이 부분에 대해서는 좀 더 세련된 방법으로 보완할 수 있을 것 같은데 일단은 시간제한도 넉넉해서 그냥 한바퀴 더 도는 방법으로 구현했다.    내가 짠 코드  // // Created by Keith_Lee on 31/12/2018. // #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; #include &lt;math.h&gt; #include &lt;map&gt;  using namespace std;  int N;  int halfProcess(double num){     double high = ceil(num);     double low = floor(num);      if(num &gt;= (high + low) / 2){         return int(high);     }      return int(low); }  int main(){     cin &gt;&gt; N;      vector&lt;int&gt; numbers;     int sum = 0;     map&lt;int, int&gt; frequencies;      int inputNum;      for(int i=0; i&lt;N; i++){         cin &gt;&gt; inputNum;         sum += inputNum;         numbers.push_back(inputNum);         if(frequencies.find(inputNum) == frequencies.end()){             frequencies.insert(make_pair(inputNum, 1));         }         else{             frequencies.find(inputNum)-&gt;second++;         }     }      int temp = 0;     int mostFrequent;     int changeCount = 0;     for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){         if(iter-&gt;second &gt; temp){             temp = iter-&gt;second;             mostFrequent = iter-&gt;first;             changeCount++;         }     }     for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){         if(iter-&gt;second == temp &amp;&amp; iter-&gt;first != mostFrequent){             mostFrequent = iter-&gt;first;             break;         }     }      sort(numbers.begin(), numbers.end());      int average = halfProcess(double(sum) / double(N));     int center = numbers[N/2];     int range = numbers[N-1] - numbers[0];      cout &lt;&lt; average &lt;&lt; '\\n' &lt;&lt; center &lt;&lt; '\\n' &lt;&lt; mostFrequent &lt;&lt; '\\n' &lt;&lt; range &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["Realization"],
        "url": "http://localhost:4000/KeithLog/algorithm/2108/",
        "teaser":null},{
        "title": "1003",
        "excerpt":"백준 2108번  Link: 1003번: 피보나치 함수     문제 설명  피보나치 함수 실행시 0과 1이 몇번이나 출력되는지 구하는 문제.   예전에 풀어본 적 있던 문제였는데 DP를 다시 공부하는 김에 새로 풀어보았다.   다른점이 있다면 예전에는 답을 찾아보고 풀었던것 같은데 이번에는 내 힘만으로 풀었다는 점.   DP를 사용해야 한다는 느낌은 왔는데 어떻게 DP 배열을 채울지가 관건이었다.   시간제한이 0.25초였지만 입력의 크기가 최대 40까지인 것을 보고, 처음부터 DP 배열을 전부 채워놓고 입력에 따라 배열의 값만 리턴해줘도 되겠다는 생각이 들었다.   이렇게 생각하고 풀어봤더니 금방 풀렸다.   이번주는 DP를 집중적으로 풀어볼 예정.    내가 짠 코드  // // Created by Keith_Lee on 01/01/2019. // #include &lt;iostream&gt;  using namespace std;  int T; int DP[41][2];  void fibonacci(int n){     if(n == 0){         DP[n][0]++;     }     else if(n == 1){         DP[n][1]++;     }     else{         DP[n][0] = DP[n-1][0] + DP[n-2][0];         DP[n][1] = DP[n-1][1] + DP[n-2][1];     } }  int main(){     for(int i=0; i&lt;41; i++){         fibonacci(i);     }      cin &gt;&gt; T;      int N;      for(int i=0; i&lt;T; i++){         cin &gt;&gt; N;         cout &lt;&lt; DP[N][0] &lt;&lt; ' ' &lt;&lt; DP[N][1] &lt;&lt; '\\n';     }      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "http://localhost:4000/KeithLog/algorithm/1003/",
        "teaser":null}]
