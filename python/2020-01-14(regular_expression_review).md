# 12. 정규표현식



### jupyter notebook으로 실행한 결과



```python
import re

# match의 첫번째인자 : 패턴 , 두 번째 인자 : 문자열 소스 
# match는 소스와 패턴의 일치 여부를 확인하고 일치할경우 Match object를 반환한다.
result = re.match('Lux', 'Lux, the Lady of Luminosity')
result
```

```python
# 조금 복잡하거나 자주 사용되는 패턴은 미리 컴파일하여 속도를 향상시킬 수 있다.
pattern1 = re.compile('Lux')

# 컴파일 된 패턴객체를 문자열 대신 첫 번째 인자로 사용 가능하다.
```

```python
import re
re.match('hello','hellow')
```

```python
import re
p=re.compile('hello')
re.match(p,'hellow')
```

```python
import re
source = 'Lux, the Lady of Luminosity'
m = re.match('Lux', source)
if m:
    print('m은 :',m)
    print('m.group()은 :', m.group())
    
```

```python
# match()는 시작부분 부터 일치하는 패턴만 찾기 때문에, Lady라는 패턴으로는 찾을수 없다.
m = re.match('.*Lady', source)
if m:
    print(m.group())
```

```python
# ' . '은 문자 1개를 의미
# ' * '은 해당 패턴이 0회 이상 올 수 있다는 의미
# 따라서 '.*Lady'는 앞에 아무 문자열(또는 빈) 이후 Lady로 끝나는 패턴을 의미
```

```python
# search : 첫 번째 일치하는 패턴 찾기
# 패턴 없이 Lady만 찾을 경우, 문자열 전체에서 일치하는 부분을 찾는 search()를 사용한다.
m = re.search('Lady', source)
if m:
    print(m.group())
    
```

```python
# findall : 일치하는 모든 패턴 찾기
source = 'Lux, the Lady of Luminosity'
m = re.findall('y..', source)
# Lux, the Lady / Lux, the Lady of Luminosity
m
```

```python
m = re.findall('y.?.?', source)
m
```

```python
# split 패턴으로 나누기
# 
# 문자열의 split() 메서드와 비슷하지만 패턴을 사용할 수 있다.
```

```python
m = re.split('o', 'Lux, the Lady of Luminosity')
m
```

```python
# sub : 패턴 대체하기
# 문자열의 replace() 메서드와 비슷하지만 패턴을 사용할 수 있다.
```

```python
m = re.sub('o','!',source)
m
```

```python
# 정규표현식의 패턴 문자
# \d : 숫자
# \D : 비숫자
# \w : 문자
# \W : 비문자
# \s : 공백 문자
# \S : 비공백 문자
# \b : 단어 경계(\w와 \W의 경계)
# \B : 비단어 경계
```

```python
import string
printable = string.printable
printable
```

```python
import string
printable = string.printable
print(re.findall('\w', printable))

```

```python
print(re.findall('\d', printable))
```

```python
story = '''Born to the prestigious Crownguards, the paragon family of Demacian service, Luxanna was destined for greatness. She grew up as the family's only daughter, and she immediately took to the advanced education and lavish parties required of families as high profile as the Crownguards. As Lux matured, it became clear that she was extraordinarily gifted. She could play tricks that made people believe they had seen things that did not actually exist. She could also hide in plain sight. Somehow, she was able to reverse engineer arcane magical spells after seeing them cast only once. She was hailed as a prodigy, drawing the affections of the Demacian government, military, and citizens alike.

As one of the youngest women to be tested by the College of Magic, she was discovered to possess a unique command over the powers of light. The young Lux viewed this as a great gift, something for her to embrace and use in the name of good. Realizing her unique skills, the Demacian military recruited and trained her in covert operations. She quickly became renowned for her daring achievements; the most dangerous of which found her deep in the chambers of the Noxian High Command. She extracted valuable inside information about the Noxus-Ionian conflict, earning her great favor with Demacians and Ionians alike. However, reconnaissance and surveillance was not for her. A light of her people, Lux's true calling was the League of Legends, where she could follow in her brother's footsteps and unleash her gifts as an inspiration for all of Demacia.'''
```

```python
re.findall('Lux', story)
```

```python
re.findall('Lux|her|she', story)
```

```python
re.findall('[Ll]ux|[Hr]er|[Ss]he', story)
```

```python
re.findall('^Born',story)
```

```python
re.findall('Demacia$', story)
```

```python
re.findall('was',story)
```

```python
re.findall('(?<=she )was', story)
```

```python
re.findall('\w+(?<!she) was',story)
```

```python
re.findall('\bwas\b', story)
```

```python
re.findall(r'\bwas\b',story)
```

```python
s = re.search(r'\w+\w(was)', story)
```

```python
# (?P<name>expr) 패턴을 사용하면 매칭된 표현식 그룹에 이름을 붙여 사용할 수 있다.

m = re.search(r'(?P<before>\w+)\s+()')
```

