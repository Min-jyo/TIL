클라우드 컴퓨팅 서비스는 다양하게 발전하고 있습니다.

따라서 서비스 제공 형태를 구별하기가 어려워지고 있지만, 크게 나누어

### 	

### 1. SaaS(Software as a Service)

- 서비스로서의 소프트웨어

### 2. PaaS(Platform as a Service)

- 서비스로서의 플랫폼

### 3. IaaS(Infrastructure as a Service)

- 서비스로서의 인프라



## 1. SaaS란?

주로 업무에서 사용하는 소프트웨어의 기능을, 인터넷 등의 네트워크를 통해 필요한 만큼 서비스로 이용할 수 있도록 제공하는 형태를 뜻합니다. 하나의 서버를 여러 기업에서 공유하는 것을 전제한 멀티 테넌트 방식 서비스를 제공합니다. 그러나 데이터는 기업 사용자별로 분리되도록 설계하여 보안성을 확보



소프트웨어의 업데이트 작업은 기업 사용자가 아니라 클라우드 사업자가 수행합니다.

따라서 항상 최신 기능을 사용할 수 있으며 소프트웨어의 버그가 방치되지 않습니다.



SaaS의 경우에는 서비스를 계약하고, 사용자 계정이 준비되면 즉시 서비스 이용을 시작할수 있습니다.

패키지 소프트웨어를 구입하는 것에 비해, 도입까지의 납기를 크게 줄일수 있습니다.



SaaS로 제공되는 대표적인 소프트웨어로는 정보 시스템의 전자메일, 그룹웨어, 고객 관리 시스템등을 들 수 있습니다.



SaaS는 인터넷을 통해 접속할 수 있습니다.



대표적인 SaaS 서비스로는 구글의 Google Apps 이 있습니다.



## 2. PaaS란?

기업의 애플리케이션 실행 환경 및 애플리케이션 개발 환경을 서비스로써 제공하는 모델입니다.

기업 사용자가 자사에서 애플리케이션 개발 환경을 처음부터 구축하는 것은 많은 시간이 소요되는 일입니다. 그런 점에서 PaaS에는 Java, PHP, Ruby 등의 프로그래밍언어를 지원하는 애플리케이션 실행 환경이나 데이터베이스 등이 미리 마련되어 있습니다. 따라서 인프라 구축 및 운용 보수를 하지 않아도 그 기반을 사용할 수 있으므로, 단기간에 응용 프로그램을 개발하여 서비스를 제공할 수 있습니다.



### PaaS와 IaaS의 차이점

서버, 네트워크, 보안 부분을 클라우드 사업자에게 위임한다는 점으로 구축 및 운영이 쉽습니다.



### SaaS는 와 PaaS의 차이점

PaaS는 자사에서 개발한 응용 프로그램을 가동할 수 있습니다. 때문에 어플리케이션 활용 자유도가 높다는것이 특징입니다. 그러나 반대로 말하면 서버 및 미들웨어의 상세한 설정을 할 수 없을수 있으며 특정 PaaS 환경에 대한 의존도가 높아지게 되며 다른 환경으로의 마이그레이션이 어려워질 수도 있습니다.



### PaaS의 주된 이용 용도

개발 및 테스트 시행에 큰 처리 능력이 필요한 경우 혹은 자사에서 운용 중인 애플리케이션의 최대 부하를 분산 처리하는 경우 등을 들 수 있습니다.



주된 PaaS 서비스나 소프트웨어로는 세일즈 포스가 제공하는 Force.com과 

사이보우즈의 kintone, 오픈 소스 PaaS기반 소프트웨어인 Cloud Foundry등을 들수 있습니다.



## 3. IaaS란?

CPU나 하드웨어등의 컴퓨터 리소스를 네트워크를 통해 서비스로 제공하는 모델입니다.

대표적인 IaaS의 서비스로는 가상 서버 및 온라인 스토리지 등을 들을 수 있습니다. 가상 서버란 클라우드

사업자가 보유하는 물리적 서버의 CPU와 메모리, 스토리지 등의 하드웨어 자원을 소프트웨어적으로 나누어 사용자에게 

제공하는 것입니다. 기업 사용자는 물리적 서버를 구입하지 않고 필요할 때 필요한 만큼의 가상 서버를 만들 수 있습니다.

가상 서버에서는 OS에 설치되는 데이터베이스와 미들웨어, 응용 프로그램등의 소프트웨어를 자유롭게 운영할 수 있지만, 

기업 사용자가 스스로 설치하고 관리해야 합니다.



IaaS의 요금 체계는 많은 클라우드 서비스에서 사용량에 따른 종량제 혹은 월 정액제를 채택하고 있습니다. 

또한, 데이터 업로드와 다운로드에 의한 데이터 전송량에 따라 요금이 부과될수 있습니다.



IaaS의 활용 예로서 웹 사이트 서버를 들수 있습니다. 웹 사이트를 운영할 때 프로모션 이벤트용 웹페이지를 개설한다면, 

단기간에 엄청난 접속자가 몰릴 수 있습니다. 그래서, 프로모션을 진행하는 동안만 일시적으로 컴퓨팅 리소스를 많이 빌려

서 사용하고 프로모션이 종료되면 리소스를 감축시키는 등 리소스의 양을 유연하게 변경함으로써 안정적인 웹 사이트의 구

축 비용과 운용 비용을 절감할 수 있습니다.



대표적인 IaaS 서비스에는 Amazon Web Services가 제공하는 EC2가 있습니다.
