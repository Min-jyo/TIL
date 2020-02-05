### allow_host의 *랑 Inbound의 0:0:0:0과의 차이

1. Security Group의 Inbound

   보낸 사람의 IP를 기준으로 필터하는 곳

   즉 SecurityGroup(Client의 IP가 Inbound)의 허용범위내에 없으면 거부



2. Django의 ALLOWED_HOSTS

   보낸 사람이 '어디에 보냈느냐'를 기준으로 필터(보낸사람의 ip는 신경쓰지 않음)

    

   예시)

   Client가 Request를 EC2로 전달하는데 전달되는 방법이 

   1. IP 142.1.1.1
   2. Domain : lky.kr
   3. Domain: pby.kr

   3가지라고 했을때 각 전달되는 방법마다 Request에 HOST라는 값이 전달 됨

   만약 ALLOWED_HOST에서 lky.kr만 허용한다면 나머지 142.1.1.1과 pby.kr은 허용이 안됨

   Django가 거부했다고 해서 SecurityGroup의 Inbound도 통과되지 않은게 아니라 SecurityGroup은 통과된 상태임