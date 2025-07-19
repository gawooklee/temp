import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // 기본 언어
    supportedLngs: ['en', 'ko'], // 지원하는 언어
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // 언어 파일 경로
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;