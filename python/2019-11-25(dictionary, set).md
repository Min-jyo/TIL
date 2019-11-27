# 7. 딕셔너리, 셋

### 1. 딕셔너리

정의 : Key-Value. 형태로 항목을 가지는 자료구조

1. 딕셔너리 생성

   ```python
   >>> empty_dict1 = {}
   >>> empty_dict2 = dict() 
   
   >>> champion_dict = {
       'Lux': 'the Lady of Luminosity',
       'Ahri': 'the Nine-Tailed Fox',
       'Ezreal': 'the Prodigal Explorer',
       'Teemo': 'the Swift Scout',
   }
   ```

   

2. 형 변환

   dict 함수를 사용, 두 값의 시퀀스(리스트 또는 튜플)을 딕셔너리로 변환

   ```
   >>> sample = [[1,2], [3,4], [5,6]]
   >>> dict(sample)
   {1: 2, 3: 4, 5: 6}
   ```



3. 항목 찾기/추가/변경 [key]

   ```python
   >>> champion_dict['Lux']
   'the Lady of Luminosity'
   
   >>> champion_dict['Sona'] = 'Maven of the Strings'
   >>> champion_dict['Lux'] = 'Demacia'
   ```



4. 항목이 없을 경우 기본값을 지정하고 찾기

   ```python
   champion_dict.get('Soraka') # 없을 경우 아무것도 출력하지 않음
   champion_dict.get('Soraka', 'Healer') # 없을 경우 'Healer' 문자열
   ```



5. 결합(update)

   ```python
   >>> item_dict = {
   	'Doran\'s Ring' : 400,
   	'Doran\'s Blade' : 450,
   	'Doran\'s Shield' : 450,
   }
   
   >>> com_dict = {}
   >>> com_dict.update(champion_dict)
   >>> com_dict.update(item_dict)
   >>> com_dict
   ```

   서로 같은 키가 있을 경우, update에 주어진 딕셔너리의 값이 할당된다.



6. 삭제

   ```python
   >>> del com_dict['Doran\'s Blade']
   >>> del com_dict['Doran\'s Ring]
   >>> del com_dict['Doran\'s Shield']
   ```



7. 전체 삭제

   ```python
   com_dict.clear()
   com_dict // {}
   ```

   

8. in으로 키 검색 (True / False를 반환)

   ```python
   >>> champion_dict = {
       'Lux': 'the Lady of Luminosity',
       'Ahri': 'the Nine-Tailed Fox',
       'Ezreal': 'the Prodigal Explorer',
       'Teemo': 'the Swift Scout',
   }
   
   >>> "Lux" in champion_dict
   // True
   ```

9. 모든 키얻기

   ```python
   >>> champion_dict.keys()
   // dict_keys(['Lux', 'Ahri', 'Ezreal', 'Teemo'])
   ```

10. 모든 값 얻기

    ```python
    >>> champion_dict.values()
    // dict_values(['the Lady of Luminosity', 'the Nine-Tailed Fox', 'the Prodigal Explorer', 'the Swift Scout'])
    ```

11. 모든 키 - 값 얻기 (튜플로 변환)

    ```python
    >>> champion_dict.items()
    // dict_items([('Lux', 'the Lady of Luminosity'), ('Ahri', 'the Nine-Tailed Fox'), ('Ezreal', 'the Prodigal Explorer'), ('Teemo', 'the Swift Scout')])
    ```

12. 복사

    ```python
    >>> champion_dict.copy()
    // {'Lux': 'the Lady of Luminosity', 'Ahri': 'the Nine-Tailed Fox', 'Ezreal': 'the Prodigal Explorer', 'Teemo': 'the Swift Scout'}
    ```



### 2. 셋(Set)

셋은 키만 있는 딕셔너리와 같으며, 중복된 값이 존재할 수 없다.



1. 셋 생성 ( set(), 딕셔너리에서 키만 표시)

   ```python
   >>> empty_set = set()
   >>> champions = {'lux', 'ahri', 'ezreal'}
   ```



2. 형 변환

   문자열, 리스트, 튜플, 딕셔너리를 셋으로 변환할 수 있으며, 중복된 값이 사라진다.

   ```python
   >>> set('ezreal')
   // {'l', 'a', 'r', 'e', 'z'}
   
   >>> champion_dict 
   // {'Lux': 'the Lady of Luminosity', 'Ahri': 'the Nine-Tailed Fox', 'Ezreal': 'the Prodigal Explorer', 'Teemo': 'the Swift Scout'}
   
   >>> set(champion_dict)
   // {'Ezreal', 'Lux', 'Teemo', 'Ahri'}
   ```

   딕셔너리는 키만 남는다.



3. 집합 연산

   | 연산자 | 설명                        |
   | ------ | --------------------------- |
   | \|     | 합집합(Union)               |
   | &      | 교집합(Intersection)        |
   | -      | 차집합(Difference)          |
   | ^      | 대칭차집합(Exclusive)       |
   | <=     | 부분집합(Subset)            |
   | >      | 진부분집합(Proper subset)   |
   | >=     | 상위집합(Superset)          |
   | >      | 진상위집합(Proper superset) |

   ex)

   ```python
   >>> A = {1,2,3,4,5}
   >>> B = {4,5,6,7,8,9}
   >>> C = {4,5,6}
   >>> A|B // {1, 2, 3, 4, 5, 6, 7, 8, 9}
   >>> A&B // {4,5}
   >>> A-B // {1,2,3}
   >>> B-A // {8,9,6,7}
   >>> A^B // {1, 2, 3, 6, 7, 8, 9}
   >>> A<=B // False
   >>> C <= B // True
   >>> C < B // True
   >>> B <= B // True
   >>> B < B // False
   ```

   --------

