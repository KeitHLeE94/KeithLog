---
categories: "Java"
tags: "Java"
author_profile: true
---
# 알고리즘 스터디 내용 정리
<hr/>

# 백트래킹, BFS의 차이
- BFS: 모든 경로를 추적해본다.
- 백트래킹: 추적하는 경로가 해결책이 될 수 없으면 더이상 그 경로를 따라가지 않는다.
<hr/>

# Priority Queue
- 큐에 삽입할때 우선순위를 적용하여 재배치한다.
- 우선순위가 높은 것이 먼저 pop됨.
- 배열, 리스트, Heap으로 구현 가능 - Heap이 가장 적합.
<hr/>

# 연결 리스트, 배열
- 배열
    - 순차 데이터에 적합
    - 데이터 접근 속도가 빠르다.
    - 단점: 배열 중간에 삽입/삭제시 shift 필요 - 시간 오래걸림, 크기 변경 불가.
- 연결리스트
    - 비순차적 데이터에 적합
    - 삽입, 삭제가 쉽다.
    - 단점: 필요없는 데이터(front, end 등)가 있음, 데이터 접근속도가 느림.
<hr/>

# 연결 리스트 종류
1. List: 순서 있음, 중복 허용.
    - ArrayList
        - 배열과 유사
        - 크기 변경 가능
        - 배열 다음으로 접근속도가 빠르다.
    - LinkedList
        - 노드 사용
        - 비순차적 삽입, 삭제 가능
        - 접근속도가 느리다.

2. Set: 순서 없음, 중복 불가.
    - 중복 삽입시 새로운 데이터를 저장하지 않음.
    - HashSet
        - hashing기법을 통해 중복 확인(O(1))
    - TreeSet
        - Binary Search Tree를 사용하여 중복 확인(O(logN))

3. Map: 순서 없음, 중복 불가. (키, 값) 쌍으로 데이터 저장.
    - 중복 삽입시 기존의 데이터를 새 데이터로 덮어씀.
    - 키 = 중복 불가, 값 = 중복 가능.
    - HashMap
        - hashing기법을 통해 중복 확인(O(1))
    
    - TreeMap
        - Binary Search Tree를 사용하여 중복 확인(O(logN))

* TreeMap, TreeSet의 장점: 미리 정렬이 되어 있는 형태 => 정렬이 많이 필요하거나 자주 사용될 경우 유용하다.
<hr/>

# Java 스터디 내용 정리
<hr/>

# 예외처리 방법
1. try ~ catch: 예외 발생 위치에서 바로 처리
    - try ~ catch ~ finally: 예외 발생 여부와 관계없이 finally는 항상 실행된다.(optional)

2. throws: 발생한 예외를 호출자로 위임하여 처리
    - 메소드 선언시 사용.
    - throw: 실제 Exception 발생시 사용.
    - throws가 붙은 메소드는 반드시 예외처리 내용을 포함해야 한다.(try ~ catch나 if ~ else 등으로 구현)
<hr/>

# Exception
- 상속관계 존재: 여러 Exception을 catch하고자 할 경우 부모타입 하나만 명시하여 여러 Exception들을 한번에 잡을 수 있다.
- 세분화 방법: 범위가 좁은 Exception -> 넓은 Exception 순으로 코드 작성.
- 하나의 클래스이다 => 사용자가 별도로 정의할 수 있다.
    - 정의 방법: 클래스 선언시 extends Exception을 붙인다.
- 상속관계에서 부모와 자식이 다른 종류의 Exception throw 가능
    - 자식이 throw하는 Exception은 부모가 throw하는 Exception보다 범위가 좁거나 같아야 한다.(더 넓은 범위로 정의 불가)
    - 부모는 Exception을 throw하고 자식은 throw하지 않는 방식도 구현 가능.
<hr/>

