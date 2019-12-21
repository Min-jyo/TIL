## 191221 documents 코드 따라쳐보면서 의문점과 해결방법



1. 'blog'를 아래에 추가해주면되고 

   ​			위에 추가해주면 오류남

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',
]
```



2. shell_plus 키는방법

   ```bash
   $ pip install django-extensions
   ```

   ```python
   # config / settings.py
   
   INSTALLED_APPS = [
   
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
       'blog',
       'django_extensions',
   ]
   ```

   ```bash
   $ ./manage.py shell_plus
   ```

   

3. verbose field names 부분 쳐보는데 

   모델 field에 

   ```python
   first_name = models.CharField("person's first name", max_length=30)
   ```

   이렇게 쳐서 migrate하면

   <span style="color: red">migrate한다는게 데이터베이스에 업로드 한다는건가?</span>

 암튼 데이터베이스 필드명이 바껴야된다고 생각되는데 

데이터베이스의 컬럼의 순서만 바뀌고 데이터베이스의 컬럼이름이 바뀌지 않는다. 

![191221 코드 따라쳐보면서 의문점과 해결방법그림1](./images/191221 코드 따라쳐보면서 의문점과 해결방법그림1.png)



4. ```python
   from django.db import models
   
   
   class Manufacturer(models.Model):
       pass
   
   
   class Car(models.Model):
       manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
   
   ```

   이런상황에서 데이터베이스의 데이터 어떻게 생성하지?

   인스턴스 어떻게 생성하지?

   

5. 궁금한점

   ```python
   # models.py
   from django.db import models
   
   class Manufacturer(models.Model):
       pass
   
   class Car(models.Model):
       manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
   ```

   이상태에서 

   ```
   $ ./manage.py makemigrations
   $ ./manage.py migrate
   ```

   를 실행하고 데이터 베이스에 잘 업로드 되는것 까지 확인!

   

   하지만!

   ```python
   # 똑같은 models.py에 
   from django.db import models
   
   class Topping(models.Model):
       pass
   
   class Pizza(models.Model):
       toppings = models.ManyToManyField(Topping)
   ```

   위 상태에서 

   ```
   $ ./manage.py makemigrations
   ```

   라고 실행하면 터미널창에 아래 질문이 출력되고

   ```
   Did you rename the blog.Manufacturer model to Topping? [y/N] y
   ```

   ```
   $ ./manage.py migrate
   ```

   실행하면

   에러 출력됨

   

   질문!

   에러 출력되는 이유가 뭔가요?
   
   ```bash
   Operations to perform:
     Apply all migrations: admin, auth, blog, contenttypes, sessions
   Running migrations:
     Applying blog.0006_auto_20191221_0720...Traceback (most recent call last):
     File "./manage.py", line 21, in <module>
       main()
     File "./manage.py", line 17, in main
       execute_from_command_line(sys.argv)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/__init__.py", line 381, in execute_from_command_line
       utility.execute()
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/__init__.py", line 375, in execute
       self.fetch_command(subcommand).run_from_argv(self.argv)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/base.py", line 323, in run_from_argv
       self.execute(*args, **cmd_options)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/base.py", line 364, in execute
       output = self.handle(*args, **options)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/base.py", line 83, in wrapped
       res = handle_func(*args, **kwargs)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/core/management/commands/migrate.py", line 234, in handle
       fake_initial=fake_initial,
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/migrations/executor.py", line 117, in migrate
       state = self._migrate_all_forwards(state, plan, full_plan, fake=fake, fake_initial=fake_initial)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/migrations/executor.py", line 147, in _migrate_all_forwards
       state = self.apply_migration(state, migration, fake=fake, fake_initial=fake_initial)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/migrations/executor.py", line 245, in apply_migration
       state = migration.apply(state, schema_editor)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/migrations/migration.py", line 124, in apply
       operation.database_forwards(self.app_label, schema_editor, old_state, project_state)
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/migrations/operations/models.py", line 353, in database_forwards
       new_model._meta.db_table,
     File "/home/minjyo/.pyenv/versions/3.7.5/envs/191221env/lib/python3.7/site-packages/django/db/backends/sqlite3/schema.py", line 93, in alter_db_table
       ) % old_db_table)
   django.db.utils.NotSupportedError: Renaming the 'blog_manufacturer' table while in a transaction is not supported on SQLite < 3.26 because it would break referential integrity. Try adding `atomic = False` to the Migration class.

   ```
   
   





