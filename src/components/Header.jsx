import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(''); // 모바일 메뉴 확장 상태

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenAccordion('');
  };

  const toggleAccordion = (menu) => {
    setOpenAccordion(openAccordion === menu ? '' : menu);
  };

  return (
    <nav className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] sticky top-0 z-50">
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="text-3xl font-gmarket font-bold text-[#0A2342] tracking-tighter">
              우림금속
            </Link>
          </div>
          
          {/* --- 데스크탑 GNB (Global Navigation Bar) --- */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-[#B87333] font-bold transition-colors">{t('nav.company_info', '기업정보')}</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#B87333] font-bold transition-colors">{t('nav.products', '제품소개')}</Link>
            <Link to="/careers" className="text-gray-700 hover:text-[#B87333] font-bold transition-colors">{t('nav.careers', '채용정보')}</Link>
            <Link to="/support" className="text-gray-700 hover:text-[#B87333] font-bold transition-colors">{t('nav.support', '고객센터')}</Link>
            <Link to="/contact" className="bg-[#B87333] text-white px-5 py-2.5 rounded-lg hover:bg-[#A05C2A] font-bold shadow-md transition-all duration-300 hover:shadow-lg">{t('nav.contact', '문의하기')}</Link>
            
            <div className="pl-2 border-l border-gray-200">
              <LanguageSwitcher /> 
            </div>
          </div>

          {/* 모바일 햄버거 토글 버튼 */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none p-2 rounded-md hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-[#B87333]">
              <svg className="w-6 h-6 text-[#0A2342]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* --- 모바일 메뉴 패널 --- */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col mt-2 py-4 px-2 bg-white border-t border-gray-100 rounded-b-2xl shadow-inner">
            
            {/* 1. 기업정보 아코디언 */}
            <div className="mb-1">
              <button 
                onClick={() => toggleAccordion('about')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-colors duration-200 ${
                  openAccordion === 'about' ? 'bg-[#0A2342] text-white font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{t('nav.company_info', '기업정보')}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-300 ${openAccordion === 'about' ? 'rotate-180' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out px-2 ${openAccordion === 'about' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden flex flex-col pl-6 pr-4 text-[15px] text-gray-600 bg-gray-50/50 rounded-b-xl mx-2 shadow-inner">
                  <Link to="/about?tab=ceo-greeting" onClick={closeMenu} className="py-3 mt-1 hover:text-[#B87333] transition-colors border-b border-gray-200/50">CEO 인사말</Link>
                  <Link to="/about?tab=history" onClick={closeMenu} className="py-3 hover:text-[#B87333] transition-colors border-b border-gray-200/50">회사연혁</Link>
                  <Link to="/about?tab=organization" onClick={closeMenu} className="py-3 hover:text-[#B87333] transition-colors border-b border-gray-200/50">조직도</Link>
                  <Link to="/about?tab=partners" onClick={closeMenu} className="py-3 hover:text-[#B87333] transition-colors border-b border-gray-200/50">관계사</Link>
                  <Link to="/about?tab=directions" onClick={closeMenu} className="py-3 hover:text-[#B87333] transition-colors mb-1">오시는 길</Link>
                </div>
              </div>
            </div>

            {/* 2. 제품소개 아코디언 */}
            <div className="mb-1">
              <button 
                onClick={() => toggleAccordion('products')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-colors duration-200 ${
                  openAccordion === 'products' ? 'bg-[#0A2342] text-white font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{t('nav.products', '제품소개')}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-300 ${openAccordion === 'products' ? 'rotate-180' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out px-2 ${openAccordion === 'products' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden flex flex-col pl-6 pr-4 text-[15px] text-gray-600 bg-gray-50/50 rounded-b-xl mx-2 shadow-inner">
                  <Link to="/products?tab=raw-materials" onClick={closeMenu} className="py-3 mt-1 hover:text-[#B87333] border-b border-gray-200/50">원재료</Link>
                  <Link to="/products?tab=brass-rods" onClick={closeMenu} className="py-3 hover:text-[#B87333] border-b border-gray-200/50">황동봉</Link>
                  <Link to="/products?tab=copper-rods" onClick={closeMenu} className="py-3 hover:text-[#B87333] border-b border-gray-200/50">동봉</Link>
                  <Link to="/products?tab=process" onClick={closeMenu} className="py-3 hover:text-[#B87333] mb-1">공정도</Link>
                </div>
              </div>
            </div>

            {/* 3. 채용정보 다이렉트 링크 (혹은 아코디언) */}
            <div className="mb-1">
               <button 
                onClick={() => toggleAccordion('careers')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-colors duration-200 ${
                  openAccordion === 'careers' ? 'bg-[#0A2342] text-white font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{t('nav.careers', '채용정보')}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-300 ${openAccordion === 'careers' ? 'rotate-180' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out px-2 ${openAccordion === 'careers' ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden flex flex-col pl-6 pr-4 text-[15px] text-gray-600 bg-gray-50/50 rounded-b-xl mx-2 shadow-inner">
                  <Link to="/careers?tab=talent" onClick={closeMenu} className="py-3 mt-1 hover:text-[#B87333] border-b border-gray-200/50">인재상</Link>
                  <Link to="/careers?tab=hiring-process" onClick={closeMenu} className="py-3 hover:text-[#B87333] border-b border-gray-200/50">채용 절차</Link>
                  <Link to="/careers?tab=apply" onClick={closeMenu} className="py-3 hover:text-[#B87333] mb-1">입사지원</Link>
                </div>
              </div>
            </div>

            {/* 4. 고객센터 일반 링크 */}
            <div className="mb-4">
              <Link to="/support" onClick={closeMenu} className="w-full flex justify-between items-center px-4 py-3.5 rounded-xl text-gray-800 hover:bg-gray-50 border border-transparent font-medium transition-colors">
                <span>{t('nav.support', '고객센터')}</span>
              </Link>
            </div>

            {/* 구분선 */}
            <div className="h-px bg-gray-200 w-[90%] mx-auto my-4"></div>

            {/* 모바일 하단: 문의하기 버튼 & 스위처 */}
            <div className="flex flex-col gap-4 px-4 pb-6">
              <Link to="/contact" onClick={closeMenu} className="w-full bg-[#B87333] text-white text-center py-3.5 rounded-xl font-bold shadow-md hover:bg-[#A05C2A] transition-colors">{t('nav.contact', '문의하기')}</Link>
              <div className="flex justify-center mt-2">
                <LanguageSwitcher />
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;