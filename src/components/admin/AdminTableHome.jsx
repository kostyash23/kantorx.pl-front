import { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://92.205.234.146:4200/currency'

export const updateCurrency = async (id, purchase, sell) => {
  try {
    const currencyData = {
      purchase: Number(purchase), // Перетворюємо на число
      sell: Number(sell) // Перетворюємо на число
    }

    const response = await axios.put(`${API_URL}/${id}`, currencyData)

    return response.data
  } catch (error) {
    console.error('Error updating currency:', error)
    throw error
  }
}

const AdminTableHome = ({ item, logo }) => {
  const { id, purchase: originalPurchase, sell: originalSell, title } = item
  const [purchase, setPurchase] = useState(originalPurchase)
  const [sell, setSell] = useState(originalSell)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedCurrency = await updateCurrency(id, purchase, sell) // Використовуємо id замість currencyId
      console.log('Currency updated:', updatedCurrency)
      alert('Currency updated successfully!')
    } catch (error) {
      console.error('Failed to update currency:', error)
      alert('Failed to update currency')
    }
  }

  return (
    <div className="bg-white p-2 w-full gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center"
      >
        {logo && <img className="inline-block mr-3" src={logo} />}
        <div className="text-black">{title}</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="purchase"
          >
            Purchase Price
          </label>
          <input
            type="number"
            id="purchase"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Enter purchase price"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sell"
          >
            Sell Price
          </label>
          <input
            type="number"
            id="sell"
            value={sell}
            onChange={(e) => setSell(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Enter sell price"
            required
          />
        </div>

        <button
          type="submit"
          className="w-44 h-10 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default AdminTableHome
