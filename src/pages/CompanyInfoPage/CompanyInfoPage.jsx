import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CeoGreetingContent from './components/CeoGreetingContent'
import CompanyStructurePage from './components/CompanyStructurePage'
import DirectionsWidget from './components/DirectionsWidget'
import LMEPriceWidget from './components/LMEPriceWidget'
import OrganizationChart from './components/OrganizationChart'
import ProductList from './components/ProductList'
import BrassRodTabs from './components/BrassRodTabs'
import ProcessingCapabilities from './components/ProcessingCapabilities'
import IdealTalentProfile from './components/IdealTalentProfile'
import ManufacturingProcessChart from './components/ManufacturingProcessChart';
import CopperRodDetails from './components/CopperRodDetails';
import QnAPage from './components/QnaAccordion'
import NoticeBoard from './components/NoticeBoard';

// --- 1. 데이터 구조: 각 항목에 고유 id와 label 부여 ---
const menuData = [
  { 
    id: 'about',
    title: '기업정보', 
    items: [
      { id: 'ceo-greeting', label: 'CEO 인사말' },
      { id: 'history', label: '회사연혁' },
      { id: 'organization', label: '조직도' },
      { id: 'partners', label: '관계사' },
      { id: 'directions', label: '오시는 길' },
    ] 
  },
  { 
    id: 'products',
    title: '제품소개', 
    items: [
      // { id: 'lme-charts', label: 'LME 시세' },
      { id: 'raw-materials', label: '원재료' },
      { id: 'brass-rods', label: '황동봉' },
      { id: 'copper-rods', label: '동봉' },
      { id: 'process', label: '공정도' },
    ]
  }, 
  {
    id: 'careers',
    title: '채용정보',
    items: [
      { id: 'talent', label: '인재상' },
      { id: 'hiring-process', label: '근무조건 및 채용 절차' },
      { id: 'apply', label: '입사지원' },
    ]
  },
  {
    id: 'support',
    title: '고객센터',
    items: [
      { id: 'qna', label: 'Q&A' },
      { id: 'notices', label: '공지사항' },
    ]
  }
];

const CompanyHistoryContent = () => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">우림금속 발자취</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>2020-현재:</strong> 글로벌 시장 진출 및 스마트 팩토리 구축</li>
      <li><strong>2010-2019:</strong> 특수 합금 개발 및 ISO 14001 환경 경영 인증 획득</li>
      <li><strong>2005-2009:</strong> 법인 설립 및 황동봉 생산 라인 증설</li>
    </ul>
  </div>
);

const DefaultContent = ({ title }) => (
    <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">현재 페이지의 콘텐츠를 준비 중입니다.</p>
    </div>
);

// --- 페이지의 핵심 로직을 담은 컴포넌트들 ---

function ContentArea({ mainTitle, subTitle, subId }) {
  const renderContent = () => {
    switch (subId) {
      case 'ceo-greeting':
        return <CeoGreetingContent />;
      case 'history':
        return <CompanyHistoryContent />;
      case 'partners':
        return <CompanyStructurePage/>
      case 'directions':
        return <DirectionsWidget/>
      case 'lme-charts':
        return <LMEPriceWidget/>
      case 'organization':
        return <OrganizationChart/>
      case 'raw-materials':
        return <ProductList/>
      case 'brass-rods':
        return <BrassRodTabs/>
      case 'special-materials':
        return <ProcessingCapabilities/>
      case 'talent':
        return <IdealTalentProfile/>
      case "process":
        return <ManufacturingProcessChart />
      case "copper-rods":
        return <CopperRodDetails/>
      case "qna":
        return <QnAPage/>
      case "notices":
        return <NoticeBoard/>
      default:
        return <DefaultContent title={subTitle} />;
    }
  };

  return (
    <div className="space-y-4">
      <header className="mb-8">
        <div className="text-sm text-gray-500 mb-2" aria-label="breadcrumb">
          <span className="cursor-default">{mainTitle}</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 font-bold">{subTitle}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-[#0A2342] mb-6">{subTitle}</h2>
        <div className="h-[3px] w-16 bg-[#B87333] mb-6" />
      </header>
      <section className="bg-white min-h-[500px]">
        {renderContent()}
      </section>
    </div>
  );
}

