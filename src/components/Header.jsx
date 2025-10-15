import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import inst from '../assets/inst.svg'
import logo from '../assets/logo.svg'
import tg from '../assets/tg.svg'
import twitter from '../assets/twitter.svg'

const Header = () => {
  const [dropdownLangOpen, setDropdownLangOpen] = useState(false)
  const [showBurger, setShowBurger] = useState(false)
  const [savedLanguage, setSavedLanguage] = useState('PL')
  const { i18n, t, ready } = useTranslation() // <— важливо

  const languages = [
    { code: 'PL', name: 'Polski' },
    { code: 'EN', name: 'English' },
    { code: 'UA', name: 'Українська' }
  ]

  const handleLanguageChange = (code) => {
    const lang = code.toLowerCase()
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    setSavedLanguage(code.toUpperCase())
    setDropdownLangOpen(false)
  }

  // 🟢 Комбіноване визначення мови
  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved) {
      i18n.changeLanguage(saved)
      setSavedLanguage(saved.toUpperCase())
      return
    }

    const browserLang = navigator.language.split('-')[0].toLowerCase()
    const supported = ['pl', 'en', 'ua']

    if (supported.includes(browserLang)) {
      i18n.changeLanguage(browserLang)
      setSavedLanguage(browserLang.toUpperCase())
      localStorage.setItem('language', browserLang)
    } else {
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((data) => {
          const country = data.country_code
          console.log(country)
          let lang = 'en'
          if (country === 'PL') lang = 'pl'
          else if (country === 'UA') lang = 'uk'
          i18n.changeLanguage(lang)
          setSavedLanguage(lang.toUpperCase())
          localStorage.setItem('language', lang)
        })
        .catch(() => {
          i18n.changeLanguage('en')
          setSavedLanguage('EN')
        })
    }
  }, [i18n])

  // 🧠 Якщо переклади ще не завантажені — не показуємо Header
  if (!ready) return null

  return (
    <header className="flex items-center justify-between py-5 gap-5 xl:gap-10">
      <NavLink className="block" to="/">
        <img className="w-[180px]" src={logo} alt="logo" />
      </NavLink>

      <nav>
        <ul className="lg:flex hidden items-center gap-5">
          <li className="leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]">
            <NavLink to="/skup-zlota">{t('header_nav-1')}</NavLink>
          </li>
          <li className="leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]">
            <NavLink to="/skup-monet">{t('header_nav-2')}</NavLink>
          </li>
          <li className="leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]">
            <a href="#info">{t('header_nav-4')}</a>
          </li>
          <li className="leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]">
            <a href="#contacts">{t('header_nav-5')}</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-3 sm:gap-5 xl:text-base text-sm">
        <a
          className="duration-300 hover:text-[#FF9900] lg:block hidden"
          href="tel:+48 884 886 181"
        >
          +48 884 886 181
        </a>
        <a
          className="duration-300 hover:scale-105"
          href="https://t.me/kantorXFabrykaNorblina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tg} alt="tg" />
        </a>
        <a className="duration-300 hover:scale-105" href="#">
          <img src={inst} alt="inst" />
        </a>
        <a className="duration-300 hover:scale-105" href="#">
          <img src={twitter} alt="twitter" />
        </a>

        {/* Вибір мови */}
        <div className="relative w-5">
          <button
            className="rounded py-2 shadow cursor-pointer"
            onClick={() => setDropdownLangOpen(!dropdownLangOpen)}
          >
            {savedLanguage}
          </button>

          {dropdownLangOpen && (
            <div className="absolute right-0 z-20 bg-white text-black border rounded shadow-md mt-2 w-32">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
