import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const API_URL = 'https://dasdsada21123.online/iron'
const getAllIron = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching Iron records:', error)
    throw error
  }
}

const SkupZlota = () => {
  const { t } = useTranslation()

  const [irons, setIrons] = useState([])

  const metals = [
    {
      title: t('metal_titles.0'),
      purchase: '50',
      sell: '100'
    },
    {
      title: t('metal_titles.1'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.2'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.3'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.4'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.5'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.6'),
      purchase: '80',
      sell: '000'
    },
    {
      title: t('metal_titles.7'),
      purchase: '80',
      sell: '000'
    }
  ]

  const newIron = irons.map((iron, index) => ({
    title: metals[index]?.title || 'Unknown', // Якщо метала не вистачає, використовується 'Unknown'
    purchase: iron.purchase,
    sell: iron.sell,
    id: iron.id
  }))

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getAllIron()
        setIrons(data) // зберігаємо отримані дані у стані
      } catch (error) {
        console.error('Failed to fetch currencies', error)
      }
    }

    fetchCurrencies() // виклик функції після рендеру компонента
  }, [])
  return (
    <>
      <NavBar title={t('header_nav-1')} />
      <Table
        data={newIron}
        title={t('table_2-title')}
        ft={t('table_2-ft')}
        st={t('table_2-st')}
        tt={t('table_2-tt')}
      />
    </>
  )
}

export default SkupZlota
