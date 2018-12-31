# 백준 2108번
Link: [2108번: 통계학][BOJLink]

[BOJLink]: https://www.acmicpc.net/problem/2108
<hr/>

# 문제 설명
문제에서 제시된 간단한 통계를 구하는 문제였다.

평균, 최댓값, 범위까지는 쉽게쉽게 구했는데 최빈값을 어떻게 구할지에 대해서 많이 고민했던 문제.

처음에는 8000개짜리 배열 만들고 숫자 넣을때마다 배열 값에다 1씩 더해서 빈도를 저장하려고 했는데 하다보니 아니다 싶어서 map을 사용했다.

input으로 준 숫자가 map에 없으면 (input, 1)로 초기호하고 있으면 빈도에 해당하는 1을 하나씩 더해가는 방식으로 구현했다.

최빈값을 찾기 위해 map을 한번 싹 돌았다.

조건 중에 최빈값이 여러개면 두번째로 작은 값을 최빈값으로 하라는 조건이 있었는데, 이걸 구현하기 위해 map을 한번 더 돌았다. 이 부분에 대해서는 좀 더 세련된 방법으로 보완할 수 있을 것 같은데 일단은 시간제한도 넉넉해서 그냥 한바퀴 더 도는 방법으로 구현했다.
<hr/>

# 내가 짠 코드
```
//
// Created by Keith_Lee on 31/12/2018.
//
#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
#include <map>

using namespace std;

int N;

int halfProcess(double num){
    double high = ceil(num);
    double low = floor(num);

    if(num >= (high + low) / 2){
        return int(high);
    }

    return int(low);
}

int main(){
    cin >> N;

    vector<int> numbers;
    int sum = 0;
    map<int, int> frequencies;

    int inputNum;

    for(int i=0; i<N; i++){
        cin >> inputNum;
        sum += inputNum;
        numbers.push_back(inputNum);
        if(frequencies.find(inputNum) == frequencies.end()){
            frequencies.insert(make_pair(inputNum, 1));
        }
        else{
            frequencies.find(inputNum)->second++;
        }
    }

    int temp = 0;
    int mostFrequent;
    int changeCount = 0;
    for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){
        if(iter->second > temp){
            temp = iter->second;
            mostFrequent = iter->first;
            changeCount++;
        }
    }
    for(auto iter = frequencies.begin(); iter != frequencies.end(); iter++){
        if(iter->second == temp && iter->first != mostFrequent){
            mostFrequent = iter->first;
            break;
        }
    }

    sort(numbers.begin(), numbers.end());

    int average = halfProcess(double(sum) / double(N));
    int center = numbers[N/2];
    int range = numbers[N-1] - numbers[0];

    cout << average << '\n' << center << '\n' << mostFrequent << '\n' << range << '\n';

    return 0;
}
```
<hr/>
