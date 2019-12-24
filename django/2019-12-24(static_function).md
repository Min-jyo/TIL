```python
# app / config / urls.py

urlpatterns += static(
	prefix=settings.MEDIA_URL, # URL앞부분이 /media/이면
	document_root=settings.MEDIA_ROOT, # document_root위치에서 나머지 path에 해당하는 파일을 리턴
)
```

