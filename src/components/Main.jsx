import ExchangeForm from './ExchangeForm';
import { useTranslation } from 'react-i18next';


const Main = ({ currencies }) => {
  const { t } = useTranslation()

  return (
    <section className="rounded-[10px] flex lg:flex-row flex-col items-center justify-between gap-5 xl:gap-14 bg-[#141414] p-5 mb-8">
      <div className="grid gap-5">
        <h1 className="sm:text-[50px] text-3xl font-medium leading-9 sm:leading-[60px] lg:max-w-[400px] 2xl:max-w-full ">
          KANTOR WARSZAWA
        </h1>
        <div className="rounded-[100px] bg-[#FF9900] w-[200px] h-[3px]"></div>
        <p className="lg:max-w-[360px] 2xl:max-w-full leading-[26px]">
          {t('main_text')}
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[32px] uppercase">
          {t('main_text_attation')}
        </p>
      </div>
      <ExchangeForm dataCurrency={currencies} />
    </section>
  )
}

export default Main;
