import {createContext} from 'react'

export const initalState = {
    dummyTransactions:[],
    error:undefined,
    // translator
    langCode: 'en',
    t: (key) => key,
    setLanguage: () => {},
    languages: [],
    translations: {},
}

export const AllTransactionState = createContext(initalState);


