---
categories: "Java"
tags: "Java"
author_profile: true
---
# 알고리즘 스터디 내용 정리
<hr/>

# 자료구조
- 선형
    - 이전, 이후 데이터가 1:1 관계이다.
    - 특정 데이터의 다음에 올 데이터가 무엇인지 확실히 알 수 있다.(예: 배열, 연결리스트)
- 비선형
    - 이전, 이후 데이터가 1:다 or 다:다 관계이다.
    - 특정 데이터의 다음에 올 데이터가 무엇인지 확실하게 알 수 없다.
    - 전체를 빠짐없이 순회하며 한번씩만 방문하는 것이 관건(예: 그래프)
        - 그래프
            - 트리: 사이클이 없어야 한다.
            - 트리를 제외한 나머지: 사이클이 있을 수 있다.
<hr/>

# 검색
- 순차 검색
    - O(n) -> Best: O(1), Worst: O(n), Average: O(n/2) = O(n)
    - 정렬 여부와 상관없이 사용 가능.
- 이진 검색
    - O(log n)
    - Divide & Conquer
    - 자료가 정렬된 상태에서만 사용 가능.
    - 데이터 양이 많을수록 유리함.
<hr/>

# 정렬되지 않은 데이터 검색
- 이진 검색
    1. 정렬
    2. 이진검색
    - O(n^2) + O(log n) = O(n^2) 소요.
- 순차검색: O(n)
- 결론: 정렬 알고리즘에서 이미 순차검색보다 성능이 떨어지므로 정렬되지 않은 데이터에 대해서는 순차검색을 사용하는 것이 유리하다.
<hr/>

# Java 메모리 영역
- Call Stack: 자동으로 초기화되지 않음.
- Heap: 자동으로 초기화됨.
- Method Area: 자동으로 초기화됨. 
- Constant Pool: Method Area에 포함됨. 상수를 재활용하기 위해 존재함.(여러개의 상수가 있어도 해싱하여 저장되므로 검색시간이 느려지는 일이 없다.)
<hr/>

# String 선언별 차이점
- String str1 = "abc"; => Constant Pool에 생성된다.
- String str2 = new String("abc"); => Heap에 생성된다.
- String str3 = "abc"; => str1과 같은 주소가 할당된다.
- str1, str3처럼 기본형으로 만들 경우 Constant Pool에 저장되고, 둘의 값이 같을 경우 같은 주소가 할당된다.
<hr/>

# StringTokenizer
- 문자열을 쪼갤때 사용한다.
- 정규식을 인자로 허용하지 않으므로 String.split()보다 속도가 빠르다.
<hr/>

# StringBuilder, StringBuffer
- 문자열 저장시 사용.
<hr/>

# Object.equals()
- 어떤 자식 클래스에서 사용할지 모르므로 == 연산자로 구현되어 있다.
- 내용 비교하려면: 자식 클래스에서 오버라이딩하여 사용해야 함.
<hr/>

# DP와 Divide & Conquer
- Divide & Conquer: 작은 문제를 해결하여 큰 문제를 해결하는 기법.
- DP: Divide & Conquer + Memoization. 작은 문제를 해결하고 이를 따로 저장해둠으로써 똑같은 작은 문제를 다시 풀게 되어 발생하는 시간 낭비를 줄일 수 있다.
<hr/>

# Java 스터디 내용 정리
<hr/>

# 자주 오버라이딩하는 함수들
## 1. toString()
    - 오버라이딩 했을 경우: System.out.println(객체); 실행시 객체의 클래스에서 재정의된 toString()이 실행됨.
    - 오버라이딩 안했을 경우: System.out.println(객체); 실행시 주소값만 출력된다 - Object 클래스의 toString()은 객체의 주소값만 돌려주므로.
    - 출력함수의 인자로 객체를 넣을 시 자동으로 toString()이 호출된다.

## 2. hashCode()
    - 같은 객체인지 확인할 때 사용.
    
## 3. equals()
    - 두 객체의 내용물이 같은지 확인할 때 사용.
    - Object.equals(): 단순 객체 주소 비교.
    - String.equals(): Object.equals()를 오버라이딩하여 문자 하나씩 비교하여 일치하는지 확인.
<hr/>

# String 객체의 특징
- String 클래스의 메소드들은 원본 데이터를 바꾸지 않는다.
- String은 final 상수이므로 내용을 바꿀때마다 새로운 데이터가 heap에 쌓인다.
<hr/>

# 사용 제한자
## 1. final
    - class, method, variable에 붙일 수 있다.
    - class앞에 붙으면: 상속 불가. 그 클래스 안의 모든 method, field는 내용을 변경할 수 없다.
    - method앞에 붙으면: 오버라이딩 불가, 오버로딩은 가능.
    - field앞에 붙으면: 값 수정 불가.(변수가 상수로 변한다.)

