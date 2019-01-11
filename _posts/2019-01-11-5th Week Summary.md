---
categories: "Java"
tags: "Java"
author_profile: true
---
# 알고리즘 스터디 내용 정리
<hr/>

# 알고리즘 설계 기법
1. 완전검색: Brute Force
- 시간이 가장 많이 걸린다.
- 반드시 답을 찾을 수 있다 => 소요 시간 비교의 척도가 된다.
- 시간 내에 답을 찾을 수 있는지 사전에 확인해봐야 한다.

2. 탐욕기법: Greedy
- 현재의 위치에서 최선의 선택을 한다.
- 선택이 옳았음을 증명하는 과정이 필요하다.
- 코드가 짧다.
- 답을 못찾을 수 있다.

3. 가지치기: Backtracking
- 답이 될 수 없는 것은 탐색하지 않는다.

4. 분할정복: Divide & Conquer
- 부분해로 전체 해를 구해 나간다.

5. 동적계획법: Dynamic Programming
- 부분해로 전체 해를 구해 나간다.(분할정복과 유사)
- 분할정복과의 차이: 부분해를 따로 저장함으로써 중복된 계산을 방지한다.
<hr/>

# 정렬
1. 버블 정렬
- O(n^2)
- 맨 뒤에 정렬된 원소는 고정시킨다.

2. 카운팅 정렬
- O(n+k)
- n이 비교적 작을때만 가능.
- 양의 정수만 정렬 가능.

3. 선택 정렬
- O(n^2)

4. 퀵 정렬
- O(nlogn)
- 상용 API의 정렬은 거의 퀵정렬로 구현되어 있음: 카운팅 정렬이 가장 빠르지만 대상이 정수일때만 사용 가능하므로 제약사항이 없는 퀵정렬로 구현.

5. 병합 정렬
- O(nlogn)

### 가능하면 카운팅 정렬 사용, 안되면 API 사용.
<hr/>

# 입력 방식 비교
- Scanner: 편하지만 시간이 많이 걸린다.
- BufferedReader: 시간이 적게 걸리나 문자열로만 리턴 가능.
    - 사용 예시
    ```
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String s = br.readLine(); // 문자열로만 리턴. 사용자가 입력한 한 줄을 문자열로 통째로 받아옴.
    s = "20";

    int num = Integer.parseInt(s); // 숫자로 변경됨.

    s = "1 2 3 4 5";
    String[] arr = s.split(" "); // s를 공백단위로 쪼갠다 => arr: 5개의 문자열이 들어간다.
    ```
<hr/>

# 출력 방식 비교
- System.out.println(): 출력하기 쉬우나 느리다.
- BufferedWriter: 빠르게 출력 가능.
    - 사용 예시
    ```
    BufferedWriter bw = new BufferedWriter(System.out);
    bw.write("abcde"); // 줄 안바뀜.
    bw.write("\n"); // 줄바꿈하려면 개행문자 써줘야 함.
    ```
<hr/>

# static / non-static
static 멤버는 non-static 멤버에 접근할 수 없다: static 멤버는 객체 생성 전에 사용할 수 있고, non-static 멤버는 객체 생성 후에 사용할 수 있기 때문.
- static
    - 클래스 정보가 처음 로딩된 후 ~ 프로그램 종료시까지 사용 가능.(속도 빠름)
    - 단점: 메모리에 상주하므로 메모리 낭비 가능성 존재.
- non-static
    - 객체 생성 시점 ~ 참조변수가 없어질때까지 사용 가능.
<hr/>

# Java 프로그램 메모리 영역
- Call Stack: 메인 메소드, 지역변수 + 메인 메소드에서 호출된 메소드, 지역변수 저장.
- Heap
- Method Area

의 3가지 영역이 프로그램 실행시 자동으로 생성됨.
<hr/>

# 반복문, 재귀함수
- 반복문: CPU의 연산만 사용하므로 메모리 사용량이 적다.
- 재귀함수: 속도가 느리고 Call Stack 영역의 메모리를 많이 사용한다.

**=> 꼭 필요한 경우에만 재귀함수 사용할것.(필요할때: 동적으로 반복문을 추가해야할 때)**

재귀함수의 인자도 Call Stack에 계속 쌓이므로 반드시 필요한 경우가 아니면 전역변수 등으로 처리하여 메모리를 절약할 수 있다.