# Stream
- InputStream: 데이터를 받아들인다.
- OutputStream: 데이터를 보낸다.
- 기본적으로 바이트 단위로 데이터 전송.
- 문자 처리: 바이트로 처리하기 어려우므로 InputStreamReader, OutputStreamWriter를 활용하여 처리한다.
- 사용 종료후 반드시 close해줘야 한다.
<hr/>

# 데이터 전송단위별 Stream 종류
- byteStream: 1바이트에 코드값을 담아 전송하는 스트림. (InputStream/OutputStream)
- characterStream: 2바이트에 코드값을 담아 전송하는 스트림. (InputStreamReader/OutputStreamWriter)
<hr/>

# 데이터 연결여부에 따른 Stream 종류
- NodeStream: 데이터와 직접 연결되어 있는 스트림.
- ProcessStream(FilterStream): NodeStream에서 데이터를 받아 가공하는 스트림.(일종의 필터 역할)
<hr/>

# Scanner, BufferedReader 속도 차이 원인
Scanner는 1바이트씩 읽어오는 InputStream이고 BufferedReader는 2바이트씩 읽어오는 InputStreamReader이기 때문에 BufferedReader가 속도가 더 빠르다.
<hr/>

# Serialization
- 객체를 스트림을 통해 이동시키려면 직렬화(Serialization) 조건을 만족시켜야 한다.
- 어떻게: 전송할 객체의 클래스가 Serializable 클래스를 implements 하면 된다. (객체를 배열로 만들어 전송하는 것)
- 역 직렬화: 직렬화된 배열을 객체로 복원하는 작업.
<hr/>

# Thread
- Process의 작은 실행 단위.
- 단독으로 존재할 수 없다: Process 내에 포함된다.
- Thread 없이는 프로세스가 동작하지 않는다: 프로세스의 일꾼 역할.
- Multi thread
    - 프로그램 하나를 실행시켰을때 여러명의 일꾼이 일하는 것과 같다.
    - 동시에 여러 작업을 나눠서 실행 가능.
- 장점
    - CPU의 활용률을 높일 수 있다.
    - **응답성 향상**: 작업 시간, 요구 성능에 따라 작업을 분리하여 병렬로 수행 가능.
    - 프로세스 자원 공유: 효율성 향상(메모리 절약)
- 단점
    - Context Switching 비용 발생
    - Thread 제어의 어려움
<hr/>

# Thread Life Cycle
1. New
    - Thread 객체가 생성된 상태.
2. Runnable
    - New 상태의 Thread에 대해 start() 메소드가 호출되면 Runnable 상태로 전환된다.
    - start() 메소드 호출: 필수로 실행되어야 하는 과정.
    - Race Condition: Runnable 상태의 Thread들 중 어떤 것이 먼저 실행될지 알 수 없다.
3. Running
    - JVM이 Thread의 run() 메소드를 호출하면 Thread 동작.
    - Thread의 sleep(), wait(), join() 메소드 호출시 Thread가 Waiting Pool로 이동하여 대기 상태로 전환된다.(Thread 동작 일시 정지)
        - Runnable 상태로 전환되는 조건
            1. 대기상태의 Thread의 sleep(), join() 시간이 종료되었을 경우
            2. wait()에 대한 notify() 메소드가 호출된 경우 
            3. interrupt() 메소드가 호출된 경우
            4. I/O가 종료된 경우
4. 동작중인 Thread에서 yield() 메소드 호출시 동작을 멈추고 Runnable 상태로 전환되어 다시 race condition에 들어간다.
5. Terminate
    - Thread의 run() 메소드가 종료되면 Terminate 상태로 전환됨.
    - 한번 소멸한 Thread는 더이상 동작하지 않는다.
        - 다시 동작시키려면 Thread를 다시 생성하여 다시 동작시켜야 한다.

