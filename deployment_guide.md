# 우림금속 웹사이트 구축 및 배포 가이드

이 문서는 우림금속 웹사이트의 문의하기 기능(구글 시트 연동) 설정 방법과 Netlify를 통한 웹사이트 배포 과정을 정리한 가이드입니다.

---

## 📅 1. 구글 스프레드시트 문의하기 연동 (무료 API 구축)

서버 없이 고객의 문의를 구글 시트에 실시간으로 기록하는 방법입니다.

### 1단계: 스프레드시트 준비
1. 새 구글 스프레드시트 생성 (이름: `우림금속_문의내역`)
2. 첫 번째 줄(A1~G1)에 다음 헤더 작성:
   `타임스탬프`, `회사명`, `담당자명`, `이메일`, `전화번호`, `관심제품`, `문의내용`

### 2단계: 구글 앱스 스크립트(GAS) 설정
1. 상단 메뉴: **[확장 프로그램]** -> **[Apps Script]** 클릭
2. 아래 코드를 복사해서 붙여넣기:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowData = [];
  
  // 데이터 기록 (순서 중요)
  rowData.push(new Date()); // 접수 날짜/시간
  rowData.push(e.parameter.companyName || "");
  rowData.push(e.parameter.contactName || "");
  rowData.push(e.parameter.email || "");
  rowData.push(e.parameter.phone || "");
  rowData.push(e.parameter.productInterest || "");
  rowData.push(e.parameter.message || "");
  
  sheet.appendRow(rowData); // 시트 맨 아래에 행 추가
  
  return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3단계: 웹 앱 배포 (가장 중요)
1. 우측 상단 **[배포(Deploy)]** -> **[새 배포(New Deployment)]**
2. 유형: **[웹 앱(Web App)]** 선택
3. 다음 사용자로 실행: **[나(Me)]**
4. 액세스 권한 보유자: **[모든 사용자(Anyone)]** 로 설정
5. 배포 버튼 클릭 후 발급된 **"웹 앱 URL"** 복사

### 4단계: 소스코드 적용
`src/pages/ContactPage.jsx` 파일 상단의 `SCRIPT_URL` 변수에 복사한 주소를 붙여넣습니다.

---

## 🚀 2. Netlify를 통한 웹사이트 배포 (Vite + React)

Vite로 제작된 React 사이트를 전 세계에 무료로 배포하는 방법입니다.

### 1단계: 빌드(Build) 확인
내 컴퓨터에서 배포용 파일을 미리 만들어 확인해 볼 수 있습니다.
```bash
npm run build
```
성공하면 `dist` 폴더가 생성됩니다.

### 2단계: Netlify 배포
1. **[Netlify](https://www.netlify.com/)** 로그인 (GitHub 계정 추천)
2. **Add new site** -> **Import an existing project** 클릭
3. 저장소(Repository) 연결 (GitHub 등)
4. 설정값 확인:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy site** 버튼 클릭

### 3단계: 환경 변수 관리 (권장 사항)
보안을 위해 `SCRIPT_URL` 같은 중요한 정보는 `.env` 파일과 Netlify 설정 사이트(`Site settings` -> `Environment variables`)에서 관리하는 것이 권장됩니다.

- **로컬 (.env 파일 설정)**:
  `VITE_CONTACT_API_URL=구글_스크립트_주소`
- **코드에서 사용**:
  `const SCRIPT_URL = import.meta.env.VITE_CONTACT_API_URL;`

---

## 💡 추가 팁: 전용 도메인 및 메일 알림
- **도메인 연결**: Netlify의 `Domain management`에서 우림금속만의 고유 도메인(예: `woorim.com`)을 구매하여 연결할 수 있습니다.
- **메일 알림**: 구글 스프레드시트 상단 **[도구]** -> **[알림 규칙]** 에서 데이터가 들어올 때마다 내 메일로 알림을 오게 할 수 있습니다. 
