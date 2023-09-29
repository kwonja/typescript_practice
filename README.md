## TODO 리스트 타입스크립트로 만들기

## 실행방법
```zsh
cd typescript_pratice
npm install
npm start
```
## 프로젝트 환경

- Prettier
- Eslint
- Husky

### commit && push 규칙 & 자동화 이유

여러명과 협업을 하기위해서는 규칙이 중요하다. 특히 코드스타일이 다르기때문에 prettier를 통해 formaating을 정했고 eslint로 컴파일 규칙(문법이나 console.log 가 있으면 안되는것 같은것)을 정하여 원활한 협업을 진행했습니다.

### 현재규칙

- commit 실행시 prettier 자동화 / --write --cache를 사용하여 바로 수정후 캐쉬로 저장 // 캐쉬사용 이유는 재사용성으로인해 코드수정 시간 최적화
- push 실행시 eslint 실행 -> eslint에 걸리면 push가 안된다.

### 추가하고싶은 규칙

- commit message를 자주 실수하는데, 메세지를 실수했을때 커밋이 안되도록 정하면 좀더 깔끔한 협업을 할 수 있을것 같다

## 배포

### 배포링크 http://wanted-intership-kwonsungmin-11th.s3-website.ap-northeast-2.amazonaws.com/

### AWS S3 : 빌드

- aws cli 사용
- `npm run deploy` 를 통해 빌드후 s3 버켓 자동 수정

### CI/CI 자동화

- GitHub Action 사용
- `npm run test` 과 `npm run deploy` 를 push할때 자동으로 실행되도록 설정
- 현재 테스트 코드는 진행하지않아 yml파일에서 제외

## 프로젝트 구조

```
📦 src
├── 📂 apis
│   ├── 📂 auth
│   ├── 📂 core
│   └── 📂 todos
│── 📂 interface
│── 📂 pages
│    │── 📂 home
│    │── 📂 siginin
│    │── 📂 signup
│    └── 📂 todo
│── 📂 styles
└── 📂 utils
```

## 로그인 페이지
### 로그인
- 유효성 검사에 대한 코드복잡도가 증가할때는 대비해 따로 utils에 만들어 관리했습니다.
- 유효성 검사 함수 리턴 값을 boolean 으로 설정하여 button 에 바로 적용했습니다. 이를 통해 useEffect 와 state 를 사용하지 않아서 렌더링을 줄일 수 있었고, 코드를 줄여 가독성을 높였습니다.

## 회원가입 페이지
### 회원가입
- 유효성 검사를 위해 input 의 내용이 실시간 반영되어 회원가입 버튼의 disabled 속성으로 나타나도록 input 의 onChange 속성과 useEffect 를 이용했습니다.
- 이메일과 비밀번호 각각의 validation 값을 boolean 값으로 가져와 각각의 유효성 검사 메시지를 나타내 사용자의 이해가 쉽도록 구현하였습니다.

## 리다이렉션
로컬 스토리지 안 ACCESS_TOKEN의 존재여부에 따라 /signin /todo 로 이동하도록 구현하였습니다.

## TODO 페이지
- TODO을 입력받을때 마다 랜더링이 일어나게되면 비효율적이기 때문에 useRef를 사용해 할일을 받았습니다.
- TODO 목록에 대한 ITEM 컴포넌트를 따로 만들어 컴포넌트 분리를 진행했습니다.코드 재사용률도 올라가고 추후 React.memo를 통해 랜더링 최적화가 쉽게 가능해졌습니다.

## apis와 utils
### apis
- axios instance를 사용해 재사용성을 높이고 interceptors 를 사용해 횡단 관심사 분리를 진행했습니다
- 서버와 통신하는 api 호출에 관련한 로직의 재사용성을 높이기 위해서 apis 폴더에 모듈화 하였습니다.
### utils
- acess token에 대한 get 과 set 을 함수화 하여 재사용성을 높였습니다.
## TODO 리스트 API 레파지토리
https://github.com/walking-sunset/selection-task
