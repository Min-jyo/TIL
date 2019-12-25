# 템플릿확장하는법

템플릿 즉 html문서가 여러 개고 중복되는 코드가 있을때 base.html을 만들어 구분할 수 있다.

방법)

1. {% block content %} , {% endblock %} 를 사용하고 {% extends '****.html' %} 을 사용한다.

ex) 

```html
<!-- base.html -->

<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="/static/bootstrap/bootstrap.css">
</head>
<body>
    <div id="wrap">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href="#" class="navbar-brand">DjangoGirls</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Post List</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid pt-2">
            {% block content %}{% endblock %}
        </div>
    </div>
</body>
</html>
```

```html
<!-- post_detail.html -->

{% extends 'base.html' %}
{% block content %}
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.text|linebreaksbr }}</p>
            <div class="text-right">
                <span class="small">{{ post.created_date }}</span>
            </div>
        </div>
    </div>
{% endblock %}
```

```html
<!-- post_list.html -->

{% extends 'base.html' %}
{% block content %}
    {% for post in posts %}
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.text|linebreaksbr|truncatechars:250 }}</p>
                <div class="text-right">
                    <span class="small">{{ post.created_date }}</span>
                </div>
            </div>
        </div>
{% endfor %}
{% endblock %} 
```

