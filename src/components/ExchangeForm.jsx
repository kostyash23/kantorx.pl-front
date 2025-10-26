import { useEffect, useState } from 'react'
import change from '../assets/change.svg'
import aud from '../assets/currency/aud.svg'
import cad from '../assets/currency/cad.svg'
import chf from '../assets/currency/chf.svg'
import czk from '../assets/currency/czk.svg'
import eur from '../assets/currency/eur.svg'
import sek from '../assets/currency/sek.png'
import gbp from '../assets/currency/gbp.svg'
import nok from '../assets/currency/nok.png'
import huf from '../assets/currency/huf.svg'
import zlt from '../assets/currency/poland.svg'
import dkk from '../assets/currency/dkk.png'
import uah from '../assets/currency/uah.svg'
import usd from '../assets/currency/usd.svg'
import jpy from '../assets/currency/jpy.png'
import cny from '../assets/currency/cny.png'

import Decimal from 'decimal.js'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

// в поле price вписываем новый курс //
const API_URL = 'https://dasdsada21123.online/currency'

export const getCurrencies = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching currencies:', error)
    throw error
  }
}
const currencies = [
  { title: 'PLN', img: zlt, price: 1 },
  { title: 'USD', img: usd, price: 3.92 },
  { title: 'EUR', img: eur, price: 4.27 },
  { title: 'GBP', img: gbp, price: 5.02 },
  { title: 'CHF', img: chf, price: 4.33 },
  { title: 'AUD', img: aud, price: 2.6 },
  { title: 'CAD', img: cad, price: 2.82 },
  { title: 'HUF', img: huf, price: 0.012 },
  { title: 'CZK', img: czk, price: 0.18 },
  { title: 'UAH', img: uah, price: 0.085 },
  { title: 'UAH', img: nok, price: 0.085 },
  { title: 'UAH', img: sek, price: 0.085 },
  { title: 'UAH', img: dkk, price: 0.085 },
  { title: 'UAH', img: jpy, price: 0.085 },
  { title: 'UAH', img: cny, price: 0.085 }
]

// в поле price вписываем новый курс //

