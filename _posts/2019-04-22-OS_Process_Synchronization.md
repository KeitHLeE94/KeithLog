---
categories: "OS"
tags: 
- "Synchronization"
author_profile: true
---

# Process Synchronization
- 필요성: 여러 프로세스 동시 실행시 공유되는 데이터의 일관성이 깨질 수 있다
    - race condition: 데이터에 어떤 프로세스가 먼저 접근하는지에 따라 결과가 달라지는 경우

# Critical Section
- 공유 자원에 접근하는 코드의 일부.
- 모든 프로세스는 각자의 critical section을 갖는다.
- 한 프로세스가 critical section에 진입했을 경우 다른 프로세스들은 진입할 수 없어야 한다.
- 구조
    ```
    do{
        entry section
        critical section
        exit section
        remainder section
    } while(true);
    ```

# Solution for Critical Section Problem
- Mutual Exclusion
    - 어떤 프로세스가 critical section 내에 있을 경우 다른 프로세스는 critical section 진입 불가
- Progress
    - critical section 내에 어떠한 프로세스도 없고 critical section에 진입하고자 하는 프로세스가 있을 경우 이 프로세스는 반드시 critical section에 진입할 수 있어야 한다
- Bounded Waiting
    - critical section 진입을 요청한 프로세스는 유한한 시간 내에 critical section에 진입해야 한다
- Locking
    - critical section을 locking으로 보호한다

# Mutex Locks
- acquire(): locking 설정. critical section 접근 권한을 얻는다
- release(): locking 해제. critical section에서 나갈때 실행한다
- acquire, release 연산은 atomic해야 한다: 두 연산이 동시에 일어날 수 없다
- busy waiting: 다른 프로세스가 lock을 가지고 있으면 lock을 걸고자 하는 프로세스는 그 lock이 해제될때까지 계속 lock의 상태를 확인하며 대기

# Spin Lock
- busy waiting이 적용된 mutex lock
- busy waiting의 목적: 다른 프로세스에 CPU 자원을 뺏기지 않기 위해
- 장점: context switching overhead를 줄일 수 있다
- 단점: 프로세스가 lock을 소유하는 시간이 길면 비효율적이다
- 구현
    ```
    acquire(){
        while(!available){
            ; // busy waiting
        }
        available = false; // lock 획득
    }

    release(){
        available = true; // lock 해제
    }

    do{
        acquire();

        critical section

        release();

        remainder section
    } while(true);
    ```

# Semaphore
- busy waiting이 필요없다
- Semaphore S: 정수값. critical section 내에 한번에 진입 가능한 프로세스 수
- P(), V() 연산: wait(), signal() 연산. 각각 lock을 얻고 lock을 해제하는 연산이다
- 구현
    ```
    wait(S){
        while(S <= 0){ // 현재 critical section에 들어갈 수 있는 자리가 없다
            ; // busy waiting
        }

        S--; // critical section 진입
    }

    signal(S){
        S++; // lock을 해제하고 critical section에서 나감
    }
    ```
- counting semaphore: critical section 내에 2개 이상의 프로세스가 동시에 진입 가능
- binary semaphore: critical section 내에 1개의 프로세스만 동시에 진입 가능
    - mutex lock과 같다
    - wait(), signal()이 한 세마포어 안에서 동시에 일어날 수 없다
- semaphore without busy waiting
    - 각각의 세마포어에는 waiting queue가 존재한다
    - block(): critical section에 빈자리가 없을때 critical section 진입을 요청하는 프로세스의 critical section 진입을 막는다
    - wakeup(): critical section에 빈자리가 있으면 대기중인 프로세스에 빈자리가 있음을 알린다
    - 구현
        ```
        typedef struct{
            int value; // 동시에 critical section에 진입 가능한 프로세스 수
            struct process* list; // critical section에 진입하려고 대기중인 프로세스 리스트
        } semaphore;

        wait(Semaphore *S){
            S->value--;

            if(S->value < 0){ // 현재 critical section에 빈자리가 없으면
                add this process to S->list; // 프로세스를 세마포어 대기열로 보낸다
                block(); // 프로세스의 critical section을 막는다
            }
        }

        signal(Semaphore *S){
            S->value++;

            if(S->value <= 0){ // 현재 critical section에 진입하고자 하는 프로세스가 있으면
                remove a process P from S->list; // 세마포어 대기열 맨 앞의 프로세스를 제거한다
                wakeup(P); // 그 프로세스에게 현재 critical section에 빈자리가 있음을 알린다
            }
        }
        ```

