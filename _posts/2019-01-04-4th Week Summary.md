---
categories: "SSAFY"
tags: "Java"
author_profile: true
---
# Java 스터디 내용 정리
<hr/>

# Project, Package 분리 이유
프로젝트의 각 기능을 쪼개기 위해 패키지 사용.

논리적으로 따로 나눠 작업하기 위해 분리하는 경우가 대다수이다.
<hr/>

# Java의 특징
1. 객체지향
    - 시스템의 기본 구성단위는 **객체(Object)** 이다.
    - 객체: 일종의 부품 역할.
    - 여러 부품들을 모아 조립하듯이 프로그램을 완성한다.
2. 플랫폼 독립적
    - 하드웨어, OS와 상관없이 모든 환경에서 동작 가능.
    - 이유: JVM 위에서 작동하므로.
3. 분산 프로그래밍: 원격 접속 가능.
4. 멀티스레드
<hr/>

# Java 컴파일 과정
1. 소스코드 작성: (...).java 파일 생성.
2. 컴파일
    - 명령어: javac (...).java
        - javac -d ...: 패키지가 있을 경우 자동으로 패키지 폴더를 생성하며 컴파일.
    - JVM이 인식 가능한 byte code로 번역하는 과정.
    - 결과: Bytecode 생성 - (...).class 파일 생성.
3. 실행
    - 명령어: java (...)
    - JVM 위에서 실행됨.

![java compile](https://user-images.githubusercontent.com/23356503/50677469-654b6480-103d-11e9-9b3c-e330a67fba48.jpeg)

C의 경우 실행파일을 다른 환경에서 실행시키면 실행 안됨.

Java의 경우 JVM이 존재하므로 다른 환경에서 실행 가능함.
<hr/>

# Primitive Data Type
기본적인 값을 기억하는 type.

1 byte = 8 bit

char = 16 bit = 2 byte

int = 32 bit = 4 byte

float = 32 bit = 4 byte

double = 64 bit = 8 byte

long = 64 bit = 8 byte
<hr/>

# Reference Data Type
객체의 참조값을 기억하는 type.

class, interface, 배열 등.
* String: class이므로 Reference Type이다.
<hr/>

# Literal
값 자체.

예: 3.14, 10, 'C', false, ...

정수 리터럴 = 4바이트에 저장됨.
<hr/>

# 논리연산자
- && 연산자: 앞조건이 false면 뒤에 오는 조건 확인하지 않고 연산 종료.
- & 연산자: 앞조건이 false여도 뒤에 오는 조건을 확인한 후 연산 종료.
- ||, | 연산자도 동일함.
<hr/>

# 3항연산자
```
(x > y) ? x : y => 실행결과: x가 y보다 크면 x, 작거나 같으면 y가 된다.
```

# for ~ each
```
int sum = 0;
int[] su = {24, 6, 5, 36, 36, 65, 245, 56, 3, 64};

for(int s: su){
    System.out.println(s);
    sum += s;
}
```
실행결과: sum에는 su 배열의 모든 숫자를 더한 값이 저장되고, su 배열의 모든 원소가 한번씩 출력된다.

=> 배열 내 모든 원소에 한번씩 접근한다.(파이썬과 유사함)
<hr/>

# Error, Exception
- Error
    - 복구 불가능
    - 프로그램이 비정상적으로 종료됨.
- Exception
    - 일종의 가벼운 에러
    - 프로그램상으로 수정 가능함.
    - Java가 해결 방법을 알려줄 수 있음.
<hr/>

# 배열 기본값
- 배열의 type에 따라 다르게 배열 생성시 기본값으로 자동으로 채워진다.
- int형: 0
- boolean형: false
- double형: 0.0
- String형: null
    * 참조형 type의 배열의 기본값은 항상 null이다.
<hr/>

# main메소드의 args 사용법
1. Run Configuration 설정
2. Arguments -> Program arguments -> ${string-prompt} 설정.

# new 키워드
객체를 만들때 사용하는 키워드.

# method
- C의 함수와 같다.
- 클래스 내에서 객체가 가져야 할 기능을 정의.
- 독립적인 기능들을 분리하여 재사용 가능하도록 하기 위해 사용.
- return type, method 이름, parameter list가 반드시 있어야 한다.
- method 내에 method 정의 불가능.

# arraycopy()
- 배열 복사 함수.
- System.arraycopy(소스배열, 소스배열의 시작위치, 목적배열, 목적배열의 시작위치, 길이);
- 작은 배열일 경우 통상적인 반복문이 더 효율적.
- 배열이 클때 사용시 효율적이다.

# 다차원 배열 길이
```
su = new int[5][3];
su2 = new int[3];
```
su.length: 5

su[0].length: 3

su2.length: 3

=> 가장 첫번째 칸의 숫자가 배열의 길이.
<hr/>

# return
문장의 실행을 그자리에서 멈춘다.
<hr/>