const ExchangeForm = ({ dataCurrency }) => {
  const [newCurrency, setNewCurrency] = useState([
    { title: 'PLN', img: zlt, price: 1, sell: 0 },
    { title: 'USD', img: usd, price: 3.92, sell: 0 }
  ])
  const [fromCurrency, setFromCurrency] = useState(newCurrency[0])
  const [toCurrency, setToCurrency] = useState(newCurrency[1])
  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState({ from: false, to: false })
  const [isTouched, setIsTouched] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getCurrencies()
        const newData = [
          { title: 'PLN', img: zlt, price: 1, sell: 1 },
          ...data.map((item, index) => ({
            title: item.title,
            img: currencies[index + 1]?.img || zlt, // Adding fallback to prevent out-of-bounds access
            price: item.purchase,
            sell: item.sell
          }))
        ]
        setNewCurrency(newData)
        setFromCurrency(newData[0])
        setToCurrency(newData[1])
      } catch (error) {
        console.error('Failed to fetch currencies:', error)
      }
    }

    fetchCurrencies()
  }, []) // Dependency array is empty, so this runs only once on mount

  const handleExchange = () => {
    const exchangeRate = fromCurrency.price / toCurrency.price
    setResult(amount * exchangeRate)
  }

  useEffect(() => {
    // handleExchange()
  }, [fromCurrency, toCurrency, amount])

  const handleSwap = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
    handleExchange()
    setIsTouched(true)
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)

    // Використовуємо Decimal для обчислення точного курсу
    const exchangeRate = new Decimal(fromCurrency.price).div(
      new Decimal(toCurrency.sell)
    )

    // Обчислюємо результат із точністю
    const result = new Decimal(e.target.value).mul(exchangeRate)

    // Зберігаємо результат як число
    setResult(result.toNumber())

    setIsTouched(true)
  }

  const handleCurrencyChange = (currency, type) => {
    if (type === 'from') {
      setFromCurrency(currency)
      if (currency.title !== 'PLN' && toCurrency.title === 'PLN') {
        setToCurrency(newCurrency[0])
      } else if (currency.title !== 'PLN') {
        setToCurrency(newCurrency[0])
      }
    } else {
      setToCurrency(currency)
      if (currency.title !== 'PLN' && fromCurrency.title === 'PLN') {
        setFromCurrency(newCurrency[0])
      } else if (currency.title !== 'PLN') {
        setFromCurrency(newCurrency[0])
      }
    }
    setDropdownOpen({ ...dropdownOpen, [type]: false })
    handleExchange()
    setIsTouched(true)
  }

  return (
    <div className="flex flex-col w-full md:w-auto">
      <div className="grid">
        <div className="flex flex-col items-center sm:items-start gap-4 bg-[#060606] rounded-[10px] p-5 mb-4">
          <div className="flex sm:flex-row flex-col gap-[67px] sm:gap-[84px] relative">
            <div className="flex flex-col items-start gap-3 relative z-10">
              <div className="relative ">
                <p className="text-sm font-medium mb-4">{t('form_1')}</p>
                <div
                  className="bg-white p-4 w-[250px] h-[75px] cursor-pointer text-black text-[19px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input"
                  onClick={() =>
                    setDropdownOpen({
                      ...dropdownOpen,
                      from: !dropdownOpen.from
                    })
                  }
                >
                  <img
                    width={30}
                    src={fromCurrency.img}
                    alt={fromCurrency.title}
                  />
                  {fromCurrency.title}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {dropdownOpen.from && (
                  <div className="absolute z-10 h-[195px] overflow-y-auto overflow-x-hidden top-[54px] bg-white w-[250px] rounded-md">
                    {newCurrency.map((currency) => (
                      <div
                        key={currency.title}
                        className="p-4 cursor-pointer w-[250px] hover:bg-gray-200 text-black text-[19px] font-semibold"
                        onClick={() => handleCurrencyChange(currency, 'from')}
                      >
                        <img
                          src={currency.img}
                          alt={currency.title}
                          className="mr-4 inline-block"
                          width={30}
                        />
                        {currency.title}{' '}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="bg-white p-4 h-[75px] text-black text-[19px] w-[250px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input"
                placeholder="0.00"
              />
            </div>
            <div className="absolute w-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 top-[53.5%] sm:top-[20%] h-[150px] flex items-center justify-center rounded-[150px] z-[4] bg-[#111318]">
              <img
                className="cursor-pointer"
                src={change}
                onClick={handleSwap}
              />
            </div>
            <div className="flex flex-col items-start gap-3 relative z-10">
              <div className="relative">
                <p className="text-sm font-medium mb-4">{t('form_2')}</p>
                <div
                  className="bg-white h-[75px] cursor-pointer p-4 w-[250px] text-black text-[19px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input"
                  onClick={() =>
                    setDropdownOpen({ ...dropdownOpen, to: !dropdownOpen.to })
                  }
                >
                  <img width={30} src={toCurrency.img} alt={toCurrency.title} />
                  {toCurrency.title}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {dropdownOpen.to && (
                  <div className="absolute z-10 h-[195px] overflow-y-auto top-[54px] bg-white w-[250px] rounded-md">
                    {newCurrency.map((currency) => (
                      <div
                        key={currency.title}
                        className="p-4 cursor-pointer w-[250px] hover:bg-gray-200 text-black text-[19px] font-semibold"
                        onClick={() => handleCurrencyChange(currency, 'to')}
                      >
                        <img
                          src={currency.img}
                          alt={currency.title}
                          className="mr-4 inline-block"
                          width={30}
                        />
                        {currency.title}{' '}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                value={result !== '' ? result : ''}
                readOnly
                className="bg-white p-4 h-[75px] text-black text-[19px] w-[250px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="text-center w-full">
            {t('form_3')} 1 {fromCurrency.title} ={' '}
            {fromCurrency.price / toCurrency.price} {toCurrency.title}
          </div>
        </div>
      </div>
      <button
        className={`block text-center p-4 text-black rounded-[5px] text-lg font-semibold duration-300 ${
          isTouched
            ? 'bg-[#F90] hover:bg-[#ff9900d7]'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!isTouched}
      >
        <a
          href="https://t.me/kantorxex"
          className={` ${isTouched ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {t('form_btn')}
        </a>
      </button>
    </div>
  )
}

export default ExchangeForm