# Deadlock & Starvation
- Deadlock: 2개 이상의 프로세스가 각각의 자원을 점유한채 서로의 자원을 요청하는 현상 (점유 대기)
- Starvation: 세마포어에 진입한 프로세스의 실행이 다른 프로세스에 의해 무한히 연기되는 현상 (indefinite blocking)
- Priority Inversion: 우선순위가 낮은 프로세스가 우선순위가 높은 프로세스에게 필요한 lock을 점유한 상태
    - 원인: Nonpreemptive regions of code, interrupt, synchronization, mutual exclusion
    - priority inheritance protocol로 해결
    - 예
        ![Priority Inversion](https://user-images.githubusercontent.com/23356503/56507038-0f062100-655b-11e9-8acc-422918558763.png)
        - 세마포어 S1을 공유하는 T1, T3에 대해 S1과 상관없는 T2가 개입하여 priority inversion 발생

# Problems of Synchronization
- Bounded Buffer Problem
    - 원소를 1개만 담을 수 있는 n개의 buffer 존재
    - Semaphore mutex: 초기값 1, full: 초기값 0, empty: 초기값 n
    - Producer
        ```
        do{
            // Produce an item in next_produced
            ...
            wait(empty);
            wait(mutex);
            ...
            // Add next produced to buffer
            ...
            signal(mutex);
            signal(full);
        } while(true);
        ```
        - 빈 buffer를 채우고 full signal을 보내 lock 해제
        - buffer가 모두 차있다면 wait
    - Consumer
        ```
        do{
            wait(full); // 초기값이 0이다 => producer가 채워놓기 전까지 계속 대기한다
            wait(mutex);
            ...
            // Remove an item from buffer to next_consumed
            ...
            signal(mutex);
            signal(empty);
            ...
            // Consume the item in next_consumed
            ...
        } while(true);
        ```
        - buffer가 모두 full이면 item을 꺼내옴
        - buffer가 모두 empty면 empty signal을 보내 lock 해제
- Readers-Writers Problem
    - Readers: 읽기만 가능
    - Writers: 읽기, 쓰기 모두 가능
    - Problem
        - Reader는 몇명이 동시에 접근해도 상관없다
        - Writer: 동시에 하나의 writer만 접근할 수 있어야 한다
    - Shared Data
        - Data Set
        - Semaphore rw_mutex: 초기값 1, mutex: 초기값 1
        - Integer read_count: 초기값 0
        - writer
            ```
            do{
                wait(rw_mutex);
                ...
                // writing is performed
                ...
                signal(rw_mutex);
            } while(true);
            ```
            - writer는 준비되었으면 즉시 writing을 수행해야 한다
        - reader
            ```
            do{
                wait(mutex);
                read_count++;

                if(read_count == 1){
                    wait(rw_mutex);
                }

                signal(mutex);
                ...
                // reading is performed
                ...
                wait(mutex);
                read_count--;

                if(read_count == 0){
                    signal(rw_mutex);
                }
                signal(mutex);
            } while(true);
            ```
            - writer가 작업중인 경우 어떠한 reader도 접근할 수 없다
- Dining Philosophers Problem
    - shared data
        - bowl of rice(data set)
        - semaphore chopstick[5] initialized to 1
    - Philosopher i의 구조
        ```
        do{
            wait(chopstick[i]); // 자기 왼쪽의 젓가락 집음
            wait(chopstick[(i+1) % 5]); // 바로 오른쪽의 젓가락 집음
            ...
            // eat
            ...
            signal(chopstick[i]);
            signal(chopstick[(i+1) % 5]);
        } while(true);
        ```