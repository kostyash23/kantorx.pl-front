import { useEffect, useState } from 'react'
import AdminTableHome from './AdminTableHome'
import axios from 'axios'
import { exchange_rates } from '../../data'

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

const AdminComponent = () => {
  const arr = exchange_rates
  const [showAdmin, setShowAdmin] = useState(false)
  const [inputPassword, setInputPassword] = useState('') // стан для збереження введеного паролю
  const correctPassword = '12312345' // правильний пароль
  const [selectedCategory, setSelectedCategory] = useState('Currency')
  const [currencies, setCurrencies] = useState([])
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
        return <div>MONET Content</div>
      case 'Gold&Silver':
        return <div>Gold&Silver Content</div>
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
    <div>
      {!showAdmin ? (
        <div className=" items-center flex justify-center p-10">
          <div className="bg-white ">
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
