import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const API_URL = 'http://localhost:4200/monet'
const getAllMonet = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching Iron records:', error)
    throw error
  }
}
const SkupMonet = () => {
  const { t } = useTranslation()

  const [monet, setMonet] = useState([])
  const money = [
    {
      title: t('money_titles.0'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.1'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.2'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.3'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.4'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.5'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.6'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.7'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.8'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.9'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.10'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.11'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.12'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.13'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.14'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.15'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.16'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.17'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.18'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.19'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.20'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.21'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.22'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.23'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.24'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.25'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.26'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.27'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.28'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.29'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.30'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.31'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.32'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.33'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.34'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.35'),
      purchase: '8700',
      sell: '9200'
    },
    {
      title: t('money_titles.36'),
      purchase: '8700',
      sell: '9200'
    }
  ]

  const newMonet = monet.map((item, index) => ({
    title: money[index]?.title || 'Unknown', // Якщо метала не вистачає, використовується 'Unknown'
    purchase: item.purchase,
    sell: item.sell,
    id: item.id
  }))

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getAllMonet()
        setMonet(data) // зберігаємо отримані дані у стані
      } catch (error) {
        console.error('Failed to fetch currencies', error)
      }
    }

    fetchCurrencies() // виклик функції після рендеру компонента
  }, [])
  return (
    <>
      <NavBar title={t('header_nav-2')} />
      <Table
        data={newMonet}
        title={t('table_3-title')}
        ft={t('table_3-ft')}
        st={t('table_3-st')}
        tt={t('table_3-tt')}
      />
    </>
  )
}

export default SkupMonet
