# how to apply theme

### 

### 1. 순서

1. 사이트의 `Gemfile`에 테마를 추가한다.

   ```bash
   # ./Gemfile
   
   gem "ojekyll-theme-awesome"
   ```

   처음에 `jekyll new` 명령으로 생성한 경우는, `gem "minima", "~> 2.0"`를 원하는 테마 젬으로 변경합니다.

   ```bash
   # ./Gemfile
   
   - gem "minima", "~>2.0"
   + gem "jekyll-theme-awesome"
   ```

   

2. 테마를 설치합니다.

   ```
   # terminal
   $ bundle install
   ```



3. 사이트의 `_config.yml`에 추가하여 테마를 활성화 합니다.

   ```bash
   theme : jekyll-theme-awesome
   ```

   

4. 사이트를 빌드합니다.

   ```bash
   bundle exec jekyll serve
   ```