import { themeInitialize } from './theme';
import { pageLoader } from './loader';
import { locales } from './locale';
import { TxsSelect } from './txs-select';

const appInitialize = () => {
  const { i18nextInit, t, changeLanguage } = locales();

  themeInitialize();
  i18nextInit();
  pageLoader();

  const select = new TxsSelect({
    id: 'select',
    value: 'ru',
    onChange: (value: string) => {
      changeLanguage(value);
    },
  });

  // console.log(t('menu.home'));
};

document.addEventListener('DOMContentLoaded', appInitialize);