- 재귀함수 예시: 2진수 3자리를 모두 출력하는 재귀함수
```
void twoThree(int i, int end, int[] arr){ // i: 시작 차수, end: 종료 차수, arr: 숫자 저장할 배열
    if(i == end){
        System.out.println(Arrays.toString(arr));
        return;
    }
    else{
        arr[i] = 0;
        twoThree(i+1, end, arr);
        arr[i] = 1;
        twoThree(i+1, end, arr);
    }
}
```
<hr/>
<hr/>

# Java 내용 정리
<hr/>

# class, object
- class: 틀
- object: 틀에서 만든 대상.
<hr/>

# class 정의
- class명: 특수문자는 $, _만 허용. 길이제한 없음. 반드시 문자로 시작(숫자로 시작할 수 없음)
- class를 개발한다 = 부품을 만드는 것과 같다. => 재활용성을 염두에 두고 개발해야 한다.
- class 내 field값을 초기화하지 않고 객체 생성시 각 타입의 기본값으로 초기화된다.
<hr/>

# 객체 생성
1. Class Area에서 호출하려는 class가 있는지 찾는다.
2. 있으면 Heap 영역에 객체 주소 할당.
3. 생성된 객체에 할당된 주소값 저장.
- Class Loader: 하드디스크에 있는 class 파일을 메모리로 읽어온다.
- Class Area: 메모리로 읽어온 클래스의 정보를 저장하는 곳.
<hr/>

# 생성자
- 클래스와 이름이 같은 메소드.
- 반드시 리턴타입이 없어야 한다.
- 객체 생성시 항상 호출된다 => 반드시 있어야 한다.(초기화작업 필요없을 경우 생략 가능)
- 생성자를 따로 정의해두지 않았다면 컴파일러가 컴파일 시 기본 생성자를 코드에 삽입한다.
- 기본 생성자: 아무 파라미터가 없는 생성자.
<hr/>

# this()
- 생성자 안에서만 사용 가능한 메소드.
- 다른 여러 생성자가 있으면 this()를 통해 다른 생성자 실행 가능.
- 다른 생성자 호출시 넘겨줄 인자가 없으면 임의로 기본값을 정해 넘길 수 있다. => 아무 인자 없이 호출시 전부 설정된 기본값으로 들어간다.
- 목적: 중복 코드를 줄이기 위해.
<hr/>

# Overloading
- 같거나 비슷한 일을 하는 메소드 구현시 메소드 이름을 같게 정의하여 사용을 편리하게 한다.
- 메소드명은 같고, 파라미터가 다르다.
<hr/>

# 접근 수식어(=접근 지정자, 접근 제한자)
- public: 모든 경우 접근 가능.
- protected: 패키지 상관없이 상속관계면 접근 가능.
- default: 아무 접근 지정자가 없으면 default. 같은 패키지 내에서만 접근 가능.
- private: 같은 class 내에서만 접근 가능.
<hr/>

- 같은 패키지 & 상속관계: default, protected, public 접근 가능.
- 같은 패키지 & 다른 클래스: default, protected, public 접근 가능.
- 같은 클래스: default, private, protected, public 접근 가능.
- 다른 패키지 & 상속관계: protected, public 접근 가능.
- 다른 패키지: public 접근 가능.
<hr/>

# getter, setter
함부로 데이터에 접근하려는 시도를 방지할 수 있다.
<hr/>

# 한개의 .java파일 내에 여러개의 클래스
- 한 클래스 내에 여러 클래스 생성 가능.
- But, 접근지정자는 단 하나의 클래스에만 붙일 수 있다.(.java파일의 파일명과 일치하는 클래스에만 붙일 수 있음): 프로그램 외부에서 무분별하게 접근하는 것을 막기 위함(보안적 측면)
- 파일명과 일치하지 않는 모든 클래스들은 default 접근 지정자만 혀용한다.
- class에 대한 접근 지정자는 public, default의 2가지만 가능.
<hr/>

# API
- Application Programming Interface
- 객체지향 언어에서 class 단위로 미리 구현되어 제공되는 프로그램.
- class 단위의 library.
<hr/>

# 객체지향형 언어의 3가지 특징
1. Encapsulation(캡슐화)
2. Inheritance(상속)
3. Polymorphism(다형성)
<hr/>

# Inheritance
- Java에서는 단일 상속만 지원.(부모는 하나만 가능)
- class 설계시 특정 class를 상속받아 그 class의 variable과 메소드를 사용할 수 있다.
- is a 관계
    - 자식이 부모자리에 갈 수 있으나 부모가 자식자리에 갈 수 없다.
    - 예: Tiger is an Animal - Tiger: 자식, Animal: 부모.
