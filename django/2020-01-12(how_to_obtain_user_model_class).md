### User 모델 클래스 획등 방법



### 1. 직접 User 모델 import 

- global settings 오버라이딩을 통해서 인증 User 모델을 다른 모델로 변경할 수 있음

  ```python
  from django.contrib.auth.models import User
  
  User.objects.all()
  ```



### 2. <span style="background-color:yellow">get_user_model helper</span> 함수를 통해 모델 클래스 참고

```python
from django.contrib.auth import get_user_model

User = get_user_model()
User.objects.all()
```



### 3. <span style="background-color:yellow">settings.AUTH_USER_MODEL</span> 을 통한 모델클래스 참조

```python
from django.conf import settings # 추천!
from django.conf.auth.models import User # 비추
from django.db import models

class Post(models.Model):
    author = models.ForeignKey(User) # 비추
    author = models.ForeignKey('auth.User') # 비추
    author = models.FOreignKey(settings.AUTH_USER_MODEL) # 추천!
```



### 4. 뷰 에서 현재 로그인 유저 획득하는 방법

1. FBV : request.user

2. CBV : self.request.user

   - 로그인 상태 : settings.AUTH_USER_MODEL 클래스 인스턴스

   - 로그아웃 상태 : django.contrib.auth.models.AnonymousUser 클래스

     ​						(모델 인스턴스가 아님, 다른 모델과 관계 불가능)

   - context_processor를 통해서 user가 모든 view에 context로 기본 제공됨

