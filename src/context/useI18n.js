// @flow

import { useContext } from 'react';
import { AllTransactionState } from './AllTransactionState';

export const useI18n = () => {
  const { t, langCode, setLanguage } = useContext(AllTransactionState);

  return {
    t,
    langCode,
    setLanguage,
  };
};
