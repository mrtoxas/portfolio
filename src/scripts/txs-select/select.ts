import { TxsSelectProps, ClassNames } from './types';

export function TxsSelect({ id, onChange, value }: TxsSelectProps) {
  const element = document.getElementById(id);
  if (!element) console.error(`TxsSelect: Element with id ${id} not found`);

  const valueElement = element.querySelector(ClassNames.VALUE);
  if (!element) console.error(`TxsSelect: Element with class ${ClassNames.VALUE} not found`);
  
  this.isOpen = false;

  



  
  

  



  const isOpenToggle = () => {
    this.isOpen = !this.isOpen;
    element.classList.toggle('is-open');
  };

  const openSelect = () => isOpenToggle();

  const closeSelect = () => isOpenToggle();

  const selectedHandle = (elem) => {
    const selectedElem = onChange(elem.dataset.value);
  };

  const clickHandler = (event: Event) => {
    const { target } = event;
    const select = target.closest('.txs-select');

    if (!select && !this.isOpen) {
      return;
    } else if (!select && this.isOpen) {
      closeSelect();
    } else if (select && select === element && this.isOpen) {
      if (target.closest('.txs-select-options')) selectedHandle(target);
      closeSelect();
    } else if (select && select === element && !this.isOpen) {
      openSelect();
    }
  };

  window.addEventListener('click', clickHandler);
}
