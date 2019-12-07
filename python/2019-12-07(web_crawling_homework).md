# Web crawling homework

```python
import requests
from bs4 import BeautifulSoup

webtoon_list_url = 'https://comic.naver.com/webtoon/weekday.nhn'
comicbook_url = 'https://comic.naver.com/'

menu = '''## 웹툰 크롤러 ##
1. 정보
2. 에피소드 목록
0. 나가기'''
while True:
    
    print(menu)
    
    val = input('> 입력: ')
    
    print()
    
    if val == '0':
        break
    if val == '1':
        webtoon_word = input('> 웹툰명을 입력하세요: ')
        print('# 정보를 가져올 웹툰선택')
        webtoon_list_response_text = requests.get(webtoon_list_url).text
#         print(webtoon_list_response_text)
        webtoon_list_soup = BeautifulSoup(webtoon_list_response_text)
        
        webtoon_list = [];
        a_tag_webtoon_list_include_webtoon_word = webtoon_list_soup.select('a.title[title*="{}"]'.format(webtoon_word))
#         print(a_tag_webtoon_list_include_webtoon_word)
        
        for atag_webtoon_title_include_webtoon_word in a_tag_webtoon_list_include_webtoon_word:
            webtoon_list.append(atag_webtoon_title_include_webtoon_word['title'])
#             print(f'{index+1}.', atag_webtoon_title_include_webtoon_word['title'] )
        webtoon_list = list(set(webtoon_list))
        
        for index,webtoon_include_word in enumerate(webtoon_list):
            print(f'{index+1}.', webtoon_include_word)
            
        print('0. 이전')
        selected_webtoon_number = input('> 웹툰 선택: ')
        if selected_webtoon_number == '0': continue
        selected_webtoon_index = int(selected_webtoon_number)-1
        
        selected_webtoon = webtoon_list[int(selected_webtoon_index)]
        selected_webtoon_href = webtoon_list_soup.select_one('a[title="{}"]'.format(selected_webtoon))['href']
        selected_webtoon_url = comicbook_url + selected_webtoon_href
#         print(selected_webtoon_url)
        selected_webtoon_response_text = requests.get(selected_webtoon_url).text
        selected_webtoon_soup = BeautifulSoup(selected_webtoon_response_text)
        selected_webtoon_author = selected_webtoon_soup.select_one('div.detail h2').contents[1].get_text(strip=True)
        selected_webtoon_explaination = selected_webtoon_soup.select_one('div.detail p').get_text('\n', strip=True)
        selected_webtoon_genre = selected_webtoon_soup.select_one('span.genre').get_text(strip=True)
        print(f'# 정보 ({selected_webtoon})')
        print(f'작가 : {selected_webtoon_author}')
        print(f'설명 : {selected_webtoon_explaination}')
        print(f'장르 : {selected_webtoon_genre}')
        #         a.title[title*="{}"]'.format(webtoon_word))
    if val == '2':
        webtoon_word = input('> 웹툰명을 입력하세요: ')
        print('# 에피소드 목록을 가져올 웹툰선택')
        webtoon_list_response_text = requests.get(webtoon_list_url).text
#         print(webtoon_list_response_text)
        webtoon_list_soup = BeautifulSoup(webtoon_list_response_text)
        
        webtoon_list = [];
        a_tag_webtoon_list_include_webtoon_word = webtoon_list_soup.select('a.title[title*="{}"]'.format(webtoon_word))
#         print(a_tag_webtoon_list_include_webtoon_word)
        
        for atag_webtoon_title_include_webtoon_word in a_tag_webtoon_list_include_webtoon_word:
            webtoon_list.append(atag_webtoon_title_include_webtoon_word['title'])
#             print(f'{index+1}.', atag_webtoon_title_include_webtoon_word['title'] )
        webtoon_list = list(set(webtoon_list))
        
        for index,webtoon_include_word in enumerate(webtoon_list):
            print(f'{index+1}.', webtoon_include_word)
            
        print('0. 이전')
        selected_webtoon_number = input('> 웹툰 선택: ')
        if selected_webtoon_number == '0': continue
        selected_webtoon_index = int(selected_webtoon_number)-1
        
        selected_webtoon = webtoon_list[int(selected_webtoon_index)]
        selected_webtoon_href = webtoon_list_soup.select_one('a[title="{}"]'.format(selected_webtoon))['href']
        selected_webtoon_url = comicbook_url + selected_webtoon_href
#         print(selected_webtoon_url)
        selected_webtoon_response_text = requests.get(selected_webtoon_url).text
        selected_webtoon_soup = BeautifulSoup(selected_webtoon_response_text)
        
        table = selected_webtoon_soup.select_one('table.viewList')
        tr_list = table.select('tr')
        results = []
        for tr in tr_list:
            # title클래스를 가진 td
            td_title = tr.select_one('td.title')
            # 가 없으면 넘어간다
            if not td_title:
                continue
        
        
            title = td_title.get_text(strip=True)
            
            td_rating = tr.select_one('td:nth-child(3)')
            rating = td_rating.select_one('strong').get_text(strip=True)

            td_date = tr.select_one('td.num')
            date = td_date.get_text(strip=True)
            
            print(f'{title}')
            print(f'평점: {rating}, 날짜: {date}')
        
        
```

