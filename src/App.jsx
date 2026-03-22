import { Routes, Route } from 'react-router-dom';

// 우리가 만든 컴포넌트들을 불러옵니다.
import Layout from './components/Layout';
import HomePage from './pages/Homepage/HomePage';
import ContactPage from '@/pages/ContactPage'; 
import MetalCorpContentPage from '@/pages/CompanyInfoPage/CompanyInfoPage'

// 아직 만들지 않은 페이지들은 임시로 간단한 컴포넌트를 만들어 둡니다.
const TechnologyPage = () => <div className="p-10"><h1>기술력/설비 페이지 (제작중)</h1></div>;


function App() {
  return (
    <Routes>
      {/* 모든 페이지는 Layout 컴포넌트를 뼈대로 사용합니다. */}
      <Route path="/" element={<Layout />}>

        {/* '/' 주소로 접속하면 HomePage를 보여줍니다. */}
        <Route index element={<HomePage />} />

        {/* 상단 헤더 메뉴 각각의 개별 라우트로 설정 (카테고리 Prop 전달) */}
        <Route path="about" element={<MetalCorpContentPage category="about" />} />
        <Route path="products" element={<MetalCorpContentPage category="products" />} />
        <Route path="careers" element={<MetalCorpContentPage category="careers" />} />
        <Route path="support" element={<MetalCorpContentPage category="support" />} />
        
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="contact" element={<ContactPage />} />

      </Route>
    </Routes>
  );
}

export default App;