## 2. static
    - member변수, member메소드, block에 붙일 수 있다.
    - static이 붙은 모든 것들은 main 메소드 실행 전에 Class Area에 한개씩만 생성된다.
        - 실행 전에 만들어진다.
        - 컴파일이 완료된 시점에 생성되므로 따로 객체를 만들 필요가 없다.
    - static이 없는 모든 것들은 main 메소드 실행 후 Heap에 생성된다.
        - 실행 후에 만들어진다.
    - static variable = class variable
    - non-static variable = instance variable
    - 다른 클래스에서도 사용 가능: class이름.변수이름 or class이름.메소드이름 으로 사용 가능.
    - static block: main 메소드보다 우선순위가 높다.
        - main 메소드보다 먼저 실행된다.
        - static block간 우선순위는 코드 내 순서와 같다.
    - static 메소드 내에서는 this, super 키워드를 사용할 수 없다.
        - 이유: this, super 키워드는 객체가 있을때만 사용 가능하다.
        - static 메소드는 객체가 생성되기 전에 실행되므로 this, super 키워드를 사용할 수 없다.

## 3. abstract
    - abstract: 추상적인, 구체적이지 않은, 완성되지 않은.
    - abstract 클래스: 클래스 내에 abstract 메소드가 존재한다.
    - abstract 메소드: 바디가 없는 미완성 메소드. abstract 클래스 내에만 정의 가능.(C의 prototype과 같다.)
    - concrete 메소드: 바디가 있는 완성된 메소드. abstract 클래스 내에도 정의 가능.
    - abstract 메소드가 있으면 객체 생성 불가능.
        - 미완성 메소드가 있다 = 미완성 클래스이다.
        - 자식 클래스에서 상속받아 완성시켜야 객체 생성이 가능하다.(자식 클래스가 오버라이딩해야 한다.)
    - 장점: 상속관계로 묶여있으므로 여러 종류의 객체들을 부모 타입으로 묶어 하나의 자료구조에 넣고 handling할 수 있다.
    - 용도
        - 타입을 물려주는 용도로 빈 껍데기만 미리 만들어놓는다.
        - 객체 생성을 막는 용도로도 사용 가능하다.
<hr/>

# interface
- 추상 클래스와 유사하다.
- 시작 키워드가 class가 아닌 interface이다.(용도는 추상 클래스와 같이 타입을 물려주는 용도이다.)
- 상수와 추상 메소드들로만 구성되어 있다: concrete 메소드를 포함할 수 없다.
- 내부 메소드에 별도로 abstact를 붙일 필요가 없다: interface 자체가 미완성이므로 포함하는 모든 메소드들에 자동으로 public abstract 키워드가 붙는다.
- 내부 field에는 자동으로 static final 키워드가 붙는다: 값을 변경할 수 없다.
- 자식 클래스에서 상속시 extends가 아닌 implements 키워드를 사용해야 한다.
- 다중 상속 지원: implements 키워드를 통해 여러 클래스를 상속 가능하다.
- extends와 달리 implements 클래스1, 클래스2, ... 형태로 사용 가능.
- 예:
    ```
    class ICircle extends Boat implements IShape, Seoul
    => iCircle의 타입이 될 수 있는 것: Boat, IShape, Seoul.
    ```
