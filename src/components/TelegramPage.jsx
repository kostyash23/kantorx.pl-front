import { FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const TELEGRAM_LINK = 'https://t.me/kantorXFabrykaNorblina'

const TelegramPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#060606]">
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100 leading-relaxed">
          {t('telegram_title', { brand: 'Kantor X Exchange' })}
        </h1>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <button
            style={{ fontFamily: 'inherit' }}
            className="bg-[#0088cc] hover:bg-[#009de0] text-white text-lg px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
          >
            <FaTelegramPlane className="text-2xl" />
            {t('telegram_btn')}
          </button>
        </a>
      </div>
    </div>
  )
}

export default TelegramPage
