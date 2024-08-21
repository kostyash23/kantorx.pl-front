import ArticleHome from '../components/Home/ArticleHome';
import Table from '../components/Table';
import Main from '../components/Main';
import { useTranslation } from 'react-i18next';

import { exchange_rates } from '../data';

import axios from 'axios'
import { useEffect, useState } from 'react'
import TableHome from '../components/TableHome'

const API_URL = 'http://localhost:4200/currency'

export const getCurrencies = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching currencies:', error)
    throw error
  }
}

const HomePage = () => {
  const { t } = useTranslation()
  const [currencies, setCurrencies] = useState([])
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getCurrencies()
        setCurrencies(data) // зберігаємо отримані дані у стані
      } catch (error) {
        console.error('Failed to fetch currencies', error)
      }
    }

    fetchCurrencies() // виклик функції після рендеру компонента
  }, [])
  return (
    <>
      <Main currencies={currencies} />
      <TableHome
        data={currencies}
        imgUrl={exchange_rates}
        title={t('table_1-title')}
        ft={t('table_1-ft')}
        st={t('table_1-st')}
        tt={t('table_1-tt')}
        id=""
      />

      <ArticleHome />
    </>
  )
}

export default HomePage;
