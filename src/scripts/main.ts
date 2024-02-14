import { themeInitialize } from './theme';
import { pageLoader } from './loader';
import { locales } from './locale';
import { LocaleSelect } from './locale-select';
import i18next from 'i18next';

const appInitialize = () => {
  const { i18nextInit, changeLanguage, toggleLanguage } = locales();

  themeInitialize();
  i18nextInit();
  pageLoader();

  new LocaleSelect({
    id: 'select',
    value: i18next.language,
    onChange: (value: string) => changeLanguage(value),
    onKeyDown: () => toggleLanguage(),
  });
};

document.addEventListener('DOMContentLoaded', appInitialize);
