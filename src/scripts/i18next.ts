import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from 'locales/en.json';
import ruTranslation from 'locales/ru.json';
import uaTranslation from 'locales/ua.json';

export const locales = () => {
  const changeLanguage = (locale?: string) => {
    i18next.changeLanguage(locale, function (err, t) {
      if (err) return console.log('Ошибка загрузки переводов:', err);
      document.querySelectorAll('[data-i18n]').forEach(function (element) {
        var key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
      });
    });
  };

  const i18nextInit = () => {
    i18next
      .use(LanguageDetector)
      .init({
        resources: {
          en: {
            translation: enTranslation,
          },
          ru: {
            translation: ruTranslation,
          },
          ua: {
            translation: uaTranslation,
          },
        },        
      })
      .then((t) => changeLanguage());

    document.getElementById('btn-ua').addEventListener('click', function () {
      changeLanguage('ua');
    });

    document.getElementById('btn-en').addEventListener('click', function () {
      changeLanguage('en');
    });

    document.getElementById('btn-ru').addEventListener('click', function () {
      changeLanguage('ru');
    });
  };

  const t = (key: string) => i18next.t(key);

  return { i18nextInit, t };
};