import { useEffect, useState } from 'react'
import AdminTableHome from './AdminTableHome'
import axios from 'axios'
import { exchange_rates } from '../../data'
import AdminTableIron from './AdminTableIron'
import { useTranslation } from 'react-i18next'
import AdminTableMonet from './AdminTableMonet'

const API_URL = 'http://92.205.234.146:4200/'

const getCurrencies = async () => {
  try {
    const response = await axios.get(`${API_URL}currency`)
    return response.data
  } catch (error) {
    console.error('Error fetching currencies:', error)
    throw error
  }
}
const getAllIron = async () => {
  try {
    const response = await axios.get(`${API_URL}iron`)
    return response.data
  } catch (error) {
    console.error('Error fetching Iron records:', error)
    throw error
  }
}
const getAllMonet = async () => {
  try {
    const response = await axios.get(`${API_URL}monet`)
    return response.data
  } catch (error) {
    console.error('Error fetching Monet records:', error)
    throw error
  }
}

const AdminComponent = () => {
  const { t } = useTranslation()
  const arr = exchange_rates
  const [showAdmin, setShowAdmin] = useState(false)
  const [inputPassword, setInputPassword] = useState('') // стан для збереження введеного паролю
  const correctPassword = '12312345' // правильний пароль
  const [selectedCategory, setSelectedCategory] = useState('Currency')
  const [currencies, setCurrencies] = useState([])
  const [irons, setIrons] = useState([])
  const [monet, setMonet] = useState([])
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
  const newIron = irons.map((iron, index) => ({
    title: metals[index]?.title || 'Unknown', // Якщо метала не вистачає, використовується 'Unknown'
    purchase: iron.purchase,
    sell: iron.sell,
    id: iron.id
  }))
  const newMonet = monet.map((item, index) => ({
    title: money[index]?.title || 'Unknown', // Якщо метала не вистачає, використовується 'Unknown'
    purchase: item.purchase,
    sell: item.sell,
    id: item.id
  }))
  const handleSubmit = () => {
    if (inputPassword === correctPassword) {
      setShowAdmin(true) // якщо пароль правильний, встановлюємо showAdmin в true
    } else {
      alert('Incorrect password!')
    }
  }

  const renderContent = () => {
    switch (selectedCategory) {
      case 'MONET':
        return (
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
            {newMonet?.map((item) => (
              <AdminTableMonet key={item.id} item={item} />
            ))}
          </div>
        )
      case 'Gold&Silver':
        return (
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
            {newIron?.map((item) => (
              <AdminTableIron key={item.id} item={item} />
            ))}
          </div>
        )

      case 'Currency':
        return (
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
            {currencies?.map((item, index) => (
              <AdminTableHome
                key={item.id}
                item={item}
                logo={arr[index].logo}
              />
            ))}
          </div>
        )
      default:
        return null
    }
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getCurrencies()
        setCurrencies(data) // зберігаємо отримані дані у стані
        const irons = await getAllIron()
        setIrons(irons) // зберігаємо отримані дані у стані
        const monets = await getAllMonet()
        setMonet(monets)
      } catch (error) {
        console.error('Failed to fetch currencies', error)
      }
    }

    fetch() // виклик функції після рендеру компонента
  }, [])

  return (
    <div>
      {!showAdmin ? (
        <div className=" items-center flex justify-center p-10">
          <div className="bg-white  p-2">
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)} // оновлюємо стан при зміні поля вводу
              placeholder="Enter password"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enter
            </button>
          </div>
        </div>
      ) : (
        <div className="items-center  min-h-screen">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mb-6 p-2 border border-gray-300 rounded text-black"
            >
              <option value="MONET">MONET</option>
              <option value="Gold&Silver">Gold&Silver</option>
              <option value="Currency">Currency</option>
            </select>
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminComponent
