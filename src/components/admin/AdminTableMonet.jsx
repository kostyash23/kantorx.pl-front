import { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:4200/monet'

export const updateMonet = async (id, purchase, sell) => {
  try {
    const currencyData = {
      purchase: Number(purchase), // Перетворюємо на число
      sell: Number(sell) // Перетворюємо на число
    }

    const response = await axios.put(`${API_URL}/${id}`, currencyData)

    return response.data
  } catch (error) {
    console.error('Error updating iron:', error)
    throw error
  }
}

const AdminTableMonet = ({ item }) => {
  const { id, purchase: originalPurchase, sell: originalSell, title } = item
  const [purchase, setPurchase] = useState(originalPurchase)
  const [sell, setSell] = useState(originalSell)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedIron = await updateMonet(id, purchase, sell) // Використовуємо правильну функцію updateMonet
      console.log('Iron updated:', updatedIron)
      alert('Iron updated successfully!')
    } catch (error) {
      console.error('Failed to update iron:', error)
      alert('Failed to update iron')
    }
  }

  return (
    <div className="bg-white p-2 w-full gap-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-5 gap-5 items-center"
      >
        <div className="text-black col-span-2">{title}</div>
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
          className="w-44 mt-[12px] h-10 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default AdminTableMonet
