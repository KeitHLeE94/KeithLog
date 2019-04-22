---
categories: "OS"
tags: 
- "Synchronization"
author_profile: true
---

# Deadlock 발생조건
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait
- 위 4가지 조건을 동시에 만족할 경우 deadlock 발생 가능
- 예
    ![Deadlock1](https://user-images.githubusercontent.com/23356503/56508395-192a1e80-655f-11e9-9dd3-4a21bc005c0f.png)
    ![Deadlock2](https://user-images.githubusercontent.com/23356503/56508415-2a732b00-655f-11e9-8d74-0aa831b42c42.png)
    - 그래프에 cycle이 없다: Deadlock이 발생하지 않는다
    - 그래프에 cycle이 있다
        - 각 자원이 단 1개의 instance로 구성되어 있다: deadlock 확실
        - 여러개의 instance로 구성되어 있다: deadlock 발생 가능성 있음

# Deadlock Prevention
1. Mutual Exclusion
    - 프로세스들간에 공유되지 않는 자원에 대해서만 mutual exclusion 설정
2. Hold and Wait
    - 프로세스 실행 전 프로세스 수행에 필요한 모든 자원을 할당한다
        - low resource utilization  - starvation 가능성
3. No Preemption
    - 프로세스 실행에 필요한 모든 자원이 없다면 현재 이 프로세스에 할당된 자원 모두 반환
4. Circular Wait
    - 각 resource에 번호를 매겨 번호순으로 자원을 요청하도록 한다

# Deadlock Avoidence
- 각각의 프로세스가 최대 몇개의 자원을 필요로 하는지 알아야 한다
- Safe State: 프로세스에서 요청한 자원 할당시 시스템의 상태가 안전 상태인지 호가인해야 한다
    - Deadlock이 없는 상태

1. Resouce Allocation Graph
    - 각 프로세스에 대한 자원 요청 그래프를 그린 후 자원 할당시 그래프에 cycle이 발생하면 deadlock이 발생 가능함을 의미하므로 할당하지 않는다.
    - 예
        ![Resource Allocation Graph](https://user-images.githubusercontent.com/23356503/56508888-76729f80-6560-11e9-9cec-c4842e457d6c.png)
2. Banker's Algorithm
    - 프로세스가 자원 요청시 우선 대기시킨다
    - 프로세스에게 자원 할당시 반드시 유한한 시간 내에 반납되어야 한다
    - instances
        - n: 프로세스 갯수, m: 자원 type 수
        - Available
            - 길이 m인 vector
            - available[j] = k: R(j)는 k개의 instance 보유중
        - Max
            - n * m matrix
            - Max[i, j] = k: P(i) 수행에 R(j)가 k개 필요
        - Allocation
            - n * m matrix
            - Allocation[i, j] = k: P(i)에 현재 R(j)가 k만큼 할당됨
        - Need
            - n * m matrix
            - Need[i, j] = k: P(i)에 R(j)가 k개 더 필요하다
            - Need[i, j] = Max[i, j] - Allocation[i, j]
    - Safety Algorithm

        1. 

            - Work: 길이 m인 vector. Work = Available로 초기화
            - Finish: 길이 n인 vector. 전부 false로 초기화
        2. 

            - 모든 j에 대해 Finish[i] = false && Need[i, j] <= Work[i] 인 i를 찾는다.
            - 있으면 3으로, 없으면 4로 이동
        3. 

            - Work[i] = Work[i] + Allocation[i]
            - Finish[i] = true
            - 2로 이동
        4. 
            
            - Finish[i]가 전부 true이면 시스템은 안전 상태이다

    - Resouce Request Algorithm

        1. 

            - Request: P(i)의 request vector
            - Request[i, j]: P(i)가 R(j)를 k개 요청한다

        2. 

            - Request[i, j] <= Need[i, j]면 3으로 이동
            - Request[i, j] > Need[i, j]: 필요 자원 이상을 요청하는 경우이므로 에러

        3. 

            - Available[j] = Available[j] - Request[i, j]
            - Allocation[i, j] = Allocation[i, j] + Request[i, j]
            - Need[i, j] = Need[i, j] - Request[i, j]
            - 계산 결과 safe상태면 P(i)에 k만큼 R(j) 할당, 아니면 자원 할당하지 않음

    - Deadlock Detection

        1. 

            - Work: Work = Available로 초기화
            - Finish: 모든 j에 대해 Allocation[i, j]가 0이면 true, 아니면 false
        2. 

            - Finish[i] = false && Request[i, j] <= Work[i, j]인 i를 찾는다.
            - 있으면 3, 없으면 4로 이동
        3. 

            - Work[i, j] = Work[i, j] + Allocation[i, j]
            - Finish[i] = true
            - 2로 이동
        4. 

            - Finish[i] 가 false인 것이 있으면 deadlock 상태

        - O(m * n^2)의 시간복잡도

# Recovery from Deadlock
1. Process Termination
    - deadlock과 연관된 모든 프로세스들을 deadlock이 사라질때까지 1개씩 종료
    - 고르는 기준
        1. 프로세스 우선순위
        2. 프로세스가 얼마나 오래 실행되었고 얼마나 더 실행되어야 하는지
        3. 프로세스가 자원을 얼마나 사용중인지
        4. 프로세스가 완료되려면 자원이 얼마나 더 필요한지
        5. 몇개의 프로세스가 종료되어야 하는지
        6. 프로세스가 interactive 프로세스인지 batch 프로세스인지
2. Resouce Preemption
    - 자원을 뺏을 프로세스 선택 - 손실이 적은 방향으로
    - 프로세스 복구, 재시작
    - Starvation 발생 가능