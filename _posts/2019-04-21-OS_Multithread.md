---
categories: "OS"
tags: 
- "Multithread"
author_profile: true
---

# Thread
- 독립적으로 스케줄링되는 단위
- 프로세스 = 하나 이상의 같은 메모리 공간을 공유하는 쓰레드들로 구성
- 장점

    1. 반응성: 프로세스가 block되어도 영향 없음
    2. 자원 공유: 프로세스에 비해 자원공유가 간단
    3. 경제성: context switching overhead가 프로세스에 비해 적다
    4. 확장성: 멀티프로세서 장점 활용 가능
- 예: 서버가 클라이언트에 요청을 받으면 새 프로세스를 생성하는 대신 worker thread를 생성하여 요청 처리
- 구성
    - stack + register
    - 같은 프로세스 내 쓰레드들끼리는 code, data, heap 공유
    - 쓰레드 생성시 stack + register만 새로 생성됨

# Parallelism과 Concurrency
    Parallelism
    - 동시에 2개 이상의 작업을 수행하는 시스템
    - 멀티코어 구조에서만 가능
    - Data Parallelism: 여러 프로세서에서 동일한 데이터로 동일한 작업 수행
    - Task Parallelism: 여러 프로세서에서 서로 다른 쓰레드로 서로 다른 작업 수행

    Concurrency
    - 2개 이상의 작업이 동시에 진행될 수 있는 시스템
    - 싱글코어 구조에서도 가능

    차이
    - Concurrency
        - 서로 다른 작업들을 중첩시켜 진행하는 방식
        - 여러 작업들이 있을때 한 작업이 끝나기 전 다른 작업 진행 가능
    - Parallelism
        - 서로 다른 작업들을 동시에 여러개 처리하는 방식

# Multithreading
- User thread: user level thread library가 관리
- Kernel thread: kernel이 관리
- 종류

    1. Many to One
        - 여러 user thread들이 하나의 kernel thread에 결합
        - 하나의 thread가 block되면 다른 thread들도 block됨
        - 하나의 kernel thread만이 처리 가능하므로 병렬 실행 불가
    2. One to One
        - 하나의 user thread가 하나의 kernel thread에 결합
        - user thread 생성시 연결할 kernel thread도 함께 생성
        - 병렬 실행 가능
        - 하나의 thread가 block되어도 다른 thread 실행 가능
        - context switching overhead 발생 가능
        - 생성 가능한 thread 수 제한
    3. Many to Many
        - 여러 user thread가 여러 kernel thread에 결합
        - kernel thread 생성 수 제한 없음
    4. Two level model
        - Many to Many + One to One 형태
        - 중요도가 높은 user thread는 One to One 형태로 처리하여 선점권을 부여할 수 있다.