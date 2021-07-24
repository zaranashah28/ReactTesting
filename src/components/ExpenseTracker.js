import React, {useEffect} from 'react';
import {useI18n} from '../context'
const ExpenseTracker = () => {

    const { t, setLanguage } = useI18n();
    useEffect(() => {
        setLanguage('en')
    }, []);

    const handleSetLanguage = (e) => {
        const lang = e.target.value;
        console.log(lang);
        setLanguage(lang)
    }
    return (
        <div>
            <select onChange={handleSetLanguage} >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hn">Hindi</option>
        </select>
            <h2>{t('Expense Tracker')}</h2>
        </div>
    )
}

export default ExpenseTracker
