import { Routes, Route } from 'react-router-dom';

// 우리가 만든 컴포넌트들을 불러옵니다.
import Layout from './components/Layout';
import HomePage from './pages/Homepage/HomePage';
import ContactPage from '@/pages/ContactPage'; 
import MetalCorpContentPage from '@/pages/CompanyInfoPage/CompanyInfoPage'

// 아직 만들지 않은 페이지들은 임시로 간단한 컴포넌트를 만들어 둡니다.
// const ProductsPage = () => <div className="p-10"><h1>제품소개 페이지 (제작중)</h1></div>;
const TechnologyPage = () => <div className="p-10"><h1>기술력/설비 페이지 (제작중)</h1></div>;
// const ContactPage = () => <div className="p-10"><h1>문의하기 페이지 (제작중)</h1></div>;



function App() {
  return (
    <Routes>
      {/* 모든 페이지는 Layout 컴포넌트를 뼈대로 사용합니다. */}
      <Route path="/" element={<Layout />}>

        {/* '/' 주소로 접속하면 HomePage를 보여줍니다. */}
        <Route index element={<HomePage />} />

        {/* '/products' 주소로 접속하면 ProductsPage를 보여줍니다. */}
        <Route path="products" element={<MetalCorpContentPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* '/about'은 HomePage에 포함시켰으므로 별도 라우트가 필요 없습니다. */}
        {/* 만약 별도 페이지로 만들고 싶다면 여기에 추가하면 됩니다. */}
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;