# Thread 구현
- Runnable interface를 implements 하거나 extends 하면 된다. (이미 상속중인 다른 클래스가 있으면 implements하면 됨.)
    - Runnable을 implements한 경우
        - 객체는 Thread가 아니다: Runnable 객체이다.
        - Thread가 수행해야 하는 작업을 run() 메소드에 정의해야 한다.
        - 여러 Thread가 하나의 Runnable 객체를 실행할수도 있고, 각자 다른 Runnable 객체를 실행할수도 있다. (하나의 Runnable 객체일 경우 자원 공유됨)
- Thread.run(): callback 메소드(사용자에 의해 직접 호출되지 않지만 특정 조건을 만족하면 자동으로 실행되는 메소드)
    - Thread의 run() 메소드를 호출하여 실행하면: main Thread가 실행하는 것.
    - Thread의 start() 메소드를 호출하여 자동 실행되면: run()이 정의된 클래스의 Thread가 실행하는 것.
<hr/>

# Thread 구조
![Thread 구조](https://user-images.githubusercontent.com/23356503/51823142-dec73180-2321-11e9-88f8-eb20c5b72bd0.png)

- Runnable 객체를 직접 implements 하거나 Runnable 객체를 implements하는 Thread 클래스를 상속받는 두가지 형태 모두 가능.
- Thread.run(): 아무 내용 없는 메소드(추상메소드나 다름없다.)
    - Thread를 상속한 클래스에서 반드시 오버라이딩해야 한다.
    - Thread 클래스를 추상클래스로 만들 수 없어 이런 형태로 만들어짐.
- Thread 객체를 생성하려면 target 객체(Runnable 객체)를 넣어줄 것.
    - 따로 안넣어주면 Thread.run()이 실행되어 아무 결과도 안나옴.
<hr/>

# Thread 동기화 문제
- 데이터가 여러 Thread들에 의해 공유되어 발생.
- 예
    ```
    int count = 0;
    Thread t1, t2, t3;

    public void run(){ // t1, t2, t3가 모두 같은 메소드 사용.
        go();
    }

    /*
    * 작업 과정
    * 1. 현재 count값 읽기
    * 2. 연산
    * 3. 새로운 값 저장.
    */
    public void go(){
        count++;
        System.out.println(count);
    }

    => 각 thread의 접근 순서에 따라 다른 결과가 나온다.
    ```

- 해결: 공유하는 메소드에 synchronized 키워드를 붙인다.
    - public synchronized void go() {...}
    - 한번에 한 Thread만 자원에 접근할 수 있으므로 순차실행 형태가 된다. (일종의 lock을 거는 것) - 꼭 필요한 부분에만 사용할것.
    - method뿐 아닌 객체에도 사용 가능. (run() 메소드에는 사용할 수 없다: run()은 오버라이딩된 메소드이므로)
<hr/>

# Thread의 method
1. join(): 다른 Thread가 종료될때까지 join()을 호출하는 Thread가 대기한다.
2. notify(): Thread와 Thread간에 신호를 줄 때 사용 (깨울 메소드가 없으면 아무 동작도 안함)
3. wait(): 다른 Thread가 notify()를 호출하기 전까지 대기.

- wait(), notify()는 synchronized 영역에서만 사용 가능.
<hr/>

# Java 소켓 통신
## Server
1. ServerSocket(port번호) 생성
2. ServerSocket.accept() 호출
    - 클라이언트가 접속할대까지 기다리고, 클라이언트가 접속하면 클라이언트 소켓을 받아온다.
    - block되는 특징: 요구 조건(클라이언트의 접속)을 만족하지 않으면 이후 내용을 실행하지 않는다.
3. 도착한 클라이언트 소켓으로부터 입출력 스트림을 얻어낸다.
4. 스트림으로 메시지 전송
5. ServerSocket 닫기(close() 호출)
6. 스트림 닫기

## Client
1. Socket(서버 ip주소, 서버 port번호) 생성: 소켓 객체가 만들어지는 순간 서버에 접속된다.
2. 생성한 Socket으로부터 입출력 스트림을 얻어낸다.
3. 스트림으로 메시지 전송
4. Socket 닫기(close() 호출)
5. 스트림 닫기