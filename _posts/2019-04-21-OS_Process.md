---
categories: "OS"
tags: 
- "Process"
author_profile: true
---

# Process
- Program in execution
- 프로그램이 메모리에 올라오면 프로세스가 된다.
- 구성 요소
    - text section: program code
    - program counter
    - stack: 임시 데이터(로컬 변수 등) 저장
    - data section: 전역변수 저장
    - heap: 실행 도중 동적할당된 메모리 공간
![Process Structure](https://user-images.githubusercontent.com/23356503/56469277-80b67000-6472-11e9-89e4-70fe4c0288c4.png)

# Process State
1. new: 프로세스가 생성된 상태
2. ready: 프로세서에 할당되길 기다리는 상태
3. waiting: 프로세스가 event 발생을 기다리는 상태
4. running: 작업 수행
5. terminated: 작업 완료후 종료
- new -> ready: 메모리에 올라감
- ready -> running: CPU 자원 할당
- running -> ready: 인터럽트 발생
- running -> waiting: I/O 작업, event 발생
- waiting -> ready: I/O 작업, event 완료
- running -> terminated: exit 호출

# PCB
- Process Control Block
- 프로세스 정보 저장.
1. Process state
2. Program Counter: 프로세스가 다음에 실행할 명령어 주소를 가리킴
3. Process ID
4. CPU Register
5. CPU scheduling information: priority, scheduling queue pointers
6. Memory management information: memory allocated to process
7. Accounting information: CPU usage, clock time elapsed, time limits
8. I/O status information: I/O device allocated to process, list of open files

# Thread
- 실행의 흐름
- 각 쓰레드당 하나의 PCB를 갖는다.

# Process Scheduling
- scheduling queue
    - job queue: 시스템의 모든 프로세스들의 집합
    - ready queue: 메인메모리에서 실행 대기중인 프로세스들의 집합
    - device queue: I/O 장치를 기다리는 프로세스들의 집합
- scheduler: CPU가 다음에 실행할 프로세스 선택
    - long term: 어떤 프로세스를 ready queue에 넣을지 결정
    - short term: 어떤 프로세스에 CPU 자원을 할당할지 결정
- I/O Bound Process: CPU 사용시간이 짧다. I/O에 치중.
- CPU Bound Process: CPU 사용시간이 길다. 연산에 치중.

# Context Switch
- CPU가 프로세스 전환시 이전 프로세스 상태를 저장하고 새로운 프로세스의 상태 정보를 불러오는 작업.
- Context: 프로세스 상태 정보. PCB에 저장.
- Overhead 발생: context switching동안 시스템이 다른 작업을 할 수 없다.
- 순서

    1. 현재 진행중인 프로세스 정보 PCB에 저장
    2. 새로 실행할 프로세스의 PCB 정보 불러옴

# Process Creation
- 부모프로세스가 자식프로세스 생성
- pid: 프로세스간 구별을 위해 사용
- 자원 공유: 부모와 자식간 자원 공유 가능
- 실행 옵션
    - 부모가 자식 끝나기까지 기다림
    - 부모와 자식이 동시에 실행
- fork()
    - 새로운 프로세스를 만드는 시스템 콜
    - 부모와 완전히 동일한 자식 프로세스 생성
    - pid_t 타입의 pid 리턴
        - 음수: fork() 실패
        - 0: 자식 프로세스
        - 자연수: 부모 프로세스
- exec()
    - 생성된 자식 프로세스의 context 변경을 위한 시스템 콜

![Process Creation](https://user-images.githubusercontent.com/23356503/56469481-5619e680-6475-11e9-9ca2-2d28e3ee9f39.png)

# Process Termination
- exit()
    - 프로세스가 실행을 끝내고 OS에 프로세스 삭제를 요청하는 시스템 콜
    - 프로세스에 할당된 자원 반환
- abort()
    - 부모 프로세스가 자식 프로세스를 종료시키는 시스템 콜
- zombie process: 종료된 프로세스를 기다리는 부모 프로세스가 없는 프로세스
- orphan process: 부모 프로세스가 실행 완료 전 종료된 프로세스

# IPC
- InterProcess Communication: 프로세스간 통신을 위해 필요
- Shared Memory
    ![Shared Memory](https://user-images.githubusercontent.com/23356503/56469538-215a5f00-6476-11e9-984c-33f601c6e3f0.png)
    - 장점: 메모리에 곧바로 접근하므로 속도가 빠르다
    - 단점: 동기화가 어렵다
- Message Passing
    ![Message Passing](https://user-images.githubusercontent.com/23356503/56469567-96c62f80-6476-11e9-87af-6f153a671e56.png)
    - 장점: 동기화가 쉽다
    - 단점: 커널에 의존하므로 속도가 느리다

# Message Passing
- send, receive 기능 제공
- 과정
    
    1. 소통하려는 두 프로세스 간 communication link 개설
    2. send, receive를 통해 메시지 교환
- Direct Communication
    - 어떤 프로세스에게 메시지를 보내거나 받을지 명시
    - link가 자동으로 생성됨
    - 하나의 link는 한쌍의 프로세스만 연결, 한쌍의 프로세스 간에는 하나의 link만 존재
    - bidirectional
- Indirect Communication
    - mailbox(port)를 통해 메시지를 주고받음
    - 프로세스간 mailbox를 공유한 경우에만 소통 가능
    - 프로세스간 mailbox 공유시에만 link 생성
    - 하나의 link에 여러 프로세스 연결 가능, 한쌍의 프로세스 간 여러 link 존재 가능
    - unidirectional, bidirectional
- Synchronization
    - blocking send: 메시지 수신 전까지 sender block
    - nonblocking send: block 없이 sender가 메시지 전송
    - blocking receive: 메시지가 들어오기 전까지 receiver block
    - nonblocking receive: block 없이 receiver가 메시지 수신 = 메시지가 null일 수 있다.