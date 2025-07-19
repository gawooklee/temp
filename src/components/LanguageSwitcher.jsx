import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  // 현재 언어가 'ko'로 시작하는지 확인 (e.g., 'ko', 'ko-KR')
  const isKorean = i18n.language.startsWith('ko');

  const toggleLanguage = () => {
    i18n.changeLanguage(isKorean ? 'en' : 'ko');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        relative inline-flex items-center flex-shrink-0
        h-8 w-[90px] rounded-full 
        bg-gray-200 
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-1
      "
      aria-label={`Switch to ${isKorean ? 'English' : 'Korean'}`}
    >
      {/* 움직이는 배경 (Thumb) */}
      <span
        aria-hidden="true"
        className={`
          absolute top-1 left-1 h-6 w-11 rounded-full 
          bg-white shadow-lg 
          transform transition-transform duration-300 ease-in-out
          ${isKorean ? 'translate-x-0' : 'translate-x-[34px]'}
        `}
      />
      
      {/* 텍스트 컨테이너 */}
      <span className="flex w-full justify-around items-center">
        {/* 'KO' 텍스트 */}
        <span 
          className={`
            z-10 text-sm font-bold 
            transition-colors duration-300 ease-in-out // ★ 2. 텍스트 색상 전환 효과
            ${isKorean ? 'text-[#0A2342]' : 'text-gray-400'}
          `}
        >
          KO
        </span>
        {/* 'EN' 텍스트 */}
        <span 
          className={`
            z-10 text-sm font-bold
            transition-colors duration-300 ease-in-out // ★ 2. 텍스트 색상 전환 효과
            ${!isKorean ? 'text-[#0A2342]' : 'text-gray-400'}
          `}
        >
          EN
        </span>
      </span>
    </button>
  );
}

export default LanguageSwitcher;