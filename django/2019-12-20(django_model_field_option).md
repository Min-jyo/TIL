### 장고모델필드 옵션



#### 01. 모든 필드에서 사용가능한 공통 인수 (선택사항임)



##### 100. null

True일 경우, 장고는 빈 값을 NULL로 데이터베이스에 저장합니다. 기본 값은 False입니다.



##### 200. blank

True일 경우, 필드는 빈 값을 허용합니다. 기본값은 False입니다.



##### 201. null과 blank의 차이

null은 데이터베이스에 NULL값이 들어가는 것을 허용하는 것

blank는 데이터베이스에 빈 문자열 값 ("")을 허용하는 것



##### 300. choice

반복 가능한 (예를 들면, 리스트나 튜플) 튜플의 묶음을 선택목록으로 사용합니다.

이 인수가 주어지면, 기본 폼 위젯은 select box로 대체되어 선택값을 제한합니다.



choice는 다음과 같이 나타냅니다.

```python
YEAR_IN_SCHOOL_CHOICES = (
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('GR', 'Graduate'),
)
```

각 튜플의 첫 번째 요소는 데이터베이스에 저장되는 값이며,

​			   두 번째 요소는 기본양식이나 위젯에 표시되는 값



##### 400. default

필드에 기본값으로 설정됩니다.



##### 500. help_text

폼 위젯에서 추가적으로 보여줄 도움말 텍스트입니다.

폼을 사용하지 않아도, 문서화에 많은 도움이 됩니다.



##### 600. primary_key

True일 경우, 해당 필드는 모델의 primary key로 사용됩니다.

어떤 필드에도 `primary_key=True` 를 설정하지 않으면, 장고는 자동으로 `IntegerField` 를 생성해 primary key로 사용합니다.



그러므로 반드시 `primary_key= True` 를 어떤 필드에 추가할 필요는 없습니다.



##### 700. unique

True일 경우, 이 필드의 값은 테이블 전체에서 고유해야합니다.



  



