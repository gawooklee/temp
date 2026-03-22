import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-gmarket font-bold mb-2 tracking-tight">우림금속</h3>
              <p className="text-[#B87333] font-medium text-sm">Woorim Metal Co., Ltd.</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs transition-colors hover:text-gray-300">
              최고 품질의 비철금속 원자재를 안정적으로 공급하며, 고객과 함께 성장하는 금속 소재 전문 기업입니다.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-gmarket font-bold text-lg mb-6 border-b border-[#B87333] w-fit pb-1">주요 메뉴</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm">홈</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm">회사소개</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm">제품소개</Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm">기술력/설비</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm">문의하기</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-gmarket font-bold text-lg mb-6 border-b border-[#B87333] w-fit pb-1">고객 상담</h4>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded mr-4 group-hover:bg-[#B87333]/20 transition-colors">
                  <svg className="h-4 w-4 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">전화 문의</p>
                  <p className="text-gray-300 text-sm font-semibold">02-898-4062</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded mr-4 group-hover:bg-[#B87333]/20 transition-colors">
                  <svg className="h-4 w-4 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">이메일 문의</p>
                  <p className="text-gray-300 text-sm break-all">woorim4062@ecount.co.kr</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded mr-4 group-hover:bg-[#B87333]/20 transition-colors">
                  <svg className="h-4 w-4 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">업무 시간</p>
                  <p className="text-gray-300 text-sm">평일 09:00 ~ 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="font-gmarket font-bold text-lg mb-6 border-b border-[#B87333] w-fit pb-1">본사 위치</h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="bg-white/5 p-2 rounded mr-4 group-hover:bg-[#B87333]/20 transition-colors">
                  <svg className="h-4 w-4 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  경기도 안양시 만안구 박달동 681 <br />
                  (오리로 16)
                </p>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="text-xs text-[#B87333] hover:text-[#D4AF37] border border-[#B87333]/30 px-3 py-1.5 rounded-full transition-colors inline-block">
                  찾아오시는 길 →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500">
          <p className="text-xs">
            © {new Date().getFullYear()} 우림금속 Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218 1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.095 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;