function MenuList({ categoryMain, currentSubId, onSelectSub, closeMobile }) {
    return (
      <nav aria-label="콘텐츠 내비게이션" className="space-y-1">
         <div className="px-2 mb-6">
           <h3 className="text-2xl font-gmarket font-bold text-[#0A2342]">{categoryMain.title}</h3>
           <div className="h-0.5 w-12 bg-[#B87333] mt-4" />
         </div>
         {categoryMain.items.map(item => {
            const isSubActive = item.id === currentSubId;
            return (
              <button
                key={item.id}
                className={`w-full text-left rounded-xl px-5 py-4 text-[15px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]/50 font-medium tracking-wide ${isSubActive ? 'bg-[#0A2342] text-white shadow-lg transform -translate-y-0.5' : 'text-gray-600 hover:text-[#0A2342] hover:bg-gray-100 hover:shadow-sm'}`}
                onClick={() => {
                  onSelectSub(item.id);
                  if (closeMobile) closeMobile();
                }}
              >
                {item.label}
              </button>
            );
         })}
      </nav>
    );
}

function DesktopSidebar({ categoryMain, currentSubId, onSelectSub }) {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-gray-100 bg-[#FAFAFA] min-h-screen p-8 pt-16">
      <div className="sticky top-28">
        <MenuList
          categoryMain={categoryMain}
          currentSubId={currentSubId}
          onSelectSub={onSelectSub}
        />
      </div>
    </aside>
  );
}

// --- 최종 페이지 컴포넌트 ---
export default function CompanyInfoPage({ category = 'about' }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // URL의 ?tab=... 파라미터 읽기
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get('tab');

  const categoryMain = menuData.find(m => m.id === category) || menuData[0];
  const defaultSubId = categoryMain.items[0].id;
  
  const [currentSubId, setCurrentSubId] = useState(tabParam || defaultSubId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // 카테고리(라우트)가 바뀌거나 URL 파라미터가 변경될 때마다 탭 상태 동기화
  useEffect(() => {
    const newTabParam = new URLSearchParams(window.location.search).get('tab');
    if (newTabParam && categoryMain.items.some(i => i.id === newTabParam)) {
      setCurrentSubId(newTabParam);
    } else {
      setCurrentSubId(categoryMain.items[0].id);
    }
  }, [category, location.search, categoryMain]);

  // 서브 메뉴 클릭 시 URL 업데이트 (해당 카테고리의 탭 쿼리)
  const handleSelectSub = (subId) => {
    setCurrentSubId(subId);
    navigate(`/${category}?tab=${subId}`);
  };

  const currentSub = categoryMain.items.find(s => s.id === currentSubId) || categoryMain.items[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSubId, category]);

  return (
    <div className="bg-white text-gray-800 lg:flex relative">
      {/* 데스크탑 좌측 사이드바 */}
      <DesktopSidebar
        categoryMain={categoryMain}
        currentSubId={currentSubId}
        onSelectSub={handleSelectSub}
      />
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 bg-white min-h-screen w-full lg:max-w-[calc(100%-18rem)]">
        
        {/* 모바일 햄버거 사이드바 토글 (lg 이하에서만 보임) */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-[#0A2342] shadow-sm hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-[#B87333]"
            >
              <svg className="w-5 h-5 text-[#B87333]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              <span>{categoryMain.title} 서브메뉴</span>
            </button>
            <div className="text-xs text-gray-400 ml-4 flex-1 truncate text-right">
              {categoryMain.title} {'>'} <strong className="text-[#0A2342]">{currentSub.label}</strong>
            </div>
          </div>
          
          {/* 모바일 드롭다운 메뉴 리스트 */}
          {mobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="mt-4 border border-gray-100 rounded-xl p-4 bg-white shadow-xl animate-fade-in-up"
            >
              <MenuList
                categoryMain={categoryMain}
                currentSubId={currentSubId}
                onSelectSub={handleSelectSub}
                closeMobile={() => setMobileMenuOpen(false)}
              />
            </div>
          )}
        </div>
        
        {/* 실제 렌더링되는 콘텐츠 */}
        <div className="w-full mx-auto animate-fade-in">
          <ContentArea mainTitle={categoryMain.title} subTitle={currentSub.label} subId={currentSub.id} />
        </div>
      </main>
    </div>
  );
}