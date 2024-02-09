import { themeInitialize } from './theme';
import { pageLoader } from './loader';
import { locales } from './i18next';

document.addEventListener('DOMContentLoaded', function appInitialize() {
  const { i18nextInit, t } = locales();

  themeInitialize();
  i18nextInit();
  pageLoader();

  console.log(t('menu.home'));

  
});


