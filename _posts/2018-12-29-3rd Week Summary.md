---
categories: "SSAFY"
tags: "Markdown"
author_profile: true
---
# Markdown 문법 정리
<hr/>

# 1. #: 제목 쓸때 사용.
# This is h1
## This is h2
### This is h3
#### This is h4
##### This is h5
###### This is h6
<hr/>

# 2. <<!-- -->hr/>: 줄바꿀때 쓴다.
### <!-- -->---, ***, * * *, *****, - - -: 전부 줄바꿀때 쓰는 명령어.
<hr/>

# 3. >: 블럭인용문자.
> This is BlockQuote

>> 이거슨 인용문자

>>> 이런식으로 nest 구조를 만드는것도 가능하고

>>>> ## 이런식으로 인용문 안에 다른 명령어나 코드도 넣을 수 있다.

>>>> * List

>>>> ```
>>>> #include <iostream>
>>>> int main(){
>>>>    cout << "Hello, World!" << '\n';
>>>>    return 0;
>>>>}
>>>> ```
<hr/>

# 4. ```: 코드 입력 가능. 입력 끝나면 다시 써서 닫으면 됨.
```
#include <iostream>
int main(){
    cout << "Hello, World!" << '\n';
    return 0;
}
```
<hr/>

# 5. 숫자 리스트
1. 첫번째
2. 두번째
3. 세번째
4. ...
<hr/>

# 6. 순서 없는 리스트
- First
    - Second
        - Third
            - Fourth
                - Fifth
                    - Sixth
                        - Seventh
                            - ...
<hr/>

# 7. 링크
```
Link: [Google][googlelink]
[googlelink]https://google.com "Go google"

이런식으로 링크걸면됨.
```
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

```
https://keithlee94.github.io/KeithLog/

이런식으로 바로 거는방법도 있음.
```

https://keithlee94.github.io/KeithLog/
<hr/>

# 8. 강조
```
*하이라이트*, _하이라이트_: 이탤릭체
**강조**, __강조__: 볼드체
~~취소선~~: 단어에 취소선 생김
```
*하이라이트*

_중요해_

**강조**

__강조__

~~취소선~~
<hr/>

# 9. 이미지 삽입
```
![Alt text](/path/to/img.jpg) - url 넣어줘도 됨.
사이즈 조절 기능은 없기 때문에 <img width="" height=""></img>를 이용한다.
```
