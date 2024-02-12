export enum ClassNames {
  SELECT = 'default-select',
  VALUE = 'default-value',
  OPTIONS = 'default-options',
  OPTION = 'default-option',
}

export interface TxsSelectClassNames {
  select: string;
  value: string;
  options: string;
  option: string;
}

export interface TxsSelectProps {
  id: string;
  value?: string;
  onChange: (value: string) => void;
}