- Generalization: class들의 공통된 특징을 모아 super class를 만든다.
- Specialization: 비슷한 속성, 기능을 가진 클래스를 상속받아 새로운 클래스를 만든다.(sub class를 만든다)
- sub class object 생성시 자동으로 super class의 생성자가 먼저 실행된다.
    - parent 객체가 먼저 생성된다.
    - 상속관계가 여러 단계를 거치면 메모리가 낭비될 수 있다 => 상속구조를 최소화하는 것이 좋다.
<hr/>

# Overriding
- 부모에게 물려받은 메소드를 자식 클래스에 맞게 재정의하는 것.
- 메소드 이름, 리턴 타입, 파라미터 모두 부모클래스의 메소드와 일치해야 한다.
- 바꿀 수 있는것: 메소드 바디, 접근 지정자.
- 접근 지정자는 부모의 접근 지정자와 같게 하거나 범위를 넓히는 방향으로만 가능하다.(좁아지면 안됨)
- @Override annotation이 붙는다.
- 오버라이딩한 후에는 부모의 메소드 대신 항상 자식이 오버라이딩한 메소드가 실행된다.
<hr/>

# @annotation
- 프로그램에 대한 설명이나 설정사항 등을 나타냄.
- 함부로 지우다가 큰일난다.
<hr/>

# super, this
- static 메소드 내에서 사용 불가.
- static 메소드 내에서 굳이 쓰려면: non static 메소드를 메소드에서 super나 this를 사용하도록 새롭게 정의한 후 static 메소드에서 그 메소드를 호출한다.
- super는 한번만 쓸 수 있다: super.super 안됨.
<hr/>

# NullPointerException
- 객체 생성이 안된 상태에서 객체의 메소드 호출시 발생.
<hr/>

# 상속관계에서 인자 있는 생성자
- 부모, 자식의 생성자 인자 중 겹치는게 있으면 super(겹치는인자, 겹치는인자, ...)을 쓴 다음 자식만의 인자를 사용하여 따로 초기화하면 편하다.
- 목적: 코드 중복 제거 + 자식이 별도의 생성자를 정의할 수 있도록 한다.
- 주의사항: super(...) 구문이 항상 맨 먼저 나와야 한다.
<hr/>

# 상속관계 예시
```
class Parent{}

class Child extends Parent{}

Parent x = new Child(); // 가능: 자식은 부모자리에 갈 수 있다.
Child x = new Parent(): // 불가능: 부모는 자식자리에 갈 수 없다.
```
<hr/>

# Polymorphism(다형성)
- 생성된 객체를 가리키는 레퍼런스(변수)의 타입이 여러가지인 경우.
- 타입 캐스팅: 실제 저장되어 있는 객체가 캐스팅할 타입보다 작은 타입이어야 형변환 가능.
    - 반대로 할 경우 컴파일은 되지만 실행시 Exception 발생.
- 상속관계에서는 부모가 항상 자식보다 큰 타입이 된다.
<hr/>

# Polymorphism 예시
```
class GrandParent{
    String name = "Doe";

    public void printName(){
        System.out.println(name);
    }

}

class Parent extends GrandParent{
    String name = "Tom";
    String address = "Seoul";

    public void printName(){
        System.out.println(name);
    }

    public void printAddress(){
        System.out.println(address);
    }

}

public class Child extends Parent{
    public void printName(){
        System.out.println("Tomson");
    }

    public void callSuper(){
        super.printName();
    }

    public static void main(String[] args){
        Parent x = new Child(); // 가능
        GrandParent c = new Child(); // 가능
        Child y = new Parent(); // 불가능

        c.printName(); // 결과: Tomson => GrandParent의 printName을 Parent가, Parent의 printName을 Child가 재정의하므로 Child까지의 범위에서 가장 마지막에 재정의된 Child의 printName이 실행된다.
        c.callSuper(); // 에러: GrandParent 타입의 상위가 없기 때문.
        c.printAddress(); // 에러: GrandParent에 printAddress 메소드가 정의되어 있지 않다.
        System.out.println(c.getClass().getSimpleName()); // 결과: Child => c의 타입은 GrandParent지만, 실제로 저장된 객체는 Child이므로 Child가 출력된다.(getClass: 실제로 저장된 객체의 타입을 가져온다.)
        
        GrandParent e = new Parent();
        e.printName(); // 결과: Tom => GrandParent의 printName을 Parent가 재정의했으므로 Parent까지의 범위에서 가장 마지막에 재정의된 Parent의 printName이 실행된다.
        System.out.println(e.getClass().getSimpleName()); // 결과: Parent.
    }
}
```
<hr/>