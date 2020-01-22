### AWS Inbound를 0.0.0.0이라고 설정하는 것과 Django settings.py의 ALLOWED_HOST의 차이



Security Group의 Inbound

> 보낸 사람의 IP를 기준으로 필터



Client(IP)

​	-> SecurityGroup(Client의 IP가 Inbound)의 허용범위 내에 없으면 거부



Django의 ALLOWED_HOSTS

> 보낸사람이 '어디에 보냈느냐를 기준으로 필터(보낸사람의 IP는 신경쓰지 않음)'



예시) 

Client -> (Request) -> EC2(IP: 142.1.1.1, Domain: lky.kr, phy.kr)

​	-> Request에 HOST라는 값이 전달됨

​	-> EC2에 도달하는 REQUEST를 만들기 위해서는

방법이 여러가지가 있는데

1. 142.1.1.1로 요청
2. lky.kr로 요청 <- 이거만 허용
3. pby.kr로 요청

Django가 거부하므로, SecurityGroup의 Inbound는 이미 통과한 상태