- 의존성 감소: 고치는 부분을 줄일 수 있다 - 유지보수를 편하게 해준다.
- interface와 interface 간에도 상속관계 성립 가능.
- interface 예시
![interface example](https://user-images.githubusercontent.com/23356503/51424291-ffe79e00-1c0e-11e9-9061-3b57a81ae7ef.png)
    위 그림처럼 관계를 만든 다음
    ```
    void pay(Thing x){
        ...
    }
    메소드를
    void pay(Valuable x){
        ...
    }
    으로 변경한다.
    ```
<hr/>

# instanceof
- 상속관계가 없을 경우 사용 불가능한 연산자.
- 작은 타입 -> 큰 타입 순서로 사용해야 한다.
<hr/>

# has-a 관계
- 서로 의존성을 갖게 되는 관계(Coupling) - 지양해야 함.
- 한 클래스가 다른 클래스를 인자로 가지고 있는 관계.
- 수정사항 발생시 두개의 클래스를 전부 수정해야 한다.
- 보완: interface를 사용하여 타입의 자유도를 높여 의존성을 낮출 수 있다.
<hr/>

# Collections
- 여러개의 데이터를 저장.
- 저장 방식에 따라 List, Set, Map으로 나뉜다.

|  <center>구분</center> |  <center>List</center> |  <center>Set</center> |  <center>Map</center> |
|:--------:|:--------:|:--------:|:--------:|
|**중복** | <center>허용</center> | <center>허용 X</center> | <center>허용 X</center> |
|**순서** | <center>있음</center> | <center>없음</center> | <center>없음</center> |

## 1. List: 기존 배열과 유사.
    - ArrayList
    - Vector
        - 아무 인자 없이 생성시 10칸짜리 Vector가 생성되고, 용량이 부족하면 기존의 크기를 2배로 늘린 후 재배치.
        - Vector.capacity(): Vector 전체의 크기 리턴.
        - Vector.size(): Vector 내 component 갯수 리턴.

## 2. Set: 집합과 같은 개념.
    - HashSet

## 3. Map: (Key, Value) 쌍으로 데이터 저장, Key값 중복 불가.
    - HashMap
    - HashTable

- Iterator: 순서 없는 자료구조를 탐색하기 위해 사용함.
<hr/>

# Generic Programming
- HashMap<K, V> 와 같이 <...>의 형태를 이룬다.
- <> 안에는 객체만 올 수 있다: 기본형을 사용하고싶을 경우 wrapper class로 바꿔 넣어야 한다.
    - 예: int형 ArrayList - ArrayList<Integer>
- Generic을 사용할 경우 클래스 변동사항이 있으면 적용되는 시점이 미뤄진다: 객체 생성시 유연성이 생긴다.
    - 통상 클래스들은 한번 컴파일하면 다시 컴파일하지 않는 이상 변경사항이 반영되지 않는다.
- 클래스는 완성되었으나 타입이 정해지지 않은 형태이다.
    - 설계 단계에서는 타입 미정.
    - 객체 생성시 타입 확정.
    - 결론: compile time에서는 타입이 결정되지 않은 상태, runtime에서 타입이 결정.
- 예시
    ```
    public class MyClass<X>{
        private X data;

        public X getData(){
            return data;
        }

        public void setData(X data){
            this.data = data;
        }

        public static void main(String[] args){
            MyClass<String> m1 = new MyClass<>();
            MyClass<Integer> m2 = new MyClass<>();
            MyClass<Circle> m3 = new MyClass<>();
        }
    }

    => m1, m2, m3의 타입은 모두 MyClass로 같다.
    ```
<hr/>

# Singleton Pattern
- 디자인 패턴: 설계 패턴. 클래스를 설계하는 패턴을 의미.
- 어플리케이션 전체에서 객체를 한개만 생성하여 사용하는 패턴: 하나의 객체를 전체가 공유한다.
- 클래스명에 static이 붙는다: 오직 하나의 객체만 생성한다.
- 조건
    1. field: private static이며 클래스 자신의 타입으로 선언되어야 한다.
    2. 생성자: private으로 설정.
    3. 객체를 생성하여 리턴하는 static 메소드가 반드시 있어야 한다.(통상 getInstance()라는 메소드 정의)
- 외부에서 객체 생성에 영향을 주지 않도록 한다
    - 생성자는 Default 생성자만 두는 경우가 대부분이다.
    - 생성자, 생성 메소드 오버로딩하지 않음.
- 예시
    ```
    public class Speaker{
        private static Speaker speaker;
        private int volume;

        private Speaker(){
            volume = 5;
        }

        public static Speaker getInstance(){
            if(speaker == null){
                speaker = new Speaker();
            }

            return speaker;
        }

        public int getVolume(){
            return volume;
        }

        public void setVolume(int volume){
            this.volume = volume;
        }
    }

    public class SingletonTest{

        public static void main(String[] args){
            Speaker s1 = Speaker.getInstance();
            Speaker s2 = Speaker.getInstance();
            Speaker s3 = Speaker.getInstance();

            System.out.println(s1 == s2);
            System.out.prinltn(s2 == s3);

            s1.setVolume(10);
            System.out.println(s1.getVolume());
            System.out.println(s2.getVolume());
            System.out.println(s3.getVolume());
        }
    }

    실행 결과: s1, s2, s3의 주소값은 전부 같다.
    => 전부 똑같은 하나의 객체만을 가리키고 있으므로, 한 객체에서 volume을 변경하면 모든 객체의 volume이 똑같이 바뀐다.
    ```
<hr/>

# Comparable, Comparator
- 객체의 정렬과 관련한 인터페이스.
- Comparable: 클래스 내부에 객체의 정렬 기준을 만들어놓고자 할때 사용하는 인터페이스.(반드시 한개만 존재한다.)
- Comparator: 클래스 외부에 특정 객체의 정렬 기준을 명시하는 인터페이스.(클래스 내부의 Comparable 이외의 정렬 기준이 필요할 경우 별도의 클래스를 만들어 정의한다. - 정렬 기준은 한 메소드 내에 한개만 정의 가능.)
- sort()로 정렬 가능한 객체: Comparator나 Comparable 인터페이스를 implements 하고 있어야 한다.
<hr/>

# Class 종류
- VO
    - Value Object
    - 값을 저장할 수 있는 객체.
- DAO
    - Data Access Object
    - 이미 만들어진 VO를 프로세싱하는 목적.
    - CRUD: Create, Read, Update, Delete 기능 수행.
- CO
    - Client Object
<hr/>