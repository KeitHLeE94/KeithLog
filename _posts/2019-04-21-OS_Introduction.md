---
categories: "OS"
tags: 
- "Introduction"
author_profile: true
---

# OS의 역할
1. 자원 관리
2, 프로그램으로부터 컴퓨터가 손상되는것 방지

# Interrupt
- 하드웨어 인터럽트: I/O 장치가 CPU에 이벤트 발생을 알리는 목적
- 소프트웨어 인터럽트: 프로그램 실행시 사용자 요청이나 에어로 인해 발생
    - 예: trap, exception
- ISR
    - Interrupt Service Routine
    - 인터럽트 발생시 CPU가 자동으로 실행.
    - 대부분의 인터럽트는 자신만의 ISR을 가지고 있다.
- 인터럽트 발생시
    
    1. 인터럽트가 발생한 프로세스의 Program Counter 정보 저장(현재까지 작업내용 저장)
    2. ISR 실행하여 인터럽트 처리
    3. Program Counter에서 정보 가져와 작업 재개

# DMA
- I/O 장치가 메모리에 빠르게 접근하기 위해 사용.
- CPU의 개입 없이 버퍼를 통해 메모리에 바로 접근.
![DMA](https://user-images.githubusercontent.com/23356503/56469194-45677180-6471-11e9-8833-ecd3758fda5e.png)
- Synchronous I/O: I/O 작업이 끝나야 사용자 프로그램으로 제어가 넘어감.
- Asynchronous I/O: I/O 작업 완료 전 사용자 프로그램으로 제어가 넘어감.

# 저장공간
- register - cache - main memory - ssd - magnetic disk - optical disk - magnetic tape 순으로 빠르다.
- register, cache, main memory = volatile
- 캐싱: 속도가 더 빠른 저장공간에 사용할 데이터를 임시로 저장하는 것.

# Process
- 현재 실행중인 프로그램
- single thread: 1개의 Program Counter를 가진다.
- multi thread: thread당 하나의 Program Counter를 갖는다.
- OS의 Process Management
    
    1. user / system process 생성, 삭제
    2. process 실행 중지, 재개
    3. 프로세스 동기화 mechanism 제공
    4. 프로세스간 통신 mechanism 제공
    5. deadlock 처리를 위한 mechanism 제공