import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. i18n 훅 불러오기
import LanguageSwitcher from './LanguageSwitcher'; // 2. 방금 만든 스위처 불러오기

function Header() {
  const { t } = useTranslation(); // 3. 번역 함수 t 가져오기
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="text-2xl font-gmarket font-bold text-[#0A2342]">
              우림금속
            </Link>
          </div>
          
          {/* --- 데스크탑 메뉴 --- */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-[#B87333] font-medium">{t('nav.company_info')}</Link>
            <Link to="/technology" className="text-gray-700 hover:text-[#B87333] font-medium">{t('nav.technology')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#B87333] font-medium">{t('nav.contact')}</Link>
            
            {/* 4. 데스크탑 뷰에 스위처 추가 */}
            <LanguageSwitcher /> 
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none">
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- 모바일 메뉴 --- */}
        <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-4 space-y-2">
            <li><Link to="/products" onClick={closeMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('nav.company_info')}</Link></li>
            <li><Link to="/technology" onClick={closeMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('nav.technology')}</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('nav.contact')}</Link></li>
            
            {/* 5. 모바일 뷰에 스위처 추가 */}
            <li className="pt-4 px-4">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;