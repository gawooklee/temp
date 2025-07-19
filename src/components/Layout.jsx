import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    // 최상위 div에 body 태그에 있던 스타일을 적용합니다.
    <div className="font-pretendard bg-gray-50">
      <Header />

      {/* Header와 Footer 사이에 main 태그로 콘텐츠 영역을 구분합니다. */}
      <main>
        {/* 이 Outlet 자리에 우리가 만들 페이지 컴포넌트들이 들어옵니다. */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;