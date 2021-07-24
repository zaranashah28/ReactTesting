import {ADD_TRANSACTION,DELETE_TRANSACTION} from './ActionTypes'
const getTranslate = (translations) => {
    return (
      (key) => {
      let translation = translations[key] || key;
      return translation;
    }
  )};

 export const reducer = (state,action) =>{
    switch(action.type){

                /* ------------------------------------------------------------------------*/

      case 'initialise': 
      {
      
        const translations = action.payload.languages.reduce((acc, language) => ({
          ...acc,
          [language.langCode]: language.translations,
        }), {});

        // console.log("Payload Language", action.payload.languages);
        const langs = action.payload.languages.map(lang => ({
          langCode: lang.langCode,
          subTag: lang.subTag,
        }));

        return {
          ...state,
          langCode: action.payload.activeLanguage,
          t: getTranslate( translations[state.langCode]),
          translations,
          languages: langs,
        };
      }

      case 'setLanguage':
        console.log("setLanguage");
        return {
          ...state,
          langCode: action.payload,
          t: getTranslate(state.translations[action.payload]),
        };
        
        
        case DELETE_TRANSACTION:
            return{
                ...state,
                dummyTransactions:state.dummyTransactions.filter(dummyTransaction => dummyTransaction.id !== action.payload)
            }

        case ADD_TRANSACTION:
          console.log("Add");
            return{
                ...state,
                dummyTransactions:[action.payload, ...state.dummyTransactions]
            }
        case 'SET_ERROR':
            return{
                ...state,
                error:action.payload
            }

    
        
        default:
            return { ...state };
    }
}