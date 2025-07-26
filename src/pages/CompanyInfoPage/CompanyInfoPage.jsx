import React, { useState, useEffect, useRef } from 'react';
import CeoGreetingContent from './components/CeoGreetingContent'
import CompanyStructurePage from './components/CompanyStructurePage'
import DirectionsWidget from './components/DirectionsWidget'
import LMEPriceWidget from './components/LMEPriceWidget'
import OrganizationChart from './components/OrganizationChart'
import ProductList from './components/ProductList'
import BrassRodTabs from './components/BrassRodTabs'
import ProcessingCapabilities from './components/ProcessingCapabilities'
import IdealTalentProfile from './components/IdealTalentProfile'
import processImage from '@/assets/images/공정도.png'
import CopperRodDetails from './components/CopperRodDetails';
import QnAPage from './components/QnaAccordion'
import NoticeBoard from './components/NoticeBoard';

// --- 1. 데이터 구조: 각 항목에 고유 id와 label 부여 ---
const menuData = [
  { 
    id: 'about',
    title: '회사소개', 
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
      { id: 'lme-charts', label: 'LME 시세' },
      { id: 'raw-materials', label: '원재료' },
      { id: 'brass-rods', label: '황동봉' },
      { id: 'copper-rods', label: '동봉' },
      { id: 'process', label: '공정도' },
    ]
  }, {
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

// // --- 2. 각 id에 맞는 콘텐츠를 보여줄 임시 컴포넌트들 ---
// const CeoGreetingContent = () => (
//   <div>
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">최고를 향한 열정, 고객과 함께 성장합니다.</h3>
//     <p className="text-gray-600 leading-relaxed">우리 회사는 끊임없는 기술 혁신과 신뢰를 바탕으로 비철금속 산업의 미래를 선도하고 있습니다. 고객 여러분의 성공이 곧 우리의 성공이라는 믿음으로 최선을 다하겠습니다.</p>
//   </div>
// );

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
        return <img src={processImage}></img>
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
      <header>
        <div className="text-sm text-gray-500 mb-2" aria-label="breadcrumb">
          <span className="cursor-default">{mainTitle}</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 font-medium">{subTitle}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{subTitle}</h2>
        <div className="h-0.5 w-16 bg-[#B87333] mb-6" />
      </header>
      <section className="bg-gray-50 border border-gray-200 rounded-lg p-8 min-h-[400px]">
        {renderContent()}
      </section>
    </div>
  );
}

function MenuList({ currentMainId, currentSubId, onSelectMain, onSelectSub, closeMobile, getDefaultMenu }) {
    return (
      <nav aria-label="콘텐츠 내비게이션" className="space-y-2">
        {menuData.map(section => {
          const isActiveMain = section.id === currentMainId;
          return (
            <div key={section.id}>
              <button
                className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 border ${isActiveMain ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 hover:bg-gray-100 border-transparent'}`}
                aria-expanded={isActiveMain}
                onClick={() => {
                    if (isActiveMain) {
                      const defaults = getDefaultMenu();
                      onSelectMain(defaults.mainId);
                      onSelectSub(defaults.subId);
                    } else {
                      onSelectMain(section.id);
                      onSelectSub(section.items[0].id);
                    }
                }}
              >
                <span>{section.title}</span>
                <span className={`transform transition-transform duration-200 ${isActiveMain ? 'rotate-180' : 'rotate-0'}`}><svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" /></svg></span>
              </button>
              {isActiveMain && (
                <div className="mt-1 space-y-1 pl-4">
                  {section.items.map(item => {
                    const isSubActive = item.id === currentSubId;
                    return (
                      <button
                        key={item.id}
                        className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 ${isSubActive ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
                        aria-current={isSubActive ? 'page' : undefined}
                        onClick={() => {
                          onSelectSub(item.id);
                          if (closeMobile) closeMobile();
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );
}

function DesktopSidebar({ currentMainId, currentSubId, onSelectMain, onSelectSub, getDefaultMenu }) {
  return (
    <aside className="hidden md:block w-64 flex-shrink-0 border-r border-gray-200 bg-white sticky top-0 max-h-screen overflow-y-auto p-6">
      <MenuList
        currentMainId={currentMainId}
        currentSubId={currentSubId}
        onSelectMain={onSelectMain}
        onSelectSub={onSelectSub}
        getDefaultMenu={getDefaultMenu}
      />
    </aside>
  );
}

// --- 최종 페이지 컴포넌트 ---
export default function CompanyInfoPage() {
  const getDefaultMenu = () => ({ mainId: menuData[0].id, subId: menuData[0].items[0].id });

  const [currentMainId, setCurrentMainId] = useState(() => getDefaultMenu().mainId);
  const [currentSubId, setCurrentSubId] = useState(() => getDefaultMenu().subId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const currentMain = menuData.find(m => m.id === currentMainId) || menuData[0];
  const currentSub = currentMain.items.find(s => s.id === currentSubId) || currentMain.items[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSubId]);

  return (
    <div className="bg-white text-gray-800 md:flex min-h-[80vh]">
      <DesktopSidebar
        currentMainId={currentMainId}
        currentSubId={currentSubId}
        onSelectMain={setCurrentMainId}
        onSelectSub={setCurrentSubId}
        getDefaultMenu={getDefaultMenu}
      />
      <main className="flex-1 p-4 md:p-6">
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-content-menu"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2zm14 4H3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm0 6H3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" clipRule="evenodd" /></svg>
              <span>메뉴</span>
            </button>
            <div className="text-xs text-gray-500 ml-4 flex-1 truncate">
              {currentMain.title} {'>'} {currentSub.label}
            </div>
          </div>
          {mobileMenuOpen && (
            <div
              id="mobile-content-menu"
              ref={mobileMenuRef}
              className="mt-3 border border-gray-200 rounded-lg p-4 bg-white shadow-lg"
            >
              <MenuList
                currentMainId={currentMainId}
                currentSubId={currentSubId}
                onSelectMain={setCurrentMainId}
                onSelectSub={setCurrentSubId}
                closeMobile={() => setMobileMenuOpen(false)}
                getDefaultMenu={getDefaultMenu}
              />
            </div>
          )}
        </div>
        <div className="max-w-7xl mx-auto">
          <ContentArea mainTitle={currentMain.title} subTitle={currentSub.label} subId={currentSub.id} />
        </div>
      </main>
    </div>
  );
}