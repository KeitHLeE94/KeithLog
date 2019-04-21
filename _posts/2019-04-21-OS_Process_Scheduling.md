---
categories: "OS"
tags: 
- "Process Scheduling"
author_profile: true
---

# CPU Scheduling
- 발생 경우
    
    1. 프로세스가 running -> waiting으로 전환 - Nonpreemptive
    2. 프로세스가 running -> ready로 전환 - Preemptive
    3. 프로세스가 waiting -> ready로 전환 - Preemptive
    4. 프로세스 종료 - Nonpreemptive
- Preemptive
    - 현재 CPU를 할당받은 프로세스가 다른 프로세스에 자원을 내줄 수 있음
    - 문제: race condition - 데이터를 공유하는 경우, 커널모드에서 preemption 발생, OS의 중요 작업중 인터럽트 발생
- Nonpreemptive
    - CPU 자원을 할당받은 프로세스가 직접 자원을 반납하기 전까지 계속 자원 점유

# Scheduling Criteria
- CPU Utilization: CPU를 idle 상태로 두지 않는 것. (Maximize)
- Throughput: 단위시간 동안 끝낼 수 있는 프로세스 수 (Maximize)
- Turnaround time: 특정 프로세스 실행까지 걸리는 시간 (Minimize)
- Waiting time: 프로세스가 ready queue에서 대기한 시간 (Minimize)
- Response time: 프로세스 실행 요청 생성 후 첫 response가 올때까지 걸린 시간 (Minimize)

# FCFS Scheduling
- First Come First Served
- 프로세스 도착 순서대로 CPU 자원 할당.
- 문제점: convoy effect
    - 실행시간이 짧은 프로세스가 긴 프로세스에 막혀 대기시간이 길어질 수 있다
    - 예: I/O bound process가 많은 경우

# SJF Scheduling
- Shortest Job Fisrt
- 실행시간(CPU Burst time)이 짧은 프로세스를 먼저 실행한다
- Optimal: 평균 대기시간이 가장 짧다
- 문제점: 각각의 프로세스들의 실행시간을 알아내기 어렵다

# SRTF Scheduling
- Shortest Remaining Time First
- SJF의 Preemptive 버전
- 단위시간마다 각 프로세스들의 작업 완료까지 남은 시간을 계산하여 남은시간이 가장 짧은 프로세스를 실행한다

# Priority Scheduling
- 각각의 프로세스에 우선순위 부여
- SJF = CPU Burst time이 짧을수록 높은 우선순위
- 문제점: Starvation
    - 우선순위가 낮은 프로세스가 높은 프로세스에 밀려 무한히 대기하는 현상
    - 해결: Aging - 대기한 시간에 따라 우선순위 상향 조정

# Round Robin
- 각각의 프로세스에 실행시간(Time Quantum) 부여
- 프로세스 실행중 Time Quantum이 다 지나면 다른 프로세스에 의해 preemption되고 ready queue의 맨 뒤로 옮겨간다
- Starvation 문제 해결
- 매 quantum마다 timer interrupt 발생
- 성능
    - q가 크면: FCFS와 유사(비효율적)
    - q가 작으면: response time이 빨라지나 context switching overhead가 커진다
    - SJF에 비해 turnaround time이 길지만 response가 더 뛰어나다
    - q 설정: context switching에 걸리는 시간보다 길게 설정

# Multilevel Queue
- Ready Queue를 여러 큐로 나누는 방식
- foreground: interactive processes (Round Robin)
- background: batch processes (FCFS)
- 우선순위

    1. System processes
    2. interactive processes
    3. interactive editing processes
    4. batch processes
    5. student processess

# Multilevel Feedback Queue
- 프로세스가 현재 큐에서 다른 큐로 이동 가능
- 큐별로 다른 quantum 적용 가능
- 한 큐에서 quantum 내에 작업이 끝나지 않았으면 다음 큐로 이동하는 방식

# Multiple Processor Scheduling
- Asymmetric Multiprocessing: 한 프로세서만 시스템 데이터 구조에 접근하여 데이터 공유의 필요성을 줄인다
- Symmetric Multiprocessing: 각각의 프로세서가 각자 스케줄링을 실행하고 모든 프로세스들이 하나의 ready queue를 공유하거나 각자 다른 ready queue를 갖는 구조
- Affinity: 특정 코어를 지정하여 task를 수행하도록 하는 설계
- NUMA
    - Non Uniform Memory Access
    - CPU에 묶여있는 메모리에 대해서는 접근 속도가 빠르고, 다른 CPU에 묶여있는 메모리에 대해서는 접근 속도가 느리다
    - Affinity를 고려하여 메모리 배치
- Load Balancing
    - 작업을 여러 프로세서에 고르게 분산시킨다
    - Push migration: 주기적으로 프로세서들의 작업량을 확인하여 작업이 많은 프로세서의 작업을 작업이 적은 프로세서로 옮긴다
    - Pull migration: 작업이 적은 프로세서가 작업이 많은 프로세서의 작업을 가져온다

# Multithread Multicore System
- Memory stall: 프로세서가 요청한 데이터가 메모리로부터 도착하기까지 기다리는 시간
- Multithread Processor 구조: 2개 이상의 하드웨어 쓰레드가 각각의 코어에 할당되어 하나의 쓰레드에서 memory stall 발생시 다른 쓰레드로 전환하여 작업 처리