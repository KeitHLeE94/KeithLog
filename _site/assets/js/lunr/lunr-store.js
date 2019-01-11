var store = [{
        "title": "2nd week summary",
        "excerpt":"2주차 정리      라이브러리, 프레임워크 차이            라이브러리: 기능 하나에 대해서만 제공(제한적인 용도)       프레임워크: 틀이 잡혀져 있다.(다양한 용도, 범용적) =&gt; 커스터마이징이 어러움.               AWS EC2            인스턴스 == 임대받은 컴퓨터 1대.               힙 영역            동적할당시 할당되는 메모리 영역.       자바, 파이썬은 Garbage collector가 있으므로 굳이 free 안해줘도 안쓰는 공간은 할당 해제됨.(But, file은 일일이 close해줘야함)               파이썬 자료구조            tuple                    가공된 데이터의 내용이 바뀌지 않도록 방어하기 위해 사용.           상수와 비슷한 역할을 한다.                       dic                    내부적으로는 트리 형태를 띈다.           검색시간: O(1)이지만 실제로는 트리 형태를 띄므 로 O(1)에 가까운 O(logn)이다.                       map()                    데이터 구조의 각 원소들에 동일한 함수를 적용하여 새로운 데이터를 만드는 파이썬의 기본 함수.                               JSON            JavaScript Object Notation.       서버와 통신하는 기본 데이터 양식으로 많이 사용된다.       JSONLint: JSON 형식에 맞는지 유효성을 검사해주는 사이트.       json.loads(): JSON을 읽어 dic으로 변환.       json.dumps(): dic을 읽어 JSON으로 변환.               API            여러 서비스들 간에 범용으로 쓰이는 인터페이스.       REST API: 웹서버를 이용하여 API 제공. JSON을 데이터 양식으로 활용한다.               DialogFlow: 사용자의 입력 의도를 파악하여 의도에 맞게 Flask를 동작시키는 역할.       Slack 챗봇 Flow            사용자가 문장 입력       Slack이 사용자가 입력한 문장 Flask에 전달       Flask가 DialogFlow로 전달받은 문장 전달       DialogFlow가 정의된 Intent들을 바탕으로 전달된 문장의 문맥 파악       DialogFlow의 분석 결과를 Flask로 전달       Flask에 정의된 함수 중 전달된 Intent에 맞는 함수 실행       Flask가 Slack으로 함수 실행으로 만들어진 response 전달       Slack에서 사용자로 response 전달               Git            Fetch: 저장된 것을 가져온다.       Branch: 가지치기.(Master = 최종 결과물, 배포판)       Merge: Branch 병합.       장점: 분산 작업 가능, 오프라인 개발 가능 - 중앙 서버에 접속하지 않고 각자의 환경에서 작업할 수 있으므로.       명령어                    git log: git에 수행한 행동들을 보여준다.           git reset –hard “hash값”: “hash”값의 시점으로 git을 되돌린다.(이 시점 이후에 수행된 모든 commit은 다 취소됨)           git push -f: 강제로 push.           git commit –amend: commit 메시지 수정 가능.                       topic branch: 기능 추가, 버그 수정 등 단위작업을 위한 branch.       Merge 과정                    다른 branch에서 commit           Master에서 git merge 실행           conflict 없으면 commit, conflict 있으면 어떤 부분을 반영할지 결정 후 commit           git에 push                       pull: fetch와 merge를 한번에 진행한다.            ","categories": ["CSE"],
        "tags": ["Basic"],
        "url": "keithlee94.github.io/cse/2nd-Week-Summary/",
        "teaser":null},{
        "title": "3rd week summary",
        "excerpt":"Markdown 문법 정리    1. #: 제목 쓸때 사용.  This is h1  This is h2  This is h3  This is h4  This is h5  This is h6    2. «!– –&gt;hr/&gt;: 줄바꿀때 쓴다.  —, , * * *, **, - - -: 전부 줄바꿀때 쓰는 명령어.    3. &gt;: 블럭인용문자.     This is BlockQuote            이거슨 인용문자                      이런식으로 nest 구조를 만드는것도 가능하고                                    이런식으로 인용문 안에 다른 명령어나 코드도 넣을 수 있다.                                                      List                                                   #include &lt;iostream&gt; int main(){    cout &lt;&lt; \"Hello, World!\" &lt;&lt; '\\n';    return 0; }                            4. ```: 코드 입력 가능. 입력 끝나면 다시 써서 닫으면 됨.  #include &lt;iostream&gt; int main(){     cout &lt;&lt; \"Hello, World!\" &lt;&lt; '\\n';     return 0; }    5. 숫자 리스트     첫번째   두번째   세번째   …    6. 순서 없는 리스트     First            Second                    Third                            Fourth                                    Fifth                                            Sixth                                                    Seventh                                                            …                                                                                                                                                                                                                                    7. 링크  Link: [Google][googlelink] [googlelink]https://google.com \"Go google\"  이런식으로 링크걸면됨.  Link: Google   https://keithlee94.github.io/KeithLog/  이런식으로 바로 거는방법도 있음.   https://keithlee94.github.io/KeithLog/    8. 강조  *하이라이트*, _하이라이트_: 이탤릭체 **강조**, __강조__: 볼드체 ~~취소선~~: 단어에 취소선 생김  하이라이트   중요해   강조   강조   취소선    9. 이미지 삽입  ![Alt text](/path/to/img.jpg) - url 넣어줘도 됨. 사이즈 조절 기능은 없기 때문에 &lt;img width=\"\" height=\"\"&gt;&lt;/img&gt;를 이용한다.  ","categories": ["CSE"],
        "tags": ["Markdown"],
        "url": "keithlee94.github.io/cse/3rd-Week-Summary/",
        "teaser":null},{
        "title": "2108",
        "excerpt":"백준 2108번  Link: 2108번: 통계학     문제 설명  문제에서 제시된 간단한 통계를 구하는 문제였다.   평균, 최댓값, 범위까지는 쉽게쉽게 구했는데 최빈값을 어떻게 구할지에 대해서 많이 고민했던 문제.   처음에는 8000개짜리 배열 만들고 숫자 넣을때마다 배열 값에다 1씩 더해서 빈도를 저장하려고 했는데 하다보니 아니다 싶어서 map을 사용했다.   input으로 준 숫자가 map에 없으면 (input, 1)로 초기호하고 있으면 빈도에 해당하는 1을 하나씩 더해가는 방식으로 구현했다.   최빈값을 찾기 위해 map을 한번 싹 돌았다.   조건 중에 최빈값이 여러개면 두번째로 작은 값을 최빈값으로 하라는 조건이 있었는데, 이걸 구현하기 위해 map을 한번 더 돌았다. 이 부분에 대해서는 좀 더 세련된 방법으로 보완할 수 있을 것 같은데 일단은 시간제한도 넉넉해서 그냥 한바퀴 더 도는 방법으로 구현했다.    내가 짠 코드  // // Created by Keith_Lee on 31/12/2018. // #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; #include &lt;math.h&gt; #include &lt;map&gt;  using namespace std;  int N;  int halfProcess(double num){     double high = ceil(num);     double low = floor(num);      if(num &gt;= (high + low) / 2){         return int(high);     }      return int(low); }  int main(){     cin &gt;&gt; N;      vector&lt;int&gt; numbers;     int sum = 0;     map&lt;int, int&gt; frequencies;      int inputNum;      for(int i=0; i&lt;N; i++){         cin &gt;&gt; inputNum;         sum += inputNum;         numbers.push_back(inputNum);         if(frequencies.find(inputNum) == frequencies.end()){             frequencies.insert(make_pair(inputNum, 1));         }         else{             frequencies.find(inputNum)-&gt;second++;         }     }      int temp = 0;     int mostFrequent;     int changeCount = 0;     for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){         if(iter-&gt;second &gt; temp){             temp = iter-&gt;second;             mostFrequent = iter-&gt;first;             changeCount++;         }     }     for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){         if(iter-&gt;second == temp &amp;&amp; iter-&gt;first != mostFrequent){             mostFrequent = iter-&gt;first;             break;         }     }      sort(numbers.begin(), numbers.end());      int average = halfProcess(double(sum) / double(N));     int center = numbers[N/2];     int range = numbers[N-1] - numbers[0];      cout &lt;&lt; average &lt;&lt; '\\n' &lt;&lt; center &lt;&lt; '\\n' &lt;&lt; mostFrequent &lt;&lt; '\\n' &lt;&lt; range &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["Realization"],
        "url": "keithlee94.github.io/algorithm/2108/",
        "teaser":null},{
        "title": "1003",
        "excerpt":"백준 1003번  Link: 1003번: 피보나치 함수     문제 설명  피보나치 함수 실행시 0과 1이 몇번이나 출력되는지 구하는 문제.   예전에 풀어본 적 있던 문제였는데 DP를 다시 공부하는 김에 새로 풀어보았다.   다른점이 있다면 예전에는 답을 찾아보고 풀었던것 같은데 이번에는 내 힘만으로 풀었다는 점.   DP를 사용해야 한다는 느낌은 왔는데 어떻게 DP 배열을 채울지가 관건이었다.   시간제한이 0.25초였지만 입력의 크기가 최대 40까지인 것을 보고, 처음부터 DP 배열을 전부 채워놓고 입력에 따라 배열의 값만 리턴해줘도 되겠다는 생각이 들었다.   이렇게 생각하고 풀어봤더니 금방 풀렸다.   이번주는 DP를 집중적으로 풀어볼 예정.    내가 짠 코드  // // Created by Keith_Lee on 01/01/2019. // #include &lt;iostream&gt;  using namespace std;  int T; int DP[41][2];  void fibonacci(int n){     if(n == 0){         DP[n][0]++;     }     else if(n == 1){         DP[n][1]++;     }     else{         DP[n][0] = DP[n-1][0] + DP[n-2][0];         DP[n][1] = DP[n-1][1] + DP[n-2][1];     } }  int main(){     for(int i=0; i&lt;41; i++){         fibonacci(i);     }      cin &gt;&gt; T;      int N;      for(int i=0; i&lt;T; i++){         cin &gt;&gt; N;         cout &lt;&lt; DP[N][0] &lt;&lt; ' ' &lt;&lt; DP[N][1] &lt;&lt; '\\n';     }      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/1003/",
        "teaser":null},{
        "title": "1149",
        "excerpt":"백준 1149번  Link: 1149번: RGB 거리     문제 설명  마을의 집 갯수와 각 집을 빨강, 초록, 파랑으로 각각 칠하는데 드는 비용이 입력으로 주어졌을때 마을의 모든 집을 칠하는 최저 비용을 구하는 문제.   이웃하는 집들은 같은 색으로 칠할 수 없다는 조건도 붙었다.   작년에 답보고 풀었던 기억이 나는 문제. 이번에는 꼭 내 힘으로 풀어내리라 결심하고 풀어보았다.   우선 이웃하는 집들이 같은 색이 될수 없다는 조건을 단순화하여 앞집이랑만 다른 색이면 되지 않나? 라는 생각으로 풀었다.   틀리고 한참 고민하고서야 왜 틀렸는지 알게 되었다. 반드시 최저값만으로 구성된 조합이 존재하지 않는 경우가 있다는 것.   거꾸로도 풀어보고 어떻게든 풀어보려 애써봤는데 결국 안풀려서 예전 답을 보고 풀었다…   생각보다 매우 단순했는데, 처음 칠하는 비용을 0으로 초기화한 다음 모든 경우를 따져가며 답을 구하는 방식이었다.   예를 들면 DP[i][0]은 DP[i-1][1]과 DP[i-1][2] 중 작은 값에다가 칠하는 비용인 price[i][0]을 더하는 식.   즉 DP[i][0]은 i번째 집을 0번째 색으로 칠한다는 것을 의미한다. 당연히 앞집이랑은 색이 겹칠 일이 없다.   온갖 방법 다 생각해보다 답을 봤는데 정말 간단하게 풀려서 허무했다;;;   2시간정도 고민해봤지만 못풀겠어서 결국 포기했던 점이 아쉽지만, 이러저러한 방법을 최대한 시도해 본 점은 나름 만족스럽다.   다음에 푸는 문제들은 이런 고민끝에 끝까지 풀어낼 수 있길!!    내가 짰다가 틀린 코드  // // Created by Keith_Lee on 02/01/2019. //  #include &lt;iostream&gt;  using namespace std;  int N;  int main(){     cin &gt;&gt; N;      int price[N][3];     int DP[N][2];      for(int i=0; i&lt;N; i++){         cin &gt;&gt; price[i][0] &gt;&gt; price[i][1] &gt;&gt; price[i][2];     }      for(int i=0; i&lt;N; i++){         int min = 1001;          if(i == 0){             for(int j=0; j&lt;3; j++){                 if(min &gt; price[0][j]){                     min = price[0][j];                     DP[0][0] = min;                     DP[0][1] = j;                 }             }         }         else{             for(int j=0; j&lt;3; j++){                 if(j != DP[i-1][1]){                     if(min + price[i][j] &gt; DP[i-1][0] + price[i][j]){                         min = price[i][j];                         DP[i][0] = min + DP[i-1][0];                         DP[i][1] = j;                     }                 }             }         }     }      cout &lt;&lt; DP[N-1][0] &lt;&lt; '\\n';      return 0; }    정답 코드  // // Created by Keith_Lee on 02/01/2019. //  #include &lt;iostream&gt;  using namespace std;  int N;  int min(int a, int b){     return (a &gt; b) ? b : a; }  int main(){     cin &gt;&gt; N;      int price[N+1][3];     int DP[N+1][3];      for(int i=1; i&lt;=N; i++){         cin &gt;&gt; price[i][0] &gt;&gt; price[i][1] &gt;&gt; price[i][2];     }      price[0][0] = price[0][1] = price[0][2] = 0;     DP[0][0] = DP[0][1] = DP[0][2] = 0;      for(int i=1; i&lt;N+1; i++){         DP[i][0] = min(DP[i-1][1], DP[i-1][2]) + price[i][0];         DP[i][1] = min(DP[i-1][0], DP[i-1][2]) + price[i][1];         DP[i][2] = min(DP[i-1][0], DP[i-1][1]) + price[i][2];     }      cout &lt;&lt; min(min(DP[N][0], DP[N][1]), DP[N][2]) &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/1149/",
        "teaser":null},{
        "title": "1932",
        "excerpt":"백준 1932번  Link: 1932번: 정수 삼각형     문제 설명  어제 풀었던 RGB거리와 비슷한 유형의 DP 문제.   다른점이 있다면 제한조건인데, 3가지 경우를 고려했어야 했던 RGB 거리와 달리 삼각형을 이루는 정수들의 왼쪽 대각선, 오른쪽 대각선의 2가지 경우로만 이동 가능하므로 오히려 조건은 완화되었다.   딱 문제 보고나서 ‘어 이거 어제 풀었던거랑 비슷한데’ 라는 생각으로 시작했다.   결론부터 말하면 못풀어서 답보고 이해했는데, 접근방법이 아예 잘못되었다.   조건에서 주어졌듯이 2개의 이전 결과값을 비교하고 현재 삼각형 위치의 숫자를 더하면 되는거였는데, 일단 이 조건을 무시하고 최대값만 다 찾았다가 1차로 망했다.   잘못생각했다는걸 알아차리고 다른 방법을 생각해봤는데, 이것도 틀렸다.   뭔지 대충 설명하자면 최대값을 가질때의 배열 인덱스를 따로 받아두고 이 인덱스를 기준으로 다음 최대값을 찾는 방식.   DP에 대해 완벽히 이해하고 있는건 아닌것 같다.   예전 계산 결과 가져다 쓰는 문제구나 하는 느낌은 오는데, 예전 계산 결과를 어떤식으로 저장할 것이며 어떻게 가져다 쓸것인지에 대해 생각해내는 부분이 부족한 것 같다.   문제 보고도 뭔소린가 싶었던 옛날에 비해서는 많이 나아진 편이지만 아직도 갈길이 멀다…    정답 코드  // // Created by Keith_Lee on 03/01/2019. //  #include &lt;iostream&gt; #include &lt;cstring&gt;  using namespace std;  int n; int maximum = 0;  int max(int a, int b){     return (a &gt; b) ? a : b; }  int main(){     cin &gt;&gt; n;      int DP[n+1][n+1];     int tree[n+1][n+1];      bzero(DP, sizeof(DP));     bzero(tree, sizeof(tree));      int inputNum;      for(int i=1; i&lt;=n; i++){         for(int j=1; j&lt;=i; j++){             cin &gt;&gt; inputNum;             tree[i][j] = inputNum;         }     }      for(int i=1; i&lt;=n; i++){         for(int j=1; j&lt;=i; j++){             DP[i][j] = max(DP[i-1][j-1], DP[i-1][j]) + tree[i][j];              if(maximum &lt; DP[i][j]){                 maximum = DP[i][j];             }         }     }      cout &lt;&lt; maximum &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/1932/",
        "teaser":null},{
        "title": "2579",
        "excerpt":"백준 2579번  Link: 2579번: 계단 오르기     문제 설명  오늘도 DP문제다.   그리고 오늘도 내힘으로 푸는데 실패.   앞선 두문제와 비슷하면서도 달랐는데, 이번 문제를 풀수 있느냐 없느냐는 문제를 보고 조건을 이해하여 점화식을 세울 수 있는지였다.   물론 나는 점화식 못세워서 예전 코드 보고, 검색해서 그제서야 이해해서 풀었다.   점화식 세우는 방법은 우선 DP배열의 3번째까지 채우는 방법과 동일했다.   그전에 이 문제에서 DP 배열의 의미를 이해할 필요가 있었다.   DP[N]이란 N번째 계단을 밟았음을 의미한다.   이렇게 이해하고 시작해보면 DP[1]은 첫번째 계단을 밟은것이므로 score[1]이 된다.   DP[2]는 첫번째 계단, 두번째 계단을 둘 다 밟았을때와 두번째 계단만 밟았을때의 점수를 비교하여 큰 값이 곧 DP[2]의 값이 된다.   DP[3]은 조건에 의해 세 계단을 연속으로 밟을 수 없고, 한번에 최대 2개의 계단만 오를 수 있으므로 첫번째 계단과 세번째 계단을 밟았을 때, 두번째 계단과 세번째 계단을 밟았을때의 점수를 비교하여 큰 값이 DP[3]이 된다.   DP[4]를 생각해보자. DP[4]는 첫번째 계단, 세번째 계단, 네번째 계단의 점수를 더한 값과 첫번째 계단, 두번째 계단, 네번째 계단의 점수를 더한 값을 비교하여 더 큰 값이 DP[4]이다.   이는 곧 DP[1] + score[3] + score[4], DP[2] + score[4]를 비교하는 것과 같다.   이를 토대로 점화식을 세워 보면, DP[N] = max(DP[N-3] + score[N-1] + score[N], DP[N-2] + score[N])이라는 점화식을 얻을 수 있다.   이 점화식대로 풀면 풀리는 문제다.   항상 느끼는건데 점화식 세우는게 정말 너무 어렵다. 규칙은 나름대로 찾은것 같지만 뭔가 나사 하나씩은 꼭 빠져있다는 생각이 든다.   푸는방법 까먹을때쯤 한번 더 풀어봐야 할 문제인것 같다.    정답 코드  // // Created by Keith_Lee on 04/01/2019. //  #include &lt;iostream&gt;  using namespace std;  int N;  int max(int a, int b){     return (a &gt; b) ? a : b; }  int main(){     cin &gt;&gt; N;      int DP[N+1];     int score[N+1];      for(int i=1; i&lt;=N; i++){         cin &gt;&gt; score[i];     }      DP[1] = score[1];     DP[2] = max(score[1] + score[2], score[2]);     DP[3] = max(score[1] + score[3], score[2] + score[3]);      for(int i=4; i&lt;=N; i++){         DP[i] = max(DP[i-2] + score[i], DP[i-3] + score[i] + score[i-1]);     }      cout &lt;&lt; DP[N] &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/2579/",
        "teaser":null},{
        "title": "4th week summary",
        "excerpt":"Java 스터디 내용 정리    Project, Package 분리 이유  프로젝트의 각 기능을 쪼개기 위해 패키지 사용.   논리적으로 따로 나눠 작업하기 위해 분리하는 경우가 대다수이다.    Java의 특징     객체지향            시스템의 기본 구성단위는 객체(Object) 이다.       객체: 일종의 부품 역할.       여러 부품들을 모아 조립하듯이 프로그램을 완성한다.           플랫폼 독립적            하드웨어, OS와 상관없이 모든 환경에서 동작 가능.       이유: JVM 위에서 작동하므로.           분산 프로그래밍: 원격 접속 가능.   멀티스레드    Java 컴파일 과정     소스코드 작성: (…).java 파일 생성.   컴파일            명령어: javac (…).java                    javac -d …: 패키지가 있을 경우 자동으로 패키지 폴더를 생성하며 컴파일.                       JVM이 인식 가능한 byte code로 번역하는 과정.       결과: Bytecode 생성 - (…).class 파일 생성.           실행            명령어: java (…)       JVM 위에서 실행됨.              C의 경우 실행파일을 다른 환경에서 실행시키면 실행 안됨.   Java의 경우 JVM이 존재하므로 다른 환경에서 실행 가능함.    Primitive Data Type  기본적인 값을 기억하는 type.   1 byte = 8 bit   char = 16 bit = 2 byte   int = 32 bit = 4 byte   float = 32 bit = 4 byte   double = 64 bit = 8 byte   long = 64 bit = 8 byte    Reference Data Type  객체의 참조값을 기억하는 type.   class, interface, 배열 등.     String: class이므로 Reference Type이다.    Literal  값 자체.   예: 3.14, 10, ‘C’, false, …   정수 리터럴 = 4바이트에 저장됨.    논리연산자     &amp;&amp; 연산자: 앞조건이 false면 뒤에 오는 조건 확인하지 않고 연산 종료.   &amp; 연산자: 앞조건이 false여도 뒤에 오는 조건을 확인한 후 연산 종료.                                               ,           연산자도 동일함.                            3항연산자  (x &gt; y) ? x : y =&gt; 실행결과: x가 y보다 크면 x, 작거나 같으면 y가 된다.   for ~ each  int sum = 0; int[] su = {24, 6, 5, 36, 36, 65, 245, 56, 3, 64};  for(int s: su){     System.out.println(s);     sum += s; }  실행결과: sum에는 su 배열의 모든 숫자를 더한 값이 저장되고, su 배열의 모든 원소가 한번씩 출력된다.   =&gt; 배열 내 모든 원소에 한번씩 접근한다.(파이썬과 유사함)    Error, Exception     Error            복구 불가능       프로그램이 비정상적으로 종료됨.           Exception            일종의 가벼운 에러       프로그램상으로 수정 가능함.       Java가 해결 방법을 알려줄 수 있음.            배열 기본값     배열의 type에 따라 다르게 배열 생성시 기본값으로 자동으로 채워진다.   int형: 0   boolean형: false   double형: 0.0   String형: null            참조형 type의 배열의 기본값은 항상 null이다.            main메소드의 args 사용법     Run Configuration 설정   Arguments -&gt; Program arguments -&gt; ${string-prompt} 설정.   new 키워드  객체를 만들때 사용하는 키워드.   method     C의 함수와 같다.   클래스 내에서 객체가 가져야 할 기능을 정의.   독립적인 기능들을 분리하여 재사용 가능하도록 하기 위해 사용.   return type, method 이름, parameter list가 반드시 있어야 한다.   method 내에 method 정의 불가능.   arraycopy()     배열 복사 함수.   System.arraycopy(소스배열, 소스배열의 시작위치, 목적배열, 목적배열의 시작위치, 길이);   작은 배열일 경우 통상적인 반복문이 더 효율적.   배열이 클때 사용시 효율적이다.   다차원 배열 길이  su = new int[5][3]; su2 = new int[3];  su.length: 5   su[0].length: 3   su2.length: 3   =&gt; 가장 첫번째 칸의 숫자가 배열의 길이.    return  문장의 실행을 그자리에서 멈춘다.    ","categories": ["Java"],
        "tags": ["Java"],
        "url": "keithlee94.github.io/java/4th-Week-Summary/",
        "teaser":null},{
        "title": "1463",
        "excerpt":"백준 1463번  Link: 1463번: 1로 만들기     문제 설명  오늘도 내힘으로 푸는데 실패.   이 문제도 직전에 풀었던 계단문제처럼 점화식이 가장 중요했다.   주어진 조건을 곧이곧대로 썼다가 답없는 상황이 나왔다.   가장 먼저 입력된 수를 3으로 나눠떨어지는지 검사하고 나눠떨어지면 3으로 나누는 것을 첫번째 조건으로 넣었고   3으로 나눠떨어지지 않으면 2로 나눠떨어지는지 검사하고 나눠떨어지면 2로 나누는 것을 두번째 조건으로 넣었다.   이 두가지를 만족하지 않을때 1을 빼는 것으로 3가지 조건을 넣었다.   도무지 어떻게 더 나갈지 모르겠어서 예전 답을 다시 찾아봤다.   예전 답도 구글링해서 답 찾아보고 풀었는데, 1년동안 실력이 전혀 안늘어난 느낌이다.   정답은 우선 1을 뺀 다음, 3으로 나눠떨어지면 3으로 나눴을때와 1을 뺐을때의 DP를 비교하는 것이었다.   3으로 나눠떨어지지 않을 경우, 2로 나눠떨어지면 2로 나눴을때와 1을 뺐을때의 DP를 비교한다.   나머지 경우는 당연히 1을 뺀 값이 DP에 들어간다.   오늘로 DP에서 5문제를 풀고있는데, 문제마다 매번 다른 개념인것 같은 느낌이다.   DP 문제 전반에 걸칠 수 있는 개념이 안잡힌 느낌. 첫술에 배부를수는 당연히 없지만 이대로 갔을때 실력이 늘긴 할지, DP에 대한 접근 방법을 제대로 파악할 수 있긴 할지 매우 걱정된다.     정답 코드  // // Created by Keith_Lee on 07/01/2019. //  #include &lt;iostream&gt; #include &lt;string.h&gt;  using namespace std;  int min(int a, int b){     return a &gt; b ? b : a; }  int main(){     int N;     int DP[1000000];      cin &gt;&gt; N;      bzero(DP, sizeof(DP));      for(int i=2; i&lt;=N; i++){         DP[i] = DP[i-1] + 1; // 기본적으로 1 빼준다.          if(i % 2 == 0){             DP[i] = min(DP[i], DP[i/2] + 1); // 2로 나눠떨어지면 2로 나눴을때와 1뺐을때를 비교한다.         }         if(i % 3 == 0){             DP[i] = min(DP[i], DP[i/3] + 1); // 3으로 나눠떨어지면 3으로 나눴을때와 1뺐을때를 비교한다.         }     }      cout &lt;&lt; DP[N] &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/1463/",
        "teaser":null},{
        "title": "Swea_1289",
        "excerpt":"SWEA 1289번  Link: 1289번: 원재의 메모리 복구하기     문제 설명  무난하게 풀었던 구현 문제.   string 처리에서 살짝 헤맨것 말고는 무난하게 풀었다.     정답 코드  // // Created by Keith_Lee on 07/01/2019. //  #include &lt;iostream&gt; #include &lt;string.h&gt;  using namespace std;  int T;  int main(){     cin &gt;&gt; T;      string input = \"\";      for(int test=1; test&lt;=T; test++){         int count = 0;         string modified = \"\";          cin &gt;&gt; input;          for(int i=0; i&lt;input.length(); i++){             modified.push_back('0');         }          for(int i=0; i&lt;input.length(); i++){             if(modified[i] != input[i]){                 if(input[i] == '0'){                     for(int j=i; j&lt;modified.length(); j++){                         modified[j] = '0';                     }                 }                 else if(input[i] == '1'){                     for(int j=i; j&lt;modified.length(); j++){                         modified[j] = '1';                     }                 }                 count++;             }         }          cout &lt;&lt; '#' &lt;&lt; test &lt;&lt; ' ' &lt;&lt; count &lt;&lt; '\\n';     }      return 0; }    ","categories": ["Algorithm"],
        "tags": ["Realization"],
        "url": "keithlee94.github.io/algorithm/SWEA_1289/",
        "teaser":null},{
        "title": "Swea_3307",
        "excerpt":"SWEA 3307번  Link: 3307번: 최장 증가 부분 수열     문제 설명  완전탐색 문제인줄 알고 앞에서 썼던 DFS 써서 풀었다가 시간초과났던 문제.   조합을 하는건 맞는데, DP로 풀었어야 풀리는 문제였다.   최근에 DP 공부를 하고있었는데도 DP로 풀어야겠다는 생각은 여전히 들지 않았다.   어찌어찌 테스트케이스는 맞출수 있도록 구현했는데, 제출해보니 한개도 못맞히더라.   시험장가서 테스트케이스 맞히고도 탈락하는 경우가 왕왕 있다던데, 이런 경우인가 싶었다.   덤으로 이딴 실력으로 시험장에 가지 않았다는 점이 천만다행.   풀이에 대해 설명하자면, 우선 입력받은 숫자들 중 수열의 시작점을 for문을 통해 정한다.   그 다음, 남은 숫자들을 택해서 증가수열을 만들고 그 증가수열의 길이를 갱신하며 최대값을 구하는 문제다.   이를 위한 조건으로 2가지를 넣었다.   첫째는 다음 숫자가 반드시 수열의 시작점보다 큰 숫자일 것.   두번째는 증가수열의 길이가 증가하는 방향일 것.   이 두가지를 만족하지 못하면 증가수열에 숫자를 포함하지 않고, 다음 숫자들을 계속 살펴보는 식이다.   이 문제도 답보고 겨우 풀었는데, DP 문제에 대한 감을 살짝 잡은 것 같다.(아직 확실하진 않음)   이런 최대값 찾는 DP문제의 경우 조건에 맞아 DP 배열의 값을 갱신한 후, 최대값을 갱신하는 작업을 반복하는 방식인 것 같다.   너무 당연한 말을 한것 같지만, 이런 감 찾는데 정말 오래걸렸다.   아무튼   될때까지 하자.     정답 코드  // // Created by Keith_Lee on 08/01/2019. //  #include &lt;iostream&gt; #include &lt;algorithm&gt; #include &lt;string.h&gt;  using namespace std;  int T;  int main(){     cin &gt;&gt; T;      for(int test=1; test&lt;=T; test++){         int maximum = 0;         int N;          cin &gt;&gt; N;          int numbers[N];         int DP[N];          for(int i=0; i&lt;N; i++){             cin &gt;&gt; numbers[i];         }          bzero(DP, sizeof(DP));          for(int i=0; i&lt;N; i++){             for(int j=i+1; j&lt;N; j++){                 if(numbers[j] &lt; numbers[i]) continue;                 if(DP[j] &gt;= DP[i] + 1) continue;                 DP[j] = DP[i] + 1; // 증가수열이면서 수열 count가 증가한다면 1 더해줌.                 maximum = max(maximum, DP[j]); // 최대값 갱신.             }         }          cout &lt;&lt; '#' &lt;&lt; test &lt;&lt; ' ' &lt;&lt; maximum+1 &lt;&lt; '\\n';     } }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/SWEA_3307/",
        "teaser":null},{
        "title": "Swea_5215",
        "excerpt":"SWEA 5215번  Link: 5215번: 햄버거 다이어트     문제 설명  완전탐색으로 최적의 조합을 구하는 문제.   문제 보자마자 ‘이건 DFS쓰면 풀리겠구나’ 하는 생각은 들었다.   이렇게 생각하고 풀었는데, DFS 구현에서 정말 많이 헤맸다.   DFS랑 BFS는 그래도 구현방법을 다 외우고 있었다고 생각했었는데 벌써 다 까먹은 모양이다.   예전에 코딩테스트 볼때도 확실하게 몰랐던거니 당연할수도.   어떻게든 고쳐서 해보다 안되서 답 찾아서 풀었다.   핵심은 DFS를 쓰긴 하는데 각각의 재료를 포함했을때와 포함하지 않았을때를 반드시 같이 돌려야 한다는것.   제약조건에 따라 포함하거나 포함안하거나 따지면서 DFS 두번 돌리면 바로 풀린다.   아직도 정말 갈길이 멀다고 생각했다.   DFS, BFS는 자신있다고 생각했는데… 심지어 DFS로 풀어야된다는걸 알면서도 틀려서 더 자괴감 오진다.   될때까지 하자.     정답 코드  // // Created by Keith_Lee on 07/01/2019. //  #include &lt;iostream&gt; #include &lt;vector&gt;  using namespace std;  int T; int N, L; int maximum = 0;  vector&lt;pair&lt;int, int&gt;&gt; base;  void DFS(int start, int calory, int score){     if(start == N){         maximum = maximum &gt; score ? maximum : score;         return;     }     if(calory + base[start].second &lt;= L){         DFS(start+1, calory+base[start].second, score+base[start].first); // start번째 재료 추가     }     DFS(start+1, calory, score); // start번째 재료 거름 }  int main(){     cin &gt;&gt; T;      for(int test=1; test&lt;=T; test++){         cin &gt;&gt; N &gt;&gt; L;          for(int i=0; i&lt;N; i++){             int calory;             int score;              cin &gt;&gt; score &gt;&gt; calory;              base.push_back(make_pair(score, calory));         }          DFS(0, 0, 0);          cout &lt;&lt; '#' &lt;&lt; test &lt;&lt; ' ' &lt;&lt; maximum &lt;&lt; '\\n';         while(!base.empty()){             base.pop_back();         }         maximum = 0;     } }    ","categories": ["Algorithm"],
        "tags": ["DFS"],
        "url": "keithlee94.github.io/algorithm/SWEA_5215/",
        "teaser":null},{
        "title": "10844",
        "excerpt":"백준 10844번  Link: 10844번: 쉬운 계단 수     문제 설명  어제는 피곤함에 빈둥거리다 아무것도 못올렸다.   이 문제는 어제부터 고민하다 방법을 찾았고, 그 방법을 어떻게 구현할지 많은 시행착오를 거친 끝에 결국 풀었다.   사실 맨 마지막에 내 생각이 확실한데 답이 자꾸 틀려서 다른사람 답을 찾아보긴 했지만, 그 답이 내가 생각한 그대로여서 여태껏 답 찾아본 문제들중 가장 치열하게 고민한 문제인 것 같다는 생각을 했다.   그만큼 이번에는 답찾아서 풀었음에도 쪽팔리다는 생각이 들지 않았고.   각설하고, 푸는 방법에 대해 설명해보자면 이 문제에서 각 자릿수가 몇자리수이냐는 아무 상관이 없다.   가장 중요한 것은 1의자리 숫자가 무엇인지.   N이 1일때, 2일때, 3일때의 경우들을 직접 구해보니 1의자리 숫자에 따라 다음 수가 영향을 받는다는 것을 알 수 있었다.   자꾸 보다보니 N일때의 답 = (N-1일때의 답 * 2) - (N-1일때의 계단수 중 첫자리 숫자가 1인 것의 갯수) 라는 규칙을 찾은것같은데, 맞는지는 모르겠다.   어떻게 구현할지 한참 고민하다 저 규칙대로 풀어보기 위해 우선 큐에 넣고 갱신해가면서 모든 경우를 다 돌려봤다.   한 5분은 지나야 전체 답을 구할 수 있더라.   이런 과정을 거치면서 이 문제를 어떻게하면 이전 N에서 얻은 답을 사용할수 있을지에 대해 중점적으로 고민해보았고, 결국 1의자리 숫자만이 영향을 미친다는 점을 찾기에 이르렀다.   이 문제를 풀며 가장 고무적이었다고 생각했던 부분은 DP의 특성을 어떻게든 적용하기 위해 노력했다는 점.   앞에서 구한 답을 어떻게 써먹을수 있는지 그 어느때보다 치열하게 고민한 것 같다.   이 문제를 풀어낸 것이 앞으로 DP문제를 푸는데 있어 전환점이 되길!!     정답 코드  // // Created by Keith_Lee on 08/01/2019. //  #include &lt;iostream&gt; #include &lt;strings.h&gt;  using namespace std;  int main(){     int N;      cin &gt;&gt; N;      unsigned long long DP[101][11];     bzero(DP, sizeof(DP));      for(int i=1; i&lt;10; i++){         DP[1][i] = 1;     }      for(int i=2; i&lt;=N; i++) {         DP[i][0] = DP[i-1][1];         for(int j=1; j&lt;10; j++){             DP[i][j] = (DP[i-1][j-1] + DP[i-1][j+1]) % 1000000000;         }     }      unsigned long long sum = 0;     for(int i=0; i&lt;10; i++){         sum += DP[N][i];     }     cout &lt;&lt; (sum % 1000000000) &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/10844/",
        "teaser":null},{
        "title": "2293",
        "excerpt":"백준 2293번  Link: 2293번: 동전 1     문제 설명  이 문제도 어떻게든 DP로 풀어보려 온갖 방법으로 생각해봤다.   우선 각 동전들에 대해 최대로 쓸 수 있는 갯수를 구한 다음 하나씩 빼가면서 조합을 구하려고 생각해봤다.   그런데 동전이 몇종류나 있을지도 모르고 시간도 그만큼 오래걸릴것 같아 이 생각은 접었다.   암만 고민해봐도 이 방법 말고는 떠오르는 방법이 없어 결국 답을 찾아봤다.   답 찾아보니 점화식을 세울줄 알아야 풀 수 있는 문제더라.   심지어 그 점화식을 어떻게 세우는지에 대해서도 설명이 자세하게 나와있는게 잘 없어서 한참 뒤지면서 여러개 찾아보다가 겨우 이해했다.   어떤 블로그에서 표를 그려가면서 풀면 금방 이해하고 점화식을 세울 수 있을거라 했는데, 점화식에 대해 이해하고 나니 왜 그렇게 말했는지 알 것 같다.   점화식을 구하는 과정이다.     1원만 쓸 때 각 금액에 대해 나올 수 있는 경우의 수                                             1원             2원             3원             4원             5원             6원             7원             8원             9원             10원                                         {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}       2원도 쓸 때 각 금액에 대해 나올 수 있는 경우의 수                                             1원             2원             3원             4원             5원             6원             7원             8원             9원             10원                                         {1, 2, 2, 3, 3, 4, 4, 5, 5, 6}    규칙  2원 경우의수 = 1원, 2원을 쓸때 0원 경우의수 + 1원만 쓸때 2원에 대한 경우의 수   3원 경우의수 = 1원, 2원을 쓸때 1원 경우의수 + 1원만 쓸때 3원에 대한 경우의 수   4원 경우의수 = 1원, 2원을 쓸때 2원 경우의수 + 1원만 쓸때 4원에 대한 경우의 수   …   1원, 2원을 쓸때 K원을 만드는 경우의 수: DP[K] += DP[K - 2]      5원도 쓸 때 각 금액에 대해 나올 수 있는 경우의 수                                             1원             2원             3원             4원             5원             6원             7원             8원             9원             10원                                         {1, 2, 2, 3, 4, 5, 6, 7, 8, 10}    규칙  6원 경우의수 = 1원, 2원, 5원을 쓸때 6원 경우의수 + 1원, 2원을 쓸때 6원에 대한 경우의 수   7원 경우의수 = 1원, 2원, 5원을 쓸때 7원 경우의수 + 1원, 2원을 쓸때 7원에 대한 경우의 수   …   1원, 2원, 5원을 쓸때 K원을 만드는 경우의 수: DP[K] += DP[K - 5]   최종 점화식: x원을 추가했을때 K원을 만드는 경우의 수: DP[K] += DP[K - x]   이대로 코드로 옮기면 풀린다.   작은문제로 쪼개고 그 결과를 저장하며 DP문제를 해결하는 유형에 대해서는 어떻게든 방법을 생각해낼 수 있을것 같은데, 점화식 짜서 풀어야되는 문제는 정말 답이 없는것 같다.    정답 코드  // // Created by Keith_Lee on 10/01/2019. //  #include &lt;iostream&gt; #include &lt;algorithm&gt; #include &lt;vector&gt;  using namespace std;  int N, K;  int main(){     cin &gt;&gt; N &gt;&gt; K;      int DP[10001] = {0, };     int coins[101];      for(int i=1; i&lt;=N; i++){         cin &gt;&gt; coins[i];     }      DP[0] = 1;      for(int i=1; i&lt;=N; i++){         for(int j=1; j&lt;=K; j++){             if(j &gt;= coins[i]){                 DP[j] += DP[j - coins[i]];             }         }     }      cout &lt;&lt; DP[K] &lt;&lt; '\\n';      return 0; }    ","categories": ["Algorithm"],
        "tags": ["DP"],
        "url": "keithlee94.github.io/algorithm/2293/",
        "teaser":null},{
        "title": "5th week summary",
        "excerpt":"알고리즘 스터디 내용 정리    알고리즘 설계 기법     완전검색: Brute Force            시간이 가장 많이 걸린다.       반드시 답을 찾을 수 있다 =&gt; 소요 시간 비교의 척도가 된다.       시간 내에 답을 찾을 수 있는지 사전에 확인해봐야 한다.           탐욕기법: Greedy            현재의 위치에서 최선의 선택을 한다.       선택이 옳았음을 증명하는 과정이 필요하다.       코드가 짧다.       답을 못찾을 수 있다.           가지치기: Backtracking            답이 될 수 없는 것은 탐색하지 않는다.           분할정복: Divide &amp; Conquer            부분해로 전체 해를 구해 나간다.           동적계획법: Dynamic Programming            부분해로 전체 해를 구해 나간다.(분할정복과 유사)       분할정복과의 차이: 부분해를 따로 저장함으로써 중복된 계산을 방지한다.            정렬     버블 정렬            O(n^2)       맨 뒤에 정렬된 원소는 고정시킨다.           카운팅 정렬            O(n+k)       n이 비교적 작을때만 가능.       양의 정수만 정렬 가능.           선택 정렬            O(n^2)           퀵 정렬            O(nlogn)       상용 API의 정렬은 거의 퀵정렬로 구현되어 있음: 카운팅 정렬이 가장 빠르지만 대상이 정수일때만 사용 가능하므로 제약사항이 없는 퀵정렬로 구현.           병합 정렬            O(nlogn)           가능하면 카운팅 정렬 사용, 안되면 API 사용.    입력 방식 비교     Scanner: 편하지만 시간이 많이 걸린다.   BufferedReader: 시간이 적게 걸리나 문자열로만 리턴 가능.            사용 예시   ```   BufferedReader br = new BufferedReader(new InputStreamReader(System.in));   String s = br.readLine(); // 문자열로만 리턴. 사용자가 입력한 한 줄을 문자열로 통째로 받아옴.   s = “20”;           int num = Integer.parseInt(s); // 숫자로 변경됨.       s = “1 2 3 4 5”;   String[] arr = s.split(“ “); // s를 공백단위로 쪼갠다 =&gt; arr: 5개의 문자열이 들어간다.   ```        출력 방식 비교     System.out.println(): 출력하기 쉬우나 느리다.   BufferedWriter: 빠르게 출력 가능.            사용 예시           BufferedWriter bw = new BufferedWriter(System.out);   bw.write(\"abcde\"); // 줄 안바뀜.   bw.write(\"\\n\"); // 줄바꿈하려면 개행문자 써줘야 함.                            static / non-static  static 멤버는 non-static 멤버에 접근할 수 없다: static 멤버는 객체 생성 전에 사용할 수 있고, non-static 멤버는 객체 생성 후에 사용할 수 있기 때문.     static            클래스 정보가 처음 로딩된 후 ~ 프로그램 종료시까지 사용 가능.(속도 빠름)       단점: 메모리에 상주하므로 메모리 낭비 가능성 존재.           non-static            객체 생성 시점 ~ 참조변수가 없어질때까지 사용 가능.            Java 프로그램 메모리 영역     Call Stack: 메인 메소드, 지역변수 + 메인 메소드에서 호출된 메소드, 지역변수 저장.   Heap   Method Area   의 3가지 영역이 프로그램 실행시 자동으로 생성됨.    반복문, 재귀함수     반복문: CPU의 연산만 사용하므로 메모리 사용량이 적다.   재귀함수: 속도가 느리고 Call Stack 영역의 메모리를 많이 사용한다.   =&gt; 꼭 필요한 경우에만 재귀함수 사용할것.(필요할때: 동적으로 반복문을 추가해야할 때)   재귀함수의 인자도 Call Stack에 계속 쌓이므로 반드시 필요한 경우가 아니면 전역변수 등으로 처리하여 메모리를 절약할 수 있다.      재귀함수 예시: 2진수 3자리를 모두 출력하는 재귀함수     void twoThree(int i, int end, int[] arr){ // i: 시작 차수, end: 종료 차수, arr: 숫자 저장할 배열   if(i == end){       System.out.println(Arrays.toString(arr));       return;   }   else{       arr[i] = 0;       twoThree(i+1, end, arr);       arr[i] = 1;       twoThree(i+1, end, arr);   } }              Java 내용 정리    class, object     class: 틀   object: 틀에서 만든 대상.    class 정의     class명: 특수문자는 $, _만 허용. 길이제한 없음. 반드시 문자로 시작(숫자로 시작할 수 없음)   class를 개발한다 = 부품을 만드는 것과 같다. =&gt; 재활용성을 염두에 두고 개발해야 한다.   class 내 field값을 초기화하지 않고 객체 생성시 각 타입의 기본값으로 초기화된다.    객체 생성     Class Area에서 호출하려는 class가 있는지 찾는다.   있으면 Heap 영역에 객체 주소 할당.   생성된 객체에 할당된 주소값 저장.            Class Loader: 하드디스크에 있는 class 파일을 메모리로 읽어온다.       Class Area: 메모리로 읽어온 클래스의 정보를 저장하는 곳.            생성자     클래스와 이름이 같은 메소드.   반드시 리턴타입이 없어야 한다.   객체 생성시 항상 호출된다 =&gt; 반드시 있어야 한다.(초기화작업 필요없을 경우 생략 가능)   생성자를 따로 정의해두지 않았다면 컴파일러가 컴파일 시 기본 생성자를 코드에 삽입한다.   기본 생성자: 아무 파라미터가 없는 생성자.    this()     생성자 안에서만 사용 가능한 메소드.   다른 여러 생성자가 있으면 this()를 통해 다른 생성자 실행 가능.   다른 생성자 호출시 넘겨줄 인자가 없으면 임의로 기본값을 정해 넘길 수 있다. =&gt; 아무 인자 없이 호출시 전부 설정된 기본값으로 들어간다.   목적: 중복 코드를 줄이기 위해.    Overloading     같거나 비슷한 일을 하는 메소드 구현시 메소드 이름을 같게 정의하여 사용을 편리하게 한다.   메소드명은 같고, 파라미터가 다르다.    접근 수식어(=접근 지정자, 접근 제한자)     public: 모든 경우 접근 가능.   protected: 패키지 상관없이 상속관계면 접근 가능.   default: 아무 접근 지정자가 없으면 default. 같은 패키지 내에서만 접근 가능.   private: 같은 class 내에서만 접근 가능.       같은 패키지 &amp; 상속관계: default, protected, public 접근 가능.   같은 패키지 &amp; 다른 클래스: default, protected, public 접근 가능.   같은 클래스: default, private, protected, public 접근 가능.   다른 패키지 &amp; 상속관계: protected, public 접근 가능.   다른 패키지: public 접근 가능.    getter, setter  함부로 데이터에 접근하려는 시도를 방지할 수 있다.    한개의 .java파일 내에 여러개의 클래스     한 클래스 내에 여러 클래스 생성 가능.   But, 접근지정자는 단 하나의 클래스에만 붙일 수 있다.(.java파일의 파일명과 일치하는 클래스에만 붙일 수 있음): 프로그램 외부에서 무분별하게 접근하는 것을 막기 위함(보안적 측면)   파일명과 일치하지 않는 모든 클래스들은 default 접근 지정자만 혀용한다.   class에 대한 접근 지정자는 public, default의 2가지만 가능.    API     Application Programming Interface   객체지향 언어에서 class 단위로 미리 구현되어 제공되는 프로그램.   class 단위의 library.    객체지향형 언어의 3가지 특징     Encapsulation(캡슐화)   Inheritance(상속)   Polymorphism(다형성)    Inheritance     Java에서는 단일 상속만 지원.(부모는 하나만 가능)   class 설계시 특정 class를 상속받아 그 class의 variable과 메소드를 사용할 수 있다.   is a 관계            자식이 부모자리에 갈 수 있으나 부모가 자식자리에 갈 수 없다.       예: Tiger is an Animal - Tiger: 자식, Animal: 부모.           Generalization: class들의 공통된 특징을 모아 super class를 만든다.   Specialization: 비슷한 속성, 기능을 가진 클래스를 상속받아 새로운 클래스를 만든다.(sub class를 만든다)   sub class object 생성시 자동으로 super class의 생성자가 먼저 실행된다.            parent 객체가 먼저 생성된다.       상속관계가 여러 단계를 거치면 메모리가 낭비될 수 있다 =&gt; 상속구조를 최소화하는 것이 좋다.            Overriding     부모에게 물려받은 메소드를 자식 클래스에 맞게 재정의하는 것.   메소드 이름, 리턴 타입, 파라미터 모두 부모클래스의 메소드와 일치해야 한다.   바꿀 수 있는것: 메소드 바디, 접근 지정자.   접근 지정자는 부모의 접근 지정자와 같게 하거나 범위를 넓히는 방향으로만 가능하다.(좁아지면 안됨)   @Override annotation이 붙는다.   오버라이딩한 후에는 부모의 메소드 대신 항상 자식이 오버라이딩한 메소드가 실행된다.    @annotation     프로그램에 대한 설명이나 설정사항 등을 나타냄.   함부로 지우다가 큰일난다.    super, this     static 메소드 내에서 사용 불가.   static 메소드 내에서 굳이 쓰려면: non static 메소드를 메소드에서 super나 this를 사용하도록 새롭게 정의한 후 static 메소드에서 그 메소드를 호출한다.   super는 한번만 쓸 수 있다: super.super 안됨.    NullPointerException     객체 생성이 안된 상태에서 객체의 메소드 호출시 발생.    상속관계에서 인자 있는 생성자     부모, 자식의 생성자 인자 중 겹치는게 있으면 super(겹치는인자, 겹치는인자, …)을 쓴 다음 자식만의 인자를 사용하여 따로 초기화하면 편하다.   목적: 코드 중복 제거 + 자식이 별도의 생성자를 정의할 수 있도록 한다.   주의사항: super(…) 구문이 항상 맨 먼저 나와야 한다.    상속관계 예시  class Parent{}  class Child extends Parent{}  Parent x = new Child(); // 가능: 자식은 부모자리에 갈 수 있다. Child x = new Parent(): // 불가능: 부모는 자식자리에 갈 수 없다.    Polymorphism(다형성)     생성된 객체를 가리키는 레퍼런스(변수)의 타입이 여러가지인 경우.   타입 캐스팅: 실제 저장되어 있는 객체가 캐스팅할 타입보다 작은 타입이어야 형변환 가능.            반대로 할 경우 컴파일은 되지만 실행시 Exception 발생.           상속관계에서는 부모가 항상 자식보다 큰 타입이 된다.    Polymorphism 예시  class GrandParent{     String name = \"Doe\";      public void printName(){         System.out.println(name);     }  }  class Parent extends GrandParent{     String name = \"Tom\";     String address = \"Seoul\";      public void printName(){         System.out.println(name);     }      public void printAddress(){         System.out.println(address);     }  }  public class Child extends Parent{     public void printName(){         System.out.println(\"Tomson\");     }      public void callSuper(){         super.printName();     }      public static void main(String[] args){         Parent x = new Child(); // 가능         GrandParent c = new Child(); // 가능         Child y = new Parent(); // 불가능          c.printName(); // 결과: Tomson =&gt; GrandParent의 printName을 Parent가, Parent의 printName을 Child가 재정의하므로 Child까지의 범위에서 가장 마지막에 재정의된 Child의 printName이 실행된다.         c.callSuper(); // 에러: GrandParent 타입의 상위가 없기 때문.         c.printAddress(); // 에러: GrandParent에 printAddress 메소드가 정의되어 있지 않다.         System.out.println(c.getClass().getSimpleName()); // 결과: Child =&gt; c의 타입은 GrandParent지만, 실제로 저장된 객체는 Child이므로 Child가 출력된다.(getClass: 실제로 저장된 객체의 타입을 가져온다.)                  GrandParent e = new Parent();         e.printName(); // 결과: Tom =&gt; GrandParent의 printName을 Parent가 재정의했으므로 Parent까지의 범위에서 가장 마지막에 재정의된 Parent의 printName이 실행된다.         System.out.println(e.getClass().getSimpleName()); // 결과: Parent.     } }    ","categories": ["Java"],
        "tags": ["Java"],
        "url": "keithlee94.github.io/java/5th-Week-Summary/",
        "teaser":null}]
