### 1. 장고에서 패키지인지 아닌지 확인방법

`__init__.py` 가 있냐 없냐로 판단

### 2. makemigrations , migrate 차이

```bash
$ ./manage.py makemigrations <app>
```

모델 클래스의 변경사항을 migrations로 생성

```bash
$ ./manage.py migrate <app> <migration>
```

migrate에 있는 변경사항을 데이터 베이스에 적용

```bash
$ ./manage.py migrate members 0001
```

members모델의 0001번 migrations으로 되돌리겠다라는 뜻

만약 데이터베이스를 처음상태 즉 0001 보다 이전으로 돌리고 싶다면 `0001`자리에 `zero` 를 넣어주면 된다.

변경사항을 되돌릴 때는 showmigration했을때 지우고자 하는 migrations이 체크가 해제되어 있어야됨

`%주의%` 데이터 베이스 지울때 컬럼이 연결되어 있다면 연관된 migrations 데이터베이스도 지워진다.

###  3. 데이터 베이스 충돌시 해결방법

예를 들어 

```
members
└───migrations
    │   0001_initial.py
    │   0002_user_img_profile.py
    │   0002_user_img_file.py
```

위 상황이라고 해보자 , 위 상황에서 해결방법은 2가지 이다.



##### 1. 첫번째 방법 : migrations 파일의 dependencies를 수정 및 숫자 변경

```python
# 0002_user_img_profile.py
class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='img_profile',
            field=models.ImageField(blank=True, upload_to='users/'),
        ),
    ]
```

```python
# 0002_user_img_profile.py --> 0003_user_img_profile.py 으로 이름 수정
class Migration(migrations.Migration):

    dependencies = [
        
        # ('members', '0001_initial'), 현재 파일을 전 0002 파일을 의존하게 함
          ('members', '0002_user_img_profile.py'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='img_profile',
            field=models.ImageField(blank=True, upload_to='users/'),
        ),
    ]
```



##### 2. 두번째 방법 : operations를 한곳으로 몰고 operations를 한곳으로 모은 migration말고의 하나를 제거

```python
# Generated by Django 2.2.9 on 2020-01-07 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        # 0002_user_img_profile.py 에서 가져온 부분 시작
        migrations.AddField(
            model_name='user',
            name='img_profile',
            field=models.ImageField(blank=True, upload_to='users/'),
        ),
        # 0002_user_img_profile.py 에서 가져온 부분 끝
        
        # 0002_user_img_file.py 에서 가져온 부분 시작
        migrations.AddField(
            model_name='user',
            name='img_profile',
            field=models.ImageField(blank=True, upload_to='users/'),
        ),
        # 0002_user_img_file.py 에서 가져온 부분 끝
    ]
```

---

### 4. filter안에 조건을 2개 넣는것과 filter를 두개 넣는것과의 차이

```python
# QuerySets | Spanning multi-valued relationships 
--1------------------------
Blog.objects.all().delete()
Entry.objects.all().delete()
AUthor.objects.all().delete()
------------------------1--

b1 = Blog.objects.crate(name='Blog1')
b2 = Blog.objects.create(name='Blog2')
b3 = Blog.objects.create(name='Blog3')
b4 = Blog.objects.create(name='Blog4')

from datetime import date
e1 = Entry.objects.create(
	blog=b1,
	headline='Lennon',
	pub_date=date(2008, 3, 3),
)

e2 = Entry.objects.create(
	blog=b2,
	headline='Lennon',
	pub_date=date(2008, 3, 3),
)
e3 = Entry.objects.create(
	blog=b2,
	headline='WPS',
	pub_date=date(2008, 3, 3),
)
e4 = Entry.objects.create(
	blog=b3,
	headline='Lennon',
	pub_date=date(2020, 6, 6),
)
e5 = Entry.objects.create(
	blog=b4,
	headline='wps',
	pub_date=date(2008, 6, 6),
)
```

```python
Blog.objects.filter(
	entry__headline__contains='Lennon',
	entry__pub_date__year=2008,
)
```

```python
# 위 코드 결과 
<QuerySet [<Blog: Blog1>]>
```

```python
Blog.objects.filter(
	entry__headline__contains='Lennon',
).filter(
	entry__pub_date__year=2008,
)
```

```python
# 위 코드 결과
<QuerySet [<Blog: Blog1>, <Blog: Blog2>]>
```

왜 이런 차이가 나는걸까?

첫번째 코드는 블로그 중  조건에 맞는 headline과 pub_date를 가지고 있는 entry를 가지고 있는 블로그를 찾는거고

두번째 코드는 블로그 중 조건에 맞는 headline을 가지고 있는 entry를 가지고 있는 블로그를 일단 찾고 

추려진 블로그에서 조건에 맞는 pub_date를 가지고 있는 entry를 가지고 있는 블로그를 찾는것이기 때문에 이런 차이가 난다.

___

### 5. 테이블 안에 있는 컬럼의 값을 비교하려면 어떻게 해야하는가?



예제 코드) 첫번재 컬럼 : number_of_comments , 두번째 컬럼 : number_of_likes

```python
Entry.objects.filter(number_of_comments__gt=F('number_of_likes'))
```



결론 : F표현식을 쓰면된다.

---

### 6.  캐시란?

컴퓨터 과학에서 데이터나 값을 미리 복사해 놓는 임시 장소를 가리킨다.

캐시는 캐시의 접근 시간에 비해 원래 데이터를 접근하는 시가닝 오래 걸래ㅣ는 경우나 값을 다시 계산하는 시간을 절약하고 싶은 경우에 사용한다.

---

