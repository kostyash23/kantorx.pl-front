import { format, subHours } from 'date-fns';
import TableItem from './TableItem';
import { useTranslation } from 'react-i18next';
import { exchange_rates } from '../data';


const TableHome = ({ data, title, ft, st, tt }) => {
	const currentTime = new Date();
	const updatedTime = subHours(currentTime, 0);
	const formattedTime = format(updatedTime, 'dd.MM.yyyy, HH:mm:ss');
	const { t } = useTranslation();
	const imgs = exchange_rates
	return (
    <section className="rounded-[10px] mb-8 bg-[#141414] p-5">
      <h2 className="section_title">{title}</h2>
      <span className="leading-[26px] sm:text-base text-sm block mb-5">
        {t('table_time')} {formattedTime}
      </span>
      <div className="flex flex-col gap-3">
        <div className="leading-[26px] font-medium xl:text-base text-sm sm:block hidden">
          <div className="grid grid-cols-3 overflow-hidden bg-[#060606] rounded-[5px]">
            <div className=" py-3 pl-4 border-r border-r-[#14161C] bg-[#060606]">
              {ft}
            </div>
            <div className=" py-3 pl-4 border-r border-r-[#14161C] bg-[#060606]">
              {st}
            </div>
            <div className=" py-3 pl-4 bg-[#060606]">{tt}</div>
          </div>
        </div>
        {data.map(({ logo, title, purchase, sell }, index) => {
          return (
            <TableItem
              key={index}
              logo={imgs[index].logo}
              title={title}
              purchase={purchase}
              sell={sell}
            />
          )
        })}
        <div className="rounded-[10px] mb-8 bg-[#141414] p-5">
          <p className="text-base font-medium mb-3 leading-[26px]">
            {t('under_table_title')}
          </p>
          <ul className="pl-4 list-disc space-y-2 text-sm leading-[24px]">
            <li>{t('under_table_text1')}</li>
            <li>{t('under_table_text2')}</li>
            <li>{t('under_table_text3')}</li>
            <li>{t('under_table_text4')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default TableHome;
