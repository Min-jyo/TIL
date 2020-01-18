## 해시 태그 정규표현식 예제

```python
import re
content = '''오늘은 신나는 #Django 웹프로그래밍스쿨 오는날
#WPS#웹프로그래밍스쿨#Django #Python'''

pattern = re.compile(r'#(\w+)')
list(set(re.findall(pattern, content)))
re.sub(pattern, '\g<1>', content)
match_list = re.finditer(pattern, content)
for m in match_list:
    print(m.group(0))
    print(m.group(1))
    # pip install django-extensions notebook
# python manage.py shell_plus --notebook
post = Post.objects.first()
post.content = '#Python #Django'
post.save()
print(post.pk)
print(post.content)
import re

pattern = re.compile(r'#(\w+)')
tag_name_list = re.findall(pattern, post.content)
for tag_name in tag_name_list:
    tag = Tag.objects.get_or_create(name=tag_name)[0]
    post.tags.add(tag)
    
post.tags.